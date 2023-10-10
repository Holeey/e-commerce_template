const bar = document.getElementById('bar');
const close = document.getElementById('close-btn');
const nav = document.getElementById('navbar');
const MainImg = document.getElementById('mainImg');
const SmallImg = document.getElementsByClassName('small-img');


// To Opern and close the mobile menubar on small screen devices

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
    // To change the small images to the main image of the product page

for (const small of SmallImg) {
    small.addEventListener('click', () => {
        MainImg.src = small.src;
    })
}
