let base_url2 = "https://api.themoviedb.org/3/movie/"
let id = location.search.split('=').at(-1)
import Chart from 'chart.js/auto';
import { reload } from '/modules/card';
let title = document.querySelector('title')
let text1 = document.querySelector('.text1')
let text2 = document.querySelector('.text2')
let container = document.querySelector('.container')
let div_1 = document.querySelector('.div_1')
let div_1_1 = document.querySelector('.div_1_1')
let people = document.querySelector('.people')
let rate = document.querySelector('.rate')
let joker = document.querySelector('.joker')
let actors_div = document.querySelector('.actors_div')
let posters_div = document.querySelector('.posters_div')
let cadr_div = document.querySelector('.cadr_div')

fetch(base_url2 + id + '?language=ru', {
		headers: {
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTBjOTVlMDk4NWEyZTMzOGFlYTg1MGE3NmI4ZWJkYSIsInN1YiI6IjY1NTYwNTAzNjdiNjEzNDVkYmMxMzM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vyyF9E6X99GgYd-5H6vLMKAn9jq7ik3ze9-zfOwsQw'
		}
	}).then(res => res.json())
	.then(res => reload7(res))

function reload7(item) {
	title.innerHTML = item.title
	document.querySelector('.name_cadr').innerHTML = item.title

	let poster = document.createElement('img')
	let imdb = document.createElement('h1')
	imdb.innerHTML = item.vote_average
	imdb.classList.add('imdb_h1')
	let logo = document.createElement('h1')
	let logo2 = document.createElement('h1')
	logo.innerHTML = item.title
	let a = document.createElement('a')
	logo2.innerHTML = item.original_title

	document.querySelector('body').style.background = `url('https://image.tmdb.org/t/p/original${item.backdrop_path}')`
	poster.src = `https://image.tmdb.org/t/p/w500${item.poster_path}`
	document.querySelector('.can').append(imdb)
	div_1.prepend(poster)
	div_1_1.prepend(logo, logo2)

	let description = document.createElement('h1')
	description.innerHTML = item.overview.slice(0, 500)
	let button = document.createElement('button')
	let img_watch = document.createElement('img')
	a.innerHTML = 'Смотреть трейлер'
	a.href = '#youtube'
	a.classList.add('watch_a')
	img_watch.src = '/public/icon/watch.svg'
	button.prepend(img_watch)

	button.classList.add('watch_btn')
	poster.classList.add('poster')
	img_watch.classList.add('img_watch')
	description.classList.add('description')
	logo.classList.add('logo')
	logo2.classList.add('logo2')

	div_1_1.append(description, button)
	button.append(a)
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


	let homepage = document.createElement('span')
	// let home_a = document.querySelector('a')
	let belong = document.createElement('span')
	let tagline = document.createElement('span')
	let budget = document.createElement('span')
	let genres = document.createElement('span')
	let originallang = document.createElement('span')
	let titles = document.createElement('span')
	let org_title = document.createElement('span')
	
	let voteave = document.createElement('span')
	let popularity = document.createElement('span')
	let status = document.createElement('span')
	let spoke_lang = document.createElement('span')
	let runtime = document.createElement('span')
	let release_date = document.createElement('span')
	let product_comp = document.createElement('span')
	let product_coun = document.createElement('span')

	// home_a.innerHTML = `${item.homepage} <br>`
	// home_a.href = 
	homepage.innerHTML = `Главная страница: ${item.homepage} <br>`
	belong.innerHTML = `Входит в коллекцию: ${item.belongs_to_collection} <br>`
	tagline.innerHTML = `Слоган: ${item.tagline} <br>`
	budget.innerHTML = `Бюджет: ${item.budget} <br>`
	genres.innerHTML = `Жанры: ${item.genres[0].name} <br>`
	originallang.innerHTML = `Оригинальный язык${item.original_language} <br>`
	titles.innerHTML = `Заголовок: ${item.title} <br>`
	org_title.innerHTML = `Оригиналное название: ${item.original_title}`

	voteave.innerHTML = `Среднее кол голосов: ${item.vote_average} <br>`
	popularity.innerHTML = `Популярность: ${Math.floor(item.popularity)} <br>`
	status.innerHTML = `Положение дел: ${item.status} <br>`
	spoke_lang.innerHTML = `Разговорные языки: ${item.original_language} <br>`
	runtime.innerHTML = `Время выполнение: ${item.runtime}мин <br>`
	release_date.innerHTML = `Дата выпуска: ${item.release_date} <br>`
	product_comp.innerHTML = `Производственная компания: ${item.production_companies[0].name} <br>`
	product_coun.innerHTML = `Страна производства: ${item.production_countries[0].name} <br>`

	// homepage.append(home_a)
	text1.append(homepage, belong, tagline, budget, genres, originallang, titles, org_title)
	text2.append(voteave, popularity, status, spoke_lang, runtime, release_date, product_comp, product_coun)

}

let youtube = document.querySelector('.youtube2')

fetch(base_url2 + id + '?api_key=790c95e0985a2e338aea850a76b8ebda&append_to_response=videos', {
		headers: {
			Authorization: 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTBjOTVlMDk4NWEyZTMzOGFlYTg1MGE3NmI4ZWJkYSIsInN1YiI6IjY1NTYwNTAzNjdiNjEzNDVkYmMxMzM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vyyF9E6X99GgYd-5H6vLMKAn9jq7ik3ze9-zfOwsQw'
		}
	}).then(res => res.json())
	.then(res => {
		let rnd = Math.floor(Math.random() * res.videos.results.length)
		youtube.src = `https://www.youtube.com/embed/${res.videos.results[rnd].key}`
	  })

