#Definicion del modelo AgenciaPaquete

class AgenciaPaquete < ActiveRecord::Base
	
	#Validaciones
	validates! :fecha_arribo, presence: true, on: :create

	#Relacion con otros recursos
	belongs_to :tipo_estado
	belongs_to :paquete
	belongs_to :agencia

	#Funciones y codigo personalizado

end
