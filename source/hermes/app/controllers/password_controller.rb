class PasswordController < ApplicationController
	def index
		@usuario=Usuario.find_by(correo_electronico: params[:correo_electronico])
	end

	def retrieve
			@usuario=Usuario.find_by(correo_electronico: params[:correo_electronico])
			UserMailer.retrieve_pwd(@usuario).deliver
			redirect_to root_url
	end

	def secret
		begin
			@usuario=Usuario.find_by(correo_electronico: params[:correo_electronico])
			if (@usuario.respuesta==params[:respuesta])
				redirect_to "/update"
			else 
				redirect_to "/secret?correo_electronico="+params[:correo_electronico]
			end
		rescue
			redirect_to root_url
		end

	end

	def update
		begin
			@usuario=Usuario.find_by(correo_electronico: params[:correo_electronico])
			@usuario.password=params[contrasena]
			@usuario.save
		rescue
			redirect_to root_url
		end
	end
end