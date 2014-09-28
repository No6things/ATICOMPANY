#Definicion del modelo Agencia

class Agencia < ActiveRecord::Base
	include Rails.application.routes.url_helpers

	#Validaciones
	validates! :nombre, presence: true, on: :create
	validates! :ubicacion, presence: true, on: :create
	validates! :latitud, presence: true, on: :create
	validates! :longitud, presence: true, on: :create

	#Relacion con otros recursos
	belongs_to :empresa	
	has_many :agencia_paquetes

	#Funciones y codigo personalizado

	def url
		agencia_path(self)
	end

	def as_json
		{
			:id => self.id,
			:nombre => self.nombre,
			:ubicacion => self.ubicacion,
			:latitud => self.latitud,
			:longitud => self.longitud,
			:empresa => self.empresa.as_json,			
		}
	end
end
