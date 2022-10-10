'use strict'
const button1 = document.querySelector('.value-1')
const button2 = document.querySelector('.value-2')
const button3 = document.querySelector('.value-3')
const button4 = document.querySelector('.value-4')
const button5 = document.querySelector('.value-5')
const button6 = document.querySelector('.value-6')
const button7 = document.querySelector('.value-7')
const button8 = document.querySelector('.value-8')
const button9 = document.querySelector('.value-9')
const button0 = document.querySelector('.value-0')
const plusButton = document.querySelector('.plus-btn')
const minusButton = document.querySelector('.minus-btn')
const timesButton = document.querySelector('.times-btn')
const divisionButton = document.querySelector('.division-btn')
const resultBtn = document.querySelector('.result-btn')
const reset = document.querySelector('.reset')
const screenDisplay = document.querySelector('.screen__display')
const screenResult = document.querySelector('.screen__result')
const slideShowImg = document.querySelector('.img-slideshow')

button0.addEventListener('click', function(){ 
  screenDisplay.value += button0.textContent 
})

button1.addEventListener('click', function(){ 
  screenDisplay.value += button1.textContent
})
button2.addEventListener('click', function(){ 
  screenDisplay.value += button2.textContent
})

button3.addEventListener('click', function(){ 
  screenDisplay.value += button3.textContent
})

button4.addEventListener('click', function(){ 
  screenDisplay.value += button4.textContent
})

button5.addEventListener('click', function(){ 
  screenDisplay.value += button5.textContent
})

button6.addEventListener('click', function(){ 
  screenDisplay.value += button6.textContent
})

button7.addEventListener('click', function(){ 
  
  screenDisplay.value += button7.textContent
})

button8.addEventListener('click', function(){ 
  screenDisplay.value += button8.textContent
})

button9.addEventListener('click', function(){ 
  screenDisplay.value += button9.textContent
})

plusButton.addEventListener('click', function(){ 
  screenDisplay.value += plusButton.textContent
})
minusButton.addEventListener('click', function(){ 
  screenDisplay.value += minusButton.textContent
})
timesButton.addEventListener('click', function(){ 
  screenDisplay.value += timesButton.textContent
})
divisionButton.addEventListener('click', function(){ 
  screenDisplay.value += divisionButton.textContent
})


resultBtn.addEventListener('click', function(){ 
 const result = eval(screenDisplay.value)
 screenResult.textContent = result
 
 let generateNum = Math.trunc(Math.random()*18) + 1

 
  slideShowImg.src = `bg${generateNum}.jpg`
  
 
})

reset.addEventListener('click',function(){
  screenDisplay.value = ''
  screenResult.textContent = ''
} )




