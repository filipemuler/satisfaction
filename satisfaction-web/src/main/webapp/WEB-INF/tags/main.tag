<?xml version="1.0" encoding="UTF-8" ?>
<jsp:root xmlns:jsp="http://java.sun.com/JSP/Page" version="2.0"
	xmlns:c="http://java.sun.com/jsp/jstl/core"
	xmlns:fmt="http://java.sun.com/jsp/jstl/fmt">
	<jsp:output doctype-root-element="HTML"
		doctype-system="about:legacy-compat" />

	<!-- CSS -->
	<link rel="stylesheet" href="${app}/bootstrap/css/bootstrap.css" type="text/css" />
	<link rel="stylesheet" href="${app}/bootstrap/css/bootstrap-theme.css" type="text/css" />
	<link rel="stylesheet" href="${app}/lou-multi-select/css/multi-select.css" type="text/css"/>
	<link rel="stylesheet" href="${app}/css/mbr.css" type="text/css"/>

	<!-- JAVASCRIPTS -->
	<script type="text/javascript" src="${app}/jquery/jquery-1.11.3.min.js"><!-- nada --></script>
	<script type="text/javascript" src="${app}/jquery/jquery-1.11.3.min.map"><!-- nada --></script>
	<script type="text/javascript" src="${app}/bootstrap/js/bootstrap.js"><!-- nada --></script>
	<script type="text/javascript" src="${app}/lou-multi-select/js/jquery.multi-select.js"><!-- nada --></script>


		<style>
			body { padding-top: 70px; }
			.conteudo {padding-top: 70px;}
		</style>

		<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
			<div class="container-fluid">
				<div>
					<ul class="nav navbar-nav navbar-right">
						<li><a class="nav-item nav-link" href="#">Dashboard</a></li>
						<li><a class="nav-item nav-link" href="#">Settings</a></li>
						<li><a class="nav-item nav-link" href="#">Profile</a></li>
						<li>
							<span class="glyphicon glyphicon-log-out" aria-hidden="true"></span>
							<a class="nav-item nav-link" href="${app}/logout">Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>

		<div class="container-fluid">
			<div class="row">
				<div class="col-md-2">
					<ul class="nav nav-pills nav-stacked">
						<li class="active"><a href="${app}/">Dashboard</a></li>
						<li><a href="${app}/movimentacao/form">Movimentações</a></li>
						<p>Cadastros</p>
						<li><a href="${app}/conta/form">Contas</a></li>
                        <li><a href="${app}/filial/list">Filial</a></li>
                        <li><a href="${app}/funcionario/list">Funcionario</a></li>
                        <li><a href="${app}/usuario/list">Usuario</a></li>
                        <li><a href="${app}/permissao/list">Permissão</a></li>
						<!--
						<li role="presentation" class="dropdown">
						    <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
						        Cadastros <span class="caret"/>
						    </a>
						    <ul class="dropdown-menu">
						        <li><a href="${app}/conta/form">Contas</a></li>
                            	<li><a href="${app}/filial/list">Filial</a></li>
                            	<li><a href="${app}/funcionario/list">Funcionario</a></li>
                            	<li><a href="${app}/usuario/list">Usuario</a></li>
                            	<li><a href="${app}/permissao/list">Permissão</a></li>
						    </ul>
						</li>
						<li role="button" >
                            <a data-toggle="collapse" href="#cadastros" role="button" aria-expanded="false" aria-controls="cadastros">
                                Cadastros
                            </a>
                        </li>
                        <div class="collapse" id="cadastros">
                            <ul class="nav nav-pills nav-stacked">
                                <li><a href="${app}/conta/form">Contas</a></li>
                                <li><a href="${app}/filial/list">Filial</a></li>
                                <li><a href="${app}/funcionario/list">Funcionario</a></li>
                                <li><a href="${app}/usuario/list">Usuario</a></li>
                                <li><a href="${app}/permissao/list">Permissão</a></li>
                            </ul>
                        </div>
						-->



					</ul>
				</div>
				<div class="col-md-10">
					<div class="well well-sm clearfix">
					<img alt="Brand" src="${app}/imgs/mbr2.png" style="width:70px"/>
						<div class="pull-right">
							<input type="text" class="input-sm" placeholder="Search"/>
							<button type="button" class="btn btn-sm btn-default ">button</button>
						</div>
					</div>
					<div class="row">
						<div class="col-md-8">
						    <jsp:doBody />
						</div>
						<div class="col-md-4">
							<div class="panel panel-default">
								<div class="panel-heading">Faturamento</div>
								<div class="panel-body">
									Panel content
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

</jsp:root>