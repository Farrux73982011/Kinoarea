let base_url2 = "https://api.themoviedb.org/3/movie/"
let id = location.search.split('=').at(-1)
import Chart from 'chart.js/auto';
let title = document.querySelector('title')
let container = document.querySelector('.container')
let div_1 = document.querySelector('.div_1')
let div_1_1 = document.querySelector('.div_1_1')
let people = document.querySelector('.people')
let rate = document.querySelector('.rate')

fetch(base_url2 + id + '?language=ru', {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTBjOTVlMDk4NWEyZTMzOGFlYTg1MGE3NmI4ZWJkYSIsInN1YiI6IjY1NTYwNTAzNjdiNjEzNDVkYmMxMzM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vyyF9E6X99GgYd-5H6vLMKAn9jq7ik3ze9-zfOwsQw'
    }
}).then(res => res.json())
  .then(res => reload(res))

function reload(item) {
    title.innerHTML = item.title

    let poster = document.createElement('img')
    let imdb = document.createElement('h1')
    imdb.innerHTML = item.vote_average
    imdb.classList.add('imdb_h1')
    let logo = document.createElement('h1')
    let logo2 = document.createElement('h1')
    logo.innerHTML = item.title
    logo2.innerHTML = item.original_title

    poster.src = `https://image.tmdb.org/t/p/w500${item.poster_path}`
    document.querySelector('.can').append(imdb)
    div_1.prepend(poster)
    div_1_1.prepend(logo, logo2)

    let description = document.createElement('h1')
    description.innerHTML = item.overview.slice(0, 500)
    let button = document.createElement('button')
    let img_watch = document.createElement('img')
    button.innerHTML = 'Смотреть трейлер'
    img_watch.src = '/public/icon/watch.svg'
    button.prepend(img_watch)

    button.classList.add('watch_btn')
    poster.classList.add('poster')
    img_watch.classList.add('img_watch')
    description.classList.add('description')
    logo.classList.add('logo')
    logo2.classList.add('logo2')

    div_1_1.append(description, button)
    const data = {

        datasets: [{
          label: 'IMBD',
          data: [item.vote_average, 10-item.vote_average],
          backgroundColor: [
            '#4BCB36',
            'rgba(75, 203, 54, 0.30)',
          ],
          borderWidth: 0, 
          border: false,
          hoverOffset: 0
        }],
      };
    const chart = new Chart(document.querySelector('#acquisitions'), {
        type: 'doughnut',
        data: data,
        options: {
          cutout: 10,
          animation: {
            animateScale: true
          },
          plugins: {
            customCanvasBackgroundColor: {
              color: 'rgba(75, 203, 54, 0.30)',
            }
          }  
        },
        },
      );
    people.innerHTML = Math.floor(item.popularity)
    rate.innerHTML = `${Math.floor(item.vote_average * 10)}`
    document.querySelector('.pop_hov').style.width = `${rate}`

    let span1 = document.querySelector('.spann1')
    let span2 = document.querySelector('.spann2')
    let span3 = document.querySelector('.spann3')
    let span4 = document.querySelector('.spann4')
    let span5 = document.querySelector('.spann5')
    let span6 = document.querySelector('.spann6')
    let span7 = document.querySelector('.spann7')
    let span8 = document.querySelector('.spann8')
    let span9 = document.querySelector('.spann9')
    let span10 = document.querySelector('.spann10')
    let span11 = document.querySelector('.spann11')
    let span12 = document.querySelector('.spann12')
    let span13 = document.querySelector('.spann13')
    let span14 = document.querySelector('.spann14')
    let span15 = document.querySelector('.spann15')
    let span16 = document.querySelector('.spann16')

    span1.innerHTML = item.release_date
    span2.innerHTML = item.spoken_languages.english_name
    span3.innerHTML = item.tagline
    span4.innerHTML = `${item.production_companies[0].name}, ${item.production_companies[1].name}`
    span5.innerHTML = `${item.production_companies[0].name}, ${item.production_companies[1].name}`
    span6.innerHTML = `${item.production_companies[0].name}, ${item.production_companies[1].name}`
    span7.innerHTML = `${item.production_companies[0].name}, ${item.production_companies[1].name}`
    span8.innerHTML = `${item.production_companies[0].name}, ${item.production_companies[1].name}`
    span9.innerHTML = `${item.production_companies[0].name}, ${item.production_companies[1].name}`
    span10.innerHTML = 1
    span11.innerHTML = 1
    span12.innerHTML = 1
    span13.innerHTML = 1
    span14.innerHTML = 1
    span15.innerHTML = 1
    span16.innerHTML = 1
}