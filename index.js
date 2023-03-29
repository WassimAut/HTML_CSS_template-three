let ourskill_section = document.querySelector('.ourskill');
let ourskill_traversed=false;
let spans = document.querySelectorAll('.ourskill span');
let stats_section=document.querySelector('.stats');
let stats_traversed=false;
let nums =document.querySelectorAll('h3.num');
let days=document.querySelector('span.days');
let hours=document.querySelector('span.hours');
let minutes=document.querySelector('span.minutes');
let seconds=document.querySelector('span.seconds');
eventresttime();

window.onscroll = function(){
if ((window.scrollY >= ourskill_section.offsetTop - 300) && (!ourskill_traversed)){
ourskill_traversed=true;
spans.forEach((span)=>{
span.style.width = span.getAttribute('data-progress');})
};

if ((window.scrollY >= stats_section.offsetTop - 300) && (!stats_traversed)){
stats_traversed=true;
nums.forEach((num,index)=>{
setcount(num,index);
console.log('hello from window scroll');
})

}

}

function setcount(element,index){
let goal = element.getAttribute('data-goal');
let count = setInterval(()=>{

if(parseInt(element.textContent) < parseInt(goal)){
   element.textContent++;}

else{

clearInterval(count);
}
},(1000/goal));
}

function eventresttime(){
let countdowndate=new Date('Mar 27,2023 23:59:59').getTime();
let count = setInterval(()=>{
let datenow = new Date().getTime();
let diffdate = countdowndate - datenow;

let d = Math.floor(diffdate / (1000*60*60*24));
let h = Math.floor(diffdate%(1000*60*60*24)/(1000*60*60));
let m = Math.floor(diffdate%(1000*60*60)/(1000*60));
let s = Math.floor(diffdate%(1000*60)/(1000));
days.innerHTML = d;
hours.innerHTML = h;
minutes.innerHTML = m;
seconds.innerHTML = s;

},1000)
}







