let base_url2 = "https://api.themoviedb.org/3/movie/"
let id = location.search.split('=').at(-1)
import Chart from 'chart.js/auto';
let title = document.querySelector('title')
let container = document.querySelector('.container')
let div_1 = document.querySelector('.div_1')
let div_1_1 = document.querySelector('.div_1_1')
let people = document.querySelector('.people')
let rate = document.querySelector('.rate')
let joker = document.querySelector('.joker')

fetch(base_url2 + id + '?language=ru', {
		headers: {
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTBjOTVlMDk4NWEyZTMzOGFlYTg1MGE3NmI4ZWJkYSIsInN1YiI6IjY1NTYwNTAzNjdiNjEzNDVkYmMxMzM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vyyF9E6X99GgYd-5H6vLMKAn9jq7ik3ze9-zfOwsQw'
		}
	}).then(res => res.json())
	.then(res => reload7(res))

function reload7(item) {
	title.innerHTML = item.title

	let poster = document.createElement('img')
	let imdb = document.createElement('h1')
	imdb.innerHTML = item.vote_average
	imdb.classList.add('imdb_h1')
	let logo = document.createElement('h1')
	let logo2 = document.createElement('h1')
	logo.innerHTML = item.title
	logo2.innerHTML = item.original_title

	joker.src = `https://image.tmdb.org/t/p/orihinal${item.backdrop_path}`
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
			data: [item.vote_average, 10 - item.vote_average],
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
	}, );
	people.innerHTML = Math.floor(item.popularity)
	rate.innerHTML = `${Math.floor(item.vote_average * 10)}`
	document.querySelector('.pop_hov').style.width = `${rate}`
}

let youtube = document.querySelector('.youtube2')

fetch(base_url2 + id + '?api_key=790c95e0985a2e338aea850a76b8ebda&append_to_response=videos', {
		headers: {
			Authorization: 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTBjOTVlMDk4NWEyZTMzOGFlYTg1MGE3NmI4ZWJkYSIsInN1YiI6IjY1NTYwNTAzNjdiNjEzNDVkYmMxMzM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vyyF9E6X99GgYd-5H6vLMKAn9jq7ik3ze9-zfOwsQw'
		}
	}).then(res => res.json()).then(res => console.log(res))
	.then(res => youtube.src = `https://www.youtube.com/embed/${res.videos.results[0]?.key}`)