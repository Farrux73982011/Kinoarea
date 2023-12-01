let API_KEY =
            "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTBjOTVlMDk4NWEyZTMzOGFlYTg1MGE3NmI4ZWJkYSIsInN1YiI6IjY1NTYwNTAzNjdiNjEzNDVkYmMxMzM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vyyF9E6X99GgYd-5H6vLMKAn9jq7ik3ze9-zfOwsQw"
let txt = document.querySelector('.txt')
let name_people = document.querySelector('.name_people')
let people_img = document.querySelector('.people_img')
let no_bio = document.querySelector('.no_bio')
let modal__close = document.querySelector('.modal__close')
let modal__open = document.querySelector('.modal__open')
let modal = document.querySelector('.modal')
let body = document.querySelector('.body')

if(txt.innerHTML === ''){
    no_bio.style.display = 'block'
}else{
    no_bio.syle.display = 'none'
}
let user_auth = JSON.parse(localStorage.getItem('user_auth')) || null


fetch(`https://api.themoviedb.org/3/account/${user_auth?.account_id}`, {
    headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': "application/json"
    },
})
.then(res => res.json())
.then(res => {
    people_img.src = `https://www.gravatar.com/avatar/${res.avatar.gravatar.hash}`
    name_people.innerHTML = res.username 
})

modal__open.onclick = () => {
    modal.classList.add('fade', 'show')
    modal.classList.remove('hide')
    body.style.overflow = 'hidden'
}
modal__close.onclick = () => {
    modal.classList.remove('fade', 'show')
    body.style.overflow = 'scroll'
}