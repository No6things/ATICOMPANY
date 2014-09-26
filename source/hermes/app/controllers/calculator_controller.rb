class PackageController < ApplicationController
	def calculate
		begin
			i = request.headers["enterprise-token"].to_i
			e = Empresa.find(i)
			costo = ((params[:alto].to_f*params[:ancho].to_f*params[:profundidad].to_f*params[:peso].to_f)/e.constante_tarifa)+((params[:valor].to_f*e.porcentaje_tarifa)/100)			
			render json: {err_mssg: "", success_msg: "Calculation Succeded", costo: costo}, status: 200
		rescue Exception => e
			render json: {err_mssg: "Mistakes have being made - Motivo -"+e.messages, success_msg:""}, status: 400
		end
	end
end