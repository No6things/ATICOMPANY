class HomeController < ApplicationController

	def index
		if session[:id_usuario_actual]
			@usuario=Usuario.find(session[:id_usuario_actual])
			if @usuario.tipo_usuario.abreviacion == "A"		#Administrator	
	      		#habilitar cosas de administrador
	      		p 'administrador'
	    	else						#Common User
	      		p 'usuario comun'
	    	end
	    end
	end

	def login
		begin
			@usuario = Usuario.find_by(correo_electronico: params[:login]).authenticate(params[:passwd])
		rescue NoMethodError
				#enviar mensaje ajax de correo inexistente
				redirect_to root_url
		else	
		  	if @usuario == false
		  		#enviar mensaje ajax de contrase;a erronea
		  		redirect_to root_url
		  	else
		  		session[:id_usuario_actual]=@usuario.id
		  		p session[:id_usuario_actual]
		  		redirect_to root_url
		  	end
		 end
	end

	def logout
		begin			
			reset_session
			redirect_to root_url			
		rescue Exception => e
			render json: {err_mssg: "Temporalmente servicio fuera de linea", success_msg: ""}, status: 503			
		end
	end
	
end
