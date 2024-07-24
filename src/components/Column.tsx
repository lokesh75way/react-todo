import React from 'react';
import {
  Typography,
  List,
  ListItem,
  IconButton
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import TaskCard from './TaskCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CreateTaskCard from './CreateTask';



interface ListProps {
  label: string;
  id: number;
  tasks: Task[];
}

const useStyles = makeStyles({
  container: {
    border: '1px solid #ccc',
    borderRadius: 4,
    background: '#e8e8e8',
    padding: '1rem',
    overflowX: 'auto',
    overflowY: 'auto',
    scrollbarWidth: 'none',
    width: '100%',
  },
  headingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: '0 16px 0px 16px',
    position: 'sticky',
    top: 0,
    zIndex: 1
  },
  heading: {
    fontWeight: 'bold',
    color: 'black',
    marginRight: '8px',
  },
  content: {
    padding: 0,
    backgroundColor: 'transparent',
  },
  listItem: {
    padding: '0px !important',
    cursor: 'pointer',
  },
  formHelperText: {
    color: 'red',
    marginTop: 8,
  }
});

const Column: React.FC<ListProps> = ({
  label,
  tasks,
  id
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.headingContainer}>
        <Typography className={classes.heading}>{label}</Typography>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="leftIcon"
        >
          <KeyboardArrowLeftIcon />
        </IconButton>
      </div>
      <List className={classes.content}>
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            className={classes.listItem}
          >
            <TaskCard task={task} />
          </ListItem>
        ))}
        <CreateTaskCard listId={id} />
      </List>
    </div>
  );
};

export default Column;
