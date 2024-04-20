function Tabuada() {
    let tabe = document.getElementById('tab') 
    let tabu = document.getElementById('tabu')
    if (tabe.value.length == 0){
         window.alert('Erro!!! Por favor, digite um número')}
          else { 
        let n = Number(tabe.value) 
        let c = 1
        tabu.innerHTML = ''
        while ( c <= 10) {
            let item = document.createElement('option')
            item.text =  `${n} x ${c} = ${n*c}`
            tabu.appendChild(item)
            c++
    } }
    
}