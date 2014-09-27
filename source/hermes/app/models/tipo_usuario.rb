#Definicion del modelo TipoUsuario

class TipoUsuario < ActiveRecord::Base
	
	#Validaciones
	validates! :nombre, presence: true, on: :create
	validates! :abreviacion, presence: true, uniqueness: true, length: { maximum: 4 }, on: [:create,:update]

	#Relacion con otros recursos
	has_many :usuarios

	#Funciones y codigo personalizado

end
