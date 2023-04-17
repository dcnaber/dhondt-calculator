import logo from './logo.svg';
import './App.css';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import dhondtElectionSystem, {final} from './function';


import { useEffect, useState } from 'react';


function App() {


  const [partyName, setPartyName] = useState('');
  const [partyVote, setPartyVote] = useState('');

  const [partyName2, setPartyName2] = useState('');
  const [partyVote2, setPartyVote2] = useState('');

  const [partyName3, setPartyName3] = useState('');
  const [partyVote3, setPartyVote3] = useState('');

  const [partyName4, setPartyName4] = useState('');
  const [partyVote4, setPartyVote4] = useState('');

  const [partyName5, setPartyName5] = useState('');
  const [partyVote5, setPartyVote5] = useState('');

  const [partyName6, setPartyName6] = useState('');
  const [partyVote6, setPartyVote6] = useState('');

  const [partyName7, setPartyName7] = useState('');
  const [partyVote7, setPartyVote7] = useState('');

  const [partyName8, setPartyName8] = useState('');
  const [partyVote8, setPartyVote8] = useState('');

  const [totalSeats, setTotalSeats] = useState('');

  var all_parties = [
    [partyName, partyVote],
    [partyName2, partyVote2],
    [partyName3, partyVote3],
    [partyName4, partyVote4],
    [partyName5, partyVote5],
    [partyName6, partyVote6],
    [partyName7, partyVote7],
    [partyName8, partyVote8]
  ];

  const [final_result, setFinal_result] = useState([]);

  const join_results = final_result.join(' ').split(",").join("");  

  const results = final_result.map((final_result) => <div className=''><li>{final_result}</li></div>);  

  return (
    <div className="flex justify-start items-center h-screen">
      <div>
      

      <div className='m-5'>
      <TextField id="outlined-basic" onChange={(e) => {setPartyName(e.target.value + " ")}} label="Party Name" variant="outlined"/>
      <TextField id="outlined-basic" onChange={(e) => {setPartyVote(e.target.value)}} label="Party's Vote" variant="outlined" />
      </div>



      <div className='m-5'>
      <TextField id="outlined-basic" onChange={(e) => {setPartyName2(e.target.value + " ")}} label="Party Name" variant="outlined" />
      <TextField id="outlined-basic" onChange={(e) => {setPartyVote2(e.target.value)}} label="Party's Vote" variant="outlined" />
      </div>

      <div className='m-5'>
      <TextField id="outlined-basic" onChange={(e) => {setPartyName3(e.target.value + " ")}} label="Party Name" variant="outlined" />
      <TextField id="outlined-basic" onChange={(e) => {setPartyVote3(e.target.value)}} label="Party's Vote" variant="outlined" />
      </div>


      <div className='m-5'>
      <TextField id="outlined-basic" onChange={(e) => {setPartyName4(e.target.value + " ")}} label="Party Name" variant="outlined" />
      <TextField id="outlined-basic" onChange={(e) => {setPartyVote4(e.target.value)}} label="Party's Vote" variant="outlined" />
      </div>

      <div className='m-5'>
      <TextField id="outlined-basic" onChange={(e) => {setPartyName5(e.target.value + " ")}} label="Party Name" variant="outlined" />
      <TextField id="outlined-basic" onChange={(e) => {setPartyVote5(e.target.value)}} label="Party's Vote" variant="outlined" />
      </div>

      <div className='m-5'>
      <TextField id="outlined-basic" onChange={(e) => {setPartyName6(e.target.value + " ")}} label="Party Name" variant="outlined" />
      <TextField id="outlined-basic" onChange={(e) => {setPartyVote6(e.target.value)}} label="Party's Vote" variant="outlined" />
      </div>

      <div className='m-5'>
      <TextField id="outlined-basic" onChange={(e) => {setPartyName7(e.target.value + " ")}} label="Party Name" variant="outlined" />
      <TextField id="outlined-basic" onChange={(e) => {setPartyVote7(e.target.value)}} label="Party's Vote" variant="outlined" />
      </div>

      <div className='m-5'>
      <TextField id="outlined-basic" onChange={(e) => {setPartyName8(e.target.value + " ")}} label="Party Name" variant="outlined" />
      <TextField id="outlined-basic" onChange={(e) => {setPartyVote8(e.target.value)}} label="Party's Vote" variant="outlined" />

      </div>



      
      

    </div>

      <div className='m-5 '>
      <TextField id="outlined-basic" onChange={(e) => {setTotalSeats(e.target.value)}} label="Number of Seats" variant="outlined" />
      <div className='my-2'><Button onClick={() => {setFinal_result(dhondtElectionSystem(totalSeats, all_parties))}} variant="contained">Calculate</Button></div>
      </div>
      

    <div className='flex justify-end'>{results}</div>

    </div>
  );
}

export default App;