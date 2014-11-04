class AdministradorController < ApplicationController
before_filter :check_api_token


=begin

@api Hermes 1.0

@param constante_tarifa [Float] constante usada para el calculo de tarifas de la empresa.

@param porcentaje_tarifa [Float] porcentaje usado para el calculo de tarifas de la empresa.

@return [Json] la representacion de un mensaje 400 en caso de no contener el parametro 'enterprise-token' en la cabecera.

@note
	POST '/administrador/tarifas/actualizar'
@note 
	Parametro 'enterprise-token' requerido en cabecera HTTP.
	Parametro 'api-token' requerido en cabecera HTTP.
@note
	El calculo de tarifas corresponde a la formula:  ((cm de ancho)*(cm	de alto)*(cm de	profundo)*(kilos)/Constante)+K%(valor en Bs.F)

=end
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
=begin

@api Hermes 1.0
@note
	Este metodo es un filtro.
@return [Json] la representacion de un mensaje 403 en  caso de acceso no autorizado o no contener el parametro 'api-token' en la cabecera.

=end	
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
