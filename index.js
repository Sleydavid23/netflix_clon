let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
const btnIniciarSesion = document.getElementById("btnIniciarSesion");

btnIniciarSesion.addEventListener("click", iniciarSesion);
const urls = [
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3105be1aedb18e8d02e7ad7a1b180bef',
  'https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=3105be1aedb18e8d02e7ad7a1b180bef',
  'https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2014&api_key=3105be1aedb18e8d02e7ad7a1b180bef'
];
window.addEventListener('DOMContentLoaded',()=>{
  const peticiones = urls.map(peticion=>fetch(peticion));
  Promise.all(peticiones).then(values=>{
      return Promise.all(values.map(r=>r.json()))
  }).then(catologos=>{
      const [catalogoUno,catalogoDos,catalogoTres] = catologos;
      // Catalogo uno
      const populares = document.getElementById('populares');
      catalogoUno.results.forEach(pelicula => {
          const article = document.createElement('article');
          article.classList.add('pelicula');
          const img = document.createElement('img');
          img.src = 'https://image.tmdb.org/t/p/original/'+pelicula.poster_path;
          article.append(img);
          populares.append(article);
      });
      // Catalogo dos
      const estrenos = document.getElementById('estreno');
      catalogoDos.results.forEach(pelicula => {
          const article = document.createElement('article');
          article.classList.add('pelicula');
          const img = document.createElement('img');
          img.src = 'https://image.tmdb.org/t/p/original/'+pelicula.poster_path;
          article.append(img);
          estrenos.append(article);
      });
      // Catalogo tres
      const vistas = document.getElementById('vistas');
      catalogoTres.results.forEach(pelicula => {
          const article = document.createElement('article');
          article.classList.add('pelicula');
          const img = document.createElement('img');
          img.src = 'https://image.tmdb.org/t/p/original/'+pelicula.poster_path;
          article.append(img);
          vistas.append(article);
      });
  });
});