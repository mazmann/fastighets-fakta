import { useMemo, useState } from 'react';
import {
  MRT_EditActionButtons,
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from '@mui/material';
import { Box, Typography } from '@mui/material';
import { data } from './makeData';


const Example = () => {
  const columns = useMemo(
    //column definitions...
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 50,
      },
      {
        accessorKey: 'propertyAddress',
        header: 'First Name',
      },
      {
        accessorKey: 'propertyOwner',
        header: 'Property Owner',
      },
      {
        accessorKey: 'organisationNumber',
        header: 'Last Name',
      },
    ],
    [],
    //end
  );
  console.log('data:', data);


  const table = useMaterialReactTable({
    columns,
    data: data || [],
    enableExpandAll: false, //disable expand all button
    muiDetailPanelProps: () => ({
      sx: (theme) => ({
        backgroundColor:
          theme.palette.mode === 'dark'
            ? 'rgba(255,210,244,0.1)'
            : 'rgba(0,0,0,0.1)',
      }),
    }),

  
    //optionally customize modal content
    renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h3">Create New User</DialogTitle>
        <DialogContent
          sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          {internalEditComponents} {/* or render custom edit components here */}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),


    
    //custom expand button rotation
    muiExpandButtonProps: ({ row, table }) => ({
      onClick: () => table.setExpanded({ [row.id]: !row.getIsExpanded() }), //only 1 detail panel open at a time
      sx: {
        transform: row.getIsExpanded() ? 'rotate(180deg)' : 'rotate(-90deg)',
        transition: 'transform 0.2s',
      },
    }),

        renderTopToolbarCustomActions: ({ table }) => (
      <Button
        variant="contained">
        Create New User
      </Button>
    ),

    renderDetailPanel: ({ row }) =>
      row.original.propertyAddress ? (
        <Box
          sx={{
            display: 'grid',
            margin: 'auto',
            gridTemplateColumns: '1fr 1fr',
            width: '100%',
          }}
        >
          <Typography>City: {row.original.propertyArea}</Typography>
          <Typography>City: {row.original.propertyTag}</Typography>
          <Typography>Address: {row.original.propertyAddress}</Typography>
          <Typography>Visiting Area: {row.original.visitingArea}</Typography>
          <Typography>Contact: {row.original.contactRep}</Typography>
        </Box>
      ) : null,
  });

  return <MaterialReactTable table={table} />;
};




export default Example;
