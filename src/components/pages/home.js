import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';

const HomeComponent = () => {

      const history = useHistory();
      const [users, setUsers] = useState([]);

      useEffect(()=>{
            loadUsers();
      },[]);

      const loadUsers = async()=> {
            const res = await axios.get('http://localhost:3001/users');
            console.log(res.data.reverse());
            setUsers(res.data);
      }

      return (
            <div className="container mt-5">
                  <table className="table table-hover">
                        <thead>
                              <tr className="table-dark">
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">User Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Action</th>
                              </tr>
                        </thead>
                        <tbody>

                              {
                                    users.map((itemVal, index)=>{
                                          return (
                                                <tr key={index}>
                                                      <th scope="row">{index+1}</th>
                                                      <td>{itemVal.name}</td>
                                                      <td>{itemVal.username}</td>
                                                      <td>{itemVal.email}</td>
                                                      <td>
                                                            <div className="action-name">
                                                                  <button className="btn btn-primary mr-2">View</button>
                                                                  <button className="btn btn-outline-primary mr-2" onClick={()=>history.push('/users/edit')}>Edit</button>
                                                                  <button className="btn btn-danger">Delete</button>
                                                            </div>
                                                      </td>
                                                </tr>
                                          )
                                    })
                              }

                        </tbody>
                  </table>
            </div>
      )
}

export default HomeComponent
