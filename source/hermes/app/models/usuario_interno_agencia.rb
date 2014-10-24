#Definicion del model UsuarioInternoAgencia

class UsuarioInternoAgencia < ActiveRecord::Base	
	
	#Validaciones

	#Relacion con otros recursos
	belongs_to :usuario
	belongs_to :agencia

	#Funciones y codigo personalizado
	def as_json
		{
			:id => self.id,
			:agencia => self.agencia.as_json,
			:usuario => self.usuario.as_json,
		}
	end

end
