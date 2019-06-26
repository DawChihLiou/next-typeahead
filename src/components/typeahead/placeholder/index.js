import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  placeholder: {
    position: 'absolute',
    left: theme.spacing(0.25),
    bottom: theme.spacing(0.5),
  },
}));

export default function Placeholder({ innerProps, children }) {
  const classes = useStyles();
  return (
    <Typography
      color="textSecondary"
      className={classes.placeholder}
      {...innerProps}
    >
      {children}
    </Typography>
  );
}
