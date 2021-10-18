window.addEventListener('load', function(){
    //Funcionalidad menu hamburguesa
    document.querySelector('#toggle').addEventListener('click',function() {
        this.classList.toggle('active');
        let overlay = document.querySelector('#overlay');
        overlay.classList.toggle('open');
    });
    this.document.querySelector('.funcionalidades-mobile').addEventListener('click', function(){
        document.querySelector('#toggle').classList.remove('active');
        document.querySelector('#overlay').classList.remove('open');
    });
    this.document.querySelector('.register-mobile').addEventListener('click', function(){
        document.querySelector('#toggle').classList.remove('active');
        document.querySelector('#overlay').classList.remove('open');
    });
    //Scroll del header
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


    //Validacion de formulario
    let botonEnviar = this.document.querySelector('.send');
    let inputs = this.document.querySelectorAll('form input:not([type=hidden])');
    let emailRegexp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    inputs.forEach(item => {
        item.addEventListener('input', function(){
            let camposTexto = ['nombre', 'apellido', 'ciudad', 'empresa', 'telefono'];
            if(camposTexto.includes(item.name)){
                if(item.value.length < 3){
                    item.classList.add('error');
                    item.classList.remove('validated');
                } else{
                    item.classList.remove('error');
                    item.classList.add('validated');
                }
            }
            if(item.name == 'email'){
                if(!emailRegexp.test(item.value)){
                    item.classList.add('error');
                    item.classList.remove('validated');
                } else{
                    item.classList.remove('error');
                    item.classList.add('validated');
                }
            }
        })
    });
    botonEnviar.addEventListener('click', async function(e){
        let formulario = document.querySelector('#formulario');
        if(formValid()){
            await subForm();
            formulario.submit();
        }else{
            e.preventDefault();
            let inputs = document.querySelectorAll('form input:not([type=hidden])');
            inputs.forEach(item => {
                if(!item.classList.contains('validated')) item.classList.add('error');
            })
        }
    });
    function formValid(){
        let inputs = Array.from(document.querySelectorAll('form input:not([type=hidden])')).filter((item) => item.classList.contains('validated')).length;
        if(inputs>5) return true;
        return false;
    }
    //Envio de formulario via API
    async function subForm (){
        let data = $("#formulario").serializeArray();
        console.log(data);
        $.ajax({
            url:'https://api.apispreadsheets.com/data/19248/',
            type:'post',
            data: data,
            success: function(){
                console.log('Datos cargados en excel');
            },
            error: function(){
                console.log('Fallo en la carga de datos');
            }
        });
    }
})