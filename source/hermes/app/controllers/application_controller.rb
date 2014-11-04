class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  #protect_from_forgery with: :exception
  before_filter :cors_preflight_check
  after_filter :cors_set_access_control_headers

  	def route_options
  		cors_preflight_check
  	end
  	
  	def cors_set_access_control_headers
		response.headers['Access-Control-Allow-Origin'] = '*'
		response.headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, PATCH, GET, OPTIONS'
		response.headers['Access-Control-Request-Method'] = '*'
		response.headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization, X-CSRF-Token, enterprise-token'
	end

  	def cors_preflight_check
  		if request.method == :options
		    request.headers['Access-Control-Allow-Origin'] = '*'
			request.headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, PATCH, GET, OPTIONS'
			request.headers['Access-Control-Request-Method'] = '*'
			request.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, X-Prototype-Version,X-CSRF-Token, enterprise-token, Content-Type, Accept, Authorization'
  		end
	end

end
