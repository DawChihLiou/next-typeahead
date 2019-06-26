import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles(theme => ({
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  chip: {
    margin: theme.spacing(0.5, 0.25),
  },
}));

export function ValueContainer({ children }) {
  const classes = useStyles();
  return <div className={classes.valueContainer}>{children}</div>;
}

export default function ValueChip({ children, removeProps }) {
  const classes = useStyles();
  return (
    <Chip
      tabIndex={-1}
      label={children}
      className={classes.chip}
      onDelete={removeProps.onClick}
      deleteIcon={<CancelIcon {...removeProps} />}
    />
  );
}
