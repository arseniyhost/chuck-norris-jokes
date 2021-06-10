export const getJoke = (setFun) => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(result => {
            setFun(result.value)
        })
}

export const getUrlIcon = (setFun) => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(result => {
            setFun(result.icon_url);
        })
}

export const getCategories = (setFun) => {
    fetch('https://api.chucknorris.io/jokes/categories')
        .then(res => res.json())
        .then(result => {
            setFun(result);
        })
}

export const getRandomJokeCategories = (category, setFun) => {
    fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then(res => res.json())
        .then(result => {
            setFun(result.value)
        })
}
