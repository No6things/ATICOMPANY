#Definicion del model UsuarioInternoAgencia

class UsuarioInternoAgencia < ActiveRecord::Base
	
	#Validaciones

	#Relacion con otros recursos
	belongs_to :usuario
	belongs_to :agencia

	#Funciones y codigo personalizado
end
