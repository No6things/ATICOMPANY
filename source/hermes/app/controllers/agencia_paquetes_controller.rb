class AgenciaPaquetesController < ApplicationController	


=begin

@api private

@param id [Integer] identificador de la transaccion.

@return [Json] la representacion de un mensaje: 200 en caso de haber encontrado la transaccion.
												404 en caso de no haber encontrado la transaccion.

@example Ejemplo de json en caso de exito.
	{
		"err_mssg": "",
		"success_mssg": "Transaction Found",
		"data": {
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
		},
		"status": 200
	}
=end
	def show
		begin				
			t = AgenciaPaquete.find(params[:id].to_i)
			render json: {err_mssg: "", success_mssg: "Transaction Found", data: t.as_json}, status: 200			
		rescue Exception => e
			render json: {err_mssg: "Transaction Not found", success_mssg: ""}, status: 404
		end
	end


=begin

@api private

@param id [Integer] identificador de la transaccion.

@return [Json] la representacion de un mensaje: 200 en caso de haber encontrado la transaccion.
												404 en caso de no haber encontrado la transaccion.

@example Ejemplo de json en caso de exito.
	{
		"err_mssg": "",
		"success_mssg": "Transaction Found",
		"data": {
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
		},
		"status": 200
	}
=end
	def update
		begin				
			t = AgenciaPaquete.find(params[:id].to_i)
			render json: {err_mssg: "", success_mssg: "Transaction Found", data: t.as_json}, status: 200			
		rescue Exception => e
			render json: {err_mssg: "Transaction not found", success_mssg: ""}, status: 404
		end
	end


=begin

@api private

@param sense [Integer] 

@param page [Integer] numero de pagina entre las transacciones realizadas en una agencia.

@return [Json] la representacion de un mensaje: 200 en caso de haber encontrado la pagina de transacciones.
												400 en caso de no contener el parametro 'enterprise-token' en la cabecera.

@note 
	Parametro 'enterprise-token' requerido en cabecera HTTP.

@note 
	Parametro 'sense' opcional.


=end
	def get_page
		begin						
			i = request.headers["enterprise-token"].to_i
			if i.nil?
				raise "Non Enterprise Token given (invalid Access)"
			end

			s = "+"
			if !params[:sense].nil?
				s = params[:sense]
			end

			p = 0			
			if !params[:page].nil?
				p = params[:page].to_i + (s == "+" ? 1 : ( params[:page].to_i > 0 ? -1 : 0))
			end
			
			t = AgenciaPaquete.where(agencia: Agencia.where(empresa_id: i)).order(:paquete_id,:fecha_arribo).limit(5).offset(5*p)

			if t.length == 0
				p = params[:page].to_i				
			end

			render json: {err_mssg: "", success_mssg: "Rendered page#{p}", page: t.as_json, current_page: p.to_s}, status: 200
		rescue Exception => e
			render json: {err_mssg: "Pages could not be retrieved", success_mssg: ""}, status: 400
		end
	end


=begin

@api private

@return [Json] la representacion de: un mensaje 200 con las primeras 10 transacciones relacionadas directamente con el usuario.
									 un mensaje 404 en caso de no contener el parametro 'enterprise-token' en la cabecera.

@note 
	Parametro 'enterprise-token' requerido en cabecera HTTP.
@note
	Debe haber un sesion activa.

=end
	def show_by_user
		begin				
			i = request.headers["enterprise-token"].to_i
			if i.nil?
				raise "Non Enterprise Token given (invalid Access)"
			end
			e = session[:id_usuario_actual]
			as_sender = AgenciaPaquete.where(agencia: Agencia.where(empresa_id: i)).joins(:paquete).merge(Paquete.where(emisor_id: e.id)).limit(5)
			as_repcipent = AgenciaPaquete.where(agencia: Agencia.where(empresa_id: i)).joins(:paquete).merge(Paquete.where(receptor_id: e.id)).limit(5)
			
			render json: {err_mssg: "", success_mssg: "Transaction Found", data:{ as_sender: as_sender.as_json, as_repcipent: as_repcipent.as_json}}, status: 200
		rescue Exception => e
			render json: {err_mssg: "Transaction not found", success_mssg: ""}, status: 400
		end
	end	
end
