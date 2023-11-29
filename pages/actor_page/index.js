let base_url3 = 'https://api.themoviedb.org/3/person/'
let con = document.querySelector('.container')
let title = document.querySelector('title')
let id = location.search.split('=').at(-1)

fetch(base_url3 + id + '?language=ru', {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTBjOTVlMDk4NWEyZTMzOGFlYTg1MGE3NmI4ZWJkYSIsInN1YiI6IjY1NTYwNTAzNjdiNjEzNDVkYmMxMzM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vyyF9E6X99GgYd-5H6vLMKAn9jq7ik3ze9-zfOwsQw'
    }
}).then(res => res.json())
    .then(res => {
        reloadActor(res, con)
        console.log(res);
    })

function reloadActor(arr, place) {
    title.innerHTML = arr.also_known_as[0]
    let poster = document.createElement('img')
    let div = document.createElement('div')
    let title_ac = document.createElement('h1')
    let min_t_ac = document.createElement('h1')
    let div_ib = document.createElement('div')
    let info = document.createElement('h1')
    let span1 = document.createElement('span')
    let span2 = document.createElement('span')
    let span3 = document.createElement('span')
    let span4 = document.createElement('span')
    let span5 = document.createElement('span')
    let span6 = document.createElement('span')
    let div_spans = document.createElement('div')
    let biograf = document.createElement('h1')
    let description = document.createElement('p')
    let izb = document.createElement('h1')
    let gen = ''

    if (arr.gender === 1) {
        gen = 'Женский'
    }else{
        gen = 'Мужской'
    }

    poster.src = `https://image.tmdb.org/t/p/w500${arr.profile_path}`
    title_ac.innerHTML = arr.also_known_as[0]
    min_t_ac.innerHTML = arr.name
    info.innerHTML = 'Информация'
    biograf.innerHTML = 'Биография'
    span1.innerHTML = `Карьера: ${arr.known_for_department}`
    span2.innerHTML = `Пол: ${gen}`
    span3.innerHTML = `Дата рождения:   ${arr.birthday}`
    span4.innerHTML = `Место рождения:   ${arr.place_of_birth}`
    span5.innerHTML = `Также известен как:   ${arr.also_known_as[0]}, ${arr.also_known_as[1]}, ${arr.also_known_as[2]}`
    span6.innerHTML = `Популярность:   ${arr.popularity}`
    description.innerHTML = arr.biography
    izb.innerHTML = `В избранное ${arr.id} человек`

    poster.classList.add('poster')
    div.classList.add('div_vse')
    title_ac.classList.add('title_ac')
    min_t_ac.classList.add('min_t_ac')
    div_ib.classList.add('div_ib')
    info.classList.add('info', 'ib', 'active')
    biograf.classList.add('biograf', 'ib')
    span1.classList.add('span1', 'spans')
    span2.classList.add('span2', 'spans')
    span3.classList.add('span3', 'spans')
    span4.classList.add('span4', 'spans')
    span5.classList.add('span5', 'spans')
    span6.classList.add('span6', 'spans')
    div_spans.classList.add('div_spans')
    description.classList.add('hide', 'description')
    izb.classList.add('izb')


    con.append(poster, div)
    div.append(title_ac, min_t_ac, div_ib, div_spans, description, izb)
    div_ib.append(info, biograf)
    div_spans.append(span1, span2, span3, span4, span5, span6)

    info.onclick = () => {
        info.classList.add('active')
        biograf.classList.remove('active')

        div_spans.classList.remove('hide')
        description.classList.add('hide')
    }
    biograf.onclick = () => {
        biograf.classList.add('active')
        info.classList.remove('active')

        description.classList.remove('hide')
        div_spans.classList.add('hide')
    }
}