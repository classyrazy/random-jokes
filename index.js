var jokeElement = document.querySelector("#joke")
var jokeBtn= document.querySelector("#joke-btn")
jokeBtn.addEventListener("click", generateJokes)

generateJokes();

async function generateJokes(){
    var config = {
        headers: {
            Accept: 'application/json',
        },
    }
    var res = await fetch('https://icanhazdadjoke.com', config);
    var data = await res.json();
    console.log(data.joke)
    jokeElement.innerHTML = data.joke;
}
// Using .then
// function generateJokes(){
//     var config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }
//     fetch('https://icanhazdadjoke.com', config)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data.joke)
//         jokeElement.innerHTML = data.joke;
//     })
// }
// console.log(data.joke)