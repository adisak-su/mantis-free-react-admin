import './CreateTask.scss';
import { useEffect, useState } from 'react';
import { Grid, Stack, Typography, SelectChangeEvent, Button } from '@mui/material';
import { CustomInput } from 'components/CustomInput';
import { ChangeEvent } from 'react';
import { CustomSelect } from 'components/CustomSelect';
import { ColumnName } from 'types/Task';
import { useTaskStore } from 'zustand-store/TasksStore';
import { useEpicStore } from 'zustand-store/EpicStore';

type CreateTaskProps = {
  handleToggle: () => void;
};

const epicDescription =
  'In LifeOps an "epic" transcends the conventional concept of a product goal and becomes a manifestation of a grander life pursuit. An epic represents a strategic and profound objective, a monumental journey that unfolds over time.';

export const CreateTask = ({ handleToggle }: CreateTaskProps) => {
  const [epic, setEpic] = useState('');
  const [firstEpicName, setFirstEpicName] = useState('');
  const [taskName, setTaskName] = useState('');
  const [taskStatus, setTaskStatus] = useState<ColumnName>(ColumnName.NEW);
  const [taskPoints, setTaskPoints] = useState(1);
  const [isTaskValid, setIsTaskValid] = useState(true);
  const [isEpicValid, setIsEpicValid] = useState(true);

  const { AddTask } = useTaskStore();
  const { Epics, AddEpic } = useEpicStore();

  useEffect(() => {
    if (epic && taskName && taskStatus && taskPoints) {
      setIsTaskValid(false);
    } else {
      setIsTaskValid(true);
    }
  }, [epic, taskName, taskStatus, taskPoints]);

  useEffect(() => {
    if (firstEpicName) {
      setIsEpicValid(false);
    } else {
      setIsEpicValid(true);
    }
  }, [firstEpicName]);

  const handleEpicNameChange = (event: SelectChangeEvent) => {
    setEpic(event.target.value as string);
  };

  const handleTaskNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };
  const handleFirstEpicNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstEpicName(e.target.value);
  };

  const handlePointsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskPoints(Number(e.target.value));
  };

  const handleStatusChange = (event: SelectChangeEvent) => {
    setTaskStatus(event.target.value as ColumnName);
  };

  const CreateEpic = () => {
    AddEpic({ title: firstEpicName, userId: '1' });
    handleToggle();
  };
  const CreateTask = () => {
    AddTask({
      title: taskName,
      points: taskPoints,
      status: taskStatus
    });
    handleToggle();
  };

  return (
    <Grid container spacing={3} padding={3} paddingTop={0}>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: -1 } }}>
          <Typography variant="h3"> {Epics.length ? 'Create a Task' : 'Create your first epic'}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        {Epics?.length ? (
          <>
            <CustomSelect title="Epic" placeholder="Select an epic" value={epic} options={Epics} handleChange={handleEpicNameChange} />
            <CustomInput
              title="Title"
              placeholder="Enter task title"
              value={taskName}
              handleChange={handleTaskNameChange}
              disabled={isTaskValid}
            />
            <div className="status-points-container">
              <CustomSelect
                title="Status"
                placeholder="select task status"
                value={taskStatus}
                options={[
                  { title: 'New', id: ColumnName.NEW },
                  { title: 'Committed', id: ColumnName.COMMITTED },
                  { title: 'Active', id: ColumnName.ACTIVE }
                ]}
                handleChange={handleStatusChange}
              />
              <CustomInput title="Points" placeholder="# of days" value={taskPoints} handleChange={handlePointsChange} />
            </div>
          </>
        ) : (
          <div className="epic-info-container">
            <Typography variant="caption" color="textSecondary">
              {epicDescription}
            </Typography>
            <CustomInput
              title="Create an epic"
              placeholder="Enter epic title"
              value={firstEpicName}
              handleChange={handleFirstEpicNameChange}
            />
          </div>
        )}
        <Button
          disableElevation
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          color="primary"
          disabled={Epics.length ? isTaskValid : isEpicValid}
          onClick={Epics.length ? CreateTask : CreateEpic}
        >
          {Epics.length ? 'create task' : 'create epic'}
        </Button>
      </Grid>
    </Grid>
  );
};
