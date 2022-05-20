function loadPhotos(key) {
    const page = 1;
    const photosPerPage = 40;

    async function fetchFlickrAPI() {
        const resp = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=BoulderBikeTour%2C+BikeRace&per_page=${photosPerPage}&page=${page}&safe_search=1&extras=date_taken%2C+owner_name%2C+views%2C+url_l&format=json&nojsoncallback=1`);
        const res = await resp.json();
        
        return res;
    }

    (function loadFlickrPhotos() {
        const photosContainer = document.getElementById("photos-container");

        const apiResp = fetchFlickrAPI();
        apiResp.then(data => {
            const photos = data.photos.photo;
            photos.map((photo, index) => {
                const col = document.createElement('div');
                col.classList.add("col");

                const card = document.createElement("div");
                card.classList.add('card');
                card.style.width = "18rem";
                card.style.height = "18rem";

                const imageTag = document.createElement('img');
                imageTag.src = photo.url_l;
                imageTag.style.objectFit = "cover";
                imageTag.style.height = "100%";

                card.appendChild(imageTag);
                col.appendChild(card);
                photosContainer.appendChild(col);
            })
        })
    })()
}