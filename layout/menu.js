$(document).ready(function() {
    $.get({
        url: "../../layout/menu.html",
        cache: false
    }).then(function(data) {
        $("#menu").html(data);
    });
});