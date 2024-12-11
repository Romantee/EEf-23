function toggleDropdown() {
    const dropdown = document.getElementById("dropdownMenu");
    dropdown.classList.toggle("show");
}
//-----------------------------------------------------------------------------
function myFunction() {
    var element = document.body;
    var element2 = document.querySelector('.header');
    element.classList.toggle("dark-mode");
    element2.classList.toggle("dark-mode")
 }
 //----------------------------------------------------------------------------
 window.addEventListener('load', () => {
  const scrollTop = document.getElementById('scroll-top');
  if (!scrollTop) {
      console.error('Scroll-to-top button not found!');
      return;
  }
  scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: 'smooth',
      });
  });
  function toggleScrollTop() {
      if (window.scrollY > 100) {
          scrollTop.classList.add('active');
      } else {
          scrollTop.classList.remove('active');
      }
  }
  document.addEventListener('scroll', toggleScrollTop);
  toggleScrollTop(); 
});
//-----------------------------------------------------------------------------
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
  }

//---------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    function updateValue(sliderId, displayId) {
        const slider = document.getElementById(sliderId);
        const display = document.getElementById(displayId);

        if (slider && display) {
            display.textContent = slider.value;

            slider.addEventListener('input', () => {
                display.textContent = slider.value;
            });
        } else {
            console.error(`Element with id ${sliderId} or ${displayId} not found.`);
        }
    }
    updateValue('websiteRating', 'websiteValue');
    updateValue('catsRating', 'catsValue');
    updateValue('dogsRating', 'dogsValue');
    updateValue('travelRating', 'travelValue');
    updateValue('codingRating', 'codingValue');
});
