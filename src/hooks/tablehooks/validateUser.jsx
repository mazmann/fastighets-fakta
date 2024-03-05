import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';


const validateRequired = (value) => !!value.length;
const validateEmail = (email) =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
function validateUser(user) {
  
    return {
      firstName: !validateRequired(user.firstName)
        ? 'First Name is Required'
        : '',
      lastName: !validateRequired(user.lastName) ? 'Last Name is Required' : '',
      email: !validateEmail(user.email) ? 'Incorrect Email Format' : '',
    };
  }

export { validateUser }