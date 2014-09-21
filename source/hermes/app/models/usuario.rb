require 'digest'

class EmailValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    unless value =~ /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
      record.errors[attribute] << (options[:message] || "el valor ingresado no es un correo electronico")
    end
  end
end

class Usuario < ActiveRecord::Base
  belongs_to :tipo_usuario
  attr_accessor :password, :nombre, :apellido, :correo_electronico, :fecha_ultimo_acceso
  before_save :encriptar_contrasena
  
  validates :tipo, :nombre, :apellido, :correo_electronico, :password, presence: true, :on => :create, 
  validates :correo_electronico, uniqueness: true, email: true
  
  def self.autenticacion (correo_electronico, password)
    usuario = find_by correo_electronico: correo_electronico
    if usuario && usuario.password == Digest::MD5 password
      usuario
    else
      nil
    end
  end
  
  def encriptar_contrasena
    if password.present?
      self.password = Digest::MD5 password
    end
  end
end