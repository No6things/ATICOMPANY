#Definicion del modelo Paquete

class Paquete < ActiveRecord::Base
	
	#Validaciones	
	validates! :ancho, presence: true, on: :create 
	validates! :alto, presence: true, on: :create
	validates! :peso, presence: true, on: :create
	validates! :costo, presence: true, on: :create
	validates! :descripcion, presence: true, on: :create
	validates! :numero_guia, presence: true, uniqueness: true, on: :create	

	#Relacion con otros recursos
	belongs_to :agencia_paquete

	#Funciones y codigo personalizado

end
