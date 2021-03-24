import e from 'cors';
import React, { useEffect, useState } from 'react';
import API from '../reactAPI';
import School from './School';

export default function DisplaySchoolData() {

  const [ zip, setZip ] = useState(12345);
  const [ dist, setDist ] = useState(10)
  const [ submitClicked, setSubmitClicked ] = useState(false)
  const [ schoolList, setSchoolList ] = useState([]);

    useEffect(() => {
    API.getAPISchools(zip, dist)
    .then((res) => {
      console.log(res.data.results);
      let schools = res.data.results;
      setSchoolList(schools);
    })
    .catch(err => console.log('getDetails: ERROR: ', err));
  }, [submitClicked])
 
  function buttonClick(e) {
    e.preventDefault();
    setSubmitClicked(!submitClicked)
  }


  return (
    <div>
      <div>
        <form style={{ display: 'flex' }}>
          Find schools near 
          <input 
            type='tezt' 
            defaultValue='12345'
            onChange={(e) => setZip(e.target.value)}
            style={{ padding: '5px', margin: '10px' }}
          /> 
          zipcode (within 
          <input 
            type='text' 
            defaultValue='10'
            onChange={(e) => setDist(e.target.value)}
            style={{ padding: '5px', margin: '10px' }}
          /> 
          miles). 
          <button type='button' onClick={buttonClick} style={{ padding: '5px', margin: '10px' }}>Search</button>
        </form>
      </div>
      <div>
        <h3>Schools:</h3>
          {schoolList.map((el) => <School 
            id={el.id}
            url={el['school.school_url']}
            name={el['school.name']}
            city={el['school.city']}
            state={el['school.state']}
            />)}
      </div>
    </div>
  )
}