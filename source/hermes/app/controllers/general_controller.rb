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
		begin
			prms = params.permit(
				:email,
				:fname,
				:lname,
				:passwd
				)

			u = Usuario.find_by(
				correo_electronico: prms.require(:email)
				)

			if u
				raise 'Usuario ya registrado en el sistema'
			end

			u = Usuario.create(
				nombre: prms.require(:fname), 
				apellido: prms.require(:lname), 
				correo_electronico: prms.require(:email), 
				password: prms.require(:passwd), 
				fecha_ultimo_acceso: DateTime.now, 
				tipo_usuario: TipoUsuario.find_by(abreviacion: "UA")
				)

			render json: {
				err_mssg: "",
				success_mssg: "Bienvenid@ a Hermes "+u.nombre.capitalize+", para acceder a tu perfil inicia sesión empleando tu email y contraseña"
				}, status: :created

		rescue ActionController::ParameterMissing

			render json: {
				err_mssg: "Parametros de acceso faltantes o incorrectos",
				success_mssg: ""}, status: :bad_request

		rescue Exception => e

			render json: {
				err_mssg: e.message,
				success_mssg: ""}, status: :bad_request

		end
	end

	def calcular
		begin			
			if request.headers.key?("enterprise-token")
				i = request.headers["enterprise-token"].to_i
				e = Empresa.find(i)

				prms = params.permit(
					:alto,
					:ancho,
					:profundidad,
					:peso,
					:valor
				)

				costo = ((prms.require(:alto).to_f*prms.require(:ancho).to_f*prms.require(:profundidad).to_f*prms.require(:peso).to_f)/e.constante_tarifa)+((prms.require(:valor).to_f*e.porcentaje_tarifa)/100)	
				render json: {
						err_mssg: "", 
						success_msg: "Resultado", data: {'r'=>costo}
					}, status: :ok
			else
				raise "Parametro de identificacion enterprise-token requerido en header http"
			end
		rescue ActionController::ParameterMissing
			render json: {
				err_mssg: "Parametros de calculo faltantes o incorrectos (alto, ancho, profundidad, peso, valor)",
				success_mssg: ""
				}, status: 	:bad_request
		
		rescue Exception => e
			render json: {err_mssg: e.message, success_msg:""}, status: :bad_request
		end
	end

	def info
		begin			
			if request.headers.key?("enterprise-token")
				i = request.headers["enterprise-token"].to_i
				e = Empresa.find(i)
				render json: {
						err_mssg: "", 
						success_msg: "Datos de la compañia",
						data: {
							'Nombre'=>e.nombre,
							'RIF' => e.rif,
							'Frase Comercial' => e.frase_comercial,
							'Constante de Ganancia' => e.constante_tarifa,
							'Porcentaje de Ganancia' => e.porcentaje_tarifa
						}
					}, status: :ok
			else
				raise "Parametro de identificacion enterprise-token requerido en header http"
			end
		rescue Exception => e
			render json: {
				err_mssg: e.message,
				success_msg:""},
				status: :bad_request
		end
	end

	def recuperar_clave
	end

	def obtener_api_token
	end
end
