import { createContext, useState } from "react";

const Todo = createContext([
    {
        id:0,
        title:"First task todo",
        discripition:"Create your first todo card by clicking on create"
    }
])


function TodoStore(props){

    let [todos , setTodos] = useState([
        {
            id:0,
            title:"First task todo",
            discripition:"Create your first todo card by clicking on create"
        }
    ])

    let [id, setId] = useState(100);

    let handleCreate = (title,description)=>{
        setId(id+1);
        setTodos([...todos,{id, title , description}]);
    }
    
    return(
        <Todo.Provider value={{todos,handleCreate}}>
            {props.children}
        </Todo.Provider>
    )
}

export {Todo, TodoStore};
