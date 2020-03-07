(function (t) {

  let img = document.querySelectorAll('.slider__li')
  let btn = document.querySelectorAll('.slider__btn')
  let page = document.querySelectorAll('.slider__page_li')
  let index = 0
  let interval = null

  function target() {
    prevClass(img, index, 'slider__li')
    prevClass(page, index, 'slider__page_li')
    if (this.dataset.target === 'next') {
      index++
      if (index >= img.length) {
        index = 0
      }
    } else if (this.dataset.target === 'prev') {
      index--
      if (index < 0) {
        index = img.length - 1
      }
    } else {
      index = parseInt(this.dataset.target)
    }
    nextClass(img, index, 'slider__li slider__li_active')
    nextClass(page, index, 'slider__page_li slider__page_li_active')
  }

  function moveInterval() {
    prevClass(img, index, 'slider__li')
    prevClass(page, index, 'slider__page_li')
    index++
    if (index >= img.length) {
      index = 0
    }
    nextClass(img, index, 'slider__li slider__li_active')
    nextClass(page, index, 'slider__page_li slider__page_li_active')
  }

  function prevClass(obj, index, strClass) {
    obj[index].className = strClass
  }

  function nextClass(obj, index, strClass) {
    obj[index].className = strClass
  }

  function startSlide(time) {
    interval = setInterval(moveInterval, time)
  }

  function stopSlide() {
    clearInterval(interval)
  }

  Array.prototype.map.call(page, function (e) {
    e.addEventListener('click', target)
    e.addEventListener('mouseenter', stopSlide)
    e.addEventListener('mouseleave', function () {
      startSlide(3000)
    })
  })

  Array.prototype.map.call(btn, function (e) {
    e.addEventListener('click', target)
    e.addEventListener('mouseenter', stopSlide)
    e.addEventListener('mouseleave', function () {
      startSlide(3000)
    })
  })

  startSlide(t)

})(3000)