import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const SimpleTable = ({ rows }) => {
  const classes = useStyles();
  const transformedRows = Object.entries(rows).map((row) => {
    const keywords = row[1].join(", ");
    return { entity: row[0], keywords };
  });
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Entity</TableCell>
            <TableCell>Keywords related to the entity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transformedRows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.entity}</TableCell>
              <TableCell>{row.keywords}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
