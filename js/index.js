 // Load your images on page-load
 function preloader() {
    const imagesList = [
       "./img/facebook.png",
       "./img/insta.png",
       "./img/tumbler.png"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    
window.addEventListener("load", preloader);



// references
let buttons = document.querySelectorAll('.controls button');
let dc = document.querySelector('.dynamic-content');

// resources
let stock = {
    c1: {
            heading: 'Hydroelectric power',
            bodyText: 'Hydropower is currently the cheapest source of electricity, costing around $0.05kw/h. The infrastructure generating hydropower can last for a very long time with a steady electric generation flow, which can help reduce the consumed expense.',
            imageSrc: './img/hydropower.jpg',
            imageAlt: 'hydro'
        },
    c2: {
        heading: 'Wind energy',
        bodyText: 'Wind power is now one of the most affordable renewable energy sources. On average, it only costs $0.1-0.2kw/h. The wind farm is "free-fuel" energy, but it can still generate a significant amount of power. The electricity generated by wind farms is sold at a fixed price over a long period of time due to the low maintenance cost.',
        imageSrc: './img/windpower.jpg',
        imageAlt: 'wind'
    },
    c3: {
        heading: 'Solar energy',
        bodyText: 'In comparison to the previous price of solar power, it is now cheaper by 20 - 50%, demonstrating the affordable properties of renewable electricity. The technology is being leveraged with a low cost but high value, assisting solar power to become more cost-effective to many nations.',
        imageSrc: './img/solarpower.jpg',
        imageAlt: 'solar'
    }
}

dc.innerHTML = `<img src="${stock.c1.imageSrc}" alt="${stock.c1.imageAlt}" />
                <div class="grid-item">
                <h2>${stock.c1.heading}</h2>
                <p>${stock.c1.bodyText}</p>
                </div>
                `;


// Function 
function displayContent(ev) {

    
    let currentBtn = ev.target;

    
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].hasAttribute('id')){
              buttons[i].removeAttribute('id');
              
        }
    }

    currentBtn.setAttribute('id','active-button');
    

    if (currentBtn.textContent === 'Hydro') {
        dc.innerHTML = `<img src="${stock.c1.imageSrc}" alt="${stock.c1.imageAlt}" />
                <div class="grid-item">
                <h2>${stock.c1.heading}</h2>
                <p>${stock.c1.bodyText}</p>
                </div>
                `;
    } else if (currentBtn.textContent === 'Wind') {
        dc.innerHTML = `<img src="${stock.c2.imageSrc}" alt="${stock.c2.imageAlt}" />
                <div class="grid-item">
                <h2>${stock.c2.heading}</h2>
                <p>${stock.c2.bodyText}</p>
                </div>
                `;
    } else {
        dc.innerHTML = `<img src="${stock.c3.imageSrc}" alt="${stock.c3.imageAlt}" />
                <div class="grid-item">
                <h2>${stock.c3.heading}</h2>
                <p>${stock.c3.bodyText}</p>
                </div>
                `;
    }
}


// Activate function

for (let button of buttons) {
    button.addEventListener('click', displayContent);
}
