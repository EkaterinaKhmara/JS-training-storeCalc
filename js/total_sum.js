function total_sum (){

    let butP = document.querySelectorAll('button')

    butP.forEach(function (x){

        x.addEventListener('click', function (){
            let total = document.querySelector('h3')
            let full = document.querySelectorAll('.fullP')
            let sum = 0
            full.forEach(
                function sumNum(value) {
                    sum += +value.innerHTML
                    total.innerHTML = +total.innerHTML
                    total.innerHTML = +sum
                })

                total.innerHTML = parseFloat(sum).toFixed(2)

        })
    })

}

export default total_sum
