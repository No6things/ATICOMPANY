class PackageController < ApplicationController
before_filter :check_session

	def create		
		begin
			prms = params.permit(:agencia,:alto,:ancho,:profundidad,:peso,:valor,:costo,:emisor,:receptor,:descripcion)
			e = Usuario.find_by(correo_electronico: prms.require(:emisor))
			r = Usuario.find_by(correo_electronico: prms.require(:receptor))

			if e.nil?
				raise "Usuario emisor no registrado en el sistema"
			end

			if r.nil?
				raise "Usuario receptor no registrado en el sistema"
			end	

			@paquete= Paquete.create(
				ancho:prms.require(:ancho).to_f,
				alto:prms.require(:alto).to_f,
				peso:prms.require(:peso).to_f,
				profundidad: prms.require(:profundidad).to_f,
				descripcion: prms.require(:descripcion),
				costo: prms.require(:costo).to_f,
				emisor_id: e.id,
				receptor_id: r.id,
			)

			@agencia_paquete=AgenciaPaquete.create(
				fecha_arribo: DateTime.now,
				agencia_id: prms.require(:agencia).to_i,
				paquete_id: @paquete.id,
				tipo_estado_id: TipoEstado.find_by(abreviacion: "R").id)

			render json: {err_mssg: "", success_mssg: "Felicidades "+@usuario.nombre.capitalize+", su envio ya se ha registrado. Le notificaremos por correo si existe alguna novedad."}, status: 201		
		
		rescue Exception => e
			msg= 'Lo sentimos pero ha ocurrido un problema con la creacion del paquete'
			render json: {err_mssg: msg+" - Motivo: "+ e.message, success_mssg: ""}, status: 400
		end
	end

	def check_session		
		begin
			if 	session[:id_usuario_actual].nil?
				raise "ACCESS DENIED"
			end
			
			@usuario=Usuario.find(session[:id_usuario_actual])
			
		rescue Exception => e
			puts e.message
			redirect_to root_url
		end		
	end
end
