import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const HomeComponent = () => {

      const history = useHistory();
      const [users, setUsers] = useState([]);

      useEffect(()=>{
            loadUsers();
      },[]);

      const loadUsers = async()=> {
            const res = await axios.get('http://localhost:3001/users');
            setUsers(res.data);
            // setUsers(res.data.reverse());
      }

      // Delete user
      const deleteUser = async(id)=> {
            await axios.delete(`http://localhost:3001/users/${id}`);
            loadUsers();
      }

      return (
            <div className="container-fluid mt-5">
                  <table className="table table-hover">
                        <thead>
                              <tr className="table-dark">
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">User Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">Website Name</th>
                                    <th scope="col">Action</th>
                              </tr>
                        </thead>
                        <tbody>

                              {
                                    users.length !== 0 ?
                                          users.map((itemVal, index)=>{
                                                return (
                                                      <tr key={index}>
                                                            <th scope="row">{itemVal.id}</th>
                                                            <td>{itemVal.name}</td>
                                                            <td>{itemVal.username}</td>
                                                            <td>{itemVal.email}</td>
                                                            <td>{itemVal.phone}</td>
                                                            <td>{itemVal.website}</td>
                                                            <td>
                                                                  <div className="action-name">
                                                                        <Link className="btn btn-primary mr-2" to={`/users/view/${itemVal.id}`}>View</Link>
                                                                        <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${itemVal.id}`}>Edit</Link>
                                                                        <button className="btn btn-danger" onClick={()=>{deleteUser(itemVal.id)}}>Delete</button>
                                                                  </div>
                                                            </td>
                                                      </tr>
                                                )
                                          })
                                    : 

                                    <tr className="no-data">
                                          <td colSpan="7" className="text-center p-5"><h1>No data</h1></td>
                                    </tr>
                              }

                        </tbody>
                  </table>
            </div>
      )
}

export default HomeComponent
