import React from 'react';

const Posts = (props) => {
    console.log(props);
    return ( 
        <div>
            <h1>Posts</h1>
            {/* {props.match.params.year!== undefined ? <h2>Year: {props.match.params.year}</h2>: ""} */}
            <h2>Year: {props.match.params.year}, Month: {props.match.params.month}</h2>
        </div>
     );
}
 
export default Posts;