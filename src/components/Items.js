import { useState } from "react";
const Items = ({ title,deleteButton,index,update,}) => {
   const[IsEditing,setIsEditing]=useState(true);
   const[newValue,setnewValue]=useState("");
    return (
        <div>
          <input 
          type="text"
          value={newValue !=""? newValue : title}
          onChange={(e)=> setnewValue(e.target.value)}
          disabled={IsEditing}
          />
          <button onClick = {()=> deleteButton(index)}> Delete </button> {""}

          <button onClick= {()=> {setIsEditing(!IsEditing);
           update(index,newValue);
        
        }
    }

        >
            Update</button>
        </div>
      );
}
 
export default Items;