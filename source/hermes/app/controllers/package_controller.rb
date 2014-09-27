class PackageController < ApplicationController

	def create
		p 'dickdick'
		begin
			p session[:id_usuario_actual]
			p Usuario.find(session[:id_usuario_actual]).tipo_usuario.abreviacion
			if session[:id_usuario_actual] && Usuario.find(session[:id_usuario_actual]).tipo_usuario.abreviacion=='O'
				begin
					p 'huehue'
					@paquete= Paquete.create(
						ancho: params[:ancho],
						alto: params[:alto],
						peso: params[:peso],
						profundidad: params[:profundidad],
						descripcion: params[:descripcion],
						costo: params[:costo],
						emisor_id: params[:origen],
						receptor_id: params[:destino]
						)
					p 'package created'
				rescue
					p 'parametros del paquete mal'
				else
					@agencia.agencia_paquete=params[:agencia]
					if @paquete.save
						p "paquete almacenado en db"
					end
				end	
			end
		rescue Exception => e
			msg= 'usuario invalido'
			p msg
			render json: {err_mssg: msg, success_mssg: ""}, status: 400
		end
	end
end
