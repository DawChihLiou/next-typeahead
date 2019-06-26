import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
}));

export default function Menu(props) {
  const classes = useStyles();
  return (
    <Paper square className={classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  );
}
