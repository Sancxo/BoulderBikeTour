import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ["counterContainer"];
    
    connect() {
        const navBar = document.getElementById("navbar");

        this.element.style.height = `calc(100vh - ${navBar.offsetHeight}px)`;

        this.counterContainerTarget.classList.replace("d-none", "d-block");
    }
}