

// let netto



const coolors = ['#a9d6e5', '#89c2d9', '#61a5c2', '#468faf', '#2c7da0','#2a6f97', '#014f86','#01497c','#013a63','#012a4a']
const changeColor = () => {
    const num = Math.floor(Math.random() * 10)
    $('body').css('background-color',coolors[num])
}

const socTax = 0.105;
const carePplNum = () => {
    if(!$('#num').val()){
        return 0
    }else{
       return Math.abs(parseInt($('#num').val()))
    }
}

// const carePpl = parseInt(num.value)

$('.btn').click(() => {
    changeColor()
    $('.result').text('0')
    const salary = Math.abs(parseInt($('input').val()))
    if(!salary){
        return ifWrongInput()
}else{
    console.log(carePplNum())
    const carePpl = carePplTax(carePplNum())
    const socTax = salary * 0.105;
    const incTax =  incTaxCalc(salary, socTax, carePplNum())
    if(salary > 1667){
        console.log('more')
        const overhead = salary - 1667
        console.log('overhead ' + overhead)
        const richTax = overhead * 0.23
        console.log(`richTax: ${richTax}`)
        //if socTax = 0 then 50$ - rich tax for every care person?????!!!!!!1
      let  netto = ((salary - socTax) - incTax) - richTax
        console.log(`netto: ${netto}`)
    }else{
        netto = (salary - socTax) - incTax
     
    }
    console.log(`salary = ${salary}, socTax = ${socTax}, carePpl = ${carePpl}, incTax = ${incTax} `)
    console.log(netto)
    $('.result').text((Math.round(netto * 100) / 100).toFixed(2))
    

}

})

function ifWrongInput(){
    $('.wrongInput span').text($('input').val())
    $('.wrongInput').addClass('show')
    setTimeout(() => { $('.wrongInput').removeClass('show')}, 2500)
}


// const incTaxPerc = (salary, type = 'month') => {

//     if(type === 'month' && salary < 1667 || type === 'year' && salary < 20004){
//         return 0.2;
//     }else if(type === 'month' && salary > 1667 || type === 'year' && salary > 20004 && salary <= 62800){
//         return 0.23
//     }else if(type === 'year' && salary > 62800){
//         return 0.31
//     }
// }

const incTaxCalc = (salary, socTax, carePpl) => {
     if(socTax + carePplTax(carePpl) >= 1667 || socTax + carePplTax(carePpl) >= salary){
        return 0
    }
    if(salary < 1667){
        return (salary - (socTax + carePplTax(carePpl))) * 0.2
    }
    
    else{
       console.log((1667 - (socTax + carePplTax(carePpl))) * 0.2)
        return (1667 - (socTax + carePplTax(carePpl))) * 0.2
    }
    
}

const carePplTax = (ppl) => Math.abs(ppl * 250)

//8.6, 58.66 66.6

//41.4 + 8.6 = 50

