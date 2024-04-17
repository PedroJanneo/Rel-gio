const clockElement = document.getElementById('relogio')

function updaterelogio(){
    const date = new Date()
    const horas = date.getHours().toString().padStart(2,'0')
    const minutos = date.getMinutes().toString().padStart(2,'0')
    const segundos = date.getSeconds().toString().padStart(2,'0')
    clockElement.textContent=`${horas}:${minutos}:${segundos}`

}

updaterelogio()
setInterval(updaterelogio,1000)
