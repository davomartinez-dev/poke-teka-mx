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
import capitalizeWord from '../../tools/capitalizeWord';

const StyledTableCell = withStyles(theme => ({
  head: {
    fontSize: '1.1em',
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
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
});

const PokemonTypes = ({ pokemon }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Types</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemon.types.map(type => (
            <StyledTableRow key={type.type.url}>
              <StyledTableCell align="center" component="th" scope="row">
                {capitalizeWord(type.type.name)}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

PokemonTypes.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonTypes;
