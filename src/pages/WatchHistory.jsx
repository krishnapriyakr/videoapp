import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../services/allAPI'

function WatchHistory() {
  const[history,setHistroy]=useState([])
  const handleHistory = async () => {
    const { data } = await getAllHistory()
    // console.log(data);
    setHistroy(data);
  }
  console.log(history);

  useEffect(() => {
    handleHistory()
  }, [])
  
  const handleDeleteHistory = async (id) => {
    //make api call
    await deleteHistory(id)
    //get remaiming history
    handleHistory()
  }

  return (
    <>
      <div className="container d-flex mt-5 mb-5 justify-content-between">
        <h3>Watch-History</h3>
        <Link to={'/home'} style={{textDecoration:'none',fontSize:'20px',color:'blueviolet'}}> <i class="fa-thin fa-arrow-left-long fa-beat-fade me-2"></i> Back To Home</Link>
      </div>
      
      <table className='table mt-3 mb-5 container'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Timestrap</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            history.length>0?history?.map((item,index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item?.caption}</td>
                <td>{item?.embedLink}</td>
                <td>{item?.Timestamp}</td>
                <td> <button onClick={()=>handleDeleteHistory(item?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button> </td>
            </tr>
            )):<p className='fs-5 fw-5 text-danger'>Nothing to Display</p>
          }
           
        </tbody>
      </table>
    
    </>
  )
}

export default WatchHistory