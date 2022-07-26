/*  */

const io = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
      });
});

box = document.querySelector('#box1');
io.observe(box);

//여러개 하나를 일단 조작하는것 배워야함


li = document.querySelectorAll('.item > li');
li.forEach( (ele) => {  } )




