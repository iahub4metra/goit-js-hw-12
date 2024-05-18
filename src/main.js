import iziToast from "izitoast";
import { getRequestApi } from "./js/pixabay-api";
import { renderImages, showLoader, hideLoader, iziToastShow, iziToastWarning} from "./js/render-functions";
import simpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const btnEl = document.querySelector('.btnSubmit');
const btnLoadEl = document.querySelector('.btn-load-more');
const formEl = document.querySelector('.form');
const inputEl = document.querySelector('#inputSearch');
const listEl = document.querySelector('.list');
const loaderEl = document.querySelector('.loader');
const loaderElSecond = document.querySelector('.loader-second');
const lightbox = new simpleLightbox('.list a', {
        sourceAttr: "href",
        animationSpeed: 100,
        fadeSpeed: 50,
        animationSlide: false,
        scrollZoom: false,
        captionsData: 'alt',
        captionDelay: 250,
});
btnLoadEl.style.display = "none";
let page;
const limit = 15;
let totalPages;
let userInputValue;
let totalHits
formEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    page = 1;
    const inputData = inputEl.value.trim(); 
    userInputValue = inputData;
    if (inputData === "") {
        iziToastShow();
    } else {
        listEl.innerHTML = "";
        showLoader(loaderEl)
            try {
                const data = await getRequestApi(userInputValue, page, limit);
                renderImages(data.hits, listEl)
                lightbox.refresh();
                totalHits = data.totalHits;
                totalPages = Math.ceil(data.totalHits / limit);
                 if (totalPages > 1) {
                btnLoadEl.style.display = "block";
                } else {
                    btnLoadEl.style.display = "none";
                }
            } finally {
                hideLoader(loaderEl)
            }
    
    }
})
btnLoadEl.addEventListener('click', async (e) => {
    e.preventDefault()
    page += 1;
    const remainingHits = totalHits - (page - 1) * limit;
    const currentLimit = remainingHits < limit ? remainingHits : limit;
    showLoader(loaderElSecond)
    try {
        const data = await getRequestApi(userInputValue, page, currentLimit)
        renderImages(data.hits, listEl)
        lightbox.refresh();
        const item = document.querySelector(".list-item")
        const rect = item.getBoundingClientRect();
        const heigth = rect.height * 3.5;
        window.scrollBy({
            top: heigth,
            left: 0,
            behavior: "smooth",
        })
        if (page >= totalPages) {
            btnLoadEl.style.display = "none";
            return iziToastWarning();
        }
    } finally {
        hideLoader(loaderElSecond)
    }
})
