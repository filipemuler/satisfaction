<?xml version="1.0" encoding="UTF-8" ?>
<jsp:root xmlns:jsp="http://java.sun.com/JSP/Page" version="2.0"
	xmlns:c="http://java.sun.com/jsp/jstl/core"
	xmlns:fmt="http://java.sun.com/jsp/jstl/fmt">
	<jsp:output doctype-root-element="HTML" doctype-system="about:legacy-compat" />

    <jsp:directive.attribute name="action" required="true" type="java.lang.String"/>
    <jsp:directive.attribute name="label" required="true" type="java.lang.String"/>

    <!-- Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">

                <form action="${action}" method="post">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button>
                        <h4 class="modal-title" id="myModalLabel">${label}</h4>
                    </div>
                    <div class="modal-body">
						<!-- form -->
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
                        <button type="submit" class="btn btn-primary">Salvar</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
    
	<script>
		$('#myModal').on('show.bs.modal', function (e) {
			var button = $(e.relatedTarget)
			var recipient = button.data('whatever')
			$.ajax({
				url: "${app}/" + recipient
				}).done(function(data) {
					$('div.modal-body').html(data);
				});
			})
	</script>
</jsp:root>