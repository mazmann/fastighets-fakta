import React from 'react'
import OwnersTable from './OwnersTable'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

const PropertyOwner = () => {
  return (

    <div className='App'>
      <h5>Property Owners</h5>
      <QueryClientProvider client={queryClient}>
        <OwnersTable />
      </QueryClientProvider>
    </div>
  )
}

export default PropertyOwner