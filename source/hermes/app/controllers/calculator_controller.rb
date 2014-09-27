class PackageController < ApplicationController
	def calculate
			(params[:alto]*params[:ancho]*params[:profundidad]*params[:peso]*params[:valor]/Usuario.find)+
		rescue
			p 'no puedo calcular bien en esta merda'
	end

end