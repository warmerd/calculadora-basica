function Limpiar(){
    document.getElementById("formulario").reset();
    
    }
    
    function sumar(){
        var a = parseFloat(document.getElementById("num1").value);
        var b = parseFloat(document.getElementById("num2").value);
        var resul= a + b;
        alert("el resulado es "+ resul );
    }
    
    function restar(){
        var a = parseFloat(document.getElementById("num1").value);
        var b = parseFloat(document.getElementById("num2").value);
        var resul= a - b;
        alert("el resulado es "+ resul );
    }
    
    function dividir(){
        var a = parseFloat(document.getElementById("num1").value);
        var b = parseFloat(document.getElementById("num2").value);
        var resul= a / b;
        alert("el resulado es "+ resul );
    }
    
    function multiplicar(){
        var a = parseFloat(document.getElementById("num1").value);
        var b = parseFloat(document.getElementById("num2").value);
        var resul= a * b;
        alert("el resulado es "+ resul );
    }