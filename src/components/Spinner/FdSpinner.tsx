import { Box, Spinner } from '@chakra-ui/react';

function FdSpinner() {
  return (
    <Box>
      <Spinner  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl' />
    </Box>
  );
}

export default FdSpinner;
