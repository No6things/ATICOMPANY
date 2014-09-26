class HomeController < ApplicationController

	def index
		if session.has_key?("id_usuario_actual")
			if !session[:id_usuario_actual].nil?
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

	def enterprise #calculo un paquete
		begin
			i = request.headers["enterprise-token"].to_i
			@empresa=Empresa.find(i)
			costo= ((params[:ancho].to_f * params[:alto].to_f * params[:profundidad].to_f * params[:peso].to_f)/@empresa.constante_tarifa)+((@empresa.porcentaje_tarifa*params[:valor].to_f)/100)
			render json: {err_mssg: "", success_msg: "Result", costo: costo.to_s}, status: 202
		rescue
			render json: {err_mssg: "La empresa a la que pertenece no se encuentra registrada", constante: 0, porcentaje: 0}, status: 503			
		end
	end

	def get_enterprise_data
		begin
			i = request.headers["enterprise-token"].to_i
			e=Empresa.where(id: i)[0]
			render json: {err_mssg: "", success_msg: "Enterprise data", data: e.as_json}, status: 202
		rescue Exception => e
			render json: {err_mssg: "Header error found, invalid enterprise-token value", success_msg: ""}, status: 400
		end
	end
end
