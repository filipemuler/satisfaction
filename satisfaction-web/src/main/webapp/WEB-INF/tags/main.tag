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
	<link rel="stylesheet" href="${app}/mbr/mbr.css" type="text/css"/>
	<link rel="stylesheet" href="${app}/select2-4.0.2/dist/css/select2.min.css" type="text/css"/>

	<!-- JAVASCRIPTS -->
	<script type="text/javascript" src="${app}/jquery/jquery-1.11.3.min.js"><!-- nada --></script>
	<script type="text/javascript" src="${app}/jquery/jquery-1.11.3.min.map"><!-- nada --></script>
	<script type="text/javascript" src="${app}/bootstrap/js/bootstrap.js"><!-- nada --></script>
	<script type="text/javascript" src="${app}/lou-multi-select/js/jquery.multi-select.js"><!-- nada --></script>
	<script type="text/javascript" src="${app}/select2-4.0.2/dist/js/select2.min.js"><!-- nada --></script>


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
						<li><a class="nav-item nav-link" href="${app}/logout">Logout</a></li>
					</ul>
				</div>
			</div>
		</nav>

		<div class="container-fluid">
			<div class="row">
				<div class="col-md-2">
					<ul class="nav nav-pills nav-stacked" id="myTabs">
						<li class="active"><a href="#dashboard" data-whatever="${app}/dashboard/form" data-toggle="pill">Dashboard</a></li>
						<li><a href="#movimentacao" data-whatever="${app}/movimentacao/form" data-toggle="pill" >Movimentações</a></li>
						<p>Cadastros</p>
						<li><a href="#conta" data-whatever="${app}/conta/form" data-toggle="pill">Contas</a></li>
                        <li><a href="#filial" data-whatever="${app}/filial/list" data-toggle="pill">Filial</a></li>
                        <li><a href="#funcionario" data-whatever="${app}/funcionario/list" data-toggle="pill">Funcionario</a></li>
                        <li><a href="#usuario" data-whatever="${app}/usuario/list" data-toggle="pill">Usuario</a></li>
                        <li><a href="#permissao" data-whatever="${app}/permissao/list" data-toggle="pill">Permissão</a></li>
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
						    <input type="hidden" value="${app}" id="applicationContext"/>
						    <!-- <jsp:doBody /> -->
                            <!-- Tab panes -->
                            <div class="tab-content">
                                <div role="tabpanel" class="tab-pane active" id="dashboard"><!-- dashboard --></div>
                                <div role="tabpanel" class="tab-pane" id="movimentacao"><!-- movimentacao --></div>
                                <div role="tabpanel" class="tab-pane" id="conta"><!-- conta --></div>
                                <div role="tabpanel" class="tab-pane" id="filial"><!-- filial --></div>
                                <div role="tabpanel" class="tab-pane" id="funcionario"><!-- funcionario --></div>
                                <div role="tabpanel" class="tab-pane" id="usuario"><!-- usuario --></div>
                                <div role="tabpanel" class="tab-pane" id="permissao"><!-- permissao --></div>
                            </div>
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

        <script type="text/javascript" src="${app}/mbr/mbr.js"><!-- nada --></script>
</jsp:root>