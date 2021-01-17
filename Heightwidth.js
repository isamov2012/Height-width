let inputText=document.getElementById('inputText')
let addButton=document.querySelector('.addButton')
let shopingList=document.getElementsByTagName('ul')[0]
let listItems=document.getElementsByTagName('li')

function textLength(){
    return inputText.value.length
}

function createLi(){
    let li=document.createElement('li')
    li.appendChild(document.createTextNode(inputText.value))
    shopingList.appendChild(li)
    inputText.value=''
}

addButton.addEventListener('click', function(){
    if (textLength()>0){
    createLi()
    }
})
inputText.addEventListener('keypress', function(event){
    if (textLength()>0&&event.which===13){
    createLi()
    }
})

// for (i=0;i<listItems.length;i++){
//     let newItem=listItems[i]
//     newItem.addEventListener('click',function(e){
//         console.log(e.target2)
//         newItem.classList.toggle('done')
//     })
// }
Array.from(listItems).forEach((x)=>{x.addEventListener('click', function(){
    x.classList.toggle('done')
})})