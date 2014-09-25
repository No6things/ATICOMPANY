class HomeController < ApplicationController
	#before_action :set_usuario

	def index
		if session[:id_usuario_actual]
			@usuario=Usuario.find(session[:id_usuario_actual])
			if @usuario.tipo_usuario == 1		#Administrator	
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

	def set_usuario
		if params.has_key?(:id)
			@usuario = Usuario.find(params[:id])
		else
			@usuario = Usuario.new
		end
	end
	
end
