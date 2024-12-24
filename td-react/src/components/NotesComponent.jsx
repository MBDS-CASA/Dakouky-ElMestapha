import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const NotesComponent = ({ data }) => {
  return (
<div className="notes-container">
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell>Cours</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Note</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.unique_id}>
              <TableCell>{`${row.student.firstname} ${row.student.lastname}`}</TableCell>
              <TableCell>{row.course}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default NotesComponent;
