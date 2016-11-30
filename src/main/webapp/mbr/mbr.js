$('#myTabs a').click(function (e) {
    e.defaultPrevented
    $(this).tab('show')
    var url = $(e.target).data('whatever');
    var id = "#" + e.target.href.split("#")[1];
    $.ajax({
        url: url
        }).done(function(data) {
            $(id).html(data);
        });
})


