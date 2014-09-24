#Definicion del modelo Empresa

class Empresa < ActiveRecord::Base

	#Validaciones
	validates! :nombre, presence: true, on: :create
	validates! :rif, presence: true, format: {with: /\A[VvJjEe]-[0-9]+-[1-9]\z/, on: :create}, uniqueness: true, on: :create
	validates! :constante_tarifa, presence: true, on: :create
	validates! :porcentaje_tarifa, presence: true, on: :create

	#Relacion con otros recursos
	has_many :usuario_empresas
	has_many :agencias

	#Funciones y codigo personalizado

end
