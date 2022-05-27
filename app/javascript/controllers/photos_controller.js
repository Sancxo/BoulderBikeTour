import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["loader", "photosContainer", "photoModal", "modalTitle", "modalBody", "modalImg"];
    static values = { key: String };

    connect() {
        const that = this; // We need to store "this" tio use it in async functions
        const photosPerPage = 40;
        let page = 1;
        let totalPages = 0;

        async function fetchFlickrAPI(page) {
            const resp = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${that.keyValue}&tags=BoulderBikeTour%2C+BikeRace&per_page=${photosPerPage}&page=${page}&safe_search=1&extras=date_taken%2C+owner_name%2C+views%2C+url_s%2C+url_l%2C+url_o&format=json&nojsoncallback=1`);
            
            if(!resp.ok) throw new Error(`Failed to load external ressources: ${resp.status}`);
            
            let res = await resp.json();
            console.log(res);
            return res;
        }

        function showPhotos(photos) {

            photos.forEach(photo => {
                    
                const col = document.createElement('div');
                col.classList.add("col");
    
                const card = document.createElement("div");
                card.classList.add('card');
                card.style.width = "100%";
                card.style.height = "18rem";
    
                card.addEventListener('click', _ => { 

                    that.modalTitleTarget.innerHTML = `Photo n°${photo.id}`;
                    that.modalImgTarget.src = photo.url_o ? photo.url_o : photo.url_l;
    
                    that.modalBodyTarget.appendChild(that.modalImgTarget);
                    that.photoModalTarget.classList.add('show');
                    that.photoModalTarget.style.display = 'block';
                })
    
                const imageTag = document.createElement('img');
                imageTag.src = photo.url_s;
                imageTag.style.objectFit = "cover";
                imageTag.style.height = "100%";
    
                card.appendChild(imageTag);
                col.appendChild(card);
                that.photosContainerTarget.appendChild(col);
            })
        }

        async function loadFlickrPhotos(page) {
            that.loaderTarget.style.display = "block";
    
            try {
                const apiResp = await fetchFlickrAPI(page);
    
                showPhotos(apiResp.photos.photo);
    
                totalPages = apiResp.photos.pages;
    
            } catch (error) {
                console.error(error.message);
            } finally {
                that.loaderTarget.style.display = "none";
            }
        }

        document.addEventListener('scroll', _ => {
            const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    
            if (scrollTop + clientHeight >= scrollHeight - 10 && page <= totalPages) {
                page++;
                loadFlickrPhotos(page);
            }
        });

        loadFlickrPhotos(page);
    }

    closeModal() {    
        this.photoModalTarget.classList.remove('show');
        this.photoModalTarget.style.display = 'none';
        this.modalImgTarget.src = "";
    }
}
