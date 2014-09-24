class UsuarioEmpresa < ActiveRecord::Base
	belongs_to :usuario
	belongs_to :empresa
end
