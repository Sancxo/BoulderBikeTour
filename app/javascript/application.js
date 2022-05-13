// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "popper"
import "bootstrap"
import runCounter from "./counter";
//= require popper
//= require bootstrap

// Style functions
const navBar = document.getElementById("navbar");
const jumbotron = document.getElementById("jumbotron");
jumbotron.style.height = `calc(100vh - ${navBar.offsetHeight}px)`;

const counter = document.getElementById('counter');
setInterval(_ => {
    counter.classList.toggle("text-danger");
    counter.classList.toggle("text-light");
}, 1000);

// Executions
runCounter(counter);