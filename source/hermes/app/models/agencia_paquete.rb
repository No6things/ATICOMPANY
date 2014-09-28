#Definicion del modelo AgenciaPaquete

class AgenciaPaquete < ActiveRecord::Base
	include Rails.application.routes.url_helpers
	
	#Validaciones
	validates! :fecha_arribo, presence: true, on: :create

	#Relacion con otros recursos
	belongs_to :tipo_estado
	belongs_to :paquete
	belongs_to :agencia

	#Funciones y codigo personalizado
	def url
		agencia_paquete_path(self)
	end

	def as_json
		{
			:id => self.id,
			:fecha_arribo => self.fecha_arribo.to_date,
			:tipo_estado => self.tipo_estado.as_json,
			:paquete => self.paquete.as_json,
			:agencia => self.agencia.as_json,
		}
	end
end
