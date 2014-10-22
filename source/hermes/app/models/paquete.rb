#Definicion del modelo Paquete

class Paquete < ActiveRecord::Base
	include Rails.application.routes.url_helpers
	
	#Validaciones
	validates_numericality_of :ancho, greater_than: 0, message: "El valor introducido debe ser numerico y positivo", presence: true, on: [:create, :update]
	validates_numericality_of :alto, greater_than: 0, message: "El valor introducido debe ser numerico y positivo", presence: true, on: [:create, :update]
	validates_numericality_of :peso,greater_than: 0, message: "El valor introducido debe ser numerico y positivo", presence: true, on: [:create, :update]
	validates_numericality_of :costo,greater_than: 0, message: "El valor introducido debe ser numerico y positivo", presence: true, on: [:create, :update]
	validates_numericality_of :profundidad,greater_than: 0, message: "El valor introducido debe ser numerico y positivo", presence: true, on: [:create, :update]
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

	def cambiar_estado(a)
		f = AgenciaPaquete.where(
			paquete: self).order(
			:fecha_arribo).reverse_order.first

		if not f.nil?		
			
			s = nil
			
			if f.tipo_estado.abreviacion == 'R'
				s = 'OT'
			elsif f.tipo_estado.abreviacion == 'OT'
				s = 'D'
			end

			if not s.nil?
			AgenciaPaquete.create!(
				fecha_arribo: DateTime.now,
				agencia: Agencia.find(a),
				paquete_id: self.id,
				tipo_estado: TipoEstado.find_by(abreviacion: s)
				)
			end
		else
			nil
		end
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
