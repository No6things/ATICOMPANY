class UsuarioController < ApplicationController
before_filter :check_api_token

	def listar_paquete
		begin
			prms = params.permit(
				:email
			)
			
			u = Usuario.find_by!(
				correo_electronico: prms.require(:email)
			)
			stt_e = Paquete.where(emisor: u)
			stt_r = Paquete.where(receptor: u)
			data = {
				:como_emisor => stt_e.as_json,
				:como_receptor => stt_r.as_json
			}

			render json: {
					err_mssg: "",
					success_mssg: "OK",
					data: data
				},
				status: :ok
		rescue Exception => e
			render json: {
				err_mssg: "Error durante la busqueda debido a : "+e.message,
				success_mssg: ""
			},
			status: :bad_request
		end
	end

	def buscar_paquete
	# Buscar paquete por numero de guia	
		begin
			prms = params.permit(
				:numero_guia
			)

			stt = AgenciaPaquete.where(
				paquete: Paquete.find_by!(
					numero_guia: prms.require(:numero_guia)
				)
			).order(:fecha_arribo).reverse_order.first

			render json: {
					err_mssg: "",
					success_mssg: "OK",
					data: stt.as_json
				},
				status: :ok
			
		rescue Exception => e
			render json: {
					err_mssg: "No ha sido posible obtener informacion del paquete- Motivo: "+ e.message,
					success_mssg: ""
				},
				status: :bad_request
		end
	end

	def ver_paquete
		begin
			prms = params.permit(
				:id
			)

			pq = Paquete.find(
				prms.require(:id).to_i
			)

			stt = AgenciaPaquete.where(
					paquete: pq
				).order(
						:fecha_arribo
					).reverse_order.first

			render json: {
					err_mssg: "",
					success_mssg: "OK",
					data: {:transaccion => stt.as_json}
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

			if not u.tipo_usuario.abreviacion == "UA"
				raise "Se requieren privilegios de usuario para tener acceso a estas funcionalidades"
			end
		
		rescue Exception => e
			render json: {
				err_mssg: e.message,
				success_mssg: ""
				}, status: 	:unauthorized			
		end		
	end
end
