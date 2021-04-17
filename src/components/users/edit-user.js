import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router';

const EditUser = () => {

      const history = useHistory();
      const {id} = useParams();

      const [inputUser, setInputUser] = useState(
            {
                  name: '',
                  username: '',
                  email: '',
                  phone: '',
                  website: ''
            }
      );

      const inputChange = (event)=> {
            const {name, value} = event.target;
            setInputUser((oldValue)=>{
                  return({     
                        ...oldValue,
                        [name]: value,
                  });
            });
      }

      const updateValue = async(e)=>{
            e.preventDefault();
            await axios.post("http://localhost:3001/users", inputUser);
            // history.push('/');
      }

      useEffect(()=>{
            loadData();
      },[]);
 
      const loadData = async()=> {
            const result = await axios.get(`http://localhost:3001/users/${id}`);
            console.log(result);
            setInputUser(result.data);
      }

      return (
            <div className="container mt-5 w-50 mx-auto">
                  <form className="border py-4 px-5 rounded">
                        <h2 className="text-center mb-4">Edit User</h2>
                        <div className="mb-4">
                              <input type="text" 
                              className="form-control" onChange={inputChange} value={inputUser.name} name="name"
                              placeholder="Enter your name..." />
                        </div>
                        <div className="mb-4">
                              <input type="text" onChange={inputChange} value={inputUser.username} name="username"
                              className="form-control" placeholder="Enter your username..." />
                        </div>
                        <div className="mb-4">
                              <input type="email" onChange={inputChange} value={inputUser.email} name="email"
                              className="form-control" placeholder="Enter your email address..." />
                        </div>
                        <div className="mb-4">
                              <input type="number" onChange={inputChange} value={inputUser.phone} name="phone"
                              className="form-control" placeholder="Enter your phone number..." />
                        </div>
                        <div className="mb-4">
                              <input type="text" onChange={inputChange} value={inputUser.website} name="website"
                              className="form-control" placeholder="Enter your website name..." />
                        </div>
                        <button className="btn btn-primary w-100" onClick={updateValue}>Update</button>
                  </form>
            </div>
      )
}

export default EditUser
