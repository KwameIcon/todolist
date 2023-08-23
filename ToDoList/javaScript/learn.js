document.addEventListener('DOMContentLoaded', ()=>{
    const item = document.getElementsByTagName('li');
    var i;
    for(i=0;i<item.length;i++){
        var span = document.createElement('span');
        var txt = document.createTextNode('\u00D7')
        span.className = 'close'
        span.appendChild(txt);
        var list = item[i];
        list.appendChild(span);
    // Closing a list of items
        list.addEventListener('click', (e) =>{
            if(e.target.className === 'close'){
                var li = e.target.parentElement;
                li.parentNode.removeChild(li);
            }
        })
    }
    const inputValue = document.getElementById('inputField');
    const btn = document.getElementById('to-do-btn');
    const listContainer = document.querySelector('ul');
    btn.addEventListener('click', () =>{
        if(inputValue.value ==''){
            alert("You cannot add empty elements");
        }else{
        // Creating Elements
        const span = document.createElement('span')
        const close = document.createElement('span')
        const txt = document.createTextNode('\u00D7')
        const li = document.createElement('li')
        // Adding classses
        span.className = 'text';
        close.className = 'close'
        li.className = 'item';
        // Adding text content
        span.textContent = inputValue.value;
        // Appending element
        close.appendChild(txt);
        li.appendChild(span);
        li.appendChild(close);
        listContainer.appendChild(li);

        inputValue.value ='';
        li.addEventListener('click', (e) =>{
            if(e.target.className === 'close'){
                var li = e.target.parentElement;
                li.parentNode.removeChild(li);
            }
        })
    }

    })
    

})