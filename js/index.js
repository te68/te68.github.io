  const w = window.outerWidth
  cornellCard = document.getElementById('cornell-card')
  // flatironCard = document.getElementById('flatiron-card')
  stuyCard = document.getElementById('stuy-card')
  if (w > 650){
    cornellCard.classList.remove('card-hidden')
    cornellCard.classList.add('slide-left')
    // flatironCard.classList.remove('card-hidden')
    // flatironCard.classList.add('slide-left')
    stuyCard.classList.remove('card-hidden')
    stuyCard.classList.add('slide-left')
  } else {
    cornellCard.classList.remove('slide-left')
    // flatironCard.classList.remove('slide-left')
    stuyCard.classList.remove('slide-left')
    cornellCard.classList.remove('card-hidden')
    // flatironCard.classList.remove('card-hidden')
    stuyCard.classList.remove('card-hidden')
  }

  jjCard = document.getElementById('j&j-card')
  taCard = document.getElementById('ta-card')
  dfgCard = document.getElementById('dfg-card')
  yaynayCard = document.getElementById('yaynay-card')
  hopscotchCard = document.getElementById('hopscotch-card')
  ccCard = document.getElementById('creatives-card')
  cusailCard = document.getElementById('cusailwork-card')
  codingschoolCard = document.getElementById('codingschool-card')
  realdealCard = document.getElementById('realdeal-card')
  ecoCard = document.getElementById('eco-card')
  acquisCard = document.getElementById('acquis-card')
  ustaCard = document.getElementById('usta-card')
  if (w > 650) {
    window.addEventListener('scroll', (event) => {
      let y = window.scrollY
      if (y > 100 && y < 700){
        jjCard.classList.remove('card-hidden')
        jjCard.classList.add('slide-left')
      }
      if (y > 250 && y < 850){
        dfgCard.classList.remove('card-hidden')
        dfgCard.classList.add('slide-left')
      }
      if(y > 400 && y < 1000){
        taCard.classList.remove('card-hidden')
        taCard.classList.add('slide-left')
      }
      if(y > 550 && y < 1150){
        ccCard.classList.remove('card-hidden')
        ccCard.classList.add('slide-left')
      }
      if(y > 700 && y < 1300){
        yaynayCard.classList.remove('card-hidden')
        yaynayCard.classList.add('slide-left')
      }
      if(y > 850 && y < 1450){
        hopscotchCard.classList.remove('card-hidden')
        hopscotchCard.classList.add('slide-left')
      }
      if(y > 1000 && y < 1600){
        cusailCard.classList.remove('card-hidden')
        cusailCard.classList.add('slide-left')
      }
      if(y > 1150 && y < 1750){
        codingschoolCard.classList.remove('card-hidden')
        codingschoolCard.classList.add('slide-left')
      }
      if(y > 1450 && y < 2050){
        realdealCard.classList.remove('card-hidden')
        realdealCard.classList.add('slide-left')
      }
      if(y > 1600 && y < 2200){
        ecoCard.classList.remove('card-hidden')
        ecoCard.classList.add('slide-left')
      }
      if(y > 1750 && y < 2350){
        acquisCard.classList.remove('card-hidden')
        acquisCard.classList.add('slide-left')
      }
      if(y > 1900 && y < 2500){
        ustaCard.classList.remove('card-hidden')
        ustaCard.classList.add('slide-left')
      }
    })
  } else {
    jjCard.classList.remove('card-hidden')
    dfgCard.classList.remove('card-hidden')
    taCard.classList.remove('card-hidden')
    yaynayCard.classList.remove('card-hidden')
    hopscotchCard.classList.remove('card-hidden')
    ccCard.classList.remove('card-hidden')
    cusailCard.classList.remove('card-hidden')
    codingschoolCard.classList.remove('card-hidden')
    realdealCard.classList.remove('card-hidden')
    ecoCard.classList.remove('card-hidden')
    acquisCard.classList.remove('card-hidden')
    ustaCard.classList.remove('card-hidden')
  }
