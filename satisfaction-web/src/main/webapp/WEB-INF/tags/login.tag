<?xml version="1.0" encoding="UTF-8" ?>
<jsp:root xmlns:jsp="http://java.sun.com/JSP/Page" version="2.0"
	xmlns:c="http://java.sun.com/jsp/jstl/core">
	<jsp:output doctype-root-element="HTML"
		doctype-system="about:legacy-compat" />

	<!-- CSS -->
	<link rel="stylesheet" href="${app}/bootstrap/css/bootstrap.css" type="text/css" />
	<link rel="stylesheet" href="${app}/bootstrap/css/bootstrap-theme.css" type="text/css" />

	<!-- JAVASCRIPTS -->
	<script type="text/javascript" src="${app}/bootstrap/js/bootstrap.js"><!-- nada --></script>

	<div class="container">
		<img src="${app}/imgs/mbr.png" class="img-rounded" style="padding-bottom:9px"/>
		<jsp:doBody />
	</div>
</jsp:root>