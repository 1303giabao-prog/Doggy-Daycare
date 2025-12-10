/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costPerDay = 35;
let dayCount = 0;

const dayButtons = document.querySelectorAll('.day-selector li');
const fullBtn = document.getElementById('full');
const halfBtn = document.getElementById('half');
const clearBtn = document.getElementById('clear-button');
const finalcostEl = document.getElementById('calculated-cost');

/********* colour change days of week **********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
if (dayButtons && dayButtons.length) {
  dayButtons.forEach(function (day) {
    day.addEventListener('click', function () {
      if (day.classList.contains('clicked')) {
        day.classList.remove('clicked');
        dayCount--;
      } else {
        day.classList.add('clicked');
        dayCount++;
      }
      calculate();
    });
  });
}
console.log(dayButtons);

/********* clear days **********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
if (clearBtn) {
  clearBtn.addEventListener('click', function () {
    dayButtons.forEach(day => {
      day.classList.remove('clicked');
    });
    dayCount = 0;
    calculate();
  });
}
console.log(clearBtn);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
if (halfBtn) {
  halfBtn.addEventListener('click', function () {
    costPerDay = 20;
    halfBtn.classList.add('clicked');
    fullBtn.classList.remove('clicked');
    calculate();
  });
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
if (fullBtn) {
  fullBtn.addEventListener('click', function () {
    costPerDay = 35;
    fullBtn.classList.add('clicked');
    halfBtn.classList.remove('clicked');
    calculate();
  });
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate() {
  const total = dayCount * costPerDay;
  if (finalcostEl) {
    finalcostEl.innerHTML = total;
  }
}

calculate();