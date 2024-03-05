import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

function useUpdateUser() {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: async (user) => {
        //send api update request here
        await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
        return Promise.resolve();
      },
      //client side optimistic update
      onMutate: (newUserInfo) => {
        queryClient.setQueryData(['users'], (prevUsers) =>
          prevUsers?.map((prevUser) =>
            prevUser.id === newUserInfo.id ? newUserInfo : prevUser,
          ),
        );
      },
      // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
    });
  }

export { useUpdateUser }