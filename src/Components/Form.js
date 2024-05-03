import { useEffect, useState } from "react";
import { db } from "./Service";
import './Form.css';
function FormAdmin () {
    const [title,setTitle] = useState();
    const [author,setAuthor] = useState();
    const [students,setStudents] = useState([]);

    useEffect (()=>{
        db.book.toArray().then(items=> setStudents(items))

        console.log(students)
    },[] )

    const clearForm = () => {
        setTitle("")
        setAuthor("");
    }


    const save =(title, author) => {
        
            db.book.add({title:title, author:author})
        
            db.book.update({title:title, author:author})
        
        db.book.toArray().then(items=>setStudents(items))
        clearForm();
    }
    
    return (
        <>
        <p>A List of Books</p>
        <table >
            
            
            <tbody>
                {students.map(item =>(
                    <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.author}</td>
                    
                </tr>
                ))}
                
            </tbody>
        </table>
        <select>
            <option>Author Ascending</option>
        </select>
        <p>Add a new Book</p>
        <div>
            <label>Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div>
            <label>Author</label>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
        </div>
        <button onClick={() => save(title,author)}><i class="fa-solid fa-circle-plus"></i>Add</button>


        </>
    );

}

export default FormAdmin
