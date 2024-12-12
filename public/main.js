//Service worker
if('serviceWorker' in navigator){
    console.log('puedes usar los service worker del navegador');

    navigator.serviceWorker.register('./sw.js')
                            .then(res => console.log('serviceWorker cargado correctamente', res))
                            .catch(res => console.log('serviceWorker no se ah podido registrar', err))
}else{
    console.log('No puedes usar los serviceWprker del navegador')
}


//scroll avanzado
$(document).ready(function(){
    //console.log("Hola Mundo");
    $("#menu a").click(function(e){
        //cancela el evento si es cancelable
        e.preventDefault();
        //animate es un metodo de instancia crea una nueva animación
        $("html, body").animate({
            //establece el numero de pixeles que el contenido de un elemento ha sido desplazado
            scrollTop: $($(this).attr('href')).offset().top
        });
        return false;
    });
});

