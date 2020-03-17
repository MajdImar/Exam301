'use strict'
var choosing=['dancing','reading','studying'];

function ListtoDo(list){
    this.list1=list;
    ListtoDo.all.push(this)

}
ListtoDo.all=[];





for (var i=0;i<choosing.length;i++){
    new ListtoDo(choosing[i]);
}
function setchoose() {
    var input1=JSON.stringify(ListtoDo.all)
    localStorage.setItem('input2','input1')
}



var gfor =document.getElementById('todo');
gfor.addEventListener('submit',choosen);
function  choosen(event){
    event.preventDefault();
var ch1=event.target.choose.value;
new ListtoDo(ch1)

setchoose();
}


