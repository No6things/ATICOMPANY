$(function(){

	$.ajaxSetup({
	  headers: {
	    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content'),
	    'enterprise-token': $('meta[name="enterprise_token"]').attr('content')
	  }
	});

	/*$.get( "/enterprise_data", function( r ) {		
	  $("#eporc").html(r.data.porcentaje_tarifa);
	  $("#econst").html(r.data.constante_tarifa);	  
	});*/
	
	$(".login-form").on('submit', function(event) {
	 	event.preventDefault();
	  	event.stopImmediatePropagation();

		$.ajax({
			type: 'POST',
			url: 'http://localhost:3000/login',
			crossDomain: true,
			xhrFields: {
			  withCredentials: true
			},
			data: {
			'login': $(this).find("input[name='login']").val(), 
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
		$.find("input[name='login']").val(" ");
		$.find("input[name='passwd']").val(" ");
		$('#modal_notificacion .notification-content').html('');
		$(this).trigger("reset");
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

	$("body").delegate(".get_agencia_paquete","click", function(event) {		
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
				$('#modal_transaccion .modal-content #profundo ').html(server_data.data.paquete.profundidad);
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
	
	$(".arrow").on('click', function(event) {		
	 	event.preventDefault();
	 	event.stopImmediatePropagation();	 		 	
	 	var p = $(this).parent().attr("current_page");
	 	
	 	$.ajax({
	 		type: 'GET',
	 		url: "/pager_transactions",
	 		data: {
	 			"page": p,
	 			"sense":$(this).attr("sentido"),
	 		},
	 		success: function(server_data) {				
				$("#tabla-transacciones").fadeOut("300");				
				var l = server_data.page.length;				
				console.log(server_data)
				if(l!=0)
					$("#tabla-transacciones tbody").html("");
				
				
				for(var i=0; i< l;++i)
				{
					if(server_data.page[i].tipo_estado.abreviacion === "OT" || server_data.page[i].tipo_estado.abreviacion === "R")
					{
						label = "warning";
					}else if(server_data.page[i].tipo_estado.abreviacion === "D")
					{
						label = "success";
					}
					else if(server_data.page[i].tipo_estado.abreviacion === "S")
					{
						label = "regular";
					}
					$("#tabla-transacciones tbody").append(
						'<tr> \
							<td>'+server_data.page[i].fecha_arribo+'</td> \
							<td colspan="2">'+server_data.page[i].paquete.numero_guia+'</td> \
							<td>\
							<label class="'+label+' label">'+server_data.page[i].tipo_estado.nombre+'</label> \
							</td> \
							<td class="ui-helper-center"> \
								<a class="get_agencia_paquete button alert tiny tiny-custom" href="/agencia_paquetes/'+server_data.page[i].id+'"> \
									<i class="fa fa-eye fa-lg"></i> \
								</a> \
							</td> \
						</tr>'
					);	
				}
		
				$("#tabla-transacciones").fadeIn("300");						
				$("#paginador").attr("current_page",server_data.current_page===undefined?p: server_data.current_page);	 		
			},
	 		error: function(xhr, textStatus, errorThrown) {
	 			console.log("error")
	 			$('#modal_notificacion .notification-content').html(xhr.responseJSON.err_mssg);
	 			$('#modal_notificacion').foundation('reveal','open');
	 		}
	 	});

	});

	$(".paquete-form").on('submit', function(event) {		
	 	event.preventDefault();
	  	event.stopImmediatePropagation();	
	  	
		$.ajax({
			type: 'POST',
			url: '/create',
			data: {
			'agencia': $('#newp_agencia').val(), 
			'alto': $('#newp_alto').val(), 
			'ancho':  $('#newp_ancho').val(), 
			'profundidad': $('#newp_profundidad').val(), 
			'peso': $('#newp_peso').val(), 
			'valor': $('#newp_valor').val(), 
			'costo': $('#newp_costo').val(), 
			'emisor': $('#newp_origen').val(), 
			'receptor': $('#newp_destino').val(), 
			'descripcion': $('#newp_descripcion').val(), 
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

	$('.keyup_target').keyup(function(){
		var costo = 0;
		var alto =$('#newp_alto').val();
		var ancho =$('#newp_ancho').val();
		var profundidad =$('#newp_profundidad').val();
		var peso =$('#newp_peso').val();
		var valor = $('#newp_valor').val();

		if(
			alto!="" &&
			ancho!="" &&
			profundidad!="" &&
			peso!="" &&
			valor!="" 
		){
			$.ajax({
				type: 'POST',
				url: '/enterprise',
				data: {			
				'ancho': ancho,	
				'alto': alto,
				'peso': peso,
				'valor': valor,
				'profundidad': profundidad,
				},			
				success: function(server_data) {
					$('#newp_costo').val(server_data.costo)
				},
				fail: function(xhr, textStatus, errorThrown) {
					console.log("error")
					$('#modal_notificacion .notification-content').html(xhr.responseJSON.err_mssg);
					$('#modal_notificacion').foundation('reveal','open');
				}
			});

		}else{
			$('#newp_costo').val(0);
		}		
	});

	$(".calculadora-form").on('submit', function(event) {
	 	event.preventDefault();
	  	event.stopImmediatePropagation();

		$.ajax({
			type: 'POST',
			url: '/enterprise',
			data: {			
			'ancho': $("#anchop").val(),	
			'alto': $("#altop").val(),
			'peso': $("#pesop").val(),
			'valor': $("#valorp").val(),
			'profundidad': $("#profundidadp").val(),
			},			
			success: function(server_data) {
				$('#modal_notificacion .notification-content').html("El Costo estimado a pagar por tu producto es de  "+server_data.costo+"  Bsf");
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