/*        event to scroll header  */

if (document.querySelector('header')){
    window.addEventListener('scroll', function (){
        let header = document.querySelector('header')
        if (window.scrollY > 0){
            document.querySelector('header').classList.add('scroll')
            document.body.style.marginTop = `${header.offsetHeight}px`
        } else {
            document.querySelector('header').classList.remove('scroll')
            document.body.style.marginTop = '0'
        }
    })
}

/*        event to scroll header  */


/*     event to scroll images on art-travel page     */

if(document.querySelector('.art-travel2 .art-team .images')) {
    let startCordX = 0
    let drag = function (event){
        event.preventDefault();
        this.scrollLeft = this.scrollLeft + (startCordX - event.clientX);
        startCordX = event.clientX
    }
    document.querySelector('.art-travel2 .art-team .images').addEventListener('mousedown', function (event){
        this.style.cursor = 'grabbing'
        startCordX = event.clientX
        event.stopPropagation();
        this.addEventListener('mousemove', drag)
    })
    document.querySelector('.art-travel2 .art-team .images').addEventListener('mouseup', function (event){
        this.style.cursor = 'grab'
        startCordX = 0
        event.stopPropagation();
        this.removeEventListener('mousemove', drag)
    })
    document.querySelector('.art-travel2 .art-team .images').addEventListener('mouseleave', function (event){
        this.style.cursor = 'grab'
        startCordX = 0
        event.stopPropagation();
        this.removeEventListener('mousemove', drag)
    })
}
/*     event to scroll images on art-travel page     */


/*     event to make slider on art-travel page     */

if (document.querySelector('.art-travel2 .info .container .slider')) {
    let resolution = {
        '0': 1,
        '576': 4,
        '1024': 6
    }
    function replaceNewsToBlocks() {
        let resolutionCount;
        for (let elem in resolution){
            if(window.innerWidth >= elem){
                resolutionCount = resolution[elem]
                continue
            }
        }
        document.querySelectorAll('.art-travel2 .info .container .slider .news').forEach((elem, index) => {
            if (index % resolutionCount === 0) {
                let block = document.createElement('div')
                block.classList.add('block')
                document.querySelector('.info .container .slider').appendChild(block)
            }
            let numberOfBlock = Math.floor(index / resolutionCount)
            document.querySelectorAll('.info .container .slider .block')[numberOfBlock].appendChild(elem)

        })
    }
    replaceNewsToBlocks();
    if ( document.querySelectorAll('.info .container .slider .block').length > 1) {
        let siema = new Siema({
            selector: '.art-travel2 .info .container .slider',
            duration: 200,
            easing: 'ease-out',
            perPage: 1,
            startIndex: 0,
            draggable: true,
            multipleDrag: true,
            threshold: 20,
            loop: false,
            rtl: false,
            onInit: () => {
            },
            onChange: () => {
            },
        });
        document.querySelector('.art-travel2 .info .container .arrows .prev').addEventListener('click', () => siema.prev())
        document.querySelector('.art-travel2 .info .container .arrows .next').addEventListener('click', () => siema.next())
    } else {
        document.querySelector('.art-travel2 .info .container .arrows').remove()
    }
}

/*     event to make slider on art-travel page     */

/*     event to grid news on blog page    */

if (document.querySelector('.blog .elem.small')){
    document.querySelectorAll('.blog .elem.small').forEach( (elem, i)=>{
        switch (i%6){
            case 2:
            case 3:
                elem.style.alignSelf = 'center'
                break
            case 4:
            case 5:
                elem.style.alignSelf = 'flex-start'
                break
        }
    })
}

/*     event to grid news on blog page    */

/*     event to scroll images on blog-level-3 page     */

if (document.querySelector('.blog-level-3 .popular .slider')){
    let slider = document.querySelector('.blog-level-3 .popular .slider');
    let startCordX = 0
    let drag = function (event){
        event.preventDefault();
        this.scrollLeft = this.scrollLeft + (startCordX - event.clientX);
        startCordX = event.clientX
    }
    let startDrag = function (event){
        this.style.cursor = 'grabbing'
        startCordX = event.clientX
        event.stopPropagation();
        this.addEventListener('mousemove', drag)
    }
    let endDrag = function (event){
        this.style.cursor = 'grab'
        startCordX = 0
        event.stopPropagation();
        this.removeEventListener('mousemove', drag)
    }
    slider.querySelector('.wrapper').addEventListener('mousedown', startDrag)
    slider.querySelector('.wrapper').addEventListener('mouseup', endDrag)
    slider.querySelector('.wrapper').addEventListener('mouseleave', endDrag)
    slider.querySelectorAll('.arrows .arrow').forEach(elem => {
        elem.addEventListener('click', function () {
            slider.querySelector('.wrapper').style.scrollBehavior = 'smooth'
            if (elem.classList.contains('next')) {
                slider.querySelector('.wrapper').scrollLeft += slider.querySelector('.wrapper').offsetWidth
            }
            if (elem.classList.contains('prev')) {
                slider.querySelector('.wrapper').scrollLeft -= slider.querySelector('.wrapper').offsetWidth
            }
            slider.querySelector('.wrapper').style.scrollBehavior = 'auto'
        })
    })
}

/*     event to scroll images on blog-level-3 page     */


/*      event to style modules on courses-3-level*/

