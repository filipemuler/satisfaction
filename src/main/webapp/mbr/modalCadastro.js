$( document ).ready(function() {
	$('#myModal').on('show.bs.modal', function (e) {
	    var button = $(e.relatedTarget)
	    var recipient = button.data('whatever')
	    $.ajax({
	        url: $('#applicationContext').val() + "/" + recipient
	        }).done(function(data) {
	            $('div.modal-body').html(data);
	            $('#my-select').select2();
	//            $('#my-select').multiSelect();
	        });
	})
	
	$('#botaoModal').click(function(){
		$.ajax({
	        url: $(this).data('whatever'),
	        data : $('#modalForm').serialize()
	        }).done(function(data) {
	            $('#' + $('#tela').val()).html(data);
	            $('#myModal').modal('hide')
	        });
		
	});
});