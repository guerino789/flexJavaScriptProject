
const main = document.querySelector('main')
const commentList = document.getElementById('comment_container')
// const form = document.querySelector('form')
const comment = document.getElementById('comment')



function fetchBooks() {
  return fetch("https://swapi.dev/api/films")
    .then(resp => resp.json())
    .then(json => renderFilms(json.results))
}

function renderFilms(films) {
  
  films.forEach(film => {
    const div = document.createElement('div') 
    const form = document.createElement('form')
      form.setAttribute("id", "myForm")
    const y = document.createElement("textarea");
      y.setAttribute("id", "input")
        form.appendChild(y);
    div.innerHTML = film.title
    main.appendChild(div)
    div.append(form)
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

// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   renderComment(e.target.comment.value)
// })

