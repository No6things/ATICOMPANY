class UserMailer < ActionMailer::Base
  default from: 'no6things@gmail.com'

  def retrieve_pwd(usuario)
  	@usuario=usuario
  	mail(to: @usuario.correo_electronico, asunto: "Recuperacion de su contrasena")
   	
   
  end
end
