
// const form = document.querySelector('.test-form')
// const inputs = document.querySelector('#top');
// const labe = document.querySelector('label');


// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     console.log(inputs.value)
// })

// inputs.addEventListener('click',(e)=>{
//     console.log('clicked')
// })

const form = document.querySelector('.custom-input')
const input = document.querySelector('#emal')


input.addEventListener('blur', (e)=>{
    console.log('clicked')
  if(e.target.value){
      e.target.classList.add('dirty')
  }else{
      e.target.classList.remove('dirty')
  }
})