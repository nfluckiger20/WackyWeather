function modify_list(){
    let newName=document.querySelector('#newName').value;
    let li=document.createElement('li');
    li.innerhtml=newName;

    document.querySelector('#nameList').appendChild(li);
}

let new_li= document.getElementById('new_li', modify_list).innerHTML;
