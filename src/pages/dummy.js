import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import dhondtElectionSystem, {final} from '../functions/function';


import { useEffect, useState } from 'react';
import NavBar from '../components/Navbar';


function Calculator() {


  const [partyName, setPartyName] = useState('');
  const [partyVote, setPartyVote] = useState('');

  const [partyName2, setPartyName2] = useState('');
  const [partyVote2, setPartyVote2] = useState('');

  const [partyName3, setPartyName3] = useState('');
  const [partyVote3, setPartyVote3] = useState('');

  const [partyName4, setPartyName4] = useState('');
  const [partyVote4, setPartyVote4] = useState('');

  const [final_result, setFinal_result] = useState(["The results will appear here once you enter the data"]);

  const join_results = final_result.join(' ').split(",").join("");  

  const results = final_result.map((final_result) => <div className=''><li className='font-link'>{final_result}</li></div>);  

  return (
    <div>
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
       <NavBar />
    </div>
       <div className='max-w-7xl mx-auto grid grid-cols-2'>
          
          <div className='bg-white p-6 rounded-lg shadow'>
            <h2 className='text-lg font-medium mb-4 font-link'>Enter party details</h2>
            <div className=' flex justify-start m-5 h-screen'>
        <div className='grid grid-cols-2'>
      

      <div className='m-5'>
      <TextField id="outlined-basic" onChange={(e) => {setPartyName(e.target.value + " ")}} label="Party Name" variant="outlined"/>
      <TextField id="outlined-basic" onChange={(e) => {setPartyVote(e.target.value)}} label="Number of Votes" variant="outlined" />
      </div>



      <div className='m-5'>
      <TextField id="outlined-basic" onChange={(e) => {setPartyName2(e.target.value + " ")}} label="Party Name" variant="outlined" />
      <TextField id="outlined-basic" onChange={(e) => {setPartyVote2(e.target.value)}} label="Number of Votes" variant="outlined" />
      </div>

      <div className='m-5'>
      <TextField id="outlined-basic" onChange={(e) => {setPartyName3(e.target.value + " ")}} label="Party Name" variant="outlined" />
      <TextField id="outlined-basic" onChange={(e) => {setPartyVote3(e.target.value)}} label="Number of Votes" variant="outlined" />
      </div>


      <div className='m-5'>
      <TextField id="outlined-basic" onChange={(e) => {setPartyName4(e.target.value + " ")}} label="Party Name" variant="outlined" />
      <TextField id="outlined-basic" onChange={(e) => {setPartyVote4(e.target.value)}} label="Number of Votes" variant="outlined" />
      </div>

    </div>

      <div className='m-5 relative absolute left-500'>
      <TextField id="outlined-basic" onChange={(e) => {setTotalSeats(e.target.value)}} label="Number of Seats" variant="outlined" />
      <div className='my-2'><Button onClick={() => {setFinal_result(dhondtElectionSystem(totalSeats, all_parties))}} variant="contained">Calculate</Button></div>
      </div>


    </div>
    </div>
    

    <div className='bg-white p-6 rounded-lg shadow mx-5'>
    <h1 className='text-3xl my-3 font-link font-bold'>Results:</h1>
    <div>{results}</div>
    </div>




    
    </div>
    </div>
  );
}

export default Calculator;
