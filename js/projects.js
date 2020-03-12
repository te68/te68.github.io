const projectCards = Array.from(document.getElementsByClassName("project-card"))
const scrabbleLink = document.getElementById("scrabble-github-link")
projectCards.forEach((card) => {
    card.addEventListener('mouseover', (event) =>{
      event.target.classList.remove('blur')
      scrabbleLink.classList.remove('hidden')
    })
    card.addEventListener('mouseleave', (event) =>{
      event.target.classList.add('blur')
      scrabbleLink.classList.add('hidden')
    })
});
