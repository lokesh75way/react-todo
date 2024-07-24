import React, { useState } from 'react';
import { Card, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TaskDialog from './TaskDialog';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  card: {
    borderRadius: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  },

});

type Props = {
  listId: number
}

const CreateTaskCard: React.FC<Props> = ({ listId }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <>
      <Card className={classes.card} onClick={toggle}>
        <IconButton
          color="primary"
        >
          <AddIcon />
        </IconButton>
      </Card>
      {open && <TaskDialog open={open} listId={listId} onClose={toggle} />}
    </>
  );
};

export default CreateTaskCard;
