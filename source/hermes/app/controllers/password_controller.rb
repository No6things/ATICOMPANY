class PasswordController < ApplicationController
	

	def retrieve #envia correo para recuerpar la contrasena y regresa al main
			@usuario=Usuario.find_by(correo_electronico: params[:correo_electronico])
			UserMailer.retrieve_pwd(@usuario).deliver
			redirect_to root_url
	end

	def ask
		@usuario=Usuario.find_by(correo_electronico: params[:correo_electronico])
	end

	def answer  #maneja el resultado de la pregunta secreta y la respuesta
		begin
			@usuario=Usuario.find_by(correo_electronico: params[:correo_electronico])
			p @usuario.respuesta
			if (@usuario.respuesta==params[:respuesta])
				redirect_to "/update?correo_electronico="+params[:correo_electronico]
			else 
				redirect_to "/secret?correo_electronico="+params[:correo_electronico]
			end
		rescue
			redirect_to root_url
		end

	end

	def new_password

	end

	def update #maneja la actualizacion de la contrasena
		begin
			@usuario=Usuario.find_by(correo_electronico: params[:correo_electronico])
			@usuario.password=params[:contrasena]
			@usuario.save
			redirect_to root_url 
		rescue
			redirect_to root_url
		end
	end
end