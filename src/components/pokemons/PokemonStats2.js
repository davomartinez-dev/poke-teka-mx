/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    fontSize: '0.9em',
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.secondary,
  },
  body: {
    fontSize: '0.9em',
    color: theme.palette.text.secondary,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.action.hover,
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
});

const PokemonStats2 = ({ pokemon }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Height</StyledTableCell>
            <StyledTableCell align="center">Weight</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow key={pokemon.name}>
            <StyledTableCell align="center">{pokemon.height}</StyledTableCell>
            <StyledTableCell align="center">{pokemon.weight}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

PokemonStats2.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonStats2;
