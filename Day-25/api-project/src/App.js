import React, { Component } from 'react';
import {ToastContainer} from 'react-toastify';
import uuid from 'react-uuid';

import config from './config/config.json';
import http from './utils/httpService';

import 'react-toastify/dist/ReactToastify.css';


class App extends Component {
  state = { 
    posts: []
   }


   async componentDidMount(){
    console.clear();
    const {data: posts} = await http.get(config.urlEndPoint);
    //http.get(config.urlEndPoint).then((response) => console.log(response.data))
    this.setState({posts});
   }

   handleAdd = async () => {
      const obj = {
        "title": "Learning React",
        "body": "React is very easy to understand"
      }
      const {data: post} = await http.post(config.urlEndPoint, obj);
      
      console.log(post);
      const posts = [post,...this.state.posts];
      this.setState({posts});
   }

   handleUpdate = async (post) => {
      post.title = "Updated Title";
      
      const {data} = await http.put(config.urlEndPoint+"/"+post.id , post );

      const posts = [...this.state.posts];
      const index = posts.indexOf(post);
      posts[index] = {...post};
      this.setState({posts});
  }

  handleDelete = async (post) => {
     try{
      const temp = await http.delete(config.urlEndPoint+"/"+post.id);
     }catch(err){

     }

     const posts = this.state.posts.filter(p => p.id !== post.id);
     this.setState({posts});
  }

  render() { 
    return ( 
      <React.Fragment>
        <ToastContainer />
        <button className="btn btn-primary" onClick={this.handleAdd}>Add</button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <button className="btn btn-info btn-sm" onClick={()=>this.handleUpdate(post)}>
                    Update
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={()=>this.handleDelete(post)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
     );
  }
}
 
export default App;