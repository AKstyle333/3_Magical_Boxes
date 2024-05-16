const magicButton = document.getElementById("magicButton");
const magicSection = document.getElementById("magicSection");

const startAnimations = () => {
    // Image change
    let images = ["./images/bmw-offer.png", "./images/mercedes-offer.png", "./images/nissan-offer.png", "./images/offer-toyota.png", "./images/toyota-offer-2.png"];
    let setIndexImage = 0;
    const previewImage = document.getElementById("magicImage");

    const setImage = () => {
        previewImage.src = images[setIndexImage];
        setIndexImage = (setIndexImage + 1) % images.length;
    };

    setInterval(setImage, 1000);

    // Quotes change
    const quoteContainer = document.getElementById("quoteContainer");
    const quotes = [
        "The best way to predict the future is to create it. - Peter Drucker",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "The only way to do great work is to love what you do. - Steve Jobs",
    ];

    let currentQuoteIndex = 0;

    const displayQuote = () => {
        quoteContainer.textContent = quotes[currentQuoteIndex];
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    };

    setInterval(displayQuote, 1000);

    // Box rotate
    const box = document.getElementById("myBox");
    const colors = ["blue", "green", "yellow", "red"];
    let colorIndex = 0;

    const updateColor = () => {
        colorIndex = (colorIndex + 1) % colors.length;
        box.style.backgroundColor = colors[colorIndex];
    };
    setInterval(updateColor, 1000);
};

magicButton.onclick = () => {
    magicSection.style.display = "block";
    startAnimations();
    magicButtonContainer.style.display = "none";
};
