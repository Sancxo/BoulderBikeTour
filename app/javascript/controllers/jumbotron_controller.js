import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    connect() {
        const navBar = document.getElementById("navbar");

        this.element.style.height = `calc(100vh - ${navBar.offsetHeight}px)`;

        const counterContainer = document.getElementById('counter-container');
        counterContainer.classList.replace("d-none", "d-block");
    }
}