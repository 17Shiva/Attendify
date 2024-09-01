const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login_link');
const registerlink =  document.querySelector('.register_link');

registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
})

loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
})
