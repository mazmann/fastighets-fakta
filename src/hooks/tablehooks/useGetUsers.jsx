import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
// useGetUsers.jsx
import { User, fakeData, usStates } from '../../pages/PropertyOwners/makeData';

// Rest of your code using User, fakeData, usStates


function useGetUsers() {
    return useQuery({
      queryKey: ['users'],
      queryFn: async () => {
        //send api request here
        await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
        return Promise.resolve(fakeData);
      },
      refetchOnWindowFocus: false,
    });
  }

export { useGetUsers }