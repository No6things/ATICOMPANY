class AgenciaPaquetesController < ApplicationController	

	def show
		begin				
			t = AgenciaPaquete.find(params[:id].to_i)
			render json: {err_mssg: "", success_mssg: "Transaction Found", data: t.as_json}, status: 200			
		rescue Exception => e
			render json: {err_mssg: "No Transaction found", success_mssg: ""}, status: 400
		end
	end

	def update
		begin				
			t = AgenciaPaquete.find(params[:id].to_i)
			render json: {err_mssg: "", success_mssg: "Transaction Found", data: t.as_json}, status: 200			
		rescue Exception => e
			render json: {err_mssg: "No Transaction found", success_mssg: ""}, status: 400
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
			
			t = AgenciaPaquete.where(agencia: Agencia.where(empresa_id: i)).order(:paquete_id,:fecha_arribo).limit(5).offset(5*p)

			if t.length == 0
				p = params[:page].to_i				
			end

			render json: {err_mssg: "", success_mssg: "Rendered page#{p}", page: t.as_json, current_page: p.to_s}, status: 200
		rescue Exception => e
			render json: {err_mssg: "Pages could not be retrieved", success_mssg: ""}, status: 400
		end
	end

	def show_by_user
		begin				
			i = request.headers["enterprise-token"].to_i
			e = session[:id_usuario_actual]
			as_sender = AgenciaPaquete.where(agencia: Agencia.where(empresa_id: i)).joins(:paquete).merge(Paquete.where(emisor_id: e.id)).limit(5)
			as_repcipent = AgenciaPaquete.where(agencia: Agencia.where(empresa_id: i)).joins(:paquete).merge(Paquete.where(receptor_id: e.id)).limit(5)
			
			render json: {err_mssg: "", success_mssg: "Transaction Found", data:{ as_sender: as_sender.as_json, as_repcipent: as_repcipent.as_json}}, status: 200
		rescue Exception => e
			render json: {err_mssg: "No Transaction found", success_mssg: ""}, status: 400
		end
	end	
end
