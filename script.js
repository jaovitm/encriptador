/*
As "chaves" de criptografia que utilizaremos são:
`A letra "e" é convertida para "enter"`
`A letra "i" é convertida para "imes"`
`A letra "a" é convertida para "ai"`
`A letra "o" é convertida para "ober"`
`A letra "u" é convertida para "ufat"`
*/

const txt = document.getElementById("texto");
const dcr = document.getElementById("resposta");
const his = document.getElementById("his");
var cr;
var count = 1
var i = 0
var acc = "";
var historico = [];

const constroi = () =>{
    acc+= `
    <h3>${count}ª solicitação:<span class="action"> &nbsp &nbsp ${historico[i]}</span></h3>
    `
}

const resultado = (resposta) =>{
    dcr.value = "";
    dcr.value = resposta
    historico.push(resposta)
    constroi()
    his.innerHTML = acc 
    count++;
    i++;
}
const criptografar = () =>{
    txt.value == ""? alert("Você não pode criptografar o nada!") :
    cr = txt.value.toLowerCase().replace(/i/g, "imes");
    cr = cr.replace(/e/g, "enter");
    cr = cr.replace(/a/g, "ai");
    cr = cr.replace(/o/g, "ober");
    cr = cr.replace(/u/g, "ufat");
    resultado(cr);
}
const descriptografar = () =>{
    txt.value == ""? alert("Você não pode descriptografar o nada!") :
    cr = txt.value.toLowerCase().replace(/ai/g, "a");
    cr = cr.replace(/enter/g, "e");
    cr = cr.replace(/imes/g, "i");
    cr = cr.replace(/ober/g, "o");
    cr = cr.replace(/ufat/g, "u");
    resultado(cr)
}
const copy = () => {
    i = historico.length
    navigator.clipboard.writeText(historico[i-1]);
}
const history = () =>{
    var modal = document.getElementById("modal");
    modal.classList.add("show-modal");
}
const closeHistory = () =>{
    var modal = document.getElementById("modal");
    modal.classList.remove("show-modal");
}

