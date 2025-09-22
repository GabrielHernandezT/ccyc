function gen() {
    var nombre = document.getElementById("nombre").value;
    var fecha1 = document.getElementById("fecha1").value;
    var fecha2 = document.getElementById("fecha2").value;
    var hora1 = document.getElementById("hora1").value;
    var comu = document.getElementById("comu").value;
    var CCYC1 = document.getElementById("CCYC1").value;
    var CCYC2 = document.getElementById("CCYC2").value;
    var CCYC3 = document.getElementById("CCYC3").value;
    var terreno = document.getElementById("terreno").value;
    var motivo = document.getElementById("motivo").value;
    var tipo = document.getElementById("tipo").value;
    var hora2 = document.getElementById("hora2").value;
    var hora3 = document.getElementById("hora3").value;
    var hora4 = document.getElementById("hora4").value;
    var hora5 = document.getElementById("hora5").value;
    var trafico1 = document.getElementById("trafico1").value;
    var descripcion = document.getElementById("descripcion").value;
    var solucion = document.getElementById("solucion").value;
    var repuestos = document.getElementById("repuestos").value;
    var corre = document.getElementById("corre").value;
    var tecnicos = document.getElementById("tecnicos").value;
    var resultado = document.getElementById("resultado").value;
    
    
    document.getElementById("resultado").innerHTML = "• Falla(descripcion de falla): " + nombre + "<br/>" + "<br/>"; 
    document.getElementById("resultado").innerHTML +="• Fecha falla: " + fecha1 + "<br/>" + "<br/>";
    document.getElementById("resultado").innerHTML +="• Fecha notificacion de falla: " + fecha2 + "<br/>" + "<br/>"; 
    document.getElementById("resultado").innerHTML +="• Hora notificacion de falla: " + hora1 + "<br/>" + "<br/>"; 
    document.getElementById("resultado").innerHTML +="• Notificado por CCYC: " + CCYC1 + "<br/>" + "<br/>";
    document.getElementById("resultado").innerHTML += "• Atentido por parte ENYSE: " + comu + "<br/>" + "<br/>"; 
    document.getElementById("resultado").innerHTML +="• Hora de salida equipo mtto a terreno: " + terreno + "<br/>" + "<br/>";
    document.getElementById("resultado").innerHTML +="• Hora de comienzo trabajos: " + hora2 + "<br/>" + "<br/>"; 
    document.getElementById("resultado").innerHTML += "• Hora de paro de labores(en caso de ocurrir): " + hora3 + "<br/>" + "<br/>"; 
    document.getElementById("resultado").innerHTML += "• Hora inicio labores(en caso de haber ido a otra falla y despues haber regresado): " + hora4 + "<br/>" + "<br/>";
    document.getElementById("resultado").innerHTML += "• Motivo del paro de labores: " + motivo + "<br/>" + "<br/>";
    document.getElementById("resultado").innerHTML +="• Hora de prueba con controlador de trafico: " + trafico1 + "<br/>" + "<br/>";
    document.getElementById("resultado").innerHTML +="• Hora normalización falla (fin trabajos): " + hora5 + "<br/>" + "<br/>"; 
    document.getElementById("resultado").innerHTML += "• Controlador de tráfico recibe trabajo terminado: " + CCYC2 + "<br/>" + "</br>"; 
    document.getElementById("resultado").innerHTML += "• Hora entrega de falla a CCYC y a quien se le entrega: " + CCYC3 + "<br/>" + "</br>"; 
    document.getElementById("resultado").innerHTML +="• Tipo de falla ej: Averia sistema o daño terceros: " + tipo + "<br/>" + "<br/>";
    document.getElementById("resultado").innerHTML +="• Descripcion del suceso: " + descripcion + "<br/>" + "<br/>";
    document.getElementById("resultado").innerHTML +="• Solucion adoptada: " + solucion + "<br/>" + "<br/>";
    document.getElementById("resultado").innerHTML +="• Repuestos utilizados: " + repuestos + "<br/>" + "<br/>";
    document.getElementById("resultado").innerHTML +="• Tecnicos que resuelven: " + tecnicos + "<br/>" + "<br/>";
    document.getElementById("resultado").innerHTML +="• Correlativo falla EFE: " + corre;
    
}

function copiar() {
    var text = document.getElementById("resultado").innerHTML;
    var text2 = text.replaceAll("<br>", "\n");
    navigator.clipboard.writeText(text2);
    alert("Parte copiado al portapapeles.")




}




function Clean() {
    document.getElementById("nombre").value = "";
    document.getElementById("fecha1").value = "";
    document.getElementById("fecha2").value = "";
    document.getElementById("hora1").value = "";
    document.getElementById("comu").value = "";
    document.getElementById("CCYC1").value = "";
    document.getElementById("CCYC2").value = "";
    document.getElementById("CCYC3").value = "";
    document.getElementById("terreno").value = "";
    document.getElementById("motivo").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("hora2").value = "";
    document.getElementById("hora3").value = "";
    document.getElementById("hora4").value = "";
    document.getElementById("hora5").value = "";
    document.getElementById("trafico1").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("solucion").value = "";
    document.getElementById("repuestos").value = "";
    document.getElementById("corre").value = "";
    document.getElementById("tecnicos").value = "";
    document.getElementById("resultado").innerHTML = "";
}

