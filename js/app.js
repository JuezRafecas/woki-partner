let botonForm = document.querySelector('.send');
botonForm.addEventListener('click', SubForm());
function SubForm (){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/19231/',
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