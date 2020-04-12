  cornellCard = document.getElementById('cornell-card')
  flatironCard = document.getElementById('flatiron-card')
  stuyCard = document.getElementById('stuy-card')
  cornellCard.classList.remove('card-hidden')
  cornellCard.classList.add('slide-left')
  flatironCard.classList.remove('card-hidden')
  flatironCard.classList.add('slide-left')
  stuyCard.classList.remove('card-hidden')
  stuyCard.classList.add('slide-left')


  hopscotchCard = document.getElementById('hopscotch-card')
  ccCard = document.getElementById('creatives-card')
  cusailCard = document.getElementById('cusailwork-card')
  codingschoolCard = document.getElementById('codingschool-card')
  realdealCard = document.getElementById('realdeal-card')
  ecoCard = document.getElementById('eco-card')
  acquisCard = document.getElementById('acquis-card')
  ustaCard = document.getElementById('usta-card')
  window.addEventListener('scroll', (event) => {
    let y = window.scrollY
    if (y > 100 && y < 700){
      hopscotchCard.classList.remove('card-hidden')
      hopscotchCard.classList.add('slide-left')
    }
    if(y > 250 && y < 850){
      ccCard.classList.remove('card-hidden')
      ccCard.classList.add('slide-left')
    }
    if(y > 400 && y < 1000){
      cusailCard.classList.remove('card-hidden')
      cusailCard.classList.add('slide-left')
    }
    if(y > 550 && y < 1150){
      codingschoolCard.classList.remove('card-hidden')
      codingschoolCard.classList.add('slide-left')
    }
    if(y > 700 && y < 1300){
      realdealCard.classList.remove('card-hidden')
      realdealCard.classList.add('slide-left')
    }
    if(y > 950 && y < 1550){
      ecoCard.classList.remove('card-hidden')
      ecoCard.classList.add('slide-left')
    }
    if(y > 1100 && y < 1700){
      acquisCard.classList.remove('card-hidden')
      acquisCard.classList.add('slide-left')
    }
    if(y > 1250 && y < 1850){
      ustaCard.classList.remove('card-hidden')
      ustaCard.classList.add('slide-left')
    }

  })
