#Definicion del modelo Paquete

class Paquete < ActiveRecord::Base
	
	#Validaciones	
	validates! :ancho, presence: true, on: :create 
	validates! :alto, presence: true, on: :create
	validates! :peso, presence: true, on: :create
	validates! :costo, presence: true, on: :create
	validates! :descripcion, presence: true, on: :create
	validates! :numero_guia, uniqueness: true, on: :create	

	#Relacion con otros recursos
	belongs_to :agencia_paquete

	#Funciones y codigo personalizado
	def generate_numero_guia
		p Digest::SHA1.hexdigest("#{self.id}#{Time.now}#{self.costo}")
	end

	#after_create(self.generate_numero_guia)
end
