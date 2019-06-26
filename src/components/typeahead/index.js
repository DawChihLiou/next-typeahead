import { useState, useCallback } from 'react';
import Select from 'react-select';
import Highlighter from 'react-highlight-words';

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
import theme from '../../theme';

const components = {
  Menu,
  Option,
  Control,
  Placeholder,
  ValueContainer,
  NoOptionsMessage,
  MultiValue: ValueChip,
};

const formatOptionLabel = ({ label }, { inputValue }) => (
  <Highlighter
    searchWords={[inputValue]}
    textToHighlight={label}
    highlightStyle={{
      color: theme.palette.primary.dark,
      backgroundColor: 'transparent',
    }}
  />
);

export default function Typeahead() {
  const [ingredients, setIngredients] = useState(null);

  const handleChangeMulti = useCallback(value => {
    setIngredients(value);
  }, []);

  return (
    <NoSsr>
      <Box flexGrow={1}>
        <Grid container direction="row" justify="center">
          <Grid item xs={10} sm={8} md={6}>
            <Select
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
              formatOptionLabel={formatOptionLabel}
            />
          </Grid>
        </Grid>
      </Box>
    </NoSsr>
  );
}
