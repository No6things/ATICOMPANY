class PackageController < ApplicationController
	def calculate
		msg=((params[:alto]*params[:ancho]*params[:profundidad]*params[:peso]*params[:valor]/Empresa.find(1).constante_tarifa)+Empresa.find(1).porcentaje_tarifa).to_s
		render json: {err_mssg: "", success_msg: msg}, status: 200

		rescue
			p '!peluche'
	end

end