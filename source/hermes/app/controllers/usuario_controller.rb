class UsuarioController < ApplicationController
before_filter :check_api_token

=begin

@api Hermes 1.0

@param email [String] correo electronico del usuario que ha 
	enviado o recibido el paquete a listar

@return [Json] representacion en formato json de los paquetes 
	encontrados

@note 
	Parametro "api-token" requerido en cabecera http

@example Ejemplo de json de retorno
	{
	    "err_mssg": "",
	    "success_mssg": "OK",
	    "data": {
	        "como_emisor": [
	            {
	                "id": 15,
	                "ancho": 5,
	                "alto": 5,
	                "peso": 0.15,
	                "costo": 24.5,
	                "profundidad": 10,
	                "descripcion": "Teclado",
	                "numero_guia": "1acae99bed11b1424527f4c930907fc498273739",
	                "emisor": {
	                    "id": 13,
	                    "nombre": "Administrador",
	                    "apellido": "Prueba",
	                    "correo_electronico": "a@m.com",
	                    "fecha_ultimo_acceso": "2014-09-27T00:18:14.693Z",
	                    "tipo_usuario": {
	                        "id": 1,
	                        "nombre": "Administrador",
	                        "abreviacion": "A"
	                    }
	                },
	                "receptor": {
	                    "id": 12,
	                    "nombre": "cliente",
	                    "apellido": "prueba",
	                    "correo_electronico": "c@m.com",
	                    "fecha_ultimo_acceso": "2014-09-26T22:41:43.804Z",
	                    "tipo_usuario": {
	                        "id": 3,
	                        "nombre": "Usuario Afiliado",
	                        "abreviacion": "UA"
	                    }
	                }
	            },            
	        ],
	        "como_receptor": [
	            {
	                "id": 17,
	                "ancho": 2,
	                "alto": 2,
	                "peso": 4,
	                "costo": 2.35,
	                "profundidad": 3,
	                "descripcion": "Test",
	                "numero_guia": "57921cab6d7d1d1c848747a14336345573dc00fb",
	                "emisor": {
	                    "id": 14,
	                    "nombre": "operador",
	                    "apellido": "Prueba",
	                    "correo_electronico": "o@m.com",
	                    "fecha_ultimo_acceso": "2014-09-26T21:29:39.060Z",
	                    "tipo_usuario": {
	                        "id": 2,
	                        "nombre": "Operador",
	                        "abreviacion": "O"
	                    }
	                },
	                "receptor": {
	                    "id": 13,
	                    "nombre": "Administrador",
	                    "apellido": "Prueba",
	                    "correo_electronico": "a@m.com",
	                    "fecha_ultimo_acceso": "2014-09-27T00:18:14.693Z",
	                    "tipo_usuario": {
	                        "id": 1,
	                        "nombre": "Administrador",
	                        "abreviacion": "A"
	                    }
	                }
	            }
	        ]
	    }
	}

=end

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
