class LoginController < ApplicationController
	def login
		begin
			u = Usuario.find_by(correo_electronico: params[:login]).authenticate(params[:passwd]) 
			if u
				session[:uid] = u.id
				render "home/index", status: 200				
			end	
		rescue
			render "home/index", status: 401
		end
	end	
end