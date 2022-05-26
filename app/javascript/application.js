// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "popper"
import "bootstrap"

import runCounter from "./counter";

//= require_self
//= require_tree .
//= require popper
//= require bootstrap

const navBar = document.getElementById("navbar");

//document.addEventListener('turbo:load', _ => {
    // Root page
    if (window.location.pathname === "/") {
        // Homepage style functions
        const jumbotron = document.getElementById("jumbotron");
        jumbotron.style.height = `calc(100vh - ${navBar.offsetHeight}px)`;

        const counterContainer = document.getElementById('counter-container');
        counterContainer.classList.replace("d-none", "d-block");

        const counter = document.getElementById('counter');

        setInterval(_ => {
            counter.classList.toggle("text-danger");
            counter.classList.toggle("text-light");
        }, 1000);

        // Executions
        runCounter(counter);
    }
//})