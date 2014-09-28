<!DOCTYPE html>
<html class="no-js Newslab" lang="es-VE">
	<head>
	<meta charset="utf-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="empresa" content="1"/>
	<%= csrf_meta_tag %>
	<link rel="stylesheet" type="text/css" href="/assets/normalize.css"/>
	<link rel="stylesheet" type="text/css" href="/assets/foundation.css" />
	<link rel="stylesheet" type="text/css" href="/assets/font-config.css">		
	<link rel="stylesheet" type="text/css" href="/assets/font-awesome.min.css"/>
	<link rel="stylesheet" type="text/css" href="/assets/general.css" />
	<title>Hermes | Home</title>
	</head>

	<body class="colored-body">
	<div class="row">
		<div class="large-12">
			<nav class="top-bar" data-topbar role="navigation"> 
				
				<ul class="title-area"> 
					<li class="name">
            			<h1><a href=""><i class="fa fa-university fa-fw"></i>
            				Hermes</a></h1>
        			</li>

					<li class="toggle-topbar menu-icon">
						<a href="#"><span>Menu</span></a>
					</li> 
				</ul> 
				
				<section class="top-bar-section"> 
				
					<ul class="left"> 
					<li><a  href="#" data-reveal-id="modal_quienes_somos">
							<i class="fa fa-question fa-lg backward-icon"></i>
							&nbsp;Qui&eacute;nes somos&nbsp;
							<i class="fa fa-question fa-lg" ></i>							
						</a>
					</li> 
					</ul>
				</section> 
			</nav>
		</div>	
	</div>
	
  <div class="row extra-padding-row">
    <div class="large-12 columns">
     	<div class="centered-image">
    		<%= image_tag "hermes-logo.png" %>
    	</div>
      <!--<img class="centered-image" src="app/assets/images/hermes-logo.png" alt="">-->
    </div>
  </div>
  <div class="row">
   	<div class="large-12 columns slogan-container">
   		<h4 class="slogan-frace">
				<i class="fa fa-quote-left"></i>
				&nbsp;
  			El servicio de entrega de los dioses
  			&nbsp;
  			<i class="fa fa-quote-right"></i>
  		</h4>
  	</div>    	
  </div>

	

	<div class="row content-container fixture-margintop">	
		<div class="row">
			<div class="large-12 small-12 slogan-container slogan-u columns">
				<h4 class="slogan-frace">
					Introduzca su nueva contrasena
				</h4>
			</div>
		</div>	

	  <div class="modal-header row custom-modal-header slogan-u">
	  	<h4 class="white-text"></h4>
	  </div>
	  
	  <div class="modal-content row">
	  	<form class="update-form" action="/update" method="post">	
	  		<%= token_tag(nil) %>

	  		<div class="row">
	  		    <div class="large-12 small-12 columns">	  		      
	  		    	<input type="password" placeholder="Pregunta secreta" name="pregunta" value="<%=@usuario.pregunta%>"required disabled/>
	  		    	<input type="password" placeholder="Respuesta" name="respuesta" required />
	  		    	<input type="hidden" class="hidden" name="correo_electronico" value="<%=params[:correo_electronico]%>" required />
	  		    </div>
	  		</div>
  	  
  		  	<input type="submit" class="hidden-submit-button" />
  		  	<span class="alert round label">Presione Enter para enviar</span>
	  	</form>	  	
	  </div>
		<div class="row fixture-margintop">
			<div class="small-4 large-4 cool-corner-container columns">
				<div class="agent-image">
					<img src="/assets/agent2.jpg" />
				</div>
				<p class="cool-corner-text">Desde 1990 Hermes, se ha perfilado como uno de los servicios de entrega y recepci&oacute;n de paqueteria m&aacute;s populares a nivel mundial pudiendo ser catalogado hoy en dia como la compañia con la cartera de clientes m&aacute;s diversa antes vista.</p>
			</div>

			<div class="small-2 large-2 small-offset-1 large-offset-1 centered-image-logo columns">
				<div class="row">
				<img class="" src="/assets/circle-hermes-logo.png"/> 	
				</div>
				<div class="row icon-space">
					<a href="https://github.com/No6things/ATICOMPANY" class="white-link" >
						<i class="fa fa-github fa-4x"></i>
					</a>
					<h4 class="white-text">Github</h4>	
				</div>
				<div class="row icon-space">
					<a href="http://www.w3.org/Style/CSS/" class="white-link" >
						<i class="fa fa-css3 fa-4x"></i>
					</a>
					<h4 class="white-text" >CSS 3 Based</h4>
				</div>		
			</div>

			<div class="small-4 large-4 small-offset-1 large-offset-1  cool-corner-container columns">
				<div class="agent-image">
					<img src="/assets/agent1.png" />
				</div>
				<p class="cool-corner-text">Un conjunto de especialistas, capacitados para la busqueda, recepci&oacute;n de paquetes y alamacenamiento seguro de tus paquetes garantizan que seras tratado como un Dios porque si para ti es importante entonces para nosotros tambien lo es.</p>
			</div>
		</div>
	</div>

	<div class="row bottom-container">
		<div class="small-4 large-4 small-offset-4 large-offset-4 columns">
			<a href="#" class="small-4 large-4 button tiny alert column">				
				<i class="fa fa-arrow-up fa-2x"></i>				
			</a>
			<a href="#" class="small-4 large-4 button tiny alert column">				
				<i class="fa fa-envelope fa-2x"></i>				
			</a>
			<a href="#" class="small-4 large-4 button tiny alert column">		
				<i class="fa fa-twitter fa-2x"></i>				
			</a>
		</div>
	</div>


	<script src="/assets/jquery.js"></script>	
	<script src="/assets/modernizr.js"></script>
	<script src="/assets/foundation.min.js"></script>
	<script src="/assets/general.js"></script>
	<script>
		$(document).foundation({
			orbit: {
				animation: 'fade',
				slide_number: false, 
				bullets: false,       			      
      			variable_height: true, 
      			circular:true,
      			timer_speed: 7000, 
      			pause_on_hover: false,   			
				}
			});
	</script>

	</body>
</html>
