class PackageController < ApplicationController
	def create
		if session[:id_usuario_actual]
			begin
				@paquete= Paquete.new(params)
				#@paquete.origen=session[:id_usuario_actual]
			rescue
				p "no se creo el paquete (.new(params))"
			elsif @paquete.save
				p "paquete almacenado en db"
			end	
		end
	end
end