import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typeahead from '../src/components/typeahead';

function Index() {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Typeahead />
      </Box>
    </Container>
  );
}

export default Index;
