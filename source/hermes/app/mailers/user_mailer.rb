class UserMailer < ActionMailer::Base
  default from: 'noreplytohermes@gmail.com'

  def retrieve_pwd(usuario)
  	@usuario=usuario
  	mail(to: @usuario.correo_electronico, subject: "Recuperacion de su contrasena")   
  end

  def notificar_receptor(t)
  	@t = t
  	mail to: @t.paquete.receptor.correo_electronico, subject: "Notificacion de llegada de paquete"
  end

  def notificar_emisor(t)
  	@t = t
  	mail to: @t.paquete.emisor.correo_electronico, subject: "Notificacion de envio de paquete exitoso"
  end

end

