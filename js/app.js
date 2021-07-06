'use strict'
let form = document.getElementById('form')
let input2=document.getElementById('input2')
function Movie(name,rel){
    this.name=name;
   
    this.rel=rel
Movie.all.push(this);
}
Movie.all=[]
form.addEventListener('submit',sumbmition)
function sumbmition(event){
    event.preventDefault();
    let name=event.target.input1.value;
    
    let rel=event.target.input3.value;
    let movie1= new Movie(name,rel)
    console.log(movie1)
    movie1.render()
localStorage.setItem('silwadi',JSON.stringify(Movie.all))
}

Movie.prototype.render=function(){
    let data = document.getElementById('data')
    let ul=document.createElement('ul')
    data.appendChild(ul)
    let li=document.createElement('li')
    ul.appendChild(li)
    li.innerHTML=`${this.name}             ${this.rel} `
    
}

function getdata(){
   let data=JSON.parse(localStorage.getItem('silwadi'))
    if(data){
        for (let i = 0; i < data.length; i++) {
            let movie1= new Movie(data[i].name,data[i].rel)
            movie1.render()
            
        }
    }
}getdata()
