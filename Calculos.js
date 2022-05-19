
function areaRetangulo()
{
    var c=document.getElementById('comprimento'); //le o valor do input comprimento
    var l=document.getElementById('largura');// le o valor do input clargura
    var  Area=c.value*l.value; // calcula a area a partir da conversao para numero do string c e d
    document.getElementById('ResultadoAreaRetangulo').value=Area; //escreve no input ResultadoAreaRetangulo
   //document.write(Area);
    return Area;
}

function areaCirculo()
{
    var raio=document.getElementById('raio');
    var Area=Math.PI*(raio.value);
    document.getElementById('ResAreaCirculo').value=Area;
    return Area;
}

function areaTriangulo()
{
    var c=document.getElementById('base'); 
    var l=document.getElementById('altura');
    var Area=base.value*altura.value/2;
    document.getElementById('ResAreaTriangulo').value=Area;
    return Area;
}
function areaTrapezio()
{
    var B=document.getElementById('baseM'); 
    var b=document.getElementById('basem')
    var h=document.getElementById('alturaT')
    var Area=(B.value+b.value)/2*h.value;
    document.getElementById('ResAreaTrapezio').value=Area;
    return Area;
}
function CalculoHipotenusa()
{
    var c1=document.getElementById('cateto1A'); 
    var c2=document.getElementById('cateto2A');
    var hip=Math.sqrt(c1.value^2 + c2.value^2);
    document.getElementById('ResHipotenusa').value=hip;
    return hip;
}
function CalculoCateto()
{
    var hip=document.getElementById('hipotenusaB'); 
    var c1=document.getElementById('cateto1B')
    var c2=Math.sqrt(hip.value^2 + c1.value^2);
   // document.getElementById('ResCateto').value=c2;
    document.getElementById('ResCateto').value=c2;
    return c2;
}

function calculaAreaRetangulo()
{

}
