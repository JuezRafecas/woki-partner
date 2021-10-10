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