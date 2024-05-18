import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
export const renderImages = (values, element) => {
    if (values.length === 0) {
        iziToast.error({ message: "Sorry, there are no images matching your search query. Please try again!", position: "topRight" })
        return
    }
    const markup = values
        .map(value => {
        return `<li class="list-item">
                    <a href="${value.largeImageURL}">
                        <img
                            src="${value.webformatURL}"
                            alt="${value.tags}"
                            class="image"
                        />
                    </a>
                    <div class="lower-box">
                        <div>
                            <h3 class="card-title">Likes</h3>
                            <p>${value.likes}</p>    
                        </div>
                        <div>
                            <h3 class="card-title">Views</h3>
                            <p>${value.views}</p>    
                        </div>
                        <div>
                            <h3 class="card-title">Comments</h3>
                            <p>${value.comments}</p>    
                        </div>
                        <div>
                            <h3 class="card-title">Downloads</h3>
                            <p>${value.downloads}</p>    
                        </div>
                    </div>
                </li>`
        })
        .join("");
    element.insertAdjacentHTML('beforeend', markup);
    
};
export const iziToastShow = () => {
    iziToast.error({message:"Please fill the field!", position: "topRight"})
}
export const showLoader = (element) => {
    element.style.display = "inline-block";
}
export const hideLoader = (element) => {
    element.style.display = "none";
}
export const iziToastWarning = () => {
    iziToast.warning({message:"We're sorry, but you've reached the end of search results.", position:"topRight"})
}