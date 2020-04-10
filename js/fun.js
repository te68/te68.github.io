const natureBox = document.getElementById('nature-box')
const portraitBox = document.getElementById('portrait-box')
const landscapeBox = document.getElementById('landscape-box')
const natureHeading = document.getElementById('nature-heading')
const portraitHeading = document.getElementById('portrait-heading')
const landscapeHeading = document.getElementById('landscape-heading')
let natureHidden = false;
let portraitHidden = true;
let landscapeHidden = true;

natureHeading.addEventListener('click', (event) => {
  if (natureHidden) {
    natureHeading.classList.add('selected')
    natureBox.classList.remove('hidden')
    natureHidden = false;
    portraitHeading.classList.remove('selected')
    landscapeHeading.classList.remove('selected')
    portraitBox.classList.add('hidden')
    landscapeBox.classList.add('hidden')
    portraitHidden = true;
    landscapeHidden = true;
  }
})

portraitHeading.addEventListener('click', (event) => {
  if (portraitHidden) {
    portraitHeading.classList.add('selected')
    portraitBox.classList.remove('hidden')
    portraitHidden = false;
    natureBox.classList.add('hidden')
    landscapeBox.classList.add('hidden')
    natureHeading.classList.remove('selected')
    landscapeHeading.classList.remove('selected')
    natureHidden = true;
    landscapeHidden = true;
  }
})

landscapeHeading.addEventListener('click', (event) => {
  if (landscapeHidden) {
    landscapeHeading.classList.add('selected')
    landscapeBox.classList.remove('hidden')
    landscapeHidden = false;
    natureBox.classList.add('hidden')
    portraitBox.classList.add('hidden')
    natureHeading.classList.remove('selected')
    portraitHeading.classList.remove('selected')
    natureHidden = true;
    portraitHidden = true;
  }
})
