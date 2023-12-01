let loginBtn = document.querySelector('.sign')
let confirmBtn = document.querySelector('.prodol')
let reqToken = ''
let API_KEY =
            "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTBjOTVlMDk4NWEyZTMzOGFlYTg1MGE3NmI4ZWJkYSIsInN1YiI6IjY1NTYwNTAzNjdiNjEzNDVkYmMxMzM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8vyyF9E6X99GgYd-5H6vLMKAn9jq7ik3ze9-zfOwsQw"
    loginBtn.onclick = () => {
        fetch('https://api.themoviedb.org/4/auth/request_token', {
            method: 'POST',
            dataType: 'json',
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                'Content-Type': "application/json"
            },
            start_time: new Date().getTime()
        })
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                reqToken = res.request_token
                console.log(reqToken);
                window.open(`https://www.themoviedb.org/auth/access?request_token=${res.request_token}`)
            }
        })
    }
    confirmBtn.onclick = () => {
        fetch(`https://api.themoviedb.org/4/auth/access_token`, {
                method: 'POST',
                dataType: 'json',
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    request_token: reqToken
                }),
                start_time: new Date().getTime()
            })
            .then(res => res.json())
            .then(res => {
                if (res.success) {
                    localStorage.setItem('user_auth', JSON.stringify(res))
                    location.reload()
                }
            })
    }