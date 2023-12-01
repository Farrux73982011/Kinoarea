let header = document.querySelector('header')
let API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTBjOTVlMDk4NWEyZTMzOGFlYTg1MGE3NmI4ZWJkYSIsInN1YiI6IjY1NTYwNTAzNjdiNjEzNDVkYmMxMzM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vyyF9E6X99GgYd-5H6vLMKAn9jq7ik3ze9-zfOwsQw"

let icon = document.createElement('div')
let midle = document.createElement('div')
let right = document.createElement('div')
let icon_img = document.createElement('img')
let icon_h1 = document.createElement('h1')
let icon_span = document.createElement('span') 
let afisha = document.createElement('a')
let media = document.createElement('a')
let film = document.createElement('a')
let actors = document.createElement('a')
let news = document.createElement('a')
let podborki = document.createElement('a')
let category = document.createElement('a')
let search = document.createElement('button')
let search_img = document.createElement('img')
let sign_in = document.createElement('button')
let div_user = document.createElement('div')
let img_user = document.createElement('img')
let name_user = document.createElement('h1')
let user_auth = JSON.parse(localStorage.getItem('user_auth')) || null

if (user_auth) {
    fetch(`https://api.themoviedb.org/3/account/${user_auth?.account_id}`, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                'Content-Type': "application/json"
            },
        })
        .then(res => res.json())
        .then(res => {
            sign_in.style.display = 'none'
            console.log(res)
            img_user.src = `https://www.gravatar.com/avatar/${res.avatar.gravatar.hash}`
            name_user.innerHTML = res.username 
        })
}else{
    sign_in.style.display = 'flex'
    div_user.style.display = 'none'
}
console.log(user_auth);
icon.classList.add('icon')
midle.classList.add('midle')
right.classList.add('right')
icon_img.classList.add('icon_img')
icon_h1.classList.add('icon_h1')
icon_span.classList.add('icon_span')
afisha.classList.add('afisha')
media.classList.add('media')
film.classList.add('film')
actors.classList.add('actors')
news.classList.add('news')
podborki.classList.add('podborki')
category.classList.add('category')
search.classList.add('search')
search_img.classList.add('search_img')
sign_in.classList.add('sign_in')
actors.classList.add('header_h1')
afisha.classList.add('header_h1')
media.classList.add('header_h1')
film.classList.add('header_h1')
news.classList.add('header_h1')
podborki.classList.add('header_h1')
category.classList.add('header_h1')
div_user.classList.add('div_user')
img_user.classList.add('img_user')
name_user.classList.add('name_user')

icon_img.src = '/public/favicon/icon.png'
icon_h1.innerHTML = 'Kino'
icon_span.innerHTML = 'area'
afisha.innerHTML = 'Афиша'
media.innerHTML = 'Медиа'
film.innerHTML = 'Фильмы'
actors.innerHTML = 'Актёры'
news.innerHTML = 'Новости'
podborki.innerHTML = 'Подборки'
category.innerHTML = 'Категории'
search_img.src = '/public/icon/search.svg'
sign_in.innerHTML = 'Войти'

sign_in.onclick = () => {
    location.assign('/pages/sign_in/')
}
header.append(icon, midle, right)
icon.append(icon_img, icon_h1)
icon_h1.append(icon_span)
midle.append(afisha, media, film, actors, news, podborki, category)
right.append(search, sign_in, div_user)
div_user.append(img_user, name_user)
search.append(search_img)

let modal = document.querySelector('.modal')

search.onclick = () => {
    modal.classList.add('fade', 'show')
    modal.classList.remove('hide')
    document.querySelector('body').style.overflow = 'hidden'
}
div_user.onclick = () => {
    location.assign('/pages/account_page/')
}