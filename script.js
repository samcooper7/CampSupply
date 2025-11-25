const minusBtn = document.querySelector('#minusBtn');
const plusBtn = document.querySelector('#plusBtn');
const allPTags = document.querySelectorAll('p');
const allHTags = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
const allFooterLinks = document.querySelectorAll('.footer-list');
const resetBtn = document.querySelector('#resetBtn');

function resetPage() {
    location.reload();
}

function getBigger() {
    allHTags.forEach(tag => {
        let currentSize = parseFloat(getComputedStyle(tag).fontSize); 
        tag.style.fontSize = (currentSize + 5) + 'px';
    });

    allPTags.forEach(tag => {
        let currentSize = parseFloat(getComputedStyle(tag).fontSize);
        tag.style.fontSize = (currentSize + 5) + 'px';
    });

    allFooterLinks.forEach(tag => {
        let currentSize = parseFloat(getComputedStyle(tag).fontSize);
        tag.style.fontSize = (currentSize + 5) + 'px';
    });
}

function getSmaller() {
    allHTags.forEach(tag => {
        let currentSize = parseFloat(getComputedStyle(tag).fontSize); 
        tag.style.fontSize = (currentSize - 5) + 'px';
    });

    allPTags.forEach(tag => {
        let currentSize = parseFloat(getComputedStyle(tag).fontSize);
        tag.style.fontSize = (currentSize - 5) + 'px';
    });

    allFooterLinks.forEach(tag => {
        let currentSize = parseFloat(getComputedStyle(tag).fontSize);
        tag.style.fontSize = (currentSize - 5) + 'px';
    });
}