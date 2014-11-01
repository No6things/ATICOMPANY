class UserMailer < ActionMailer::Base
  default from: 'noreplytohermes@gmail.com'

  def notificar_receptor(t)
  	@t = t
  	mail to: @t.paquete.receptor.correo_electronico, subject: "Notificacion de llegada de paquete"
  end

  def notificar_emisor(t)
  	@t = t
  	mail to: @t.paquete.emisor.correo_electronico, subject: "Notificacion de envio de paquete exitoso"
  end

end

