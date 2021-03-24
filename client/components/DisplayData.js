import React, { useEffect, useState } from 'react';
import API from '../reactAPI';

export default function DisplayDataR() {

  const [ zip, setZip ] = useState(12345);
  const [ dist, setDist ] = useState(10)
  const [ submitClicked, setSubmitClicked ] = useState(false)
  const [ schoolList, setSchoolList ] = useState(<></>);

    useEffect(() => {
    API.getAPIResponse(zip, dist)
    .then((res) => {
      console.log(res.data.results);
      let schools = res.data.results;
      let list = schools.map((el) => {
       return <div key={el.id}>
          <div>Name: <a href={el['school.school_url']}>{el['school.name']}</a></div>
          <div>Location: {el['school.city']}, {el['school.state']}</div>
        </div>
      });
      console.log(list);
      setSchoolList(list);
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
        {schoolList}
      </div>
    </div>
  )
}