<?xml version="1.0" encoding="UTF-8" ?>
<jsp:root xmlns:jsp="http://java.sun.com/JSP/Page" version="2.0"
	xmlns:c="http://java.sun.com/jsp/jstl/core">
	<jsp:output doctype-root-element="HTML"
		doctype-system="about:legacy-compat" />

	<!-- CSS -->
	<link rel="stylesheet" href="${app}/bootstrap/css/bootstrap.css" type="text/css" />
	<link rel="stylesheet" href="${app}/bootstrap/css/bootstrap-theme.css" type="text/css" />

	<!-- JAVASCRIPTS -->
	<script type="text/javascript" src="${app}/jquery/jquery-1.11.3.min.js"><!-- nada --></script>
	<script type="text/javascript" src="${app}/jquery/jquery-1.11.3.min.map"><!-- nada --></script>
	<script type="text/javascript" src="${app}/bootstrap/js/bootstrap.js"><!-- nada --></script>

	
	<div class="container">
		<img alt="Brand" src="${app}/imgs/mbr.png" />
		<nav class="navbar navbar-default">
		  <div class="container-fluid">
		    <!-- Brand and toggle get grouped for better mobile display -->
		    <div class="navbar-header">
		      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
		        <span class="sr-only">Toggle navigation</span>
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
		      </button>
		      <a class="navbar-brand" href="#"><span class="glyphicon glyphicon-home" aria-hidden="true"></span></a>
		    </div>
		
		    <!-- Collect the nav links, forms, and other content for toggling -->
		    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      <ul class="nav navbar-nav">
		        <li class="active"><a href="#">Acessos <span class="sr-only">(current)</span></a></li>
		        <li><a href="#">Contas</a></li>
		        <li><a href="#">Lancamentos</a></li>
		        <li><a href="#">Relatorios</a></li>
                <li class="dropdown">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Cadastro <span class="caret"></span></a>
				  	<ul class="dropdown-menu">
				    	<li><a href="#">Funcionário</a></li>
				    	<li><a href="#">Usuário</a></li>
<!-- 				    	<li><a href="#">Something else here</a></li> -->
<!-- 				    	<li role="separator" class="divider"></li> -->
<!-- 				    	<li><a href="#">Separated link</a></li> -->
<!-- 				    	<li role="separator" class="divider"></li> -->
<!-- 				    	<li><a href="#">One more separated link</a></li> -->
				  	</ul>
				</li>
		      </ul>

		      <ul class="nav navbar-nav navbar-right">
		        <li><a href="#"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></a></li>
		        <li><a href="#"><span class="glyphicon glyphicon-bell" aria-hidden="true"></span></a></li>
		        <li><a href="#"><span class="glyphicon glyphicon-log-out" aria-hidden="true"></span></a></li>
		      </ul>
		    </div><!-- /.navbar-collapse -->
		  </div><!-- /.container-fluid -->
		</nav>
		
		
<!-- 		<div class="page-header"> -->
<!--   			<h3>Alertas</h3> -->
<!-- 		</div> -->
		
		<jsp:doBody />
		
	</div>
	

</jsp:root>