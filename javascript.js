let image = document.querySelector(".slider_image");
let translate = 0;

setInterval(()=>{
    if(translate>=0 && translate<400){
        
        translate=translate+103;
    }
    else{
        translate=0;
    }
    image.style.transition = "2s";
    image.style.transform= `translateX(${-translate}%)`;
} ,3000)