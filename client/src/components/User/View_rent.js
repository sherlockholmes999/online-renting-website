import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';

const ViewR = () => {


    const [properties, setProperties] = useState([]); 
    var id = localStorage.getItem("aadhar");
    useEffect (() => {
        Axios.get(`http://localhost:3001/getprops/${id}`).then((response) => {
            setProperties(response.data);
        })
    }, [])

    const rentP = (id) => {
        window.alert(`do you want to rent the property with id ${id}`)
    }

    return (
        <>

        <table className='table table-striped table-bordered' style = {{width: "700px", right:"-1%", position: "relative"}}>
            <thead>
            <td><p> ID </p></td>
              <td><p> START_DATE  </p></td>
              <td><p> END_DATE </p></td>
              <td><p> CITY</p></td>
              <td><p> TOTAL_AREA</p></td>
              <td><p> PLINTH_AREA</p></td>
              <td><p> NO_OF_FLOORS</p></td>
              <td><p> RENT_PER_MONTH</p></td>
              <td><p> AGENCY_COMMISSION</p></td>
              <td><p> ADDRESS</p></td>
              <td><p> LOCALITY</p></td>
              <td><p> YEAR_OF_CONSTRUCTION</p></td>
              <td><p> OPTION</p></td>
            </thead>
            <tbody>
            {properties.map(member =>
              <tr key={member.ID}>
              <td><p> {member.ID}</p></td>
              <td><p> {member.START_DATE.slice(0,10)} </p></td>
              <td><p> {member.END_DATE.slice(0,10)}</p></td>
              <td><p> {member.CITY}</p></td>
              <td><p> {member.TOTAL_AREA}</p></td>
              <td><p> {member.PLINTH_AREA}</p></td>
              <td><p> {member.NO_OF_FLOORS}</p></td>
              <td><p> {member.RENT_PER_MONTH}</p></td>
              <td><p> {member.AGENCY_COMMISSION}</p></td>
              <td><p> {member.ADDRESS}</p></td>
              <td><p> {member.LOCALITY}</p></td>
              <td><p> {member.YEAR_OF_CONSTRUCTION}</p></td>
              <td><button onClick={() => {rentP(member.ID)}}>Rent</button></td>
                </tr>
                )}
            </tbody>
        </table>
        </>
    )
}

export default ViewR; 