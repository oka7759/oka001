/*const imgSl = document.querySelector('.slide');
const imgSlIt = imgSl.querySelector('.item');*/
const modalPhoto = document.querySelectorAll('div.frame__Photos');
const modalWindow = document.querySelector('.wrap .modal');
const modalClose = document.querySelector('.wrap i');
const modalWindowImg = modalWindow.querySelector('img');

/*let count = 0 ;
imgSlIt.addEventListener("click", function(){
    
    const bgImg = ["photo01.jpeg","photo02.png","photo03.jpeg"];
    
 

        count++
       if(count >= bgImg.length){

        count = 0;
       }  
                 
       imgSlIt.style.transition='2s';
       imgSlIt.style.background='url("./images/'+bgImg[count]+'")'; 
       

});*/




modalPhoto[0].addEventListener('click', function(){
    modalWindowImg.setAttribute('src','./images/modal1.png');
   modalWindow.style.display='block' 


});
modalPhoto[1].addEventListener('click', function(){
    modalWindowImg.setAttribute('src','./images/modal2.png');
   modalWindow.style.display='block' 


});
modalPhoto[2].addEventListener('click', function(){
    modalWindowImg.setAttribute('src','./images/modal3.png');
   modalWindow.style.display='block' 


});
modalPhoto[3].addEventListener('click', function(){
    modalWindowImg.setAttribute('src','./images/modal4.png');
   modalWindow.style.display='block' 


});
modalPhoto[4].addEventListener('click', function(){
    modalWindowImg.setAttribute('src','./images/modal5.png');
   modalWindow.style.display='block' 


});
modalPhoto[5].addEventListener('click', function(){
    modalWindowImg.setAttribute('src','./images/modal6.png');
   modalWindow.style.display='block' 


});

modalClose.addEventListener('click', function(){

    modalWindow.style.display='none';
});


alert('반응형 작업 전입니다.  PC로 이용해주세요');

/*
const menuLink = document.querySelectorAll(".item__name a");

menuLink[0].addEventListener('click', function(){
   
    window.scrollTo( 0, 750 );
});*/