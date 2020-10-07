const imgwrap = document.querySelector('.imgwrap')


const imgArray = [
  'images/pic1.jpg',
  'images/pic2.jpg',
  'images/pic3.jpg',
  'images/pic4.jpg'
]


document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn')) {
    
    document.querySelector('.active').classList.remove('active')
    e.target.classList.add('active')
  
    switch (e.target.innerText) {
      case '1':
        imgwrap.src = imgArray[0]
        break;
      case '2':
        imgwrap.src = imgArray[1]
        break;
      case '3':
        imgwrap.src = imgArray[2]
        break;
      case '4':
        imgwrap.src = imgArray[3]
        break;
    }

  }
})