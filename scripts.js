let arr=[
    {
        id:1,
        name:"john",
        age:"18",
        profession:"developer"
    },
    {
        id:2, 
        name:"jack",
        age:"20", 
        profession:"developer"
    },
    {
        id:3, 
        name:"karen", 
        age:"19",
        profession:"admin"
    }
]

function filter(){
    let prof=document.getElementById("profession").value;
    if(prof=="Profession"){
        return window.alert("Select a profession before clicking the button!!");
    }
    let contain=document.getElementsByClassName("container")[0];
    contain.innerHTML="";
    arr.forEach(function(element){
        if(element.profession==prof){
            show(element);
        }
    });
}

/* <div class="item">
    <span>1:</span>
    <span class="left">Name:John</span>
    <span class="left">Developer</span>
    <span class="left right">Age</span>
</div> */

function show(element){
    
        let div=document.createElement("div");
        div.className="item";
        let span1=document.createElement("span");
        span1.innerText=`${element.id}.`;
        let span2=document.createElement("span");
        span2.innerText=`Name: ${element.name}`;
        span2.className="left";
        let span3=document.createElement("span");
        span3.innerText=`Profession: ${element.profession}`;
        span3.className="left";
        let span4=document.createElement("span");
        span4.innerText=`Age: ${element.age}`;
        span4.className="left";

        div.append(span1);
        div.append(span2);
        div.append(span3);
        div.append(span4);


        let filter=document.getElementsByClassName("container")[0];
        filter.append(div);
        


}

arr.forEach(function(element){
    show(element);
});


function addUser(event){

    event.preventDefault();

    let id=arr.length+1;
    let name=document.getElementById("name").value;
    let prof=document.getElementById("prof").value;
    let age=document.getElementById("age").value;
    let newUser=[{
        id:id,
        name:name,
        age:age,
        profession:prof
    }];
    arr=arr.concat(newUser);
    document.getElementById("name").value = "";
    document.getElementById("prof").value = "";
    document.getElementById("age").value = "";

    let contain=document.getElementsByClassName("container")[0];
    contain.innerHTML="";
    arr.forEach(function(element){
        show(element);
    });
}
