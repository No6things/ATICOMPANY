class AgenciaController < ApplicationController	
	def listar_agencia
			a = Agencia.all
			render json: {
					err_mssg: "",
					success_mssg: "OK",
					data: a.as_json
				},
				status: :ok
		rescue Exception => e
			render json: {
				err_mssg: "Error durante la busqueda debido a : "+e.message,
				success_mssg: ""
			},
			status: :bad_request
	end
end