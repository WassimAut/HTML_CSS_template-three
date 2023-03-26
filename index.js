let ourskill_section = document.querySelector('.ourskill');
let ourskill_traversed=false;
let spans = document.querySelectorAll('.ourskill span');
let stats_section=document.querySelector('.stats');
let stats_traversed=false;
let nums =document.querySelectorAll('h3.num');


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
console.log(index+' reached my goal which is'+ goal);}
},(1000/goal));
}







