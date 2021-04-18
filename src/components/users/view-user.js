import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ViewUser = () => {

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

      useEffect(()=>{
            loadData();
      },[]);
 
      const loadData = async()=> {
            const result = await axios.get(`http://localhost:3001/users/${id}`);
            setInputUser(result.data);
      }
     

      return (
            <div className="container mt-5 w-50 mx-auto">
                  <form className="border py-4 px-5 rounded">
                        <h2 className="text-center mb-4">View User</h2>
                        <div className="mb-4">
                              <input type="text" 
                              className="form-control" readOnly onChange={inputChange} value={inputUser.name} name="name"
                              placeholder="Enter your name..." />
                        </div>
                        <div className="mb-4">
                              <input type="text" readOnly onChange={inputChange} value={inputUser.username} name="username"
                              className="form-control" placeholder="Enter your username..." />
                        </div>
                        <div className="mb-4">
                              <input type="email" readOnly onChange={inputChange} value={inputUser.email} name="email"
                              className="form-control" placeholder="Enter your email address..." />
                        </div>
                        <div className="mb-4">
                              <input type="number" readOnly onChange={inputChange} value={inputUser.phone} name="phone"
                              className="form-control" placeholder="Enter your phone number..." />
                        </div>
                        <div className="mb-4">
                              <input type="text" readOnly onChange={inputChange} value={inputUser.website} name="website"
                              className="form-control" placeholder="Enter your website name..." />
                        </div>
                        <Link className="btn btn-primary w-100" onClick={()=>{history.goBack()}}>Go back</Link>
                  </form>
            </div>
      )
}

export default ViewUser
