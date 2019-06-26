import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  placeholder: {
    position: 'absolute',
    left: 2,
    bottom: 6,
    fontSize: 16,
  },
}));

export default function Placeholder(props) {
  const classes = useStyles();
  return (
    <Typography
      color="textSecondary"
      className={classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}
