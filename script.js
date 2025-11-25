function displayPopUp(){
    let text = "Subscribe to our newsletter for exclusive discounts and offers!";
    let email = prompt(text, "Enter your email here");
    if (!email.includes("@")) {
        alert("You did not enter a valid email. Subscription cancelled.");
    } else if (email == "") {
        alert("You did not enter an email. Subscription cancelled.");
    } else {
        alert("Thank you for subscribing to our newsletter!");
      
    }
}

const minusBtn = document.querySelector('#minusBtn');
const plusBtn = document.querySelector('#plusBtn');
const allPTags = document.querySelectorAll('p');
const allHTags = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
const allFooterLinks = document.querySelectorAll('.footer-list');
const resetBtn = document.querySelector('#resetBtn');
const bodyColour = document.querySelector('body');
const switchMode = document.querySelector('#switchMode');
const cardBody = document.querySelectorAll('.card-body');
const btnColour = document.querySelectorAll('.btn-primary');

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

function switchColourMode() {
    let currentBg = getComputedStyle(bodyColour).backgroundColor;
    console.log('current:', currentBg);

    if (currentBg == 'rgb(255, 255, 255)') {
        bodyColour.style.backgroundColor = '#000000';

        allHTags.forEach(tag => {
            getComputedStyle(tag).color; 
            tag.style.color = '#ffffff';
        });

        allPTags.forEach(tag => {
            getComputedStyle(tag).color; 
            tag.style.color = '#ffffff';
        });

        cardBody.forEach(card => {
            getComputedStyle(card).backgroundColor;
            card.style.backgroundColor = '#778873';
        })

        btnColour.forEach(btn => {
            getComputedStyle(btn).backgroundColor;
            btn.style.backgroundColor = '#212521';

            getComputedStyle(btn).borderColor;
            btn.style.borderColor = '#212521';
        })

        console.log('dark mode')
    } else if (currentBg == 'rgb(0, 0, 0)') {
        bodyColour.style.backgroundColor = '#ffffff';
        console.log('light mode')
    }
}