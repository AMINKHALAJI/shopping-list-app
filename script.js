const itemInput= document.querySelector('.form-input');
const addItemBtn=document.querySelector('.btn');
const items= document.querySelector('.items');


const clearAllBtn=document.querySelector('.btn-clear');

const filterDiv= document.querySelector('.filter');
const filterInput= document.querySelector('#filter');

const lists=document.querySelectorAll('li');
// console.log(lists[0].innerText);
// console.log(filterInput.value);

const removeItemIcon= document.querySelector('.fa-solid');

// console.log(removeItemIcon.parentElement);


const addItem = (e) => {
    e.preventDefault();
    const newItem= document.createElement('li');
    newItem.innerHTML =
                    `${itemInput.value}
                    <button class="remove-item btn-link text-red">
                    <i class="fa-solid fa-xmark"></i>
                    </button>`;
        items.appendChild(newItem); 
        
        checkUI();
}
addItemBtn.addEventListener('click',addItem );


// remove Item
const clearAllItems = (e) => {
    e.preventDefault();
    
    while((items).firstChild){

        items.removeChild(items.firstChild);
    }
    checkUI();
    // items.innerHTML = '';
    // filterDiv.innerHTML='';
    // clearAllBtn.outerHTML='';
    
    // items.remove();
    // filterDiv.remove();
    // clearAllBtn.remove();
}
clearAllBtn.addEventListener('click',clearAllItems);


const clearEachItem= (e) => {
    e.preventDefault();
    if(e.target.parentElement.classList.contains('remove-item')){
        if(confirm('Are you sure?')){

            e.target.parentElement.parentElement.remove( );
        }
    }
    checkUI();    
}

items.addEventListener('click',clearEachItem);

function checkUI () {
    const allItems= document.querySelectorAll('li');

    if(allItems.length===0){

        filterDiv.style.display='none';
        clearAllBtn.style.display='none';

    }else{
        filterDiv.style.display='block';
        clearAllBtn.style.display='block';

    }

}
checkUI();

const filter=(e)=>{
    
    
    const lists=document.querySelectorAll('li');
    const text=e.target.value.toLowerCase();

    
    
    // console.log(e.target.value.toLowerCase);
    lists.forEach(list => {
        // console.log(list.innerText);
          listName = list.firstChild.textContent.toLowerCase();
        
        if (listName.indexOf(text) != -1) {
            list.style.display = 'flex';
        } else {
            list.style.display = 'none';
        }
    });

    // console.log(lists[0].innerText);
}

filterInput.addEventListener('input',filter);