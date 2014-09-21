class TipoUsuario < ActiveRecord::Base
	has_many :usuario
	attr_accessor :nombre, :abreviacion
	validates :nombre, uniqueness: true
end
