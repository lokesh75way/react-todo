import React, { useState } from 'react';
import { Card, CardContent, CardActions, Typography, IconButton, Chip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TaskDialog from './TaskDialog';
import { makeStyles } from '@mui/styles';
import DeleteButton from './DeleteButton';
import { useAppDispatch } from '../store/store';
import { removeTask } from '../store/reducers/taskReducer';
import { toast } from 'react-toastify';

interface TaskCardProps {
  task: Task;
}

const useStyles = makeStyles({
  card: {
    marginBottom: '.5rem',
    borderTop: '5px solid gold',
    borderRadius: 8,
    width: '100%',

  },
  cardContent: {
    paddingBottom: '2rem !important',
    textWrap: 'wrap'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 16px 16px',
  },
  dateText: {
    display: 'flex',
    alignItems: 'center',
  },
  calendarIcon: {
    marginRight: 4,
  },
  chip: {
    marginTop: 16,
  },
});

type Color = 'warning' | 'primary' | 'default' | 'success'

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { name, description, date, status } = task;
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useAppDispatch();

  const toggle = () => setOpenDialog(!openDialog);

  const handleDelete = () => {
    dispatch(removeTask(task.id))
    toast.success("Task deleted")
  };

  const classes = useStyles();

  const statusLabelWithColor: Record<string, { color: Color, label: string }> = {
    'in_progress': { color: 'primary', label: 'In progress' },
    'to_do': { color: 'warning', label: 'To do' },
    'qa': { color: 'default', label: 'QA' },
    'done': { color: 'success', label: 'Done' }
  };

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography variant="h5" component="div" sx={{ marginBottom: 1 }}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Chip {...statusLabelWithColor[status]} className={classes.chip} />
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Typography variant="body2" color="text.secondary" className={classes.dateText}>
          <CalendarTodayIcon className={classes.calendarIcon} />
          {date.substring(0, 10)}
        </Typography>
        <div>
          <IconButton edge="end" color="primary" onClick={toggle}>
            <EditIcon />
          </IconButton>
          <DeleteButton onClick={handleDelete} />
        </div>
        {openDialog && <TaskDialog listId={task.list} open={openDialog} onClose={toggle} task={task} />}
      </CardActions>
    </Card>
  );
};

export default TaskCard;
