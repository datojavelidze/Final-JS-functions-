
let inp = document.querySelector('.inputt');
let addBut = document.querySelector('.butt');
let todolist = document.querySelector('.listt');




let addfunc = ()=>{
    let inputVal = inp.value;
    if(inputVal== '')
        {alert('Value is not added!')
}else{
    let addedlist = 
    `<ul class="listing">
        <input value=${inputVal} disabled/>
        <button class="change">Edit</button>
        <button class="del">Delete</button>
    </ul>`;
    todolist.innerHTML += addedlist;
    inp.value = '';
  
}
};


addBut.addEventListener('click', ()=>{
    addfunc();
    editFunc();
    delFunc();
    
});

inp.addEventListener('keypress', (event)=>{
    if (event.key === "Enter"){
        addfunc();
        editFunc();
        delFunc();
    }
    
});

const editFunc = () =>{
    let but1 = document.querySelectorAll('.change');
    for(let elements of but1){
        elements.addEventListener('click',()=>{
        elements.parentNode.childNodes[1].disabled = !elements.parentNode.childNodes[1].disabled;
        elements.innerHTML == 'Edit' ? elements.innerHTML = 'Save' : elements.innerHTML = 'Edit' 
        })
    }
};

const delFunc = () =>{
    let but2 = document.querySelectorAll('.del');
    but2.forEach((delElements)=>{
        delElements.addEventListener('click',()=>{
         const delNow = confirm("Want to delete?");
            if (delNow) {
                delElements.parentNode.remove();
            }
        })
    })
    }


   
   







