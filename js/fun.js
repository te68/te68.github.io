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

hoodieszn = document.getElementById('hoodieszn')
dance = document.getElementById('40dance')
hoodfavorite = document.getElementById('hoodfavorite')
mbdtf = document.getElementById('mbdtf')
heartbreak = document.getElementById('808s')
myturn = document.getElementById('myturn')
truetomyself = document.getElementById('truetomyself')
unluccy = document.getElementById('unluccy')
astroworld = document.getElementById('astroworld')

datenight1 = document.getElementById('datenight1')
house = document.getElementById('house')
pc = document.getElementById('pc')
pc3 = document.getElementById('pc3')
pc2 = document.getElementById('pc2')
datenight2 = document.getElementById('datenight2')

coves = document.getElementById('coves')
winter = document.getElementById('winter')
jackets = document.getElementById('jackets')
spring = document.getElementById('spring')
cleats = document.getElementById('cleats')
fall = document.getElementById('fall')
racers = document.getElementById('racers')
vermont = document.getElementById('vermont')
tnf = document.getElementById('tnf')

window.addEventListener('scroll', (event) => {
  let y = window.scrollY
  console.log(y)
  if (y > 300 && y < 1000){
    hoodieszn.classList.remove('card-hidden')
    hoodieszn.classList.add('fade-in')
    dance.classList.remove('card-hidden')
    dance.classList.add('fade-in')
    hoodfavorite.classList.remove('card-hidden')
    hoodfavorite.classList.add('fade-in')
  }
  if(y > 500 && y < 1200){
    mbdtf.classList.remove('card-hidden')
    mbdtf.classList.add('fade-in')
    heartbreak.classList.remove('card-hidden')
    heartbreak.classList.add('fade-in')
    myturn.classList.remove('card-hidden')
    myturn.classList.add('fade-in')
  }
  if(y > 700 && y < 1400){
    truetomyself.classList.remove('card-hidden')
    truetomyself.classList.add('fade-in')
    unluccy.classList.remove('card-hidden')
    unluccy.classList.add('fade-in')
    astroworld.classList.remove('card-hidden')
    astroworld.classList.add('fade-in')
  }
  if(y > 1200 && y < 1900){
    datenight1.classList.remove('card-hidden')
    datenight1.classList.add('fade-in')
    house.classList.remove('card-hidden')
    house.classList.add('fade-in')
    pc.classList.remove('card-hidden')
    pc.classList.add('fade-in')
  }
  if(y > 1500 && y < 2200){
    pc3.classList.remove('card-hidden')
    pc3.classList.add('fade-in')
    pc2.classList.remove('card-hidden')
    pc2.classList.add('fade-in')
    datenight2.classList.remove('card-hidden')
    datenight2.classList.add('fade-in')
  }
  if (y > 1700 && y < 2400){
    coves.classList.remove('card-hidden')
    coves.classList.add('fade-in')
    winter.classList.remove('card-hidden')
    winter.classList.add('fade-in')
    jackets.classList.remove('card-hidden')
    jackets.classList.add('fade-in')
  }
  if(y > 2000 && y < 2600){
    spring.classList.remove('card-hidden')
    spring.classList.add('fade-in')
    cleats.classList.remove('card-hidden')
    cleats.classList.add('fade-in')
    fall.classList.remove('card-hidden')
    fall.classList.add('fade-in')
  }
  if(y > 2100 && y < 2800){
    racers.classList.remove('card-hidden')
    racers.classList.add('fade-in')
    vermont.classList.remove('card-hidden')
    vermont.classList.add('fade-in')
    tnf.classList.remove('card-hidden')
    tnf.classList.add('fade-in')
  }


})
