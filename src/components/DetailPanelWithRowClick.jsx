import { useMemo, useState, useEffect } from 'react';
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
const Example = () => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    // Perform your asynchronous data fetching here
    // For example, using fetch or axios
    const response = await fetch('http://localhost:5000/properties');
    const data = await response.json();
    console.log(data);
    setData(data); // setData is a function that updates the state

  };

  useEffect(() => {
    fetchData(); // Call the function to fetch the data when the component mounts
  }, []);

  const columns = useMemo(
    //column definitions...
    () => [
      // {
      //   accessorKey: '_id',
      //   header: 'ID',
      //   size: 50,
      // },
      {
        accessorKey: 'propertyAddress',
        header: 'Property Address',
      },
      {
        accessorKey: 'propertyOwner',
        header: 'Property Owner',
      },
      {
        accessorKey: 'propertyArea',
        header: 'Area',
      },
    ],
    [],
    //end
  );

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
        Add Property
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
          <Typography>Phone: {row.original.phoneNumber}</Typography>
          <Typography>Address: {row.original.propertyAddress}</Typography>
          <Typography>Visiting Area: {row.original.visitingArea}</Typography>
          <Typography>Contact: {row.original.contactRep}</Typography>
          <Typography>Org: {row.original.organisationNumber}</Typography>
        </Box>
      ) : null,
  });

  return <MaterialReactTable table={table} />;
};




export default Example;
