import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    static values = {riders: Array}

    connect() {
        const map = L.map('map').setView(
            [40.01634400448244, -105.258660486831], 
            12
        );

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        this.ridersValue.forEach(rider => {
            const marker = L.marker(rider.lat_long).addTo(map);
            const colour = rider.gender == 'M' ? '#15abbe' : '#fe4164';
            marker.bindPopup(`
                <div class="text-center">
                    <h6 style="color: ${colour};"><b>${rider.first_name} ${rider.last_name}</b></h6>
                    <p>${rider.city} - ${rider.state}</p>
                    <p>Lat: ${rider.lat_long[0]}, Long: ${rider.lat_long[1]}</p>
                </div>
            `)
        });
    }
}