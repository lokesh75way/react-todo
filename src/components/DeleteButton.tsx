import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteTaskDialog from './DeleteDialog';

interface DeleteButtonProps {
  onClick: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
  const [open, setOpen] = useState(false);

  const handelOnClick = () => {
    setOpen(false);
    onClick();
  };

  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
        color={'error'}
      >
        <DeleteIcon />
      </IconButton>
      <DeleteTaskDialog
        open={open}
        onClose={() => setOpen(false)}
        onOk={handelOnClick}
      />
    </>
  );
};

export default DeleteButton;
