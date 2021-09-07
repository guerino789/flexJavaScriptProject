// fetch("https://swapi.dev/api/films", {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'appliction/json'
//     },
//     body: JSON.stringify({
//         title
//     })     
// })
document.addEventListener('DOMContentLoaded', function() {
    fetchMovies()
  })

  function fetchMovies() {
    return fetch("https://swapi.dev/api/films")
      .then(resp => resp.json())
      .then(json => renderMovies(json))
  }


  function renderMovies(movies) {
  const body = document.querySelector('body')
  console.log(body)
  movies.forEach(movie => {
    const h2 = document.createElement('h2')
    h2.innerHTML = movie.title
    body.appendChild(h2)
  })
}
