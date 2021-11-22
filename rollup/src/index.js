import '../src/index.css'

const h1Title = document.createElement('h1')
h1Title.innerText = 'I love JavaScript'
document.body.append(h1Title)
const jsLogoImage = document.createElement('img')
jsLogoImage.classList.add('js-logo')
jsLogoImage.src = '../assets/240px-JavaScript-logo.png'
document.body.append(jsLogoImage)
console.log('Hello World!');
console.log('Goodbye World!');