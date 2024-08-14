function gen() {
    var nombre = document.getElementById("nombre").value;
    var fecha1 = document.getElementById("fecha1").value;
    var hora1 = document.getElementById("hora1").value;
    var comu = document.getElementById("comu").value;
    var corre = document.getElementById("corre").value;
    var hora2 = document.getElementById("hora2").value;
    var hora3 = document.getElementById("hora3").value;
    var trafico1 = document.getElementById("trafico1").value;
    var CCYC = document.getElementById("ccyc").value;
    var tipo = document.getElementById("tipo").value;
    var descripcion = document.getElementById("descripcion").value;
    var solucion = document.getElementById("solucion").value;
    var repuestos = document.getElementById("repuestos").value;
    var observaciones = document.getElementById("observaciones").value;
    var tecnicos = document.getElementById("tecnicos").value;
    var resultado = document.getElementById("resultado").value;
    
    
    document.getElementById("resultado").innerHTML = "• Nombre incidencia: " + nombre + "<br/>"; 
    document.getElementById("resultado").innerHTML +="• Fecha incidencia: " + fecha1 + "<br/>";
    document.getElementById("resultado").innerHTML +="• Hora incidencia: " + hora1 + "<br/>"; 
    document.getElementById("resultado").innerHTML += "• Comunicado a: " + comu + "<br/>"; 
    document.getElementById("resultado").innerHTML +="• Numero de Correlativo: " + corre + "<br/>" + "<br/>";
    document.getElementById("resultado").innerHTML +="• Hora llegada  del equipo al cruce: " + hora2 + "<br/>"; 
    document.getElementById("resultado").innerHTML += "• Hora de entrega de avería: " + hora3 + "<br/>"; 
    document.getElementById("resultado").innerHTML +="• Nombre a quien se le entrega: " + trafico1 + "<br/>";
    document.getElementById("resultado").innerHTML +="• CCYC: " + CCYC + "<br/>" + "<br/>"; 
    document.getElementById("resultado").innerHTML += "• Tipo de incidencia: " + tipo + "<br/>" + "</br>"; 
    document.getElementById("resultado").innerHTML +="• Descripcion: " + descripcion + "<br/>" + "<br/>";
    document.getElementById("resultado").innerHTML +="• Solucion adoptada: " + solucion + "<br/>" + "<br/>";
    document.getElementById("resultado").innerHTML +="• Repuestos utilizados: " + repuestos + "<br/>" + "<br/>";
    document.getElementById("resultado").innerHTML +="• Observaciones: " + observaciones + "<br/>" + "<br/>";
    document.getElementById("resultado").innerHTML +="• Tecnicos: " + tecnicos;
    
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
    document.getElementById("hora1").value = "";
    document.getElementById("comu").value = "";
    document.getElementById("corre").value = "";
    document.getElementById("hora2").value = "";
    document.getElementById("hora3").value = "";
    document.getElementById("trafico1").value = "";
    document.getElementById("ccyc").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("solucion").value = "";
    document.getElementById("repuestos").value = "";
    document.getElementById("observaciones").value = "";
    document.getElementById("tecnicos").value = "";
    document.getElementById("resultado").innerHTML = "";
}

