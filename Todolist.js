// store data
const todos = {}
// for Add button

function AddItems(e){
   

    let list = document.createElement("li");
    let Taskval = document.getElementById("inputTask").value;
    // console.log(Taskval);
    // let TaskEdit = document.getElementById();

    let Taskdate = document.getElementById("inputstartDate").value;
    let TaskText = document.createTextNode(Taskval + " " + Taskdate +"  ");
    list.appendChild(TaskText);
    console.log(TaskText);
    
    if(Taskval == "" && Taskdate == "" || Taskval == null && Taskdate == null || Taskval == undefined && Taskdate == undefined){
        console.log("please add some task and date..");
        alert("please add some task and date...");
    }
    else{
        // document.getElementById("openitems").appendChild(list);
        // document.createElement("") = todos;
        const todos ={
            text,
            checked:false,
            date : Date.now(),
        };
    
        todoItems.push(todos);
        console.log(todoItems);

    
       
    }
    

    localStorage.setItem("taskdetails",JSON.stringify(todos));

    // document.getElementById("inputTask").value ="";


    e.preventDefalut();
}


const todoItems= [];

function AddItems(text) {
    const todos ={
        text,
        checked:false,
        date : Date.now(),
    };

    todoItems.push(todos);
    console.log(todoItems);
}



