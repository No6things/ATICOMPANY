class OperadorController < ApplicationController

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
				tipo_estado_id: TipoEstado.find_by(abreviacion: "R").id)

			render json: {
					err_mssg: "",
					success_mssg: "El envio se ha registrado exitosamente. Se le notificara por correo si existe alguna novedad."
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
	end
end
