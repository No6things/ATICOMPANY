class EmpresasController < ApplicationController
	before_filter :check_session

	def show
		begin
			@id_enterprise=params[:id].to_i
			@empresa = Empresa.find(@id_enterprise)				
			@paquetes = AgenciaPaquete.where(agencia: Agencia.where("empresa_id = ?",@id_enterprise)).order(:paquete_id,:fecha_arribo).limit(5)
		rescue Exception => e
			redirect_to root_url			
		end
	end

	def update
		begin						
			Empresa.update(params[:id].to_i, constante_tarifa: params[:constante_tarifa].to_f,porcentaje_tarifa: params[:porcentaje_tarifa].to_f)
			render json: {err_mssg: "", success_mssg: "Actualizacion realizada con exito"}, status: 201
		rescue Exception => e
			render json: {err_mssg: "", success_mssg: "En estos momentos nos es imposible atender tu solicitud"}, status: 500
		end
	end

	def get_page
		begin						
			i = request.headers["enterprise-token"].to_i
			if i.nil?
				raise "Non Enterprise Token given (invalid Access)"
			end

			s = "+"
			if !params[:sense].nil?
				s = params[:sense]
			end

			p = 0			
			if !params[:page].nil?
				p = params[:page].to_i + (s == "+" ? 1 : ( params[:page].to_i > 0 ? -1 : 0))
			end
			
			t = Empresa.where(empresa_id: i).order(:nombre).limit(5).offset(5*p)

			if t.length == 0
				p = params[:page].to_i				
			end

			render json: {err_mssg: "", success_mssg: "Rendered page#{p}", page: t.as_json, current_page: p.to_s}, status: 200
		rescue Exception => e
			render json: {err_mssg: "Pages could not be retrieved", success_mssg: ""}, status: 400
		end
	end

	def check_session		
		begin
			if 	session[:id_usuario_actual].nil?
				raise "ACCESS DENIED"
			end

			u = Usuario.find(session[:id_usuario_actual])
			
			if u.tipo_usuario.abreviacion == "A"
				@usuario=u
			else
				raise "ACCESS DENIED"
			end
		rescue Exception => e
			redirect_to root_url
		end		
	end
end
