import { useMemo, useState, useEffect } from 'react';
import { MoreInfoButton } from '../../components/Buttons';
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


const MainPropertyTable = () => {
  const [properties, setProperties] = useState(null);
  const [firms, setFirms] = useState(null);
  const fetchProperties = async () => {
    // Perform your asynchronous data fetching here
    // For Main, using fetch or axios
    const response = await fetch('http://localhost:5000/api/properties');
    const data = await response.json();
    console.log(data);
    setProperties(data);
  };
  const fetchFirms = async () => {
    // Perform your asynchronous data fetching here
    // For Main, using fetch or axios
    const response = await fetch('http://localhost:5000/api/firm');
    const data = await response.json();
    console.log(data);
    setFirms(data);
  };

  useEffect(() => {
    fetchProperties(); // Call the function to fetch the data when the component mounts
    fetchFirms();
  }, []);


  const columns = useMemo(
    //column definitions...
    () => [
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
      {
        accessorKey: 'moreInfoButton',
        header: 'Details / Edit', // Empty header for the button column
        Cell: ({ row }) => (
          <MoreInfoButton
            id={row.original._id}/>
        ),
      },
    ],
    [],
    //end
  );

  const table = useMaterialReactTable({
    columns,
    data: properties || [],
    enableExpandAll: false, //disable expand all button
    muitabletdProps: () => ({ 
      sx: () => ({
        backgroundColor: 'black',
      }),
      }),
      
    muiDetailPanelProps: () => ({
      sx: () => ({
        backgroundColor: 'white',
      }),
    }),

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
            borderBottom: 'none',
            display: 'grid',
            margin: 'auto',
            gridTemplateColumns: '1fr 1fr 1fr',
            width: '80%',
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




export default MainPropertyTable;
