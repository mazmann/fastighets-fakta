import { useMemo, useState } from 'react';
import {
  MRT_EditActionButtons,
  MaterialReactTable,
  // createRow,
  useMaterialReactTable,
} from 'material-react-table';
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { fakeData, usStates } from './makeData';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteUser } from '../../hooks/ownersTableHooks/useDeleteUser';
import { useGetUsers } from '../../hooks/ownersTableHooks/useGetUsers';
import { useUpdateUser } from '../../hooks/ownersTableHooks/useUpdateUser';
import { validateUser } from '../../hooks/ownersTableHooks/validateUser';
import { useCreateUser } from '../../hooks/ownersTableHooks/useCreateUser';


const Example = () => {
  const [validationErrors, setValidationErrors] = useState({});
  const [isIdVisible, setIsIdVisible] = useState(true);
  const columns = useMemo(() => {
    const baseColumns = [
      {
        accessorKey: 'firmName',
        header: 'Company Name',
      },
      {
        accessorKey: 'organisationNumber',
        header: 'Organisation Number',
      },
      {
        accessorKey: 'contactRep',
        header: 'Contact Person',
      },
      {
        accessorKey: 'visitingAddress',
        header: 'Street Address, Area',
      },
    ];
  
    if (!isIdVisible) {
      baseColumns.unshift({
        accessorKey: '_id',
        header: 'ID',
      });
    }
  
    return baseColumns;
  }, [isIdVisible, validationErrors]);

  //call CREATE hook
  const { mutateAsync: createUser, isPending: isCreatingUser } =
    useCreateUser();
  //call READ hook
  const {
    data: fetchedUsers = [],
    isError: isLoadingUsersError,
    isFetching: isFetchingUsers,
    isLoading: isLoadingUsers,
  } = useGetUsers();
  
  //call UPDATE hook
  const { mutateAsync: updateUser, isPending: isUpdatingUser } =
    useUpdateUser();
  //call DELETE hook
  const { mutateAsync: deleteUser, isPending: isDeletingUser } =
    useDeleteUser();

  //CREATE action
  const handleCreateUser = async ({ values, table }) => {

    
    await createUser(values);
    table.setCreatingRow(null); //exit creating mode
    setIsIdVisible(false);
  };

  //UPDATE action
  const handleSaveUser = async ({ values, table }) => {
    await updateUser(values);
    table.setEditingRow(null); //exit editing mode
    setIsIdVisible(false);
  };

  //DELETE action
  const openDeleteConfirmModal = (row) => {
    console.log(row.original);
    if (window.confirm('Are you sure you want to delete this user?')) {
      deleteUser(row.original);
    }
  };

  const table = useMaterialReactTable({
    columns,
    data: fetchedUsers,
    createDisplayMode: 'modal', //default ('row', and 'custom' are also available)
    editDisplayMode: 'modal', //default ('row', 'cell', 'table', and 'custom' are also available)
    enableEditing: true,
    getRowId: (row) => row.id,
    muiToolbarAlertBannerProps: isLoadingUsersError
      ? {
          color: 'error',
          children: 'Error loading data',
        }
      : undefined,
    muiTableContainerProps: {
      sx: {
        minHeight: '500px',
      },
    },
    onCreatingRowCancel: () => {
      setValidationErrors({});
      setIsIdVisible(true); // Set isIdVisible to false when the create modal is cancelled
    },
    onCreatingRowSave: (newData) => {
      handleCreateUser(newData);
      setIsIdVisible(true); // Set isIdVisible to false when the create modal is closed
    },
    onEditingRowCancel: () => {
      setValidationErrors({});
      setIsIdVisible(true); // Set isIdVisible to false when the edit modal is cancelled
    },
    onEditingRowSave: (newData) => {
      handleSaveUser(newData);
      setIsIdVisible(true); // Set isIdVisible to false when the edit modal is closed
    },
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
    //optionally customize modal content
    renderEditRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h3">Edit User</DialogTitle>
        <DialogContent
          sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          {internalEditComponents} {/* or render custom edit components here */}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: 'flex', gap: '1rem' }}>
        <Tooltip title="Edit">
          <IconButton onClick={() => {
            setIsIdVisible(false);
            table.setEditingRow(row)
          }}
          >
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    renderTopToolbarCustomActions: ({ table }) => (
      <Button
        variant="contained"
        onClick={() => {
          table.setCreatingRow(true); //simplest way to open the create row modal with no default values
          //or you can pass in a row object to set default values with the `createRow` helper function
          // table.setCreatingRow(
          //   createRow(table, {
          //     //optionally pass in default values for the new row, useful for nested data or other complex scenarios
          //   }),
          // );
        }}
      >
        Create New User
      </Button>
    ),
    state: {
      isLoading: isLoadingUsers,
      isSaving: isCreatingUser || isUpdatingUser || isDeletingUser,
      showAlertBanner: isLoadingUsersError,
      showProgressBars: isFetchingUsers,
    },
  });

  return <MaterialReactTable table={table} />;
};

export default Example;