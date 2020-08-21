/*        event to skroll header  */

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

/*        event to skroll header  */


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
    document.querySelector('.blog-level-3 .popular .wrapper').addEventListener('mousedown', startDrag)
    document.querySelector('.blog-level-3 .popular .wrapper').addEventListener('mouseup', endDrag)
    document.querySelector('.blog-level-3 .popular .wrapper').addEventListener('mouseleave', endDrag)
}

/*     event to scroll images on blog-level-3 page     */