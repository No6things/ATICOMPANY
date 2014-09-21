class Empresa < ActiveRecord::Base
	  attr_accessor :nombre, :rif, :frase_comercial, :constante_tarifa
	  validates :nombre, :rif, :frase_comercial, :constante_tarifa, presence: true, :on => :create
end
