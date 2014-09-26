# Load the Rails application.
require File.expand_path('../application', __FILE__)
Hermes::Application.configure do 
  config.action_mailer.default :charset => "utf-8"
  config.action_mailer.default :content_type => "text/html"
  config.action_mailer.delivery_method = :smtp
  config.action_mailer.raise_delivery_errors = :true
  config.action_mailer.perform_deliveries = :true
  config.action_mailer.smtp_settings = {
  :address => "smtp.gmail.com",
  :port => 587,
  :domain => "hermes.com",
  :user_name => "no6things",
  :password => "ALEJANDROASDFGH",
  :authentication => "plain",
  :enable_starttls_auto => true
  }
	
end
# Initialize the Rails application.
Rails.application.initialize!
