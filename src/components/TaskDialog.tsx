import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';
import { useDispatch } from 'react-redux';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from './Input';

import { taskSchema } from '../yup';
import { toast } from 'react-toastify';
import { addTask, updateTask } from '../store/reducers/taskReducer';
import StatusSelect from './StatusSelect';

interface TaskDialogProps {
  open: boolean;
  onClose: () => void;
  task?: Task;
  listId: number;
}

const useStyles = makeStyles({
  dialogTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dialogContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  dialogActions: {
    padding: '12px 24px !important',
  },
});

const TaskDialog: React.FC<TaskDialogProps> = ({ open, onClose, task, listId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors }, reset, setValue, control } = useForm<Task>({
    resolver: yupResolver(taskSchema)
  });

  React.useEffect(() => {
    if (task) {
      reset(task);
    }
    else {
      setValue('id', Date.now())
      setValue('list', listId)
      setValue('date', new Date().toISOString())
    }
  }, [task, reset]);

  const onSubmit: SubmitHandler<Task> = (data) => {
    if (task) {
      dispatch(updateTask({ task: data }));
      toast.success("Task updated");
    } else {
      dispatch(addTask({ task: data }));
      toast.success("Task created");
    }
    onClose();
  };

  const title = task ? 'Update Task' : 'Create Task'
  const buttonTitle = task ? 'Update' : 'Create'

  console.log(task);

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle className={classes.dialogTitle}>
        <Typography variant="h6">
          {title}
        </Typography>
        <IconButton edge="end" color="inherit" onClick={onClose} aria-label="close">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent className={classes.dialogContent}>
          <Input
            autoFocus
            label="Task Name"
            type="text"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <Input
            label="Description"
            type="text"
            multiline
            rows={4}
            {...register("description")}
            error={!!errors.description}
            helperText={errors.description?.message}
          />
          <StatusSelect control={control} error={errors.status?.message} />
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary" variant="contained">
            {buttonTitle}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default TaskDialog;
