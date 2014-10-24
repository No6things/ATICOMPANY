class OperadorController < ApplicationController
before_filter :check_api_token

=begin

@api Hermes 1.0

@param agencia [Integer] identificador de la agencia.
@param ancho [Float] ancho del paquete.
@param alto [Float] altura del paquete.
@param profundidad [Float] profundidad del paquete.
@param peso [Float] peso del paquete.
@param costo [Float] costo del paquete.
@param emisor [String] correo electronico del emisor.
@param receptor [String] correo electronico del receptor.
@param descripcion [String] descripcion fisica del paquete.


@return [Json] representacion en formato json del numero guia correspondiente al paquete creado o 400 en caso de error. 

@note
	POST '/operador/paquete/crear'
@note 
	Parametro 'api-token' requerido en cabecera HTTP

@example Ejemplo de json en caso de retorno
	{
	    "err_mssg": "",
	    "success_mssg": "OK",
	    "data": { 
                "numero_guia": 25,
                }
	}
=end
	def crear_paquete	
		begin
			prms = params.permit(
				:agencia,
				:alto,
				:ancho,
				:profundidad,
				:peso,
				:costo,
				:emisor,
				:receptor,
				:descripcion
			)
			e = Usuario.find_by(correo_electronico: prms.require(:emisor))
			r = Usuario.find_by(correo_electronico: prms.require(:receptor))

			if e.nil?
				raise "Usuario emisor no registrado en el sistema"
			end

			if r.nil?
				raise "Usuario receptor no registrado en el sistema"
			end	

			if e == r 
				raise "No se permite que usuario receptor y emisor sean la misma persona"
			end

			paquete = Paquete.create!(
				ancho:prms.require(:ancho),
				alto:prms.require(:alto),
				peso:prms.require(:peso),
				profundidad: prms.require(:profundidad),
				descripcion: prms.require(:descripcion),
				costo: prms.require(:costo),
				emisor_id: e.id,
				receptor_id: r.id
			)

			agencia_paquete=AgenciaPaquete.create(
				fecha_arribo: DateTime.now,
				agencia_id: prms.require(:agencia).to_i,
				paquete_id: paquete.id,
				tipo_estado_id: TipoEstado.find_by(abreviacion: "R").id
			)

			render json: {
					err_mssg: "",
					success_mssg: "El envio se ha registrado exitosamente. Se le notificara por correo si existe alguna novedad.",
					data: { :numero_guia => paquete.numero_guia }
	 			},
				status: :created		
		rescue ActionController::ParameterMissing
			
			render json: {
				err_mssg: "Faltan parametros", 
				success_mssg: "",
				data: { "parametros"=> ["alto", "ancho", "profundida", "peso", "descripcion", "costo", "emisor", "receptor", "agencia"]}
				}, status: :bad_request

		rescue Exception => e
			msg= 'Lo sentimos pero ha ocurrido un problema con la creacion del paquete'
			render json: {
					err_mssg: msg+" - Motivo: "+ e.message,
					success_mssg: ""
				},
				status: :not_found
		end
	end


=begin

@api Hermes 1.0

@param id [Integer] identificador del paquete.

@return [Json] representacion en formato json del paquete modificado o 400 en caso de error. 

@note
	GET '/operador/paquete/ver'

@note 
	Parametro 'api-token' requerido en cabecera HTTP

@example Ejemplo de json en caso de retorno
	{
	    "err_mssg": "",
	    "success_mssg": "OK",
	    "data": {
		    "transaccion": { 
		    		"id": 8,
					"fecha_arribo": "2014-09-26T21:29:39.152Z",
					"tipo_estado": "R",
					"paquete": { 
						"id": 17,
		                "ancho": 2,
		                "alto": 2,
		                "peso": 4,
		                "costo": 2.35,
		                "profundidad": 3,
		                "descripcion": "Test",
		                "numero_guia": "57921cab6d7d1d1c848747a14336345573dc00fb",
		                "agencia_paquete": { Recursivo
		                },
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
	                },
					"agencia": {
						"id": 15,
						"nombre": "Hermes CCS",
						"ubicacion": "Caracas",
						"latitud": "13554.1546",
						"longitud": "5466487.425",
						"empresa": "Hermes",
				   	}
	                
	        }
		}	
	}

