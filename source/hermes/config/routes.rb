Rails.application.routes.draw do

root to: "hermes_api#index"

#Acceso permitido a funcionalidades sin restriccion
post "/login" => "general#entrar"
delete "/logout" => "general#salir" 
get "/info" => "general#info"
post "/token" => "general#api_token"
post "/registrar" => "general#registrar"
get "/calcular" => "general#calcular"

# Funcionalidades que requieren acceso con autenticacion previa
post "/usuario/paquete/ver" => "usuario#ver_paquete"
get "/operador/paquete/ver" => "operador#ver_paquete"
get "/usuario/paquete/buscar" => "usuario#buscar_paquete"
get "/operador/paquete/buscar" => "operador#buscar_paquete"
get "/usuario/paquete/listar" => "usuario#listar_paquete"
post "/operador/paquete/crear" => "operador#crear_paquete"
post "/operador/paquete/cambiar_ẹstado" => "operador#cambiar_estado_paquete"
post "/administrador/tarifas/actualizar" => "administrador#actualizar_tarifas"
match '*unmatched_route', :to => 'application#route_options', via: [:options]
#Declaracion de recursos
#resources :empresas
#resources :usuarios
#resources :agencias
#resources :paquetes
#resources :agencia_paquetes

#root to: "home#index"
#post "/login" => "home#login"
#get  "/logout" => "home#logout"
#get "/enterprise_data" => "home#get_enterprise_data"
#post "/register" => "register#register_user"
#post "/calculator" => "calculator#calculate"
#post  "/create" => "package#create"
#get "/admin" => "admin#index"
#post "/enterprise" => "home#enterprise"
#get "/pager_transactions" => "agencia_paquetes#get_page"
#post "/retrieve" => "password#retrieve"
#get "/retrieve" => "password#retrieve"
#get "/secret" => "password#ask"
#post "/secret" => "password#answer"
#get "/update" => "password#new_password"
#post "/update" => "password#update"

end