$(document).ready(function() {
    $.get({
        url: "layout/menu-index.html",
        cache: false
    }).then(function(data) {
        $("#menu").html(data);
    });
});