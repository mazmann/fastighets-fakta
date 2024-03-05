import React from 'react'
import {
    QueryClient,
    QueryClientProvider,
    useMutation,
    useQuery,
    useQueryClient,
  } from '@tanstack/react-query';

function useCreateUser() {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: async (user) => {
        //send api update request here
        await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
        return Promise.resolve();
      },
      //client side optimistic update
      onMutate: (newUserInfo) => {
        queryClient.setQueryData(['users'], (prevUsers) => [
          ...prevUsers,
          {
            ...newUserInfo,
            id: (Math.random() + 1).toString(36).substring(7),
          },
        ]);
      },
      // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
    });
  }
export { useCreateUser }