=end
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
		rescue ActionController::ParameterMissing
			
			render json: {
				err_mssg: "Faltan parametros", 
				success_mssg: "",
				data: { "parametros"=> ["id"]}
				}, status: :bad_request

		rescue Exception => e
			msg= 'Lo sentimos pero ha ocurrido un problema con la visualizacion del paquete'
			render json: {
					err_mssg: msg+" - Motivo: "+ e.message,
					success_mssg: ""
				},
				status: :not_found
		end
	end

=begin

@api Hermes 1.0

@param id [Integer] identificador del paquete.
@param agencia [Integer] identificador de la agencia.

@return [Json] representacion en formato json del paquete modificado o 400 en caso de error. 

@note
	POST '/operador/paquete/cambiar_estado'

@note 
	Parametro 'api-token' requerido en cabecera HTTP

@example Ejemplo de json en caso de retorno
	{
	    "err_mssg": "",
	    "success_mssg": "OK",
	    "data": { 
                "id": 17,
                "ancho": 2,
                "alto": 2,
                "peso": 4,
                "costo": 2.35,
                "profundidad": 3,
                "descripcion": "Test",
                "numero_guia": "57921cab6d7d1d1c848747a14336345573dc00fb",
                "agencia_paquete": {
					"id": 8,
					"fecha_arribo": "2014-09-26T21:29:39.152Z",
					"tipo_estado": "R",
					"paquete": { Recursivo },
					"agencia": {
						"id": 15,
						"nombre": "Hermes CCS",
						"ubicacion": "Caracas",
						"latitud": "13554.1546",
						"longitud": "5466487.425",
						"empresa": "Hermes",
					}
                },
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
	}
=end
	def cambiar_estado_paquete
		begin
			prms = params.permit(
				:id,
				:agencia
			)

			pq = Paquete.find(
				prms.require(:id).to_i
			).cambiar_estado prms.require(:agencia).to_i

			if not pq.nil?

				if pq.tipo_estado.abreviacion == 'OA'
					
					#Enviar mensaje al receptor del paquete
					UserMailer.notificar_receptor(pq).deliver

					#Enviar mensaje al emisor del paquete
					UserMailer.notificar_emisor(pq).deliver					

				end

				render json: {
						err_mssg: "",
						success_mssg: "Cambio de estado satisfactorio a: #{pq.tipo_estado.nombre}",
						data: pq.as_json
					},
					status: :ok
			else
				raise "Este paquete no puede cambiar de estado ya que ha sido entregado y no esta bajo el control del sistema"
			end
		rescue ActionController::ParameterMissing
			
			render json: {
				err_mssg: "Faltan parametros", 
				success_mssg: "",
				data: { "parametros"=> ["id", "agencia"]}
				}, status: :bad_request

		rescue Exception => e
			msg= 'Lo sentimos pero ha ocurrido un problema con la modificacion del paquete'
			render json: {
					err_mssg: msg+" - Motivo: "+ e.message,
					success_mssg: ""
				},
				status: :not_found
		end
	end


=begin

@api Hermes 1.0

@param numero_guia [Integer] numero guia del paquete.
@param email [String] correo electronico del usuario que ha enviado o recibido el paquete a listar.

@return [Json] representacion en formato json de los paquetes encontrados.

@note
	GET '/operador/paquete/buscar'

@note 
	Parametro 'api-token' requerido en cabecera HTTP

@example Ejemplo de json en caso de retorno
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
	                "agencia_paquete": {
						"id": 8,
						"fecha_arribo": "2014-09-26T21:29:39.152Z",
						"tipo_estado": "R",
						"paquete": { Recursivo },
						"agencia": {
							"id": 15,
							"nombre": "Hermes CCS",
							"ubicacion": "Caracas",
							"latitud": "13554.1546",
							"longitud": "5466487.425",
							"empresa": "Hermes",
						}
                	},
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
	                "agencia_paquete": {
						"id": 8,
						"fecha_arribo": "2014-09-26T21:29:39.152Z",
						"tipo_estado": "R",
						"paquete": { Recursivo },
						"agencia": {
							"id": 15,
							"nombre": "Hermes CCS",
							"ubicacion": "Caracas",
							"latitud": "13554.1546",
							"longitud": "5466487.425",
							"empresa": "Hermes",
						}
	                },
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
	def buscar_paquete
		begin
			prms = params.permit(
				:numero_guia,
				:email
			)
			
			if prms.size != 1
				raise "Numero de parametros invalidos, solo estan permitidos uno de los siguientes: numero_guia ó email"
			end

			stt = nil
			
			if not prms['numero_guia'].nil?
				stt = AgenciaPaquete.where(
					paquete: Paquete.find_by!(
						numero_guia: prms.require(:numero_guia)
					)
				).order(:fecha_arribo).reverse_order.first

				data = stt.as_json

			elsif not prms['email'].nil?

				u = Usuario.find_by!(
					correo_electronico: prms.require(:email)
				)
				#stt_e = AgenciaPaquete.joins(:paquete).merge(Paquete.where(emisor: u)).order(:fecha_arribo).reverse_order
				#stt_r = AgenciaPaquete.joins(:paquete).merge(Paquete.where(receptor: u)).order(:fecha_arribo).reverse_order
				stt_e = Paquete.where(emisor: u)
				stt_r = Paquete.where(receptor: u)
				data = {
					:como_emisor => stt_e.as_json,
					:como_receptor => stt_r.as_json
				}
 
			end

			render json: {
					err_mssg: "",
					success_mssg: "OK",
					data: data
				},
				status: :ok

		rescue ActionController::ParameterMissing
			
			render json: {
				err_mssg: "Faltan parametros", 
				success_mssg: "",
				data: { "parametros"=> ["numero_guia", "email"]}
				}, status: :bad_request

		rescue Exception => e
			render json: {
				err_mssg: "Error durante la busqueda debido a : "+e.message,
				success_mssg: ""
			},
			status: :not_found
		end
	end

=begin

@api Hermes 1.0

@param email [String] correo electronico del usuario que ha 
  enviado o recibido el paquete a listar.

@return [Json] representacion en formato json de 
  los paquetes encontrados.

@note
	GET '/operador/paquete/listar'

@note 
	Parametro 'api-token' requerido en cabecera HTTP

@example Ejemplo de json en caso de retorno
	{
    "err_mssg": "",
    "success_mssg": "OK",
    "data": {
        "paquetes": [
            {
                "id": 99,
                "fecha_arribo": "2014-10-22",
                "tipo_estado": {
                    "id": 2,
                    "nombre": "Recibido",
                    "abreviacion": "R"
                },
                "paquete": {
                    "id": 41,
                    "ancho": 3,
                    "alto": 4,
                    "peso": 4,
                    "costo": 4,
                    "profundidad": 23,
                    "descripcion": "p1",
                    "numero_guia": "3fc377c12d9f1c4222ed6a7ded3e3ff6246265e4",
                    "emisor": {
                        "id": 1,
                        "nombre": "jesus",
                        "apellido": "gomez",
                        "correo_electronico": "jesus.igp009@gmail.com",
                        "fecha_ultimo_acceso": "2014-09-26T20:51:59.367Z",
                        "tipo_usuario": {
                            "id": 1,
                            "nombre": "Administrador",
                            "abreviacion": "A"
                        }
                    },
                    "receptor": {
                        "id": 16,
                        "nombre": "jesus",
                        "apellido": "gomez",
                        "correo_electronico": "jgomez@cgtscorp.com",
                        "fecha_ultimo_acceso": "2014-10-22T22:59:40.423Z",
                        "tipo_usuario": {
                            "id": 3,
                            "nombre": "Usuario Afiliado",
                            "abreviacion": "UA"
                        }
                    }
                },
                "agencia": {
                    "id": 1,
                    "nombre": "Los Simbolos",
                    "ubicacion": "descripcion",
                    "latitud": 20,
                    "longitud": 10,
                    "empresa": {
                        "id": 1,
                        "nombre": "Hermes",
                        "rif": "J-123456789-0",
                        "constante_tarifa": 0,
                        "porcentaje_tarifa": 45
                    	}
                	}
            	},
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

			a = UsuarioInternoAgencia.where(usuario: u).first

			stt = AgenciaPaquete.select(
				"DISTINCT on (paquete_id) *"
				).where(
					agencia: a.agencia
				).order(
					:paquete_id,
					:fecha_arribo
				).reverse_order

			data = {
				:paquetes => stt.as_json,				
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

			if not u.tipo_usuario.abreviacion == "O"
				raise "Se requieren privilegios de operador para tener acceso a estas funcionalidades"
			end
		
		rescue Exception => e
			render json: {
				err_mssg: e.message,
				success_mssg: ""
				}, status: 	:unauthorized			
		end		
	end
end
