function plus(){
    let butP = document.querySelectorAll('.plus')

    butP.forEach(function (x){
        x.addEventListener('click', function (){
            let price = this.parentNode.parentNode.querySelector('.price')
            let col = this.parentNode.parentNode.querySelector('.col')
            let fullP = this.parentNode.parentNode.querySelector('.fullP')

            col.innerHTML = +col.innerHTML+1

            fullP.innerHTML = +price.innerHTML * +col.innerHTML


            let inc = parseInt(col.innerHTML)

            let min = document.querySelectorAll('.minus')
            min.forEach(function (y){
                if(inc>0){
                        col.innerHTML = inc
                        let s = parseFloat(parseFloat(price.innerHTML) * inc).toFixed(2)
                        fullP.innerHTML = s
                        x.parentNode.parentNode.querySelector('.minus').removeAttribute("disabled")
                }
            })

        })
    })

}

export default plus