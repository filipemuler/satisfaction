<?xml version="1.0" encoding="UTF-8" ?>
<jsp:root xmlns:jsp="http://java.sun.com/JSP/Page" version="2.0"
	xmlns:c="http://java.sun.com/jsp/jstl/core">
	<jsp:output doctype-root-element="HTML"
		doctype-system="about:legacy-compat" />

	<!-- CSS -->
	<link rel="stylesheet" href="${app}/oldLibs/bootstrap/css/bootstrap.min.css" type="text/css" />
	<link rel="stylesheet" href="${app}/oldLibs/bootstrap/css/bootstrap-theme.min.css" type="text/css" />

	<div class="container">
		<img src="${app}/imgs/mbr.png" class="img-rounded" style="padding-bottom:9px"/>
		<jsp:doBody />
	</div>
</jsp:root>