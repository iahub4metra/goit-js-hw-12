import axios from "axios";

export const getRequestApi = async (userKeyWords, npage, nlimit) => {
    try {
        const images = await axios.get(`https://pixabay.com/api/`, {
            params: {
                key: "43749964-78fe686efe4660c3d41d86a93",
                q: userKeyWords,
                image_type:"photo",
                orientation:"horizontal",
                safesearch: true,
                per_page: nlimit,
                page: npage,
            }
        });
        return images.data
    } catch (error) {
        console.log(error);
    }
}








