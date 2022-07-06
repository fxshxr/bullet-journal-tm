
var btn = document.querySelector('button')
var table = document.querySelector('.inner_table')
var saved = localStorage.getItem('last');

if (saved) {
	table.innerHTML = saved;
}


var inputAdd = function inputAdd(){
if (event.key ==='Enter'){
    add()
    }
}

function clearInput(){
    var task = document.getElementById('input')
    if(task.value!=''){
        task.value = ""
    }
}

var add = function add(){
    var task = document.getElementById('input').value
    var table_map = [task,' ',' ',' ',' ',' ',' ',' ','delete']
    var class_map = ['task','f','f','f','f','f','f','f','delete']
    if(task==''){
        console.log('empty input')
    } else
    var tag = document.createElement('tr')

    table.appendChild(tag)
    for(var i = 0 ; i<table_map.length;i++){
        var name = document.createElement('th')
        tag.appendChild(name)
        name.classList.add(class_map[i])
        name.innerHTML=table_map[i]
        if (name.classList=='delete'){
            name.setAttribute('onclick','del(this)')
            
        }
    }
    clearInput()
    localStorage.setItem('last', table.innerHTML);


}

function del(btn) {
    var row = btn.parentNode
    row.parentNode.removeChild(row);

  }


table.onclick = function(event){
    let target = event.target
    
    if (target.className=='f') {
        target.classList.add('green')
        localStorage.setItem('last', table.innerHTML);


    }else if (target.className=='f green'){
        target.classList.remove('green')
        target.classList.add('red')
        localStorage.setItem('last', table.innerHTML);


    } else {
        target.classList.remove('red')
        localStorage.setItem('last', table.innerHTML);
        

    } 
}



btn.addEventListener('click',add)

