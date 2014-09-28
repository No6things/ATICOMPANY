class UserMailer < ActionMailer::Base
  default from: 'noreplytohermes@gmail.com'

  def retrieve_pwd(usuario)
  	@usuario=usuario
  	mail(to: @usuario.correo_electronico, subject: "Recuperacion de su contrasena")
   	
   
  end
end
