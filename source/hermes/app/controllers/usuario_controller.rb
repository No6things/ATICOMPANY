class UsuarioController < ApplicationController

	def listar_paquetes
	end

	def buscar_paquete
	end

	def ver_paquete
		begin
			prms = params.permit(
				:id
			)

			pq = Paquete.find(
				prms.require(:id).to_i
			)
			render json: {
					err_mssg: "",
					success_mssg: "OK",
					data: pq.as_json
				},
				status: :ok
					
		rescue Exception => e
			msg= 'Lo sentimos pero ha ocurrido un problema con la creacion del paquete'
			render json: {
					err_mssg: msg+" - Motivo: "+ e.message,
					success_mssg: ""
				},
				status: :bad_request
		end
	end
end
