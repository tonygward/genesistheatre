$(document).ready(function() {
    $.get({
        url: "../../shared/footer.html",
        cache: false
    }).then(function(data) {
        $("#footer").html(data);
    });
});