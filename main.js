//loader
window.addEventListener('load', function () {
  document.querySelector('.loader-wrapper').style.display ='none';
});

//nav bg changing
function changeBg(){
    var nav=document.querySelector("nav");
    var Scrollval = window.scrollY;
   if( Scrollval < 570){
     nav.classList.remove("bgColor");
   }else{
   nav.classList.add("bgColor");
   }

 }
 window.addEventListener("scroll",  changeBg);


// reveal sections
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

//---------kigali slider
document.querySelectorAll(".image-virunga").forEach(image =>{
  image.addEventListener("click", event => {
      document.getElementById('full-image').setAttribute('src',
      image.getAttribute('src'));
      document.querySelector('.image-viewer').style.display="block";
  })
});
document.getElementById('close').addEventListener('click',function(){
  document.querySelector('.image-viewer').style.display='none';
})


document.querySelectorAll(".image").forEach(image =>{
    image.addEventListener("click", event => {
        document.getElementById('full-image').setAttribute('src',
        image.getAttribute('src'));
        document.querySelector('.image-viewer').style.display="block";
    })
});
document.getElementById('close').addEventListener('click',function(){
  document.querySelector('.image-viewer').style.display='none';
})


var slider_img = document.querySelector(".culture-image");
var nextfullImg = document.getElementById('full-image');
var images = ['traditional dressing.jpg', 'girls traditional.jpg','nyanza intore.jpg', 'butare-museum.jpg', 'king place.png','inyambo.jpg'];
var i=0;

function prev(){
    if(i <= 0) i = images.length;
    i--;
    return setImg();

}

function next(){
    if(i >=  images.length-1) i =-1;
    i++;
    return setImg();
    
}

function setImg(){
    return nextfullImg.setAttribute('src' , 'media/' + images[i]);
}


document.querySelectorAll(".culture-image").forEach(image =>{
  image.addEventListener("click", event => {
      document.getElementById('full-image').setAttribute('src',
      image.getAttribute('src'));
      document.querySelector('.image-viewer').style.display="block";
  })
});
document.getElementById('close').addEventListener('click',function(){
  document.querySelector('.image-viewer').style.display='none';
})


//---------kigali slider
document.getElementById('close').addEventListener('click',()=>{
  var navbar=document.querySelector('.nav');
  navbar.style.display="none";
});


