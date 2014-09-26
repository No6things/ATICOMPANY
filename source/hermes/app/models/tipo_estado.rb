#Definicion del modelo relacion TipoEstado

class TipoEstado < ActiveRecord::Base
	
	#Validaciones
	validates! :nombre, presence: true, on: :create
	validates! :abreviacion, presence: true, uniqueness: true, length: { maximum: 4 }, on: [:create, :update]
	
	#Relacion con otros recursos
	belongs_to :agencia_paquete	

	#Funciones y codigo personalizado
	def as_json
		{
			:id => self.id,
			:nombre => self.nombre,
			:abreviacion => self.abreviacion,
		}		
	end

end
