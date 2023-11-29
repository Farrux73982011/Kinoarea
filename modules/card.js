export function reload(arr, place) {
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

        div.onclick = () => {
            // location.assign('/pages/filmpage/?id=' + item.id, '_blank')
            window.open(
                '/pages/filmpage/?id=' + item.id,
                '_blank'
              );
        }
    }
}