function plus() {
    let butP = document.querySelectorAll('.plus')

    butP.forEach(function (elem) {
        elem.addEventListener('click', function () {
            const price = this.parentNode.parentNode.querySelector('.price')
            const col = this.parentNode.parentNode.querySelector('.col')
            const fullP = this.parentNode.parentNode.querySelector('.fullP')

            col.innerHTML = +col.innerHTML + 1

            fullP.innerHTML = +price.innerHTML * +col.innerHTML


            let inc = parseInt(col.innerHTML)

            let min = document.querySelectorAll('.minus')
            min.forEach(function (y) {
                if (inc > 0) {
                    col.innerHTML = inc
                    let sum = parseFloat(parseFloat(price.innerHTML) * inc).toFixed(2)
                    fullP.innerHTML = sum
                    elem.parentNode.parentNode.querySelector('.minus').removeAttribute("disabled")
                }
            })

        })
    })

}

export default plus