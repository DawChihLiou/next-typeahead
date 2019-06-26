import { useState, useCallback } from 'react';
import Select from 'react-select';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import NoSsr from '@material-ui/core/NoSsr';

import Menu from './menu';
import Option from './option';
import Control from './control';
import Placeholder from './placeholder';
import NoOptionsMessage from './no-option-message';
import ValueChip, { ValueContainer } from './value-chip';

import options from './utils/options';

const components = {
  Control,
  Menu,
  ValueChip,
  NoOptionsMessage,
  Option,
  Placeholder,
  ValueContainer,
};

const useStyles = makeStyles(theme => ({
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
}));

export default function Typeahead() {
  const theme = useTheme();
  const classes = useStyles();
  const [ingredients, setIngredients] = useState(null);

  const handleChangeMulti = useCallback(value => {
    setIngredients(value);
  }, []);

  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit',
      },
    }),
  };

  return (
    <NoSsr>
      <Box flexGrow={1}>
        <Grid container direction="row" justify="center">
          <Grid item xs={10} sm={8} md={6}>
            <Select
              classes={classes}
              styles={selectStyles}
              inputId="select-ingredient"
              TextFieldProps={{
                label: 'Ingredients',
                InputLabelProps: {
                  htmlFor: 'select-ingredient',
                  shrink: true,
                },
                placeholder: 'Select ingredients',
              }}
              options={options}
              components={components}
              value={ingredients}
              onChange={handleChangeMulti}
              isMulti
            />
          </Grid>
        </Grid>
      </Box>
    </NoSsr>
  );
}
