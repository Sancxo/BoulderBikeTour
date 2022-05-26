function loadPhotos(key) {
    const photosPerPage = 40;
    let page = 1;
    let totalPages = 0;

    const photosContainer = document.getElementById("photos-container");

    const loader = document.getElementById('loader');

    const modal = document.getElementById('photo-modal');
    const modalTitle = document.querySelector('h5.modal-title');
    const modalBody = document.querySelector('div.modal-body');


    async function fetchFlickrAPI(page) {
        const resp = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=BoulderBikeTour%2C+BikeRace&per_page=${photosPerPage}&page=${page}&safe_search=1&extras=date_taken%2C+owner_name%2C+views%2C+url_l&format=json&nojsoncallback=1`);
        
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
                const modalImg = document.getElementById("photo");

                modalTitle.innerHTML = `Photo n°${photo.id}`;
                modalImg.src = photo.url_l;

                modalBody.appendChild(modalImg);
                modal.classList.add('show');
                modal.style.display = 'block';
            })

            const imageTag = document.createElement('img');
            imageTag.src = photo.url_l;
            imageTag.style.objectFit = "cover";
            imageTag.style.height = "100%";

            card.appendChild(imageTag);
            col.appendChild(card);
            photosContainer.appendChild(col);
        })
    }

    async function loadFlickrPhotos(page) {
        loader.style.display = "block";

        try {
            const apiResp = await fetchFlickrAPI(page);

            showPhotos(apiResp.photos.photo);

            totalPages = apiResp.photos.pages;

        } catch (error) {
            console.error(error.message);
        } finally {
            loader.style.display = "none";
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

function closeModal() {
    const modal = document.getElementById('photo-modal');

    modal.classList.remove('show');
    modal.style.display = 'none';
}