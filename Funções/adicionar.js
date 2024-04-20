    let num = document.getElementById('inum') 
    let sel = document.getElementById('sel')
    let res = document.getElementById('res')
    let valores = []


    function isnumero (n) { 
        if(Number(n) >= 1 && Number(n) <= 100) {return true } else {return false}
    } 
    function inlista(n, l) { 
        if (l.indexOf(Number(n)) != -1) {
            return true
        } else { return false}

    }




function adicionar() {
        if(isnumero(num.value) && !inlista(num.value, valores)) {valores.push(Number(num.value))
            
               
                let item = document.createElement('option') 
                item.text = `Você adicionou o número ${num.value}`
                sel.appendChild(item)
                res.innerHTML = ''
               
            } else {
            alert('Valor invalido ou ja encontrado na lista')
        } 
        num.value = ''
        num.focus()
   } 
   function finalizar()  {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else { 
        let tot = valores.length 
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if
            (valores[pos] > maior)  

            maior = valores[pos] 

            if (valores[pos] < menor)

            menor = valores[pos]
        }
        media =   soma / tot
            
        res.innerHTML = '' 
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado é o ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado é o ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média de todos os valores digitados o ${media}.</p>`
    
    }
   }
       