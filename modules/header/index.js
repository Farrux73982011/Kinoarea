let header = document.querySelector('header')

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

header.append(icon, midle, right)
icon.append(icon_img, icon_h1)
icon_h1.append(icon_span)
midle.append(afisha, media, film, actors, news, podborki, category)
right.append(search, sign_in)
search.append(search_img)

let modal = document.querySelector('.modal')

search.onclick = () => {
    modal.classList.add('fade', 'show')
    modal.classList.remove('hide')
    document.querySelector('body').style.overflow = 'hidden'
}