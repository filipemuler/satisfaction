<?xml version="1.0" encoding="UTF-8" ?>
<jsp:root xmlns:jsp="http://java.sun.com/JSP/Page" version="2.0"
	xmlns:c="http://java.sun.com/jsp/jstl/core"
	xmlns:h="urn:jsptagdir:/WEB-INF/tags">
	<jsp:directive.page language="java"
		contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" />

	<style>
	.form-signin {
		max-width: 330px;
		padding: 15px;
		margin: 0 auto;
	}
	</style>

	<h:main>
		<form class="form-signin" action="${app}/j_spring_security_check" method="post">
			<h3 class="form-signin-heading">Entrar</h3>
			<div class="form-group">
				<input type="text" class="form-control" placeholder="Email" autofocus="" name="j_username"/>
			</div>
			<div class="form-group">
				<input type="password" class="form-control" placeholder="Senha" name="j_password"/>
			</div>
			<button class="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>
		</form>
	</h:main>

</jsp:root>