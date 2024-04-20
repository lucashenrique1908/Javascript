function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano ) { window.alert('ERRO!!! Verifique sua resposta e tente novamente!')} else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {gênero = 'homem '

        if (idade >= 0 && idade < 5) {
          img.setAttribute('src', 'menino3anos222.png')
        } 
         else if  ( idade >= 5 && idade < 10) {
          img.setAttribute('src', 'menino8anos222.png')
        } 
         else if  (idade < 15 ) {img.setAttribute('src','rapazadolescente222.png')
          
        }   if  (idade >= 17 && idade < 20 ) {  img.setAttribute('src','adolescente222.png')
     } 
     if  (idade >= 21 && idade < 50) { img.setAttribute('src','rapazadulto222.png')

     } else if (idade >= 50 ){ img.setAttribute('src','senhoridoso222.png') } 
    }

          //-------------- 


          else if (fsex[1].checked) {gênero = 'mulher'
          if (idade >= 0 && idade < 5) {img.setAttribute('src','menina3anos222.png')
 
        }  else if  ( idade < 10) {img.setAttribute('src','menina8anos222.png')
          
        } 
         else if  (idade < 15 ) {img.setAttribute('src','menina14anos222.png')
          
        }   if  (idade >= 17 && idade < 20 ) { img.setAttribute('src','menina19anos222.png') 
     } 
     if  (idade >= 21 && idade < 50) { img.setAttribute('src','mulher25anos222.png')

     } else if (idade >= 50 ){img.setAttribute('src','senhoraidosa222.png')  } 
    } }
          
   
    res.style.textAling = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    res.appendChild(img)
}