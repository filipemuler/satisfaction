
$('#myModal').on('show.bs.modal', function (e) {
    var button = $(e.relatedTarget)
    var recipient = button.data('whatever')
    $.ajax({
        url: $('#applicationContext').val() + "/" + recipient
        }).done(function(data) {
            $('div.modal-body').html(data);
            $('#my-select').multiSelect();
        });
})