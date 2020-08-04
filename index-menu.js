$(document).ready(function() {
    $.get({
        url: "layout/shared/menu.html",
        cache: false
    }).then(function(data) {
        $("#menu").html(data);
    });
});