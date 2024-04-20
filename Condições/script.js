function calcular()  {
var msg = document.getElementById('msg')
var img = document.getElementById('img')
var data = new Date() 
var hora = data.getHours() 


msg.innerHTML = `Olá, são exatamente, ${hora} horas` 

if (hora >= 0 && hora < 12 ) {
    msg.innerHTML = `Olá, muito bom dia, são exatamente ${hora} horas` 
    img.src = 'imagens/fotomanha.jpg'
    document.body.style.background = '#edda7a' 

} else if (hora >= 12 && hora < 19) { msg.innerHTML = `Olá, muito boa tarde, são exatamente ${hora} horas!!`
document.body.style.background = '#ffc689'
img.src = 'imagens/fototarde.jpg'


}  else { msg.innerHTML = `Olá, muito boa noite, são exatamente ${hora} horas`
img.src = 'imagens/fotonoite.jpg'

document.body.style.background = '#383838'
}  
if (hora == 1) {
    msg.innerHTML = `Olá, muito bom dia, são exatamente ${hora} hora!!!`
}

 




}