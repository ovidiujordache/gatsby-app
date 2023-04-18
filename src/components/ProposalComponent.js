import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import { DropzoneArea } from 'material-ui-dropzone';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export const ProposalComponent =() => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
       Proposals
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
         Create Proposal
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '20ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <p>Business Details</p>
         <DropzoneArea
            nChange={(files) => console.log('Files:', files)}
        />
        <TextField
          required
          id="name"
          label="Name"
          defaultValue ="Workeye"
           InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
         <TextField
          id=" Street address"
          label="Company Address"
          defaultValue="ex.10 baker street"
          type="text"
           InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
          <TextField
          id="phone-number"
          label="Contact Number"
          type="text"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' , readOnly:true}}
          defaultValue="087667211"
          variant="filled"
        />
        <Divider/>
        <p>Customer Details</p>
        <TextField
          required
          id="name"
          label="Name"
          helperText="Please enter customer name"
          variant="filled"
        />
        <TextField
          id="Street address"
          label="Company Address"
          defaultValue="ex.10 baker street"
          type="text"
          helperText="Please enter an address"
          variant="filled"
        />
        <TextField
          id="Country"
          label="Country"
          defaultValue="Ireland"
          type="text"
          helperText="Please enter a country"
          variant="filled"
        />
        <TextField
          id="zipcode"
          label="ZipCode"
          defaultValue="ex.A76 A5F6"
          variant="filled"
          type="text"
          helperText="Please enter a zip code"
        />
        <TextField
          id="phone-number"
          label="Contact Number"
          type="text"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          helperText="Please enter a contact number"
          variant="filled"
        />
      </div>

      <Divider/>
        <p>Pricing and Services</p>
    </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
          <Button autoFocus onClick={handleClose}>
            View Proposals
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}