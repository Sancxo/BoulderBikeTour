// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "popper"
import "bootstrap"
//= require popper
//= require bootstrap

const counter = document.createElement('p');
document.getElementById('time-counter').appendChild(counter);

const yearNow = new Date().getFullYear();
const raceStartTime = new Date(`April 1, ${yearNow + 1} 08:00:00`).getTime();

setInterval(_ => {
    const timeNow = new Date().getTime();
    const diff = raceStartTime - timeNow;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24))  / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    const mseconds = diff % (1000);

    // counter.innerHTML = `Race begins in ${(days<10?'0':'')}${days}:${(hours<10?'0':'')}${hours}:${(minutes<10?'0':'')}${minutes}:${(seconds<10?'0':'')}${seconds}::${(mseconds<100?'0':'')}${mseconds}.`;
    counter.innerHTML = `Race begins in ${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}::${String(mseconds).padStart(3, '0')}.`;
}, 50)
