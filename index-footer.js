$(document).ready(function() {
    $.get({
        url: "layout/shared/footer.html",
        cache: false
    }).then(function(data) {
        $("#footer").html(data);
    });
});