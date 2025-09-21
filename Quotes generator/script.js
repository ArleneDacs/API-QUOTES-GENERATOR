const btn = document.querySelector('button');

let content = document.getElementById('qtqt')
let auths = document.getElementById('author')
const url = "https://api.quotable.io/random"

btn.addEventListener('click', () =>{
    fetch(url).then(res => res.json()).then(data => {
        content.innerHTML = `"${data.content}"`;
        auths.innerHTML = `Author: ${data.author}`;
    })
})