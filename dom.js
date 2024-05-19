const container=document.getElementById('container')
console.log('parent',container.parentElement)
console.log('Previous Sibling...',container.previousElementSibling)
console.log('Next Sibling...',container.nextElementSibling)
console.log('Children',container.children)

//edit element
const containerText=document.getElementById('container-text')
containerText.innerHTML='Am i really a child?'

//create element
const newHeading=document.createElement('h1')
container.appendChild(newHeading)
newHeading.innerHTML='Introduction'
newHeading.style.color='red'

const button=document.getElementById('button')
button.style.border='none'
button.style.padding='10px 15px'
button.style.background="lightgreen"
button.style.borderRadius="5px"
button.style.cursor="pointer"

button.addEventListener('click',function(){
    button.innerHTML='Clicked'
    button.style.background="green"
    button.style.color=''
})
