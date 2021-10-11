window.addEventListener('load', function(){
    const body = document.querySelector('header');
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll == 0) {
        body.classList.remove(scrollUp);
        return;
    }
    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
    } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
        // up
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
    });
    function SubForm (){
        $.ajax({
            url:'https://api.apispreadsheets.com/data/19248/',
            type:'post',
            data:$("#formulario").serializeArray(),
            success: function(){
                console.log('Datos cargados en excel');
            },
            error: function(){
                console.log('Fallo en la carga de datos');
            }
        });
    }
})