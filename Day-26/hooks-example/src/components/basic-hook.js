import React,{useState} from 'react';

const BasicHook = () => {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(10);
    const [todos, setTodos] = useState(["Learning react", "Learning hooks"])

    // console.log(age);
    // if(age==10){
    //     setAge(11);
    // }
    // console.log(age);
    // console.log(todos);

    return ( 
        <div>
            <p>You clicked me {count} number of times</p>
            <button onClick={() => setCount(count+1)}>Click me</button>
            {/* Class Equivalent syntax */}
            {/* <button onClick={()=> this.setState({count:  this.state.count+1})}>Click me</button> */}
        </div>
     );
}
 
export default BasicHook;
