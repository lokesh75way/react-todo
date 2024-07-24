import { Box, Theme, useTheme } from '@mui/material';
import Column from '../components/Column';
import Navbar from '../components/Navbar';
import { useAppSelector } from '../store/store';
import { useMemo } from 'react';
import { createStyles } from '@mui/styles';


const useStyles = (theme: Theme) => createStyles({
  root: {
    margin: '16px',
    gap: 1,
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
    }
  },
});

const Home = () => {
  const tasks = useAppSelector(state => state.tasks.tasks);
  const listItems = useAppSelector(state => state.list.items);
  const theme = useTheme();
  const styles = useStyles(theme);
  const tasksByListId = useMemo(() => {
    const result: Record<number, Task[]> = {};
    tasks.forEach(task => {
      if (result[task.list]) {
        result[task.list].push(task)
      }
      else {
        result[task.list] = [task]
      }
    })
    return result;
  }, [tasks])

  return (
    <>
      <Navbar />
      <Box sx={styles.root}>
        {listItems.map(item => (
          <Column key={item.id} label={item.label} id={item.id} tasks={tasksByListId[item.id] || []} />
        ))}
      </Box>
    </>
  );
};

export default Home;
