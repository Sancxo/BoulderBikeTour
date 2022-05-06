// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "popper"
import "bootstrap"
//= require popper
//= require bootstrap

const printCounter = document.getElementById('counter');
const printRaceDate = document.getElementById('race-date');

// I use the following variables to reset the counter year each April 2nd,
// so the counter demo works each years except on April 1st, where we display a message
const dateNow = new Date();
const yearNow = dateNow.getFullYear();
const monthNow = dateNow.getMonth();
const dayNow = dateNow.getDate(); 

const incInitYear = (monthNow < 3 || (monthNow === 3 && dayNow < 2)) ? 0 : 1;
const raceInitYear = yearNow + incInitYear;

const raceStartTime = new Date(`April 1, ${raceInitYear} 08:00:00`);

const days = ['Sunday', 'Monday', 'Tuesday', 'Wenesday', 'Thursday', 'Friday', 'Saturday'];

const raceYear = raceStartTime.getFullYear();
const raceMonth = 'April';
const raceDay = days[raceStartTime.getDay()];
const raceDate = '1st';
const raceHours = String(raceStartTime.getHours()).padStart(2, '0');
const raceMinutes = String(raceStartTime.getMinutes()).padStart(2, '0');
const raceSeconds = String(raceStartTime.getSeconds()).padStart(2, '0');

printRaceDate.innerHTML = `${raceDay}, ${raceMonth} ${raceDate}, ${raceYear} at ${raceHours}:${raceMinutes}:${raceSeconds}`;

const counterFunction = setInterval(_ => {
    const timeNow = new Date().getTime();
    const diff = raceStartTime.getTime() - timeNow;

    const counterDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const counterHours = Math.floor((diff % (1000 * 60 * 60 * 24))  / (1000 * 60 * 60));
    const counterMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const counterSeconds = Math.floor((diff % (1000 * 60)) / 1000);
    const counterMilliseconds = diff % (1000);

    if (diff < 0) {
        clearInterval(counterFunction);
        printCounter.innerHTML = "Race has already started !";
    } else printCounter.innerHTML = `Race begins in ${String(counterDays).padStart(2, '0')}:${String(counterHours).padStart(2, '0')}:${String(counterMinutes).padStart(2, '0')}:${String(counterSeconds).padStart(2, '0')}::${String(counterMilliseconds).padStart(3, '0')}.`;
}, 50)
