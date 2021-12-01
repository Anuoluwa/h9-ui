import React from 'react';
import { AlertTitle, Alert, AlertIcon, AlertDescription } from '@chakra-ui/react';
export default function SuccessMessage({ message }) {
  return (
    <Alert
    status='success'
    variant='subtle'
    flexDirection='column'
    alignItems='center'
    justifyContent='center'
    textAlign='center'
    height='200px'
  >
    <AlertIcon boxSize='40px' mr={0} />
    <AlertTitle mt={4} mb={1} fontSize='lg'>
       Submitted successfully!
    </AlertTitle>
    <AlertDescription maxWidth='sm'>
      Thanks, voucher detail has been sent to your email.
    </AlertDescription>
  </Alert>
    
  );
}