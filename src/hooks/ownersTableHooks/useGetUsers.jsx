import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

function useGetUsers() {
    return useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await fetch('http://localhost:5000/api/firm');

            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }

            return response.json();
        },
        refetchOnWindowFocus: true,
    });
}

export { useGetUsers }