	$(document).ready(function(){

	$.ajaxSetup({
	  headers: {
	    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
	  }
	});
	
	$(".register-form").on('submit', function(event) {
	 	event.preventDefault();
	  	event.stopImmediatePropagation();

		$.ajax({
			type: 'POST',
			url: '/register',
			data: {
			'fname': $(this).find("input[name='fname']").val(), 
			'lname': $(this).find("input[name='lname']").val(), 
			'email': $(this).find("input[name='email']").val(), 
			'passwd': $(this).find("input[name='passwd']").val()
			},			
			success: function(server_data) {
				$('#modal_notificacion .notification-content').html(server_data["success_mssg"]);
				$('#modal_notificacion').foundation('reveal','open');
			},
			error: function(xhr, textStatus, errorThrown) {
				console.log("error")
				$('#modal_notificacion .notification-content').html(xhr.responseJSON.err_mssg);
				$('#modal_notificacion').foundation('reveal','open');
			}
		});
		$.find("input[name='fname']").val(" ");
		$.find("input[name='lname']").val(" ");
		$.find("input[name='email']").val(" ");
		$.find("input[name='passwd']").val(" ");
		$('#modal_notificacion .notification-content').html('');
		$(this).trigger("reset");
	});

	$("#paquete-form").on('submit', function(event) {
		alert ("digs");
	 	event.preventDefault();
	  	event.stopImmediatePropagation();
		clearInterval(intervalid);

		$.ajax({
			type: 'POST',
			url: '/create',
			data: {
			'agencia': $(this).find("select[name='agencia']").val(), 
			'alto': $(this).find("input[name='alto']").val(), 
			'ancho': $(this).find("input[name='ancho']").val() , 
			'profundidad': $(this).find("input[name='profundidad']").val(), 
			'peso': $(this).find("input[name='peso']").val(),
			'valor': $(this).find("input[name='valor']").val(),
			'costo': $(this).find("input[name='costo']").val(),
			'emisor': $(this).find("input[name='origen']").val(),
			'receptor': $(this).find("input[name='destino']").val(),
			'descripcion': $(this).find("textarea[name='descripcion']").val()
			},			
			success: function(server_data) {
				$('#modal_notificacion .notification-content').html(server_data["success_mssg"]);
				$('#modal_notificacion').foundation('reveal','open');
			},
			error: function(xhr, textStatus, errorThrown) {
				console.log("error")
				$('#modal_notificacion .notification-content').html(xhr.responseJSON.err_mssg);
				$('#modal_notificacion').foundation('reveal','open');
			}
		});
		$('#modal_notificacion .notification-content').html('');
		$(this).trigger("reset");
	});

	$("#crear_paquete").on('click', function(event) {
	 	event.preventDefault();
	  	event.stopImmediatePropagation();
		window.constante=0;
		window.porcentaje=0;

		$.ajax({
			type: 'POST',
			url: '/enterprise',
			data: {
			'empresa_id': $("meta[name='empresa']").attr("content") 
			},			
			success: function(xhr) {
				window.constante=xhr.constante;
				window.porcentaje=xhr.porcentaje;
				$("#modal_paquete").foundation('reveal', 'open');

				window.intervalid=setInterval(function(){
							var ancho;
							var alto;
							var profundidad;
							var peso;
							var valor;
							ancho= $("input[name='ancho']");
							alto= $("input[name='alto']");
							profundidad= $("input[name='profundidad']");
							valor= $("input[name='valor']");
							peso= $("input[name='peso']");
							if (ancho.val()>0 && alto.val()>0 && profundidad.val()>0 && peso.val()>0 && valor.val()>0){

								$("input[name='costo']").val((ancho.val()*alto.val()*profundidad.val()*peso.val()*valor.val()/window.constante)+(window.porcentaje*valor.val()/100));
							}
							},2000);
			},
			fail: function(xhr, textStatus, errorThrown) {
				console.log("error")
				$('#modal_notificacion .notification-content').html(xhr.responseJSON.err_mssg);
				$('#modal_notificacion').foundation('reveal','open');
			}
		});
		$('#modal_notificacion .notification-content').html('');
		$(this).trigger("reset");
	});

	$('#modal_paquete').bind('closed', function() { clearInterval(window.intervalid);	});


	$(".calculadora-form").on('submit', function(event) {
	 	event.preventDefault();
	  	event.stopImmediatePropagation();

		$.ajax({
			type: 'POST',
			url: '/enterprise',
			data: {
			'empresa_id': $("meta[name='empresa']").attr("content")
			'ancho': $("input[name='ancho']"),	
			'alto': $("input[name='alto']"),
			'peso': $("input[name='peso']"),
			'valor': $("input[name='valor']"),
			'profundidad': $("input[name='profundidad']")
			},			
			success: function(xhr) {
				$('#modal_notificacion .notification-content').html(xhr["success_msg"]);
				$('#modal_notificacion').foundation('reveal','open');

			},
			fail: function(xhr, textStatus, errorThrown) {
				console.log("error")
				$('#modal_notificacion .notification-content').html(xhr.responseJSON.err_mssg);
				$('#modal_notificacion').foundation('reveal','open');
			}
		});
	});
});
