const btn=document.createElement('h1');
const content=document.createTextNode('00:00:00');
btn.appendChild(content);
const div1=document.querySelector('div');
div1.appendChild(btn);
btn.setAttribute('id','timer');

const timer=document.getElementById('timer');

const start=document.getElementById('start')
start.addEventListener('click',startwatch);

const stop =document.getElementById('stop');
stop.addEventListener('click',stopwatch);

const reset=document.getElementById('reset');//Reset
reset.addEventListener('click',resetwatch);

let i=0;
let h=0;
let m=0;
let s='00',min='00',hr='00';
let interval;
function startwatch()
{
  interval=setInterval(()=>{
      s=i;
      if(i<=9)
         s='0'+i;
      else if(i==60){
         i=0;
         m++;
         s='0'+i;
      }
      let min=m;
      if(m<=9)
        min='0'+m;
      else if(m==60)
      {
          m=0;
          h++;
          min='0'+m;
      }
      let hr=h;
      if(h<=9)
         hr='0'+h;
      let time=hr+':'+min+':'+s;
      timer.innerHTML=time;
      i++;
      
  },1000);
}

function stopwatch()
{
    timer.innerHTML=hr+':'+min+':'+s;
    clearInterval(interval);
}


function resetwatch()
{
    i=0;
    h=0;
    m=0;
    timer.innerHTML='00:00:00';
    clearInterval(interval);
}