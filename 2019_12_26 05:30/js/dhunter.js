"use strict"; 
var _enviar = document.getElementById("enviar"); _enviar.addEventListener("click", function(){EnviarUrl();});

function parsear(str)
{
str = str.replace(/ /g,"&#32;").replace(/!/g,"&#33;").replace(/"/g,"&#34;").replace(/%/g,"&#37;").replace(/'/g,"&#39;").replace(/\(/g,"&#40;").replace(/\)/g,"&#41;").replace(/</g,"&#60;").replace(/>/g,"&#62;").replace(/`/g,"&#96;").replace(/a/g,"&#97;").replace(/A/g,"&#65;").replace(/e/g,"&#101;").replace(/E/g,"&#69;").replace(/i/g,"&#105;").replace(/I/g,"&#73;").replace(/o/g,"&#111;").replace(/O/g,"&#79;").replace(/u/g,"&#117;").replace(/U/g,"&#85;").replace(/{/g,"&#123;").replace(/}/g,"&#125;").replace(/‘/g,"&#8216;").replace(/’/g,"&#8217").replace(/‚/g,"&#8218;").replace(/“/g,"&#8220;").replace(/”/g,"&#8221;").replace(/„/g,"&#8222;").replace(/′/g,"&#8242;").replace(/″/g,"&#8244;").replace(/‹/g,"&#8249;").replace(/›/g,"&#8250;").replace(/s/g,"&#115;").replace(/S/g,"&#83;");

return str;
}

function getValues()
{
var domains = document.getElementById("domains").value.split(',');

var dictionaries = document.getElementById("dictionaries").value.split(',');

var domiDict = new Object();
var propiedad = "";

domiDict.nod=domains.length;

   for(var i in domains)
   {
   propiedad = "domain"+i;
   domiDict[propiedad] = domains[i];
   }

domiDict.nd=dictionaries.length;
   for(var i in dictionaries)
   {
   propiedad = "dictionary"+i;
   domiDict[propiedad] = dictionaries[i];
   }


domiDict = JSON.stringify(domiDict);
return domiDict;
}


function EnviarUrl()
{
var respuesta = 0;
var envio = getValues();
var urlPOST = "dhunter.php";
urlPOST += (urlPOST.match(/\?/) == null ? "?" : "&") + (new Date()).getTime();
var xhr = new XMLHttpRequest();

   xhr.onreadystatechange = function()
   {
alert("Cargando");
      if (this.readyState == 4 && this.status == 200)
      {
      respuesta = parsear(xhr.responseText);
      alert(respuesta);
            document.getElementById("Respuesta").innerHTML = respuesta;
      }
   };

xhr.open("POST",urlPOST, true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");


xhr.send(envio);
}
