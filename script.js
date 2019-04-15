let awesome = document.querySelector('.awesome-branding');

let backImages = ['back1.jpg', 'back2.jpeg', 'back3.jpg']

let i = 1;

window.setInterval(function() {  
    awesome.style.backgroundImage = "url(" + backImages[i] +  ")"; 
    console.log(awesome);
    if(i < 2){
        i++;
    }else{
        i = 0;
    }
}, 2000);


