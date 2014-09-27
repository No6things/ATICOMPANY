class AdminController < ApplicationController
	def home
		begin
			e_id = params[:enterprise_token]
			
			#@usuarios = 
			#@paquetes = 
			#@contante = 
			#@porcentaje =	
		rescue Exception => e
			
		end		
	end

	def paginator

	end
end
