/*
As "chaves" de criptografia que utilizaremos são:
`A letra "e" é convertida para "enter"`
`A letra "i" é convertida para "imes"`
`A letra "a" é convertida para "ai"`
`A letra "o" é convertida para "ober"`
`A letra "u" é convertida para "ufat"`
*/

const txt = document.getElementById("texto");
const div = document.getElementById("resposta")
var array = ""
var valores = []
const criptografar = () =>{
    var msg = txt.value
    array = msg.split("");
    console.log(array)
    array.map(letra =>{
        switch(letra){
            case "a": 
            var x = array.indexOf("a")
            array[x] = "ai"
            case "e": 
            x = array.indexOf("e")
            array[x] = "enter"
            case "i": 
            x = array.indexOf("i")
            array[x] = "imes"
            case "o": 
            x = array.indexOf("o")
            array[x] = "ober"
            case "u": 
            x = array.indexOf("u")
            array[x] = "ufat"
        }
    })
    console.log(array.join(""));
    div.value = array.join("")


}
    
const descriptografar = () =>{
    var x = ""
    var msg = txt.value
    array = msg.split("");
    console.log(array)
    array.forEach(letra =>{
        switch(letra){
            case "a":
                var idx = array.indexOf("a");
                while (idx != -1) {
                valores.push(idx);
                idx = array.indexOf("a", idx + 1);
                }
                valores.map(indice =>{
                    if(array[indice] == "a" && array[indice+1] == "i" ){
                        array[indice] = "a"
                        array[indice+1] = ""
                    }
                    
                })

            case "e":
                var idx = array.indexOf("e");
                while (idx != -1) {
                valores.push(idx);
                idx = array.indexOf("e", idx + 1);
                }
                valores.map(indice =>{
                    if(array[indice] == "e" && array[indice+1] == "n" && array[indice+2] == "t" && array[indice+3] == "e" && array[indice+4] == "r"){
                        array[indice] = "e"
                        array[indice+1] = ""
                        array[indice+2] = ""
                        array[indice+3] = ""
                        array[indice+4] = ""
                    }
                    
                })


            case "i":
                var idx = array.indexOf("i");
                while (idx != -1) {
                valores.push(idx);
                idx = array.indexOf("i", idx + 1);
                }
                valores.map(indice =>{
                    if(array[indice] == "i" && array[indice+1] == "m" && array[indice+2] == "e" && array[indice+3] == "s"){
                        array[indice] = "i"
                        array[indice+1] = ""
                        array[indice+2] = ""
                        array[indice+3] = ""
                    }
                    
                })

            case "o":
                var idx = array.indexOf("o");
                while (idx != -1) {
                valores.push(idx);
                idx = array.indexOf("o", idx + 1);
                }
                valores.map(indice =>{
                    if(array[indice] == "o" && array[indice+1] == "b" && array[indice+2] == "e" && array[indice+3] == "r"){
                        array[indice] = "o"
                        array[indice+1] = ""
                        array[indice+2] = ""
                        array[indice+3] = ""
                    }
                    
                })
            case "u":
                var idx = array.indexOf("u");
                while (idx != -1) {
                valores.push(idx);
                idx = array.indexOf("u", idx + 1);
                }
                valores.map(indice =>{
                    if(array[indice] == "u" && array[indice+1] == "f" && array[indice+2] == "a" && array[indice+3] == "t"){
                        array[indice] = "u"
                        array[indice+1] = ""
                        array[indice+2] = ""
                        array[indice+3] = ""
                    }
                    
                })
                 
        }
        }
            
    )
    div.value = array.join("")
}

const copy = () => {
    navigator.clipboard.writeText(div.value);
}

