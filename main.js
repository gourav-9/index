
main.addEventListener('click',()=>{
  if(mainbox.style.display=='flex'){
    mainbox.style.display='none'
  }
  else{
    mainbox.style.display='flex'
mainbox.lastElementChild.style.border=0
  }
  
})
mainbox.addEventListener('click',(e)=>{
  
  mainbox.style.display='none'
  if(e.target='span'){
  
   if(e.target.innerHTML=='Hello'){
     alert('Yes Hello')
   }
   else if (e.target.innerHTML == 'Hello 2') {
     alert('Yes Hello 2')
   }
   else if (e.target.innerHTML == 'Hello 3') {
     alert('Yes Hello 3')
   }else if (e.target.innerHTML == 'Hello 4') {
     alert('Yes Hello 4')
   }
  }
})