import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import { FaFileMedical } from 'react-icons/fa'; // Assuming you are using react-icons for the download icon
import './table.css';

function createData(regNo, name, address, phoneNumber, gender, medicalLogs) {
  return { regNo, name, address, phoneNumber, gender, medicalLogs };
}



const rows = [
  createData(1, 'John Doe', '123 Main St', '555-1234', 'Male', 'Medical logs data 1'),
  createData(2, 'Jane Smith', '456 Elm St', '555-5678', 'Female', 'Medical logs data 2'),
  // Add more data as needed
];

export default function BasicTable() {
  const handleMedicalLogsClick = (regNo) => {
    // Logic to handle the click event for medical logs
    console.log('Viewing medical logs for regNo:', regNo);
  };

  const handleDownloadMedicalLogsClick = (regNo) => {
    // Logic to handle the click event for downloading medical logs
    console.log('Downloading medical logs for regNo:', regNo);
  };




  return (
    <TableContainer component={Paper} className='table-container' style={{width: '1050px', marginTop:'10px',borderRadius:'20px'}}>
      <Table className='simple-table'sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow >
            <TableCell>Reg No</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Medical Logs</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.regNo}>
              <TableCell component="th" scope="row">{row.regNo}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.phoneNumber}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleMedicalLogsClick(row.regNo)}>
                  <FaFileMedical /> {/* View medical logs icon */}
                </IconButton>
                <IconButton onClick={() => handleDownloadMedicalLogsClick(row.regNo)}>
                  <FaFileMedical /> {/* Download medical logs icon */}
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}





/* import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import { FaFileMedical } from "react-icons/fa";

function createData(regNo, name, address, phoneNumber, gender) {
  return { regNo, name, address, phoneNumber, gender };
}

const rows = [
  createData('001', 'John Doe', '123 Main St', '555-1234', 'Male'),
  createData('002', 'Jane Smith', '456 Elm St', '555-5678', 'Female'),
  
];

export default function BasicTable() {
  const handleMedicalLogsClick = (regNo) => {
   
    console.log(`Displaying medical logs for patient with Reg No: ${regNo}`);
  };

  return (
    <TableContainer component={Paper} style={{ width: '1050px', margin: '20px' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Reg No</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Medical Logs</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.regNo}>
              <TableCell component="th" scope="row">{row.regNo}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.phoneNumber}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleMedicalLogsClick(row.regNo)}>
                  <FaFileMedical/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
} */






/* import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './table.css';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} style={{ width: '800px', margin: '20px' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
} */
