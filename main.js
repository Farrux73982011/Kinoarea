export let base_url = "https://api.themoviedb.org/3"
let cont = document.querySelector('.container')
let cont2 = document.querySelector('.container2')
let show_all = document.querySelector(".show_all")
let bg_dv = document.querySelector('.bg_dv')
let cont3 = document.querySelector('.container3')
let cont5 = document.querySelector('.container5')
let cont4 = document.querySelector('.container4')
let img_post_new = document.querySelectorAll('.img_post_new')


fetch(base_url + '/genre/movie/list?language=ru', {
    headers: {
        Authorization: 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTBjOTVlMDk4NWEyZTMzOGFlYTg1MGE3NmI4ZWJkYSIsInN1YiI6IjY1NTYwNTAzNjdiNjEzNDVkYmMxMzM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vyyF9E6X99GgYd-5H6vLMKAn9jq7ik3ze9-zfOwsQw'
    }
})  .then(res => res.json())
    .then(res => {
        console.log(res);
        reloadgen(res.genres)
    })
fetch(base_url + '/movie/now_playing?language=ru', {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTBjOTVlMDk4NWEyZTMzOGFlYTg1MGE3NmI4ZWJkYSIsInN1YiI6IjY1NTYwNTAzNjdiNjEzNDVkYmMxMzM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vyyF9E6X99GgYd-5H6vLMKAn9jq7ik3ze9-zfOwsQw'
    }
}).then(res => res.json())
  .then(res => reload(res.results.slice(0, 8), cont))
  .then(res => 
    show_all.onclick = () => {
        reload(res.results, cont)
    }
   )
   fetch(base_url + '/discover/movie?include_adult=false&include_video=false&language=ru&page=1&sort_by=popularity.desc', {
    headers: {
        Authorization: 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTBjOTVlMDk4NWEyZTMzOGFlYTg1MGE3NmI4ZWJkYSIsInN1YiI6IjY1NTYwNTAzNjdiNjEzNDVkYmMxMzM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vyyF9E6X99GgYd-5H6vLMKAn9jq7ik3ze9-zfOwsQw'
    }
}).then(res => res.json())
  .then(res => 	{reload(res.results.slice(0, 4), cont3)
    console.log(res);
})

function reload(arr, place) {
    for (let item of arr) {
        let div = document.createElement('div')
        let img = document.createElement('img')
        let hover = document.createElement('div')
        let button = document.createElement('button')
        let vote_average = document.createElement('div')
        let vote_average_h1 = document.createElement('h1')
        let h1 = document.createElement('h1')

        div.style.marginRight = 'none' 
        img.src =`https://image.tmdb.org/t/p/w500${item.poster_path}` 
        img.alt = "" 
        vote_average_h1.innerHTML = item.vote_average
        h1.innerHTML = item.title
        button.innerHTML = 'Карточка фильма'

        img.classList.add('img_post_new')
        h1.classList.add('h1_post_new')
        hover.classList.add('hover_img')
        div.classList.add('place_img')
        button.classList.add('open_card_f')
        vote_average.classList.add('vote_average')
        vote_average_h1.classList.add('vote_average_h1')
        place.append(div)
        div.append(img, hover, h1, vote_average)
        hover.append(button)
        vote_average.append(vote_average_h1)

        let joker = document.querySelector('.joker')

        div.onmouseenter = () => {
            document.querySelector('body').style.background = `url('https://image.tmdb.org/t/p/original${item.backdrop_path}')`
        }

        div.onclick = () => {
            // location.assign('/pages/filmpage/?id=' + item.id, '_blank')
            window.open(
                '/pages/filmpage/?id=' + item.id,
                '_blank'
              );
        }
    }
}


