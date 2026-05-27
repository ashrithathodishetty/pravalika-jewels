/* SLIDES */

const slides = document.querySelectorAll(".slide");

const videos = document.querySelectorAll(".bg-video");

let currentSlide = 0;

/* CHANGE SLIDE */

function changeSlide() {

    slides[currentSlide].classList.remove("active");

    videos[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");

    videos[currentSlide].classList.add("active");
}

/* AUTO SLIDER */

setInterval(changeSlide, 5000);

/* SCROLL FUNCTION */

function scrollToSection(id) {

    document.getElementById(id).scrollIntoView({

        behavior: "smooth"
    });
}

/* COLLECTION PRODUCTS */

const collections = {

    gold: [

        {
            image: "images/rings1.jpeg",

            name: "Elegant Gold Bracelet Set",

            description:
                "Exquisite gold bracelet set with intricate designs.",

            price: "₹25,555"
        },

        {
            image: "images/minimal.jpg",

            name: "Royal Gold Minimal Collection",

            description:
                "Elegant handcrafted gold minimal earrings collection with premium finish.",

            price: "₹22,454"
        },

        {
            image: "images/rings.jpeg",

            name: "Elegant Rings",

            description:
                "Western daily luxury rings crafted for elegance.",

            price: "₹12,689"
        }

    ],

    diamond: [

        {
            image: "images/Bracelet.jpg",

            name: "Diamond Bracelet",

            description:
                "Premium diamond bracelet with royal brilliance.",

            price: "₹42,999"
        },

        {
            image: "images/diamondnecklace.jpg",

            name: "Diamond Necklace",

            description:
                "Exclusive necklace crafted with pure diamonds.",

            price: "₹1,00,999"
        },

        {
            image: "images/necklace.jpeg",

            name: "Diamond Neck Choker",

            description:
                "Elegant diamond neckchoker designed for timeless beauty.",

            price: "₹89,999"
        },

        {
            image: "images/earrings.jpeg",

            name: "Diamond Earrings",

            description:
                "Exquisite diamond earrings crafted for eternal elegance.",

            price: "₹65,999"
        },

        {
            image: "images/necklace1.jpeg",

            name: "Diamond Necklace",

            description:
                "Timeless necklace designed for premium elegance.",

            price: "₹1,25,000"
        }

    ],

    bridal: [

        {
            image: "images/BridalSet2.jpg",

            name: "Bridal Jewellery Set",

            description:
                "Complete temple bridal jewellery collection for weddings.",

            price: "₹2,50,099"
        },

        {
            image: "images/BridalSet.jpg",

            name: "Royal Bridal Set",

            description:
                "Traditional bridal set with luxury and royal detailing.",

            price: "₹2,80,990"
        },

        {
            image: "images/Bangles.jpg",

            name: "Bridal Bangles",

            description:
                "Traditional bridal bangles with intricate craftsmanship and royal design.",

            price: "₹55,858"
        }

    ]
};

/* OPEN COLLECTION */

function openCollection(type) {

    const popup =
        document.getElementById("productPopup");

    const heading =
        document.getElementById("popupHeading");

    const productsContainer =
        document.getElementById("popupProducts");

    popup.style.display = "flex";
    document.body.style.overflow = "hidden";

    heading.innerText =
        type.charAt(0).toUpperCase() +
        type.slice(1) + " Collection";

    productsContainer.innerHTML = "";

    collections[type].forEach(product => {

        productsContainer.innerHTML += `

        <div class="popup-product-card">

            <img src="${product.image}" alt="${product.name}">

            <div class="popup-product-info">

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <h4>${product.price}</h4>

                <a href="https://wa.me/919652791403?text=I%20want%20to%20buy%20${product.name}"
                   target="_blank">

                   Buy Now

                </a>

            </div>

        </div>

        `;
    });
}

/* CLOSE POPUP */

function closePopup() {

    const popup =
    document.getElementById(
        "productPopup"
    );

    popup.style.display = "none";

    document.body.style.overflow = "auto";
}

/* CLOSE WHEN CLICKING OUTSIDE */

window.onclick = function (event) {

    const popup =
        document.getElementById(
            "productPopup"
        );

    if (event.target === popup) {

        popup.style.display = "none";
    }
};