if (document.querySelector('.courses-3-level .modules')){
    document.querySelectorAll('.courses-3-level .modules .module').forEach( elem => {
        elem.addEventListener('click', () => {
            document.querySelectorAll('.courses-3-level .modules .module').forEach(element => {
                element.classList.remove('selected')
            })
            elem.classList.add('selected')
        })
        elem.querySelector('.index').addEventListener('click', (e) => {
            e.stopPropagation()
            let flag = false;
            if (!elem.classList.contains('selected')) {
                flag = true
            }
            document.querySelectorAll('.courses-3-level .modules .module').forEach(element => {
                element.classList.remove('selected')
            })
            if (flag){
                elem.classList.add('selected')
            }
        })
    })
}

/*      event to style modules on courses-3-level*/

/*      btn to open popup       */

if (document.querySelector('*[data-popup]')){
    document.querySelectorAll('*[data-popup]').forEach( elem => {
        elem.addEventListener('click',() => {
            let popup = document.querySelector(`.${elem.dataset.popup}`),
                checkCloseFlag = false
            popup.classList.add('active')
            if (popup.querySelector('.close')){
                let display = window.getComputedStyle(popup.querySelector('.close')).getPropertyValue('display')
                if (display !== 'none'){
                    checkCloseFlag = true
                }
            }
            if (checkCloseFlag){
                popup.querySelector('.close').addEventListener('click', () => popup.classList.remove('active'))
            } else {
                let checkToClick = function (event){
                    if (event.target.closest(`.${elem.dataset.popup}`) === null){
                        popup.classList.remove('active')
                        window.removeEventListener('mousedown', checkToClick)
                    }
                }
                window.addEventListener('mousedown', checkToClick)
            }
        })
    })
}

/*      btn to open popup       */

document.querySelector('header .menu-burger').addEventListener('click', function(e){
    e.preventDefault();
    document.body.classList.toggle('open')
})

/*      event to move Images    */

if (document.querySelector('.dragged-block')){
    document.querySelectorAll('.dragged-block .drag').forEach( elem => {
            let timer,
                moveFunc = function (event){
                    let rect = elem.getBoundingClientRect();
                    this.style.transform = `perspective(1200px) rotateY(${-((20 * (event.clientX - rect.left) / this.offsetWidth) - 10).toFixed(2)}deg) rotateX(${((20 * (event.clientY - rect.top) / this.offsetHeight) - 10).toFixed(2)}deg) scale3d(1.08, 1.08, 1.08)`
                    this.style.transition = 'none'
                };
        elem.addEventListener('mouseenter', function(event){
            this.style.transition = `all 500ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s`
            this.style.transform = `scale3d(1.08, 1.08, 1.08)`
            setTimeout( () => {
                this.addEventListener('mousemove', moveFunc)
            }, 500)
        })
        elem.addEventListener('mouseleave', function(event){
            this.style.transform = `scale(1) perspective(1200px) rotateY(0) rotateX(0) scale3d(1, 1, 1)`
            this.style.transition = `all 4000ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s`
            clearTimeout(timer)
            timer = setTimeout( () => {
                this.style.transform = ''
                this.style.transition = ''
            }, 4000)
            this.removeEventListener('mousemove', moveFunc)
        })
    })
}

/*      event to move Images    */

/*      event to show and Images*/

if (document.querySelector('.custom-animation') && screen.width >= 576) {
    let checkArr = [];
    let sumOfAllElem = document.querySelectorAll('.custom-animation').length
    let interval = setInterval(() => {
        document.querySelectorAll('.custom-animation:not(.complete-animation)').forEach(elem => {
            if (elem.querySelector('.wrapp').classList.contains('aos-animate')) {
                elem.classList.add('complete-animation')
                if (elem.classList.contains('complete-animation')) {
                    checkArr.push(elem)
                }
                setTimeout(() => {
                    elem.querySelector('.wrapp').style.transform = `skew(30deg) translateX(180%)`
                    elem.querySelector('.wrapp').style.transition = `transform 1000ms`
                    setTimeout(() => {
                        elem.querySelector('.wrapp').style.display = `none`
                        elem.querySelector('.image').style.overflow = 'visible'
                        elem.querySelector('.shadow').style.transition = `opacity 1000ms`
                        elem.querySelector('.shadow').style.opacity = `1`
                    }, 1000)
                }, 1400)
                if (checkArr.length === sumOfAllElem) {
                    clearInterval(interval)
                }
            }
        }, 100)
    })
}

/*      event to showImages*/

/*      event to scroll Images*/
if (document.querySelector('.scroll-block') && screen.width >= 576){
    let heightsOfAllBlock = [];
    document.querySelectorAll('.scroll-block').forEach( elem => {
        let objOfHeight = {}
        objOfHeight.min = elem.offsetTop
        objOfHeight.max = elem.offsetTop + elem.offsetHeight
        objOfHeight.elem = elem
        heightsOfAllBlock.push(objOfHeight)
    })
    window.addEventListener('scroll', (event)=> {
        for(let elem of heightsOfAllBlock){
            let currentHeight = window.scrollY + (screen.height / 2)
            if (currentHeight >= elem.min && currentHeight <= elem.max){
                elem.elem.querySelectorAll('.scrolled').forEach( (block,index) => {
                    block.style.transition = 'transform .8s'
                    if (index % 3 - 1 === 0) {
                        block.style.transform = `translate3d(0px, ${(30 * (window.scrollY - elem.min) / elem.max) - 15}px, 0px)`
                    } else {
                        block.style.transform = `translate3d(0px, ${-(30 * (window.scrollY - elem.min) / elem.max) - 15}px, 0px)`
                    }
                })
            }
        }
    })
}

/*      event to scroll Images*/

/*      event to fade in gallery*/

if (document.querySelector('*[data-aos]')){
    AOS.init({
        delay: 100,
        duration: 1000,
        once: true
    });
}

/*      event to fade in gallery*/