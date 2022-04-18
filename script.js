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
var cr;
var respostas = [];
const resposta = resposta =>{
    respostas.push(resposta)
    dcr.value = respostas
}
const criptografar = () =>{
    txt.value == ""? alert("Você não pode criptofrafar o nada!") :
    cr = txt.value.replace(/i/g, "imes");
    cr = cr.replace(/e/g, "enter");
    cr = cr.replace(/a/g, "ai");
    cr = cr.replace(/o/g, "ober");
    cr = cr.replace(/u/g, "ufat");
    resposta(cr)
}
const descriptografar = () =>{
    txt.value == ""? alert("Você não pode descriptofrafar o nada!") :
    cr = txt.value.replace(/ai/g, "a");
    cr = cr.replace(/enter/g, "e");
    cr = cr.replace(/imes/g, "i");
    cr = cr.replace(/ober/g, "o");
    cr = cr.replace(/ufat/g, "u");
    resposta(cr)
}
const copy = () => {
    i = respostas.length
    navigator.clipboard.writeText(respostas[i-1]);
}

