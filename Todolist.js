let todoItems = []; 
var taskdetails  = [];
var completedTask = [];
let EditIndex 
let editdata


function AddItems(){
    console.log("EditIndex",EditIndex,editdata)   
    
 if(EditIndex){
    console.log("editIndex",EditIndex)
    let taskdata = {
        taskinput: document.getElementById("inputTask").value,
        taskdate: document.getElementById("inputstartDate").value,
      };
      todoItems[EditIndex] = taskdata;
      localStorage.setItem("taskdetails", JSON.stringify(todoItems));
    taskdetails = JSON.parse(localStorage.getItem("taskdetails"));
 }
 
 else{ 
    let taskdatas = [];

  let taskdata = {
    taskinput: document.getElementById("inputTask").value,
    taskdate: document.getElementById("inputstartDate").value,
  };
  console.log("taskdata",taskdata)
//   taskdetails = JSON.parse(localStorage.getItem("taskdetails")); 
  if (!taskdetails) {
    todoItems.push(taskdata);
    console.log("todoItems",todoItems)
    localStorage.setItem("taskdetails", JSON.stringify(todoItems));
    taskdetails = JSON.parse(localStorage.getItem("taskdetails"));
  }
  else{
    todoItems.push(taskdata);
    localStorage.setItem("taskdetails", JSON.stringify(todoItems));
    taskdetails = JSON.parse(localStorage.getItem("taskdetails"));
  }
}    
  Show();
  EditIndex? document.getElementById("inputTask").value="":null,
  EditIndex? document.getElementById("inputstartDate").value="":null;
 
  EditIndex = undefined

 }
 function Show(){
    let table = document.getElementById("openitems");
  
      taskdetails = JSON.parse(localStorage.getItem("taskdetails"));
      console.log("taskdetails",taskdetails)
  
      table.innerHTML = taskdetails.map((val,index)=>{
          return(
             
             ` <tr>
                  <td>${val.taskinput}</td>
                  <td>${val.taskdate}</td>
                  <td><button onclick="onEdit(${index})">Edit</button></td>
                  <td><button onclick="onComplete(${index})">Completed</button></td>
              </tr>`
            
          )
      })
      todoItems=taskdetails
  }

  function onComplete(Ind){
    // taskdetails = JSON.parse(localStorage.getItem("taskdetails"));
    const remainingTask = taskdetails.filter((val,index)=>index!=Ind)
    const CompletedTaskdata = taskdetails.find((val,index)=>index==Ind)
    console.log("Index",Ind,'CompletedTaskdata',CompletedTaskdata,"remainingTask",remainingTask)


    completedTask.push(CompletedTaskdata)

    console.log("completedTask ",completedTask)

    localStorage.setItem("taskdetails",JSON.stringify(remainingTask))
    localStorage.setItem("completedTask",JSON.stringify(completedTask))
    const completedTaskarr = JSON.parse(localStorage.getItem("completedTask"))

    table = document.getElementById("closeitems")
    table.innerHTML =  completedTaskarr.map((val,index)=>{
        return(
            `<tr>
                 <td>${val.taskinput}</td>
                 <td>${val.taskdate}</td>
                 <td><button onclick="onRedo(${index})">redo</button></td>
             </tr>`
         )        
    })
    Show()
  }

    function onRedo(ind){
        
    let completedTaskarr = JSON.parse(localStorage.getItem("completedTask"))

    console.log("completedTaskarr",completedTaskarr)

    const taskDone = completedTaskarr.filter((val,index)=>index!=ind)
    const redoTask = completedTaskarr.find((val,index)=>index==ind)

    todoItems.push(redoTask)
    console.log("taskDone",taskDone)

    localStorage.setItem("taskdetails",JSON.stringify(todoItems))
    localStorage.setItem("completedTask",JSON.stringify(taskDone))
     completedTaskarr = JSON.parse(localStorage.getItem("completedTask"))

    table = document.getElementById("closeitems")
    table.innerHTML =  completedTaskarr.map((val,index)=>{
        return(
            `<tr>
                    <td>${val.taskinput}</td>
                    <td>${val.taskdate}</td>
                    <td><button onclick="onRedo(${index})">redo</button></td>
                </tr>`
            )        
    })
    Show()
    completedTask = taskDone
    }

    function onEdit(ind){
        EditIndex = ind
      taskdetails = JSON.parse(localStorage.getItem("taskdetails"));
       editdata = taskdetails.find((value,index)=>ind==index)
      console.log("editdata",editdata)

      document.getElementById("inputTask").value = editdata.taskinput;
      document.getElementById("inputstartDate").value = editdata.taskdate;


    }