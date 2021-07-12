/* Smooth que se desplaza desde el menu navegador a las distintas secciones, con vel 800 */

$(document).ready(function(){
    $("a").click(function(event){
        event.preventDefault();

        var gato = this.hash;
        $("html").animate(
        {
            scrollTop: $(gato).offset().top - 86,
        },
        800
        );
    });
});
