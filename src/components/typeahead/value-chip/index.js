import clsx from 'clsx';
import { makeStyles, emphasize } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(0.5, 0.25),
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light'
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
      0.08
    ),
  },
}));

export function ValueContainer({ selectProps, children }) {
  return <div className={selectProps.classes.valueContainer}>{children}</div>;
}

export default function ValueChip(props) {
  const classes = useStyles();
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={clsx(classes.chip, {
        [classes.chipFocused]: props.isFocused,
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}
