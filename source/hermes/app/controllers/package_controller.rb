class PackageController < ApplicationController

	def create
		begin
			u= Usuario.find(session[:id_usuario_actual])
			if session[:id_usuario_actual] && u.tipo_usuario.abreviacion=='O'
				begin
					@paquete= Paquete.create(
						ancho: params[:ancho],
						alto: params[:alto],
						peso: params[:peso],
						profundidad: params[:profundidad],
						descripcion: params[:descripcion],
						costo: params[:costo],
						emisor_id: Usuario.find_by(correo_electronico: params[:emisor]).id,
						receptor_id: Usuario.find_by(correo_electronico: params[:receptor]).id
						)
				rescue
					msg= 'Lo sentimos pero ha ocurrido un problema con la creacion del paquete'
					render json: {err_mssg: msg, success_mssg: ""}, status: 400
				end
				begin
					@agencia_paquete=AgenciaPaquete.create(fecha_arribo: DateTime.now,
										agencia_id: params[:agencia],
										paquete_id: @paquete.id,
										tipo_estado_id: TipoEstado.find_by(abreviacion: "R").id)
					render json: {err_mssg: "", success_mssg: "Felicidades "+u.nombre.capitalize+", su envio ya se ha registrado. Le notificaremos por correo sobre las distintas fases por las que pasara su paquete."}, status: 201
					
				rescue
					msg= 'Lo sentimos pero ha ocurrido un problema la asociacion del paquete'
					render json: {err_mssg: msg, success_mssg: ""}, status: 400
				end	
			end
		rescue Exception => e
			msg= 'Stahp'
			p msg
			render json: {err_mssg: msg, success_mssg: ""}, status: 400
		end
	end
end
