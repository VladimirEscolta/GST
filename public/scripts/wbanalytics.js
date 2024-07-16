//block_getdata
let toggle_click = document.querySelectorAll('.block_getdata .data .click');
let data_slide = document.querySelectorAll('.block_getdata .data .slide');
let prev_slide = document.querySelector('.block_getdata .data .prev');
let next_slide = document.querySelector('.block_getdata .data .next');
let currentClick = 0

toggle_click.forEach((element, index) => {
  element.addEventListener("click", function () {
    currentClick = index
    toggle_click.forEach(el => {
      el.style = 'background: inherit;';
    })
    data_slide.forEach(slide => {
      slide.classList.add('hide')
    })
    data_slide[index].classList.remove('hide')
    element.style = 'background: #8346FC;';
  })
});

prev_slide.addEventListener('click', function () {
  if (currentClick > 0) {
    data_slide[currentClick].classList.add('hide')
    data_slide[currentClick-1].classList.remove('hide')
    toggle_click[currentClick].style = 'background: inherit; transition: .5s;'
    toggle_click[currentClick-1].style = 'background: #8346FC; transition: .5s'
    currentClick-=1
  }
  else {
    data_slide[currentClick].classList.add('hide')
    data_slide[toggle_click.length-1].classList.remove('hide')
    toggle_click[currentClick].style = 'background: inherit; transition: .5s;'
    toggle_click[toggle_click.length-1].style = 'background: #8346FC; transition: .5s'
    currentClick=toggle_click.length-1
  }
})

next_slide.addEventListener('click', function () {
  if (currentClick < (toggle_click.length-1)) {
    data_slide[currentClick].classList.add('hide')
    data_slide[currentClick+1].classList.remove('hide')
    toggle_click[currentClick].style = 'background: inherit; transition: .5s;'
    toggle_click[currentClick+1].style = 'background: #8346FC; transition: .5s'
    currentClick+=1
  }
  else {
    data_slide[currentClick].classList.add('hide')
    data_slide[0].classList.remove('hide')
    toggle_click[currentClick].style = 'background: inherit; transition: .5s;'
    toggle_click[0].style = 'background: #8346FC; transition: .5s'
    currentClick=0
  }
})

let posInit = []
let posOut = []

data_slide.forEach((element, index) => {
  element.addEventListener("touchstart", handleStart, false)
  element.addEventListener("touchmove", handleMove, false)
  element.addEventListener("touchend", handleEnd, false)
});

function handleStart(event) {
  posInit = [event.touches[0].clientX, event.touches[0].clientY]
}

function handleEnd(event) {
  posInit = []
}

function handleMove(event) {
  posOut = [event.touches[0].clientX, event.touches[0].clientY];
  if (posOut[0] - posInit[0] < -100) {
    data_slide.forEach((slide, index) => {
      if ((event.target.parentElement.id === slide.id) && (index < 4)) {
        currentClick = index+1
        data_slide[index].classList.add('hide')
        data_slide[index+1].classList.remove('hide')
        toggle_click[index].style = 'background: inherit; transition: .5s;'
        toggle_click[index+1].style = 'background: #8346FC; transition: .5s'
      }
      if ((event.target.parentElement.id === slide.id) && (index === 4)) {
        currentClick = 0
        data_slide[index].classList.add('hide')
        data_slide[0].classList.remove('hide')
        toggle_click[index].style = 'background: inherit; transition: .5s;'
        toggle_click[0].style = 'background: #8346FC; transition: .5s'
      }
    })
  }

  if (posOut[0] - posInit[0] > 100) {
    data_slide.forEach((slide, index) => {
      if ((event.target.parentElement.id === slide.id) && (index > 0)) {
        currentClick = index-1
        data_slide[index].classList.add('hide')
        data_slide[index-1].classList.remove('hide')
        toggle_click[index].style = 'background: inherit; transition: .5s'
        toggle_click[index-1].style = 'background: #8346FC; transition: .5s'
      }
      if ((event.target.parentElement.id === slide.id) && (index === 0)) {
        currentClick = toggle_click.length-1
        data_slide[index].classList.add('hide')
        data_slide[toggle_click.length-1].classList.remove('hide')
        toggle_click[index].style = 'background: inherit; transition: .5s'
        toggle_click[toggle_click.length-1].style = 'background: #8346FC; transition: .5s'
      }
    })
  }
}