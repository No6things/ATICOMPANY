class HomeController < ApplicationController

	def index
		if session.has_key?("id_usuario_actual")
			if !session[:id_usuario_actual].nil?
				#@empresa=Empresa.find(1)
				@usuario=Usuario.find(session[:id_usuario_actual])			
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
		  		@usuario.fecha_ultimo_acceso= DateTime.now
		  		@usuario.save
		  		session[:id_usuario_actual]=@usuario.id

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

	def enterprise
		begin

			@empresa=Empresa.find(params[:empresa_id])
			costo=(params[:ancho]*params[:alto]*params[:profundidad]*params[:peso]*params[:valor]/@empresa.constante_tarifa)+(@empresa.porcentaje_tarifa*params[:valor]/100)
			render json: {err_mssg: "", success_msg: costo}, status: 202			
		rescue
			render json: {err_mssg: "La empresa a la que pertenece no se encuentra registrada", constante: 0, porcentaje: 0}, status: 503			
		end
	end
	
end
