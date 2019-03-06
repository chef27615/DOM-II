// Your code goes here


//click
const navLink = document.querySelectorAll('.nav .nav-link');

navLink.forEach(function(cv){
    cv.addEventListener('click', function(e){
        cv.style.color= 'gray';
        e.preventDefault();
    })
})

//mouseleave
const topImg = document.querySelector('header img');

topImg.addEventListener('mouseleave', function(){
    console.log('fired');
})


//keydown

window.addEventListener('keydown', function(e){
    console.log(`${e.key}`);
})

//dblclick
const destination = document.querySelectorAll('.destination');
destination.forEach(function(cv){
    cv.addEventListener('dblclick', function(e){
        console.log('clicked on the destination');
    })
})


const signUpBtn = document.querySelectorAll('.destination .btn');
signUpBtn.forEach(function(cv){
    cv.addEventListener('dblclick', function(e){
        cv.style.color = '#0ff111';
        e.stopPropagation();
    })
})

//resizing

window.addEventListener('resize', function(e){
    console.log('resize detected.');
})

//load

window.addEventListener('load', function(e){
    console.log('all done');
})

//scroll

window.addEventListener('scroll', function(e){
    console.log('scroll detected');
})

//wheel

const mainContainer = document.querySelector('.container.home');

mainContainer.addEventListener('wheel', function(e){
    
    if(e.deltaY>0){
        mainContainer.style.backgroundColor ='orange';
    }else{
        mainContainer.style.backgroundColor ='';
    }
    e.stopPropagation();
}, {passive: true})

//mouse enter

const secImg = document.querySelector('.content-section .img-content');
secImg.addEventListener('mouseenter', function(e){
    secImg.style.border= '10px solid dodgerblue';
})
secImg.addEventListener('mouseleave', function(e){
    secImg.style.border= '';
})

//mouseup/mousedown
const footer = document.querySelector('footer');
footer.addEventListener('mousedown',function(e){
    footer.style.backgroundColor='';
})

footer.addEventListener('mouseup', function(e){
    footer.style.backgroundColor='white';
})


//animate

const logoHeading = document.querySelector('.logo-heading');


logoHeading.addEventListener('click', function(e){
    TweenMax.to('.logo-heading', 2, {x:300});
});

