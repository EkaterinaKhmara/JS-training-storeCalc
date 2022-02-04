function minus() {

    let min = document.querySelectorAll('.minus')

    min.forEach(function (elem) {
        elem.addEventListener('click', function () {
            const price = elem.parentNode.parentNode.querySelector('.price')
            const col = elem.parentNode.parentNode.querySelector('.col')
            const fullP = elem.parentNode.parentNode.querySelector('.fullP')

            col.innerText = +col.innerText - 1
            fullP.innerText = +price.innerText * +col.innerText


            let inc = parseInt(col.innerHTML)

            if (inc > 0) {
                col.innerHTML = inc
                let sum = parseFloat(parseFloat(price.innerHTML) * inc).toFixed(2)
                fullP.innerHTML = sum
            }

            if (inc === 0) {
                elem.setAttribute("disabled", "");
            }

        })
    })

}

export default minus

