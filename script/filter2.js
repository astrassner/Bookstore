$(document).ready(function () {
    $(".quicksearch").keyup(function() {
        var value = $(this).val().toLowerCase();
        console.log(value);
        $(".thisBook").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
})



        