document.querySelectorAll('.geo-targeting .tabs .tab').forEach( (elem, i) => {
    elem.addEventListener('click', function (){
        let allTabsImages = document.querySelectorAll('.geo-targeting .tab-blocks .tab-block')
        document.querySelectorAll('.geo-targeting .tabs .tab').forEach( (element) => {
          element.classList.remove('active')
        })
        allTabsImages.forEach( (element) => {
          element.classList.remove('active')
        })
        elem.classList.add('active')
        allTabsImages[i].classList.add('active')
    })
})