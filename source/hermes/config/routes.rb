Rails.application.routes.draw do

 
#Declaracion de recursos
resources :empresas
resources :usuarios
resources :agencias
resources :paquetes
resources :agencia_paquetes

root "home#index"
post "/login" => "home#login"
get  "/logout" => "home#logout"
post "/register" => "register#register_user"
post "/calculator" => "calculator#calculate"
post  "/create" => "package#create"
get "/admin" => "admin#index"
post "/enterprise" => "home#enterprise"
get "/pager_transactions" => "agencia_paquetes#get_page"
post "/retrieve" => "password#retrieve"
get "/retrieve" => "password#retrieve"
get "/secret" => "password#index"
post "/secret" => "password#secret"
post "/update" => "password#update"


=begin

rake routes
~~~~~~~~~~~ 
             Prefix Verb   URI Pattern                          Controller#Action
            empresas GET    /empresas(.:format)                  empresas#index
                     POST   /empresas(.:format)                  empresas#create
         new_empresa GET    /empresas/new(.:format)              empresas#new
        edit_empresa GET    /empresas/:id/edit(.:format)         empresas#edit
             empresa GET    /empresas/:id(.:format)              empresas#show
                     PATCH  /empresas/:id(.:format)              empresas#update
                     PUT    /empresas/:id(.:format)              empresas#update
                     DELETE /empresas/:id(.:format)              empresas#destroy
            usuarios GET    /usuarios(.:format)                  usuarios#index
                     POST   /usuarios(.:format)                  usuarios#create
         new_usuario GET    /usuarios/new(.:format)              usuarios#new
        edit_usuario GET    /usuarios/:id/edit(.:format)         usuarios#edit
             usuario GET    /usuarios/:id(.:format)              usuarios#show
                     PATCH  /usuarios/:id(.:format)              usuarios#update
                     PUT    /usuarios/:id(.:format)              usuarios#update
                     DELETE /usuarios/:id(.:format)              usuarios#destroy
            agencias GET    /agencias(.:format)                  agencias#index
                     POST   /agencias(.:format)                  agencias#create
         new_agencia GET    /agencias/new(.:format)              agencias#new
        edit_agencia GET    /agencias/:id/edit(.:format)         agencias#edit
             agencia GET    /agencias/:id(.:format)              agencias#show
                     PATCH  /agencias/:id(.:format)              agencias#update
                     PUT    /agencias/:id(.:format)              agencias#update
                     DELETE /agencias/:id(.:format)              agencias#destroy
            paquetes GET    /paquetes(.:format)                  paquetes#index
                     POST   /paquetes(.:format)                  paquetes#create
         new_paquete GET    /paquetes/new(.:format)              paquetes#new
        edit_paquete GET    /paquetes/:id/edit(.:format)         paquetes#edit
             paquete GET    /paquetes/:id(.:format)              paquetes#show
                     PATCH  /paquetes/:id(.:format)              paquetes#update
                     PUT    /paquetes/:id(.:format)              paquetes#update
                     DELETE /paquetes/:id(.:format)              paquetes#destroy
    agencia_paquetes GET    /agencia_paquetes(.:format)          agencia_paquetes#index
                     POST   /agencia_paquetes(.:format)          agencia_paquetes#create
 new_agencia_paquete GET    /agencia_paquetes/new(.:format)      agencia_paquetes#new
edit_agencia_paquete GET    /agencia_paquetes/:id/edit(.:format) agencia_paquetes#edit
     agencia_paquete GET    /agencia_paquetes/:id(.:format)      agencia_paquetes#show
                     PATCH  /agencia_paquetes/:id(.:format)      agencia_paquetes#update
                     PUT    /agencia_paquetes/:id(.:format)      agencia_paquetes#update
                     DELETE /agencia_paquetes/:id(.:format)      agencia_paquetes#destroy
                root GET    /                                    home#index
               login POST   /login(.:format)                     home#login
              logout GET    /logout(.:format)                    home#logout
            register POST   /register(.:format)                  register#register_user
                     GET    /paquete(.:format)                   package#create
               admin GET    /admin(.:format)                     admin#index
=end
