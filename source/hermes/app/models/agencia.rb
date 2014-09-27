#Definicion del modelo Agencia

class Agencia < ActiveRecord::Base

	#Validaciones
	validates! :nombre, presence: true, on: :create
	validates! :ubicacion, presence: true, on: :create
	validates! :latitud, presence: true, on: :create
	validates! :longitud, presence: true, on: :create

	#Relacion con otros recursos
	belongs_to :empresa	
	has_many :agencia_paquetes

	#Funciones y codigo personalizado

end
