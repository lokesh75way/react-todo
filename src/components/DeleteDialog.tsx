import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';

interface TaskDialogProps {
  open: boolean;
  onClose: () => void;
  onOk: () => void;
}

const useStyles = makeStyles({
  dialogTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '400px'
  },
  dialogContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  dialogActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0'
  }
});

const DeleteTaskDialog: React.FC<TaskDialogProps> = ({ open, onClose, onOk }) => {
  const classes = useStyles();
  return (
    <Dialog open={open} onClose={onClose} >
      <DialogTitle className={classes.dialogTitle}>
        <Typography variant="h6">
          Are you sure you want to delete this task?
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <DialogActions className={classes.dialogActions}>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onOk} color="primary" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteTaskDialog;
