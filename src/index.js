const pressed = []
// up,up,down,down,left,right,left,right,b,a,enter
const code = [38,38,40,40,37,39,37,39,66,65,13]

function KonamiCode(callback){

  document.addEventListener('keyup', (e)=>{
    pressed.push(e.keyCode)
    pressed.splice(-code.length - 1, pressed.length -code.length)
    if(pressed.toString() === code.toString()){
      callback()
    }
  })
}

module.exports =  KonamiCode