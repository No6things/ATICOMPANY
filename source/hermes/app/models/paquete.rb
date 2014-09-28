#Definicion del modelo Paquete

class Paquete < ActiveRecord::Base
	
	#Validaciones	
	validates! :ancho, presence: true, on: :create 
	validates! :alto, presence: true, on: :create
	validates! :peso, presence: true, on: :create
	validates! :costo, presence: true, on: :create
	validates! :profundidad, presence: true, on: :create
	validates! :descripcion, presence: true, on: :create
	validates! :numero_guia, presence: true, uniqueness: true, on: [:create, :update]

	#Relacion con otros recursos
	belongs_to :agencia_paquete
	belongs_to :emisor, :class_name => "Usuario"
	belongs_to :receptor, :class_name => "Usuario"	

	#Funciones y codigo personalizado
	before_validation :generate_numero_guia

	protected		
		def generate_numero_guia
			self.numero_guia = Digest::SHA1.hexdigest("#{self.id}#{Time.now}")
		end		
end
