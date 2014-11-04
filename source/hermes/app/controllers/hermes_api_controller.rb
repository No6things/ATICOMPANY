class HermesApiController < ApplicationController
=begin
@api private 
=end
	def index
		@menu = [
				"Abrir sesion",
				"Cerrar sesion",		
				"Obtener API Token",
				"Registrar Usuario",
				"Recuperar Contraseña",
				"Calcular Costo de Envio de Paquetes",
				"Ver Tarifas",
				"Crear Paquete",
				"Cambiar estado de un Paquete",
				"Buscar un Paquete",
				"Listado de paquetes pendientes",
				"Ver informacion de Paquetes",
				"Listar paquetes por emisor, receptor"
			]
	end

end
