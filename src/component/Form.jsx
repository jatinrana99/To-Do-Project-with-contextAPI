import { useContext, useState } from "react";
import { Todo } from "../API/ToDoStore";


// just creating a function
const Form = ()=>{

    let data = useContext(Todo);
    let [title, setTitle] = useState("");
    let [description, setDescription] = useState("");


    const handleSubmit = (e)=>{
        e.preventDefault();
        data.handleCreate(title,description);
    };

    const handleTitle = (e)=>{
        setTitle(e.target.value);
    };

    const handleDescription = (e)=>{
        setDescription(e.target.value);
    };

    return(
        <section>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" onChange={handleTitle}></input>
                <input type="text" placeholder="Description" onChange={handleDescription}></input>
                <button>Create</button>
            </form>
        </section>
    )
}

export default Form;