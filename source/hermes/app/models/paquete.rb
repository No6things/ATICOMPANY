#Definicion del modelo Paquete

class Paquete < ActiveRecord::Base
	include Rails.application.routes.url_helpers
	
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
	
	def url
		paquete_path(self)
	end

	def as_json
		{
			:id => self.id,
			:ancho => self.ancho,
			:alto => self.alto,
			:peso => self.peso,
			:costo => self.costo,
			:profundidad => self.profundidad,
			:descripcion => self.descripcion,
			:numero_guia => self.numero_guia,
			:emisor => self.emisor.as_json,
			:receptor => self.receptor.as_json,
		}
	end	

	protected		
		def generate_numero_guia
			self.numero_guia = Digest::SHA1.hexdigest("#{self.id}#{Time.now}")
		end	
end
