class PackageController < ApplicationController
	def create
		begin
			if session[:id_usuario_actual] && Usuario.find(session[:id_usuario_actual]).tipo_usuario.abreciacion=='O'
				begin
					@paquete= Paquete.new
					@paquete.ancho=params[:ancho]
					@paquete.alto=params[:alto]
					@paquete.peso=params[:peso]
					@paquete.profundidad=params[:profundidad]
					@paquete.descripcion=params[:descripcion]
					@paquete.costo=params[:costo]
					#@paquete.emisor_id=params[:origen]
					#@paquete.receptor_id=params[:destino]
				rescue
					p 'parametros del paquete mal'
				else
					@agencia.agencia_paquete=params[:agencia]
				rescue
					p "no se creo la relacion del paquete con la agencia"
				elsif @paquete.save
					p "paquete almacenado en db"
				end	
			end
		rescue
			p 'usuario invalido'
		end
	end
end