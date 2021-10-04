
const main = document.querySelector('main')
let submit = document.getElementById('btn')

document.addEventListener('DOMContentLoaded', function () {
  fetchfilms()
})




function fetchfilms() {
  fetch("https://swapi.dev/api/films")
    .then(resp => resp.json())
    .then(json => renderFilm(json.results))
}

function renderFilm(films) {
  
  films.forEach(film => {


    const div = document.createElement('div')


    const form = document.createElement('form')
    form.setAttribute("class", "hidden")

    const h1 = document.createElement('h1')
    h1.textContent = film.title
    h1.addEventListener('click', (e) => {
        form.classList.toggle('hidden')
    })

    const input = document.createElement("textarea");
    input.setAttribute("placeholder", "Enter Comment")
    form.appendChild(input);


    const btn = document.createElement('button')
    btn.setAttribute("type", "submit")
    btn.textContent = "Submit"
    form.appendChild(btn)

    const commentDiv = document.createElement("div")

    form.addEventListener('submit', (e) => {
      e.preventDefault()
      const p = document.createElement('p')
      p.textContent = input.value
      commentDiv.appendChild(p)
      input.value = ""
    })





    main.appendChild(div)
    div.appendChild(h1)
    div.appendChild(form)
    div.appendChild(commentDiv)


  });
}















