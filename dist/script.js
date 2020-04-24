const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = document.querySelector('#auto');
const autoIcon = document.querySelector('.autoIcon');
let autoPlay = false;
let slideInterval;
const intervalTime = 5000;

const nextSlide = () => {

    const current = document.querySelector('.current');
    // Remove Current Class
    current.classList.remove('current');
    // Check For Next Slide
    if(current.nextElementSibling){
        // Add Current To Next Sibling
        current.nextElementSibling.classList.add('current');
    }else{
        // Add Current To Start
        slides[0].classList.add('current');
        setTimeout(() => {
            current.classList.remove('current');
        });
    }

    if(autoPlay){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
}

const prevSlide = () => {

    const current = document.querySelector('.current');
    // Remove Current Class
    current.classList.remove('current');
    // Check For Prevoius Slide
    if(current.previousElementSibling){
        // Add Current To Prevoius Sibling
        current.previousElementSibling.classList.add('current');
    }else{
        // Add Current To Last
        slides[slides.length - 1].classList.add('current');
        setTimeout(() => {
            current.classList.remove('current');
        });
    }

    if(autoPlay){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
}

const autoSlide = (e) => {
    if(autoPlay === true){

        autoPlay = false;
        autoIcon.classList.remove('fa-pause-circle');
        autoIcon.classList.add('fa-play-circle');
        clearInterval(slideInterval);
        
    }else{

        autoPlay = true;
        autoIcon.classList.remove('fa-play-circle');
        autoIcon.classList.add('fa-pause-circle');
        slideInterval = setInterval(nextSlide, intervalTime);
    }
    e.preventDefault();
}


// Events
next.addEventListener('click' , nextSlide);
prev.addEventListener('click', prevSlide);
auto.addEventListener('click', autoSlide);

// Auto Slide
if(autoPlay){
    // Run Next Slide at Interval Time
    slideInterval = setInterval(nextSlide, intervalTime);
}