class AdministradorController < ApplicationController

	# Actualizar informacion de tarifas de envio de paquetes
	def actualizar_tarifas
		begin
			if request.headers.key?("enterprise-token")
				eid = request.headers["enterprise-token"].to_i

				prms = params.permit(
					:constante_tarifa,
					:porcentaje_tarifa,
				)

				Empresa.update(
					eid,
					constante_tarifa: prms.require(:constante_tarifa).to_f,
					porcentaje_tarifa: prms.require(:porcentaje_tarifa).to_f
					)

				render json: {
						err_mssg: "", 
						success_msg: "Actualizacion exitosa",
					}, status: :ok
			else
				raise "Parametro de identificacion enterprise-token requerido en header http"
			end
		rescue ActionController::ParameterMissing
			
			render json: {
				err_mssg: "Parametros de actualizacion faltantes", 
				success_mssg: "",
				data: { "parametros"=> ["constante_tarifa", "porcentaje_tarifa"]}
				}, status: :bad_request

		rescue ActiveRecord::RecordNotFound
		
			render json: {
				err_mssg: "Parametro enterprise-token erroneo", 
				success_mssg: "",
				}, status: :bad_request

		rescue Exception => e
		
			render json: {
				err_mssg: e.message,
				success_mssg: ""
			}, status: :bad_request
		
		end
	end
end
