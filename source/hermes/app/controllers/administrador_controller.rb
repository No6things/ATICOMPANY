class AdministradorController < ApplicationController
before_filter :check_api_token

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

	def check_api_token		
		begin
			if request.headers.key?("api-token")
				atoken = request.headers["api-token"]
			else
				raise "Parametro de identificacion api-token requerido en header http"
			end

			u = Usuario.find_by!(
				api_token: atoken 
			)

			if not u.tipo_usuario.abreviacion == "A"
				raise "Se requieren privilegios administrativos para tener acceso a estas funcionalidades"
			end
		
		rescue Exception => e
			render json: {
				err_mssg: e.message,
				success_mssg: ""
				}, status: 	:unauthorized			
		end		
	end
end
