class GeneralController < ApplicationController
=begin

@api Hermes 1.0

@param login [String] correo electronico del usuario.
@param passwd [String] contraseña del usuario.

@return [Json]  representacion de un mensaje indicado una autenticacion exitosa.
				400 en caso de no contener los parametros necesitados.
				403 en caso error en la autenticacion.
@note
	POST '/login'

@example
	{
		"err_mssg": "", 
		"success_msg": "OK",
	}
=end
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
			if !u.api_token
				u.update(api_token: Digest::SHA1.hexdigest("#{u.id}#{Time.now}"))
			end
		rescue NoMethodError
			render json: {
				err_mssg: "Parametro de acceso login erroneo o no registrado",
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
				cookies[:id]=u.id
		  		render json: {
		  			err_mssg: "",
		  			success_mssg: "OK",
		  			data: u.as_json
		  			}, status: 	:ok
		  	end
		 end
	end


=begin

@api Hermes 1.0

@return [Json]  representacion de un mensaje indicado el cierre de la sesion.
				401 en caso de no existir una sesion.

@note
	Debe haber un sesion asociada a la peticion.
@note
	DELETE '/logout'

@example
	{
		"err_mssg": "", 
		"success_msg": "Sesion cerrada exitosamente"
	}
=end
	def salir
		begin		
			if cookies.key?:id
				cookies.delete(:id)
				if (cookies.key?:nombre) 
					cookies.delete(:nombre)
				end
				if (cookies.key?:tipo)
					cookies.delete(:tipo)
				end


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
				}, status: :unauthorized
		end
	end
	

=begin

@api Hermes 1.0

@param login [String] correo electronico del usuario.
@param passwd [String] contraseña del usuario.

@return [Json]  representacion del nuevo token asociado al usuario.
				400 en caso de no contener los parametros necesitados.
				403 en caso error en la autenticacion.
@note
	GET '/token'
@example
	{
		"err_mssg": "", 
		"success_msg": "OK",
		"data": {
			"api_token": "a54dae6rx3qe344587e"
		}
	}
=end
	def api_token
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
		  		if u.api_token.nil?
		  			u.update(api_token: Digest::SHA1.hexdigest("#{u.id}#{Time.now}"))
		  		end
		  		render json: {
		  			err_mssg: "",
		  			success_mssg: "OK",
		  			data: {'api_token'=> u.api_token}
		  			}, status: 	:ok
		  	end
		 end
	end


=begin

@api Hermes 1.0

@param email [String] correo electronico del usuario.
@param fname [String] primer nombre del usuario.
@param lname [String] apellido del usuario.
@param passwd [String] contraseña del usuario.
@param pregunta [String] pregunta secreta.
@param respuesta [String] respuesta secreta.

@note
	POST '/registrar'
@return [Json]  representacion de un mensaje con la bienvenida al usuario creado.
				400 en caso de no contener los parametros necesitados.

@example
	{
		"err_mssg": "", 
		"success_msg": "Bienvenid@ a Hermes Leandro, para acceder a tu perfil inicia sesión empleando tu email y contraseña"
	}
=end
	def registrar
		begin
			prms = params.permit(
				:email,
				:fname,
				:lname,
				:passwd,
				:pregunta,
				:respuesta
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
				pregunta: prms.require(:pregunta),
				respuesta: prms.require(:respuesta),
				fecha_ultimo_acceso: DateTime.now, 
				tipo_usuario: TipoUsuario.find_by(abreviacion: "UA")
				)

			render json: {
				err_mssg: "",
				success_mssg: "Bienvenid@ a Hermes "+u.nombre.capitalize+", para acceder a tu perfil inicia sesión empleando tu email y contraseña"
				}, status: :created

		rescue ActionController::ParameterMissing

			render json: {
				err_mssg: "Parametros de registro faltantes o incorrectos",
				success_mssg: "",
				data: {"parametros" => [ 
					"fname",
					"lname",
					"email",
					"passwd",
					"pregunta", 
					"respuesta"
				]}
				}, status: :bad_request

		rescue Exception => e

			render json: {
				err_mssg: e.message,
				success_mssg: ""}, status: :bad_request

		end
	end


=begin

@api Hermes 1.0

@param agencia [Integer] identificador de la agencia.
@param ancho [Float] ancho del paquete.
@param alto [FLoat] altura del paquete.
@param profundidad [Float] profundidad del paquete.
@param peso [Float] peso del paquete.
@param valor [Float] costo del paquete.

@return [Json]  representacion del precio calculado a pagar por el envio del paquete.
				400 en caso de no contener el parametro 'enterprise-token' en la cabecera.
@note
	GET '/calcular'
@note 
	Parametro 'enterprise-token' requerido en cabecera HTTP.
@example
	{
		"err_mssg": "", 
		"success_msg": "Datos de la compañia",
		"data": {
			"r": 152
		}
	}
=end
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
				raise "Parametro de identificacion enterprise-token requerido en header HTTP"
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

=begin

@api Hermes 1.0

@return [Json]  representacion de la informacion correspondiente a la empresa.
				400 en caso de no contener el parametro 'enterprise-token' en la cabecera.
@note
	GET '/info'
@note 
	Parametro 'enterprise-token' requerido en cabecera HTTP.
@example
	{
		"err_mssg": "", 
		"success_msg": "Datos de la compañia",
		"data": {
			"Nombre": "Hermes",
			"RIF": "J-215675",
			"Frase Comercial": "The courier of gods",
			"Constante de Ganancia": 0.15,
			"Porcentaje de Ganancia": 0.10
		}
	}
=end	
	def info
		begin			
			if request.headers.key?("enterprise-token")
				i = request.headers["enterprise-token"].to_i
				e = Empresa.find(i)
				render json: {
						err_mssg: "", 
						success_msg: "Datos de la compañia",
						data: {
							'nombre'=>e.nombre,
							'RIF' => e.rif,
							'frase_comercial' => e.frase_comercial,
							'constante_tarifa' => e.constante_tarifa,
							'porcentaje_tarifa' => e.porcentaje_tarifa
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

	
end
