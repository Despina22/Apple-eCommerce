//Common Js
document.querySelectorAll('.watch-control, .controls a, .iphone-btn').forEach(control => {
    control.addEventListener(('click'), (e) => {
        e.preventDefault();
    })
})
//End of Common JS





//Cube
let x = 0;
let y = 20;
let z = 0;
let bool = true;
let interval;


const cube = document.querySelector('.cube');

document.querySelector('.top-x-control').addEventListener(('click'), () => {
    cube.style.transform = `rotateX(${x = x + 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})

document.querySelector('.bottom-x-control').addEventListener(('click'), () => {
    cube.style.transform = `rotateX(${x = x - 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})

document.querySelector('.left-y-control').addEventListener(('click'), () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y -= 20}deg) rotateZ(${z}deg)`
})

document.querySelector('.right-y-control').addEventListener(('click'), () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y += 20}deg) rotateZ(${z}deg)`
})

document.querySelector('.top-z-control').addEventListener(('click'), () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z -= 20}deg)`
})

document.querySelector('.bottom-z-control').addEventListener(('click'), () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z += 20}deg)`
})

const playPause = () => {
    if(bool){
        interval = setInterval(() => {
            cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)` 
        }, 100)
    } else {
        clearInterval(interval)
    }
}
playPause();

document.querySelector('.controls').addEventListener(('mouseover'), () => {
    bool = false;
    playPause();
})
document.querySelector('.controls').addEventListener(('mouseout'), () => {
    bool = true;
    playPause();
})
//End of Cube


//Slide Show
const slideshowDivs = () => {
    for(let i=1; i<=5; i++){
        const div = document.createElement('div');
 
        i===1 && div.classList.add('change');

        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;
        document.querySelector('.slideshow').appendChild(div);
    }
}
slideshowDivs();


const divs = document.querySelectorAll('.slideshow div');
let a = 1;
const slideshow = () => {
    setInterval(() => {
        a++;
        const div = document.querySelector('.slideshow .change');
            div.classList.remove('change');
            if(a < divs.length){
                div.nextElementSibling.classList.add('change');
            } else {
                divs[0].classList.add('change');
                a=1;
            }
    }, 10000)
}
slideshow();
//End of Slide Show


// Section-3 
const section3Content = document.querySelector('.section-3-content');
window.addEventListener(('scroll'), () => {
    if(window.pageYOffset + window.innerHeight >= section3Content.offsetTop + section3Content.offsetHeight / 2){
        section3Content.classList.add('change')
    }
})
// End of Section-3

//Section 4
const watchBands = document.querySelector('.watch-bands');
const watchCases = document.querySelector('.watch-cases');

const watchTopControl = document.querySelector('.watch-top-control');
const watchRightControl = document.querySelector('.watch-right-control');
const watchBottomControl = document.querySelector('.watch-bottom-control');
const watchLeftControl = document.querySelector('.watch-left-control');

let axisY = 0;
let axisX = 0;

const hideControls = () => {
    // 8x25rem=200rem
    if(axisY === -200){
        watchTopControl.classList.add('hideControl')
    } else {
        watchTopControl.classList.remove('hideControl')
    }

    if(axisY === 200){
        watchBottomControl.classList.add('hideControl')
    } else {
        watchBottomControl.classList.remove('hideControl')
    }

    if(axisX === 200){
        watchRightControl.classList.add('hideControl')
    } else {
        watchRightControl.classList.remove('hideControl')
    }

    if(axisX === -200){
        watchLeftControl.classList.add('hideControl')
    } else {
        watchLeftControl.classList.remove('hideControl')
    }
}

watchTopControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY -= 50}rem`
    hideControls()
})
watchBottomControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY += 50}rem`
    hideControls()
})
watchRightControl.addEventListener('click', () => {
    watchBands.style.marginRight = `${axisX += 50}rem`
    hideControls()
})
watchLeftControl.addEventListener('click', () => {
    watchBands.style.marginRight = `${axisX -= 50}rem`
    hideControls()
})

//End of Section 4