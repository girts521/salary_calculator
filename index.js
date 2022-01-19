//Background color changing functionality
const coolors = ['#a9d6e5', '#89c2d9', '#61a5c2', '#468faf', '#2c7da0', '#2a6f97', '#014f86', '#01497c', '#013a63', '#012a4a']
const changeColor = () => {
    const num = Math.floor(Math.random() * 10)
    $('body').css('background-color', coolors[num])
}

const socTax = 0.105;
const carePplNum = () => {
    if (!$('#num').val()) {
        return 0
    } else {
        return Math.abs(parseInt($('#num').val()))
    }
}

//Main click event where the calculations are done
$('.btn').click(() => {
    changeColor()
    $('.result').text('0')
    const salary = Math.abs(parseInt($('input').val()))
    if (!salary) {
        return ifWrongInput()
    } else {
        const socTax = salary * 0.105;
        const incTax = incTaxCalc(salary, socTax, carePplNum())
        if (salary > 1667) {
            const overhead = salary - 1667
            const richTax = overhead * 0.23
            let netto = ((salary - socTax) - incTax) - richTax
            $('.result').text((Math.round(netto * 100) / 100).toFixed(2))
        } else {
            netto = (salary - socTax) - incTax
            $('.result').text((Math.round(netto * 100) / 100).toFixed(2))
        }
    }
})

function ifWrongInput() {
    $('.wrongInput span').text($('input').val())
    $('.wrongInput').addClass('show')
    setTimeout(() => {
        $('.wrongInput').removeClass('show')
    }, 2500)
}

const incTaxCalc = (salary, socTax, carePpl) => {
    if (socTax + carePplTax(carePpl) >= 1667 || socTax + carePplTax(carePpl) >= salary) {
        return 0
    }
    if (salary < 1667) {
        return (salary - (socTax + carePplTax(carePpl))) * 0.2
    } else {
        return (1667 - (socTax + carePplTax(carePpl))) * 0.2
    }
}

const carePplTax = (ppl) => Math.abs(ppl * 250)