import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  noOptionsMessage: {
    padding: theme.spacing(1, 2),
  },
}));

export default function NoOptionsMessage({ innerProps, children }) {
  const classes = useStyles();
  return (
    <Typography
      color="textSecondary"
      className={classes.noOptionsMessage}
      {...innerProps}
    >
      {children}
    </Typography>
  );
}
