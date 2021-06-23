import React, { useEffect, useState } from 'react';
import { getList, setItem } from '../services/list';

function UseEffectHook2() {
  const [alert, setAlert] = useState(false);
  const [itemInput, setItemInput] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if(mounted) {
          setList(items.list)
        }
      })
    // if(mounted){
    //     setList(dummyList());
    // }
    return () => mounted = false;
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem(itemInput)
      .then(() => {
        setItemInput('');
        setAlert(true);
      })
  };
  
  return(
    <div className="wrapper">
      <h1>My Grocery List</h1>
      <ul>
        {list.map(item => <li key={item.item}>{item.item}</li>)}
      </ul>
      {!alert && <h2> Submit Successful</h2>}
      <form onSubmit={handleSubmit}>
        <label>
          <p>New Item</p>
          <input type="text" onChange={event => setItemInput(event.target.value)} value={itemInput} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UseEffectHook2;