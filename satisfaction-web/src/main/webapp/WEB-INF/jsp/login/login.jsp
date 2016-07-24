<?xml version="1.0" encoding="UTF-8" ?>
<jsp:root xmlns:jsp="http://java.sun.com/JSP/Page" version="2.0"
	xmlns:c="http://java.sun.com/jsp/jstl/core"
	xmlns:h="urn:jsptagdir:/WEB-INF/tags">
	<jsp:directive.page language="java"
		contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" />

	<style>
	.form-signin {
		text-align: center;

	}
	.bla{
		width: 250px;
		height: 300px;
		        max-width: 330px;
                padding: 15px;
                margin: 0 auto;
	}
	.input{
		display: block;
width: 250px;
height: 40px;
margin-bottom: 10px;
border-radius: 10px;
border-width: 1px;
	}
	.botao{
		display: block;
width: 250px;
height: 40px;
border-radius: 10px;
background-color: steelblue;
border-width: 1px;
	}
	</style>

	<h:login>
		<form class="bla" action="${app}/login/login" method="post">
			<h3 class="form-signin">Entrar</h3>
            <input type="text" class="form-control input" placeholder="Email" autofocus="" name="username"/>
            <input type="password" class="form-control input" placeholder="Senha" name="password"/>
            <button class="botao" type="submit">Entrar</button>
		</form>
	</h:login>

</jsp:root>
