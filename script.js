let nextdom = document.getElementById('next');
let prevdom = document.getElementById('prev');

let carouseldom = document.querySelector('.carousel');
let listitemdom = document.querySelector('.carousel .list');
let thumbnaildom = document.querySelector('.carousel .thumbnail');

nextdom.onclick = function(){
    showSlider('next');
}
prevdom.onclick = function(){
    showSlider('prev');
}

let timeRun = 2500;
let timeAutoNext = 6000;
let runTimeOut ;
let runAutoRun = setTimeout(() => {
    nextdom.click();
}, timeAutoNext);

function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next') {
        listitemdom.appendChild(itemSlider[0]);
        thumbnaildom.appendChild(itemThumbnail[0]);
        carouseldom.classList.add('next');
    } else {
        let positionLastItem = itemSlider.length - 1;
        listitemdom.prepend(itemSlider[positionLastItem]);
        thumbnaildom.prepend(itemThumbnail[positionLastItem]);
        carouseldom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouseldom.classList.remove('next');
        carouseldom.classList.remove('prev');
    }, timeRun);

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextdom.click();
    }, timeAutoNext);
   
}
