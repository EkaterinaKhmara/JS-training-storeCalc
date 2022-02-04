function minus(){

    let min = document.querySelectorAll('.minus')

    min.forEach(function (y){
        y.addEventListener('click', function (){
            let price = y.parentNode.parentNode.querySelector('.price')
            let col = y.parentNode.parentNode.querySelector('.col')
            let fullP = y.parentNode.parentNode.querySelector('.fullP')

            col.innerText = +col.innerText-1
            fullP.innerText = +price.innerText * +col.innerText


            let inc = parseInt(col.innerHTML)

            if(inc>0){
                col.innerHTML = inc
                let s = parseFloat(parseFloat(price.innerHTML) * inc).toFixed(2)
                fullP.innerHTML = s
            }

            if(inc==0){
                y.setAttribute("disabled", "disabled");
            }

        })
    })
}

export default minus

