class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  #protect_from_forgery with: :exception
  before_filter :cors_preflight_check

  	def route_options
  		cors_preflight_check
  		render nothing: true
  	end


  	def cors_preflight_check

  		if request.headers["HTTP_ORIGIN"]     
  			puts 'hohohohohoh///////////////////////////////////////////////////////////////////////////'
		    headers['Access-Control-Allow-Origin'] = 'http://localhost:3001'
			headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, PATCH, GET, OPTIONS, HEAD'
			headers['Access-Control-Request-Method'] = '*'
			headers['Access-Control-Allow-Headers'] = '*, Origin, X-Requested-With, X-Prototype-Version,X-CSRF-Token, enterprise-token, Content-Type, Accept, Authorization'
			headers['Access-Control-Allow-Credentials'] = 'true'
			headers['Access-Control-Expose-Headers'] = 'x-json'

  		end
	end

end
