// for Add button

function AddItems(){
// store data
const todoItems= [];

    let list = document.createElement("li");
    let Taskval = document.getElementById("inputTask").value;
    // console.log(Taskval);
    // let TaskEdit = document.getElementById();

    let Taskdate = document.getElementById("inputstartDate").value;
    let TaskText = document.createTextNode(Taskval + " " + Taskdate );
    list.appendChild(TaskText);
    console.log(TaskText);
    
    if(Taskval == "" && Taskdate == "" || Taskval == null && Taskdate == null || Taskval == undefined && Taskdate == undefined){
        console.log("please add some task and date..");
        alert("please add some task and date...");
    }
    else{
        document.getElementById("openitems").appendChild(list);
        // document.createElement("") = todos;
        
        const todos ={
            text: Taskval,
            // checked:false,
            date : Taskdate
        };
    
        todoItems.push(todos);
        console.log(todoItems);
    }
    localStorage.setItem("taskdetails",JSON.stringify(todoItems));
}

// for edit function
function OnEdit(){
    
   let localvalue = JSON.parse(localStorage.getItem("taskdetails"));
   console.log(localvalue);
}
