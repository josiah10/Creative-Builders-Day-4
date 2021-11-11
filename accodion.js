// const btn=document.querySelectorAll('.my-button');
const ques=document.querySelectorAll('.cla');

ques.forEach((que)=>{

    const btn=que.querySelector('.my-button');
    btn.addEventListener('click',()=>{
        que.parentElement.classList.toggle('show');
        ques.forEach((list)=>{
            if(list!==que){
                list.parentElement.classList.remove('show')
            }
        })


    })
})

