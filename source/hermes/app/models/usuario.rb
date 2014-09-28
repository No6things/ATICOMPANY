#Definicion del modelo usuario

class Usuario < ActiveRecord::Base
	include Rails.application.routes.url_helpers

	#Validaciones
	validates! :nombre, presence: true, on: :create
	validates! :apellido, presence: true, on: :create
	validates! :correo_electronico, presence: true, format: {with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/, on: :create}, uniqueness: true, on: [:create,:update]
	validates! :password, presence: true, length: { minimum: 5 }, on: :create
	validates! :fecha_ultimo_acceso, presence: true, on: :create
	
	
	has_secure_password

	#Relacion con otros recursos
	belongs_to :tipo_usuario	
	has_many :usuario_empresas
		
	#Funciones y codigo personalizado
	def url
		usuario_path(self)
	end

	def as_json
		{
			:id => self.id,
			:nombre => self.nombre,
			:apellido => self.apellido,
			:correo_electronico => self.correo_electronico,
			:fecha_ultimo_acceso => self.fecha_ultimo_acceso,
			:tipo_usuario => self.tipo_usuario.as_json,			
		}		
	end
end
