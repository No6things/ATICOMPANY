class GeneralController < ApplicationController

	def entrar
		begin
			prms = params.permit(
				:login,
				:passwd
				)
			
			u = Usuario.find_by(
				correo_electronico: prms.require(:login),
				).authenticate(
					prms.require(:passwd)
				)
		rescue NoMethodError
			render json: {
				err_mssg: "Parametro de acceso correo_electronico erroneo o no registrado",
				success_mssg: ""
				}, status: 	:bad_request
		rescue ActionController::ParameterMissing
			render json: {
				err_mssg: "Parametros de acceso faltantes o incorrectos",
				success_mssg: ""
				}, status: 	:bad_request
		else	
		  	if not u
		  		render json: {
		  			err_mssg: "Contraseña incorrecta",
		  			success_mssg: ""
		  			}, status: 	:unauthorized
		  	else
		  		session[:id_usuario_actual]=u.id
		  		
		  		render json: {
		  			err_mssg: "",
		  			success_mssg: "OK"
		  			}, status: 	:ok
		  	end
		 end
	end

	def salir
		begin			
			if session.key?:id_usuario_actual
				reset_session
				render json: {
					err_mssg:"",
					success_msg: "Sesion cerrada exitosamente"
					}, status: :ok
			else
				raise "No ha iniciado en el sistema"
			end
		rescue Exception => e
			render json: {
				err_mssg: e.message,
				success_msg: ""
				}, status: :bad_request
		end
	end

	def registrar
	end

	def recuperar_clave
	end

	def obtener_api_token
	end

	def calcular
	end

	def tarifas
	end
end
