function OpeBasicas()
{
    var Numero1 = 0;
    var Numero2 = 0;
    var suma = 0;
    var resta = 0;
    var multi = 0;
    var divi = 0;
    Numero1 = parseInt (prompt ("Ingrese el primer valor:"));
    Numero2 = parseInt (prompt ("Ingrese el segundo valor"));
    suma = Numero1 + Numero2;
    resta = Numero1 - Numero2;
    multi = Numero1 * Numero2;
    divi = Numero1 / Numero2;

    alert ("La suma de los valores es " + suma + " La resta de los valores es " + resta + " la divicion de los valores es " + divi + " la multiplicacion de los valores es " + multi);
}

function NumeroMay()
{
    var Num1 = 0;
    var Num2 = 0;
    Num1 = parseInt (prompt ("Ingrese el primer valor a ser comparado"));
    Num2 = parseInt (prompt ("Ingrese el segundo valor a ser comparado"));

    if(Num1 > Num2)
    {
        alert ("Este es el numero mayor " + Num1);
    }
    else if(Num1 < Num2)
    {
        alert ("El numero mayor es " + Num2);
    }
    else
    {
        alert ("Los numeros son iguales");
    }
}

function NumeroMen()
{
    var n1 = 0;
    var n2 = 0;
    var n3 = 0;
    n1 = parseInt (prompt ("Ingrese el primer valor a ser comparado"));
    n2 = parseInt (prompt ("Ingrese el segundo valor a ser comparado"));
    n3 = parseInt (prompt ("Ingrese el tercer valor a ser comparado"));
    if (n1 < n2 && n1 < n3)
    {
        alert ("El numero menor es " + n1);
    }
    else if (n2 < n1 && n2 < n3)
    {
        alert ("El numero menor es " + n2);
    }
    else if (n3 < n2 && n3 < n1)
    {
        alert ("El numero menor es " + n3);
    }
    else 
    {
        alert ("Los numeros son iguales");
    }
}

function NumeroParImp()
{   
    var numero = 0;
    numero = parseInt (prompt ("Ingrese el numero a ser calculado"));
    if((numero % 2) == 0)
    {
        alert ("El numero ingresado es par");
    }
    else
    {
        alert ("El numero ingresado es impar")
    }
}

function AlCuadrado()
{
    var Nm1 = 0;
    var Nm2 = 0;
    Nm1 = parent (prompt ("Ingrese el numero a calcular"));
    Nm2 = Nm1 * Nm1;
    alert ("El resultado del numero ingresado al cuadrado es " + Nm2);
}

function AreaTriangulo()
{
    var base = 0;
    var altura = 0;
    var area = 0;
    base = parseInt (prompt ("Ingrese la base del triangulo a calcular"));
    altura = parseInt (prompt ("Ingrese la altura del triangulo a calcular"));
    area = (base * altura)/2;
    alert("El area del triangulo es: " + area);
}

function MetrosaCentimetros()
{
    var metros = 0;
    var centimetros = 100;
    metros = parseFloat (prompt ("Ingrese el valor en metros para ser mostrado en centimetros"));
    centimetros = metros*centimetros/1
    alert ("El valor en centimetros es " + centimetros);
}

function DeterminarEdad()
{
    var edad = 0;
    var año = 0;
    edad = parseInt (prompt ("Ingrese la edad a calcular"));
    año = 2022 - edad;
    alert ("El año de nacimiento es " + año);
}

function DeterminarCap()
{
    var años = 0;
    var meses = 12;
    var intereses = 2.0;
    var capital = 0;
    var r1 = 0;
    var r2 = 0;
    var r3 = 0;
    capital = parseInt (prompt ("Ingrese el capital a ser calculado"));
    años = parseInt (prompt ("Ingrese el numero de años a calcular"));
    r1 = (años * meses);
    r2 = (capital * intereses)/100;
    r3 = (r2 + capital) * r1;
    alert ("Las ganancias por meses serian " + r2 + " y el total de las ganancias mas el capital es " + r3);
}

function Promedio()
{
    var Nota1 = 0;
    var Nota2 = 0;
    var Nota3 = 0;
    var Nota4 = 0;
    var Nota5 = 0;
    var promedio = 0;
    Nota1 = parseFloat (prompt ("Ingrese la primer clificacion"));
    Nota2 = parseFloat (prompt ("Ingrese la segunda clificacion"));
    Nota3 = parseFloat (prompt ("Ingrese la tercer clificacion"));
    Nota4 = parseFloat (prompt ("Ingrese la cuarta clificacion"));
    Nota5 = parseFloat (prompt ("Ingrese la quinta clificacion"));
    promedio = (Nota1 + Nota2 + Nota3 + Nota4 + Nota5)/ 5;
   if(promedio <=29)
    {
        alert ("El promedio del estudiante es " + promedio + " Por lo tanto el estudiante perdio");
    }
    else if (promedio =>30)
    {
        alert ("El promedio del estudiante es " + promedio + " Por lo tanto el estudiante paso");
    }
    else 
    {
        alert ("No ha ingresado ninguna nota");
    }
}

function VentaFruta()
{
    var NKilos = 1;
    var descuento1 = 90;
    var descuento2 = 85;
    var descuento3 = 80;
    var total = 0;
    NKilos = parseInt (prompt ("Ingresa el numero de kilos a comprar "));
    
    if(NKilos <= 2)
    {
        total = NKilos * 4500;
        alert ("El valor a cancelar es " + total);
    } 
    else if (NKilos <=5)
    {
        total = (NKilos * 4500)*descuento1/100;
        alert ("El valor a cancelar es " + total)
    }
    else if (NKilos <= 10)
    {
        total = (NKilos * 4500)*descuento2/100;
        alert ("El valor a cancelar es " + total);
    }
    else if (NKilos > 10)
    {
        total = (NKilos * 4500)*descuento3/100;
        alert ("El valor a cancelar es " + total);
    }
    else 
    {
        alert ("No a ingresado ningun valor");
    }

 
}
