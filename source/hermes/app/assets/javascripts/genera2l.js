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
		$('#modal_notificacion .notification-content').html('');
		$(this).trigger("reset");
	});

});