fetch(base_url + '/movie/now_playing?language=ru', {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTBjOTVlMDk4NWEyZTMzOGFlYTg1MGE3NmI4ZWJkYSIsInN1YiI6IjY1NTYwNTAzNjdiNjEzNDVkYmMxMzM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vyyF9E6X99GgYd-5H6vLMKAn9jq7ik3ze9-zfOwsQw'
    }
}).then(res => res.json())
  .then(res => reload2(res.results, cont2))

  function reload2(arr, place) {
    for (let item of arr) {
        let div = document.createElement('div')
        let img = document.createElement('img')
        let h1 = document.createElement('h1')
        let hover = document.createElement('div')
        let button = document.createElement('img')

        button.src = '/public/icon/play.svg'
        div.style.marginRight = 'none' 
        img.src =`https://image.tmdb.org/t/p/w500${item.backdrop_path}` 
        h1.innerHTML = item.title
        div.dataset.move_id = item.id

        h1.classList.add('h1_post_new2')
        hover.classList.add('hover_img2')
        img.classList.add('img_post_new2')
        div.classList.add('place_img2')
        place.append(div)
        div.append(img, h1, hover)
        hover.append(button)

        div.onclick = () => {
            let id_move = 0
            hover_img2.forEach(el => el.style.opacity = '1')
            id_move = div.getAttribute('data-move_id')
            div.style.opacity = '1'
            fetch(base_url + '/movie/' + id_move +'/videos', {
                headers: {
                    Authorization: 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTBjOTVlMDk4NWEyZTMzOGFlYTg1MGE3NmI4ZWJkYSIsInN1YiI6IjY1NTYwNTAzNjdiNjEzNDVkYmMxMzM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vyyF9E6X99GgYd-5H6vLMKAn9jq7ik3ze9-zfOwsQw'
                }
            }).then(res => res.json())
              .then(res => {
                let rnd = Math.floor(Math.random() * res.results.length)
                youtube.src = `https://www.youtube.com/embed/${res.results[rnd].key}`
              })
        }
    }
}

  let hover_img2 = document.querySelectorAll('.hover_img2')
  let yt_ss = 'https://www.youtube.com/embed/'
  let tr_h1 = document.querySelector('.tr_h1')
  let tr_header = document.querySelector('.tr_header')
  let youtube = document.querySelector('.youtube')
    console.log(hover_img2);
  hover_img2.forEach(btn => {
      btn.onclick = () => {
          hover_img2.forEach(el => el.style.opacity = '1')
          let id_move = btn.getAttribute('data-move_id')
          btn.style.opacity = '1'
          fetch(base_url + '/movie/' + id_move +'?api_key=790c95e0985a2e338aea850a76b8ebda&append_to_response=videos', {
              headers: {
                  Authorization: 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTBjOTVlMDk4NWEyZTMzOGFlYTg1MGE3NmI4ZWJkYSIsInN1YiI6IjY1NTYwNTAzNjdiNjEzNDVkYmMxMzM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vyyF9E6X99GgYd-5H6vLMKAn9jq7ik3ze9-zfOwsQw'
              }
          }).then(res => res.json())
            .then(res => {
                // tr_h1.innerHTML = res.results.title
                youtube.src = `https://www.youtube.com/embed/${res.results[0].key}`
            })
      }
  })

fetch(base_url + '/person/popular?language=ru&page=1', {
    headers: {
        Authorization: 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTBjOTVlMDk4NWEyZTMzOGFlYTg1MGE3NmI4ZWJkYSIsInN1YiI6IjY1NTYwNTAzNjdiNjEzNDVkYmMxMzM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vyyF9E6X99GgYd-5H6vLMKAn9jq7ik3ze9-zfOwsQw'
    }
}).then(res => res.json())
.then(res => reload4(res.results.slice(0, 2), cont4))

function reload4(arr, place) {
    for (let item of arr) {
        let div = document.createElement('div')
        let img = document.createElement('img')
        let h1 = document.createElement('h1')
        let h2 = document.createElement('h1')

        img.src =`https://image.tmdb.org/t/p/w500${item.profile_path}` 
        img.alt = "" 
        h1.innerHTML = item.name
        h2.innerHTML = item.name

        img.classList.add('img_post_new4')
        h1.classList.add('h1_post_new4')
        h2.classList.add('h2_post_new4')
        div.classList.add('place_img4')
        place.append(div)
        div.append(img, h1, h2)

        div.onclick = () => {
            // location.assign('/pages/filmpage/?id=' + item.id, '_blank')
            window.open(
                '/pages/actor_page/?id=' + item.id,
                '_blank'
              );
        }
    }
}

fetch(base_url + '/person/popular?language=ru&page=1', {
    headers: {
        Authorization: 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTBjOTVlMDk4NWEyZTMzOGFlYTg1MGE3NmI4ZWJkYSIsInN1YiI6IjY1NTYwNTAzNjdiNjEzNDVkYmMxMzM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vyyF9E6X99GgYd-5H6vLMKAn9jq7ik3ze9-zfOwsQw'
    }
}).then(res => res.json())
.then(res => reload5(res.results.slice(2, 20), cont5))

function reload5(arr, place) {
    for(let item of arr){
        let div = document.createElement('div')
        let h1 = document.createElement('h1')
        let h2 = document.createElement('h1')

        h1.innerHTML = item.name
        h2.innerHTML = item.name

        h1.classList.add('h1_post_new5')
        h2.classList.add('h2_post_new5')
        div.classList.add('place_img5')
        place.append(div)
        div.append(h2, h1)

        div.onclick = () => {
            // location.assign('/pages/filmpage/?id=' + item.id, '_blank')
            window.open(
                '/pages/actor_page/?id=' + item.id,
                '_blank'
              );
        }
    }
}
let modal = document.querySelector('.modal')
let close_btns = document.querySelector('.modal__close')

close_btns.onclick = () => {
    modal.classList.remove('fade', 'show')
    document.querySelector('body').style.overflow = 'scroll'
}



let all_h1_now = document.querySelector('.galvall_h1_now')

function reloadgen(arr) {
    for (let item of arr) {
        let h1 = document.createElement('h1')

        h1.innerHTML = item.name
        h1.classList.add('alllb')

        all_h1_now.append(h1)
    }
}