const imgSl = document.querySelector('.slide');
const imgSlIt = imgSl.querySelector('.item');



let count = 0 ;
imgSlIt.addEventListener("click", function(){
    
    const bgImg = ["photo01.jpeg","photo02.png","photo03.jpeg"];
    
 

        count++
       if(count >= bgImg.length){

        count = 0;
       }  
                 
       imgSlIt.style.transition='2s';
       imgSlIt.style.background='url("./images/'+bgImg[count]+'")'; 
       

});

