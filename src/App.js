import Input from './components/Input';
import Items from './components/Items';
import './App.css';
import { useState } from 'react';

function App() {
const[List,setList]=useState([
  {name:'Hay',complete:true},
  {name:'Nour',complete:true},
  {name:'Salman',complete:false},
  {name:'kawther',complete:false},
  
]);
const[IsEdit,setIsEdit]=useState(false)
function createItems(InputValue){
  const newList=[...List,{name:InputValue,complete:false}]
  setList(newList)
}

function deleteItems (index){
 const newList=[...List]
 newList.splice (index,1)
 setList(newList)
}

function update(index,update){
  const newList = [...List];
  const item = newList[index];
  item.name = update;
   setList(newList)
   setIsEdit(true);
}
console.log(List);



  return (
  
    <div className="App">
      <Input CreateInputButton={createItems}/>
    
     {
      List?.map((info,index)=>
      
      <Items title={info.name} complete={info.complete} key={index} 
      deleteButton={deleteItems} index={index}
      update={update}
      setIsEdit={setIsEdit}
       />
      
      )
     
     }
    

    </div>
  );
}

export default App;
