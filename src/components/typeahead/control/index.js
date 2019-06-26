import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  input: {
    display: 'flex',
    padding: 0,
    height: 'auto',
  },
}));

function InputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

export default function Control(props) {
  const {
    children,
    innerProps,
    innerRef,
    selectProps: { TextFieldProps },
  } = props;
  const classes = useStyles();

  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent: InputComponent,
        inputProps: {
          className: classes.input,
          ref: innerRef,
          children,
          ...innerProps,
        },
      }}
      {...TextFieldProps}
    />
  );
}
