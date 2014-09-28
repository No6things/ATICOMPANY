$(document).ready(function(){

	$.ajaxSetup({
	  headers: {
	    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content'),
	    'enterprise-token': $('meta[name="enterprise_token"]').attr('content'),
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
			'lname': $(this).find("input[name='lname']").val() , 
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
		$('#modal_notificacion .notification-content').html('');
		$(this).trigger("reset");
	});

	$(".empresa_setting_form").on('submit', function(event) {
		event.preventDefault();
	 	event.stopImmediatePropagation();

	 	$.ajax({
	 		type: 'PATCH',
	 		url: '/empresas/'+$('meta[name="enterprise_token"]').attr('content'),
	 		data: {
	 			'constante_tarifa':$(this).find("input[name='constante_tarifa']").val(),
	 			'porcentaje_tarifa':$(this).find("input[name='porcentaje_tarifa']").val(),
	 			'_method': "PATCH",
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

	});

	$(".get_agencia_paquete").on('click', function(event) {		
	 	event.preventDefault();
	 	event.stopImmediatePropagation();	 	

	 	$.ajax({
	 		type: 'GET',
	 		url: $(this).attr("href"),
	 		data: {},
	 		success: function(server_data) {
				$('#modal_transaccion .modal-content #fecha ').html(server_data.data.fecha_arribo);
				$('#modal_transaccion .modal-content #guia ').html(server_data.data.paquete.numero_guia);
				$('#modal_transaccion .modal-content #estado ').html(server_data.data.tipo_estado.nombre);
				$('#modal_transaccion .modal-content #emisor ').html(server_data.data.paquete.emisor.nombre+" / "+server_data.data.paquete.emisor.correo_electronico);
				$('#modal_transaccion .modal-content #receptor ').html(server_data.data.paquete.receptor.nombre+" / "+server_data.data.paquete.receptor.correo_electronico);
				$('#modal_transaccion .modal-content #agencia ').html(server_data.data.agencia.nombre);
				$('#modal_transaccion .modal-content #peso ').html(server_data.data.paquete.peso);
				$('#modal_transaccion .modal-content #alto ').html(server_data.data.paquete.alto);
				$('#modal_transaccion .modal-content #ancho ').html(server_data.data.paquete.ancho);
				$('#modal_transaccion .modal-content #profundo ').html(server_data.data.paquete.peso);
				$('#modal_transaccion .modal-content #costo ').html(server_data.data.paquete.costo);
				$('#modal_transaccion .modal-content #descripcion ').html(server_data.data.paquete.descripcion);
				
				$('#modal_transaccion').foundation('reveal','open');
				
	 		},
	 		error: function(xhr, textStatus, errorThrown) {
	 			console.log("error")
	 			$('#modal_notificacion .notification-content').html(xhr.responseJSON.err_mssg);
	 			$('#modal_notificacion').foundation('reveal','open');
	 		}
	 	});

	});

	$(".next_page").on('click', function(event) {		
	 	event.preventDefault();
	 	event.stopImmediatePropagation();	 		 	
	 	var p = $(this).parent().attr("current_page");
	 	$.ajax({
	 		type: 'GET',
	 		url: "/more_transactions",
	 		data: {
	 			"page": p,
	 		},
	 		success: function(server_data) {				
				$(".tabla-transacciones").fadeOut("300");
				for(e : server_data.page)
				{
					console.log(e);
				}
				

				$("#paginador").attr("current_page",server_data.current_page===undefined?p: server_data.current_page);	 		
			},
	 		error: function(xhr, textStatus, errorThrown) {
	 			console.log("error")
	 			$('#modal_notificacion .notification-content').html(xhr.responseJSON.err_mssg);
	 			$('#modal_notificacion').foundation('reveal','open');
	 		}
	 	});

	});

});
