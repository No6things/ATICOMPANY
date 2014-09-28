#Definicion del modelo Empresa

class Empresa < ActiveRecord::Base
	include Rails.application.routes.url_helpers

	#Validaciones
	validates! :nombre, presence: true, on: :create
	validates! :rif, presence: true, format: {with: /\A[VvJjEe]-[0-9]+-[1-9]\z/, on: :create}, uniqueness: true, on: [:create, :update]
	validates! :constante_tarifa, presence: true, on: :create
	validates! :porcentaje_tarifa, presence: true, on: :create

	#Relacion con otros recursos
	has_many :usuario_empresas
	has_many :agencias

	#Funciones y codigo personalizado
	def url
		empresa_path(self)
	end

	def as_json
		{
			:id => self.id,
			:nombre => self.nombre,
			:rif => self.rif,
			:contante_tarifa => self.constante_tarifa,
			:porcentaje_tarifa => self.porcentaje_tarifa,
		}
	end
end
