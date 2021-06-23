import React,{useState,useEffect} from 'react';

const UseEffectHook = () => {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(10);
    const [todos, setTodos] = useState(["Learning react", "Learning hooks"])


    useEffect(()=>{
        console.log("Use effect is running");
        document.title = `You clicked ${count} times`;
    },[count,age,todos]);

    // setTodos(["Updated"]);
    // console.log(age);
    if(age==10){
        setAge(11);
        setTodos(["Updated"]);
    }
    // console.log(age);
    // console.log(todos);

    return ( 
        <div>
            <p>You clicked me {count} number of times</p>
            <button onClick={() => setCount(count+1)}>Click me</button>
            <button onClick={() => setAge(age+1)}>Increment Age</button>
        </div>
     );
}
 
export default UseEffectHook;
