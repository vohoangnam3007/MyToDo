function addList() {

    // create node
    var myLi = document.createElement('li')
    var myText = document.createElement('p')
    var closeBtn = document.createElement('i')
    var inputValue = document.querySelector('.box-add__input').value 
    var t = document.createTextNode(inputValue)
   


    // add classname
    myLi.classList.add('box-item')
    myText.classList.add('box-item__text')
    closeBtn.classList.add('fa-solid', 'fa-square-xmark', 'box-item__icon')



    // appendchild
    myText.appendChild(t)


    myLi.appendChild(myText)
    myLi.appendChild(closeBtn)

    // closeBtn.classList.add('fa-solid fa-square-xmark box-item__icon')
    // myText.appendChild(inputValue)
    if(inputValue ==='') {
        alert('dit me may')
    } else {
        document.querySelector('.box-list').appendChild(myLi)
    }

    document.querySelector('.box-add__input').value = ''

    // delete list

    var close = document.getElementsByClassName('box-item__icon')

    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = 'none'
        }
    }
}

var input = document.querySelector('.box-add__input')


// add event enter
input.addEventListener('keypress', function(e){
    if(e.key === 'Enter') {
        e.preventDefault();
        addList();
    }
})


