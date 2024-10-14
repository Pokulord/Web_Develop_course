const FormBlock = document.getElementById('form_section');

document.addEventListener('scroll', onScroll);

function onScroll() {
  const posTop = FormBlock.getBoundingClientRect().top;
  
  if(posTop + FormBlock.clientHeight <= window.innerHeight && posTop >= 0) {
    FormBlock.classList.add('time_to_go');
    FormBlock.classList.remove('no_go')
    document.removeEventListener('scroll', onScroll);
  }
}

const But = document.getElementById("buta");
const head = document.getElementById("headdd");

console.log(head);
But.addEventListener("click", function(){
  head.classList.toggle("change");
});