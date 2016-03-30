
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

$('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
    var url = $(e.target).data('whatever');
    var id = "#" + e.target.href.split("#")[1];
    $.ajax({
        url: url
        }).done(function(data) {
            $(id).html(data);
        });
})


