const filterBtns = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".item");

// FILTER FUNCTION
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {

        document.querySelector(".filter-btn.active").classList.remove("active");
        btn.classList.add("active");

        const category = btn.getAttribute("data-filter");

        galleryItems.forEach(item => {
            if(category === "all" || item.getAttribute("data-category") === category){
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

// LIGHTBOX FUNCTION
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const images = document.querySelectorAll(".gallery img");

let index = 0;

images.forEach((img, i) => {
    img.addEventListener("click", () => {
        index = i;
        showLightbox();
        lightbox.style.display = "flex";
    });
});

function showLightbox(){
    lightboxImg.src = images[index].src;
}

// NEXT
document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % images.length;
    showLightbox();
});

// PREVIOUS
document.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    showLightbox();
});

// CLOSE
document.querySelector(".close").addEventListener("click", () => {
    lightbox.style.display = "none";
});
