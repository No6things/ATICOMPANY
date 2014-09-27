class RegisterController < ApplicationController
	def register_user		
		begin
			err = false
			u = Usuario.find_by(correo_electronico: params[:email])

			if u
				err = true			
				raise 'ALREADY_REGISTERED_USER'				
			end

			# Se almacena la informacion del usuario nuevo como usaurio afiliado

			u = Usuario.create(
				nombre: params[:fname], 
				apellido: params[:lname], 
				correo_electronico: params[:email], 
				password: params[:passwd], 
				fecha_ultimo_acceso: DateTime.now, 
				tipo_usuario: TipoUsuario.find_by(abreviacion: "UA")
				)

			render json: {err_mssg: "", success_mssg: "Bienvenid@ a Hermes "+u.nombre.capitalize}, status: 201
		rescue Exception => e			
			msg = "El usuario \""+params[:email]+"\" ya existe en el sistema!"
			
			if !err 
				msg = "Existe inconsistencia en los datos de registro!"
			end
			
			render json: {err_mssg: msg, success_mssg: ""}, status: 400

		end
	end
end
