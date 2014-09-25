class HomeController < ApplicationController
	before_action :set_usuario

	def index
		if params[:tipo] == 1			
      		@tipo = 1 #Administrator
    	else
      		@tipo = 0 #Common User
    	end
	end

	def set_usuario
		if params.has_key?(:id)
			@usuario = Usuario.find(params[:id])
		else
			@usuario = Usuario.new
		end
	end
	
end
