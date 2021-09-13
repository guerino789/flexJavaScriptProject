
const main = document.querySelector('main')
const commentList = document.getElementById('comment_container')


function fetchBooks() {
  return fetch("https://swapi.dev/api/films")
    .then(resp => resp.json())
    .then(json => renderFilms(json.results))
}

function renderFilms(films) {
  
  films.forEach(film => {
    const h2 = document.createElement('h2')
    h2.innerHTML = film.title
    main.appendChild(h2)
  });
}

function renderComment(com){
  let li = document.createElement('li')
  li.textContent = com
  commentList.appendChild(li)
}
    




document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  renderComment(e.target.comment.value)
})

