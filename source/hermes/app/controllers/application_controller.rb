class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  #protect_from_forgery with: :exception
  before_filter :cors_preflight_check
 	private

  	def route_options
  		puts 'huehuehue///////////////////////////////////////////////////////////////////////////'
  		cors_preflight_check
  	end


  	def cors_preflight_check
  		if request.method == :options
		    headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
			headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, PATCH, GET, OPTIONS, HEAD'
			headers['Access-Control-Request-Method'] = '*'
			headers['Access-Control-Allow-Headers'] = '*, Origin, X-Requested-With, X-Prototype-Version,X-CSRF-Token, enterprise-token, Content-Type, Accept, Authorization'
			headers['Access-Control-Allow-Credentials'] = 'true'
			headers['Access-Control-Expose-Headers'] = 'x-json'
  		end
	end

end
