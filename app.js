

var WordCounterAPP = {
    cantidadLetras:0,
    resultado: "0",
    contar:function(){
        var text = document.getElementById("text").value;
        var wordMap = this.doMagic(text);
        console.log(wordMap);
        for(var key in wordMap){
            var item = $('<li class="list-group-item">'+key+":"+wordMap[key]+'</li>');
            $("#words").append(item);
        }
    }
    ,caracteres:function(evt){
        this.cantidadLetras++;
        //document.getElementById("cantChars").innerHTML = this.cantidadLetras;
        $("#cantChars").text(this.cantidadLetras);
    }
    ,doMagic:function(text){
        var result = {};
        var words = text.split(" ");
        for(var i = 0; i < words.length; i++){
            var aWord = words[i];

            if(result[aWord]){
                result[aWord]++;
            }else{
                result[aWord] = 1;
            }
        }
        return result;
    }
    ,reset:function(){
    	location.reload();
    }
    //CALCULADORA
    //pone los números y símbolos en una lista
    ,agregarNumeros:function(id){
    	this.resultado += id;
    	$("#resultado").text(this.resultado);
    }
    //el string con los números los consideramos una operación matemática con eval();
    ,calculadora:function(){
    	var resultadoFinal = eval(this.resultado);
    	var mostrarResultado = $("#resultadoFinal").text("Resultado: "+resultadoFinal);
    	//var mostrarResultado = $("#resultadoFinal").innerHTML("<button type=\"button\" class=\"btn btn-warning\" id=\"resultadoFinal\"></button>"+resultadoFinal+"</button>");
    }
};

window.APP = WordCounterAPP;