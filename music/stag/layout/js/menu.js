$(document).ready(function() {
    $.get({
        url: "../../shared/menu.html",
        cache: false
    }).then(function(data) {
        $("#menu").html(data);
    });
});