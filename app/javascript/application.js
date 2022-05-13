// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "popper"
import "bootstrap"
import counter from "./counter";
//= require popper
//= require bootstrap

const navBar = document.getElementById("navbar");
const jumbotron = document.getElementById("jumbotron");
jumbotron.style.height = `calc(100vh - ${navBar.offsetHeight}px)`;

counter()