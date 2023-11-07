/*
1) Дан массив из объектов с полями title и text. Заполните массив сами произвольными данными. 
Ваша задача отрисовать данные на странице в соответствующих тегах (h2 - для title, p - для text)
*/
const data = [
  { title: "Заголовок 1", text: "Текст 1" },
  { title: "Заголовок 2", text: "Текст 2" },
  { title: "Заголовок 3", text: "Текст 3" },
]

const container = document.createElement("div")
data.forEach(item => {
  const h2 = document.createElement("h2");
  h2.textContent = item.title;
  container.append(h2)
  const p = document.createElement("p");
  p.textContent = item.text
  container.append(p)
})
document.body.append(container)

/*
2) Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Ctrl
*/

const divElement = document.getElementsByClassName('element')[0];
divElement.addEventListener('click', function(event){
  if(event.metaKey){
    divElement.style.color = 'red'
  }
})

/*
3) Дан элемент. Сделайте так, чтобы при клике на него и нажатой клавише Ctrl - в его текст записывалось '1', 
при нажатой клавише Alt - '2', а при нажатой клавише Shift - '3'
*/

const divText = document.getElementsByClassName('element')[0];
divText.addEventListener('click', function(event){
  if (event.metaKey) {
    divText.textContent = '1';
  } else if (event.altKey) {
    divText.textContent = '2';
  } else if (event.shiftKey) {
    divText.textContent = '3';
  }
})

/*
4)  Даны абзацы с числами.
 То есть, несколько подобных элементов <p>1</p>. По нажатию на абзац в нем должен появится квадрат числа, которое он содержит.
*/

function showSquare(event) {
  const paragraph = event.target;
  const number = +paragraph.textContent;
  const square = number *number;
  paragraph.textContent = `Квадрат числа ${number} равен ${square}`
}
const numberParagraph = document.querySelectorAll('.paragraph-num');
numberParagraph.forEach(item => {
  item.addEventListener('click', showSquare);
})

/*
5) Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на картинку в console.log выводился ее src. 
*/

const images = document.querySelectorAll('.faculty');
function clickImages(event) {
  console.log(event.target.src)
}
images.forEach(img => {
  img.addEventListener('click', clickImages)
})

/*
6) Даны ссылки с заполненным href. Например <a href="https://google.com">Сайт гугл</a>. 
Привяжите всем ссылкам событие - по наведению на ссылку в конец ее текста дописывается ее href в круглых скобках.
*/
const links = document.querySelectorAll('a');
function hoverLink(event) {
  const link = event.target;
  const href = link.getAttribute('href');
  link.textContent += `(${href})`;
}
links.forEach(link => {
  link.addEventListener('mouseover', hoverLink)
})