fetch(base_url2 + id + '/credits', {
	headers: {
		Authorization: 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTBjOTVlMDk4NWEyZTMzOGFlYTg1MGE3NmI4ZWJkYSIsInN1YiI6IjY1NTYwNTAzNjdiNjEzNDVkYmMxMzM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vyyF9E6X99GgYd-5H6vLMKAn9jq7ik3ze9-zfOwsQw'
	}
}).then(res => res.json())
.then(res => {
	let cast = res.cast
	reloadactors(cast.slice(0, 10))
})

function reloadactors(arr) {
	for(let item of arr){
		let div = document.createElement('div')
		let img = document.createElement('img')
		let h1 = document.createElement('h1')
		let h2 = document.createElement('h2')

		img.src = `https://image.tmdb.org/t/p/w500${item.profile_path}`
		h1.innerHTML = item.name
		h2.innerHTML = item.character

		div.classList.add('actor')

		div.append(img, h1, h2)
		actors_div.append(div)

		div.onclick = () => {
            // location.assign('/pages/filmpage/?id=' + item.id, '_blank')
            window.open(
                '/pages/actor_page/?id=' + item.id,
                '_blank'
              );
        }
	}
}

fetch(base_url2 + id + '/images', {
	headers: {
		Authorization: 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTBjOTVlMDk4NWEyZTMzOGFlYTg1MGE3NmI4ZWJkYSIsInN1YiI6IjY1NTYwNTAzNjdiNjEzNDVkYmMxMzM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vyyF9E6X99GgYd-5H6vLMKAn9jq7ik3ze9-zfOwsQw'
	}
}).then(res => res.json())
.then(res => {
	reloadposter(res.posters)
	reloadbg(res.backdrops)
})

function reloadposter(arr) {
		let rnd = Math.floor(Math.random() * arr.length)
		let rnd2 = Math.floor(Math.random() * arr.length)
		let rnd3 = Math.floor(Math.random() * arr.length)
		let rnd4 = Math.floor(Math.random() * arr.length)
		let img = document.createElement('img')
		let img2 = document.createElement('img')
		let img3 = document.createElement('img')
		let img4 = document.createElement('img')

		img.classList.add('posters')
		img2.classList.add('posters')
		img3.classList.add('posters')
		img4.classList.add('posters')
		img.src = `https://image.tmdb.org/t/p/w500${arr[rnd].file_path}`
		img2.src = `https://image.tmdb.org/t/p/w500${arr[rnd2].file_path}`
		img3.src = `https://image.tmdb.org/t/p/w500${arr[rnd3].file_path}`
		img4.src = `https://image.tmdb.org/t/p/w500${arr[rnd4].file_path}`

		posters_div.append(img, img2, img3, img4)
}
function reloadbg(arr) {
	let rnd = Math.floor(Math.random() * arr.length)
	let rnd2 = Math.floor(Math.random() * arr.length)
	let rnd3 = Math.floor(Math.random() * arr.length)
	let rnd4 = Math.floor(Math.random() * arr.length)
	let rnd5 = Math.floor(Math.random() * arr.length)
	let rnd6 = Math.floor(Math.random() * arr.length)
	let div_up = document.createElement('div')
	let div_down = document.createElement('div')
	let img_up1 = document.createElement('div')
	let img_up2 = document.createElement('div')
	let img_up3 = document.createElement('div')
	let img_down1 = document.createElement('div')
	let img_down2 = document.createElement('div')
	let img_down3 = document.createElement('div')

	img_up1.style.background = `url('https://image.tmdb.org/t/p/original${arr[rnd].file_path}')`
	img_up2.style.background = `url('https://image.tmdb.org/t/p/original${arr[rnd2].file_path}')`
	img_up3.style.background = `url('https://image.tmdb.org/t/p/original${arr[rnd3].file_path}')`
	img_down1.style.background = `url('https://image.tmdb.org/t/p/original${arr[rnd4].file_path}')`
	img_down2.style.background = `url('https://image.tmdb.org/t/p/original${arr[rnd5].file_path}')`
	img_down3.style.background = `url('https://image.tmdb.org/t/p/original${arr[rnd6].file_path}')`

	div_up.classList.add('div_up')
	div_down.classList.add('div_down')
	img_up1.classList.add('img_up1')
	img_up2.classList.add('img_up2')
	img_up3.classList.add('img_up3')
	img_down1.classList.add('img_down1')
	img_down2.classList.add('img_down2')
	img_down3.classList.add('img_down3')

	cadr_div.append(div_up, div_down)
	div_up.append(img_up1, img_up2, img_up3)
	div_down.append(img_down1, img_down2, img_down3)
}
let similar_div = document.querySelector('.similar_div')
fetch(base_url2 + id + '/similar?language=en-US&page=1', {
	headers: {
		Authorization: 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTBjOTVlMDk4NWEyZTMzOGFlYTg1MGE3NmI4ZWJkYSIsInN1YiI6IjY1NTYwNTAzNjdiNjEzNDVkYmMxMzM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vyyF9E6X99GgYd-5H6vLMKAn9jq7ik3ze9-zfOwsQw'
	}
}).then(res => res.json())
	.then(res => {
		console.log(res);
		reload(res.results.splice(0, 4), similar_div)
	})