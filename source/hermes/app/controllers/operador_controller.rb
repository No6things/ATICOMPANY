class OperadorController < ApplicationController
before_filter :check_api_token

	# Crear paquete dentro del sistema
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
				raise "No se permite que usuario receptor y emisor sean iguales"
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
		
		rescue Exception => e
			msg= 'Lo sentimos pero ha ocurrido un problema con la creacion del paquete'
			render json: {
					err_mssg: msg+" - Motivo: "+ e.message,
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
						success_mssg: "Cambio de esto satisfactorio a: #{pq.tipo_estado.nombre}",
						data: pq.as_json
					},
					status: :ok
			else
				raise "Este paquete no puede cambiar de estado ya que ha sido entregado y no esta bajo el control del sistema"
			end
					
		rescue Exception => e
			msg= 'Lo sentimos pero ha ocurrido un problema con la creacion del paquete'
			render json: {
					err_mssg: msg+" - Motivo: "+ e.message,
					success_mssg: ""
				},
				status: :bad_request
		end
	end

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
		rescue Exception => e
			render json: {
				err_mssg: "Error durante la busqueda debido a : "+e.message,
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
