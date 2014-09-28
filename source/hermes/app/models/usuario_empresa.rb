#Definicion del model UsuarioEmpresa

class UsuarioEmpresa < ActiveRecord::Base
	
	#Validaciones
	
	#Relacion con otros recursos
	belongs_to :usuario
	belongs_to :empresa

	#Funciones y codigo personalizado
	def as_json
		{
			:id => self.id,
			:empresa => self.empresa.as_json,
			:usuario => self.usuario.as_json,
		}
	end

end
