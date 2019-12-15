let images=['img/cake2.jpg','img/choc1.jpg','img/choc2.jpg','img/choc3.jpg','img/choc4.jpg'];
let left=document.querySelector('#left');
let right=document.querySelector('#right');
let image=document.querySelector('#image');
let currentImage=0;

/*
let  scrollImage=()=>{
    if (currentImage===0)
        currentImage=images.length-1;
    else
        currentImage-=1;
    image.setAttribute('src',images[currentImage]);
};
*/

 let scrollImage=(ref)=>{
      if(ref.id==='left'){
          if (currentImage===0)
              currentImage=images.length-1;
          else
              currentImage-=1;
      }
      else if(ref.id==='right'){
          if (currentImage===images.length-1)
              currentImage=0;
          else
              currentImage+=1;
      }
     image.setAttribute('src',images[currentImage]);
 };
