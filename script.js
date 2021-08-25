function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var comenta = document.getElementById('com')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora < 12){
    //Bom dia! #E9542C
    img.src = 'img/manha.png'
    document.body.style.background = '#E9542C'
    comenta.innerHTML = `<strong>Bom Dia!</strong>`
} else if (hora >= 12 && hora <= 18){
    //Boa tarde! #91B19D
    img.src = 'img/tarde.png'
    document.body.style.background = '#DDAA7F'
    comenta.innerHTML = `<strong>Boa Tarde!</strong>`
} else {
    //Boa noite! #454545
    img.src = 'img/noite.png'
    document.body.style.background = '#454545'
    comenta.innerHTML = `<strong>Boa Noite!</strong>`
}


}