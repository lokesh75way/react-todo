
import {
    InputLabel,
    FormControl,
    MenuItem,
    FormHelperText,
} from '@mui/material';
import { Select } from '@mui/material';
import React from 'react';
import { Control, Controller } from 'react-hook-form';

type Props = {
    error?: string
    control: Control<Task, any>
}

const StatusSelect: React.FC<Props> = ({ error, control }) => {
    return (
        <Controller control={control} name="status" render={({ field }) => {
            return (
                <>
                    <FormControl fullWidth>
                        <InputLabel id="status-label">Status</InputLabel>
                        <Select
                            labelId="status-label"
                            id="status"
                            label="Status"
                            error={!!error}
                            {...field}

                        >
                            <MenuItem value="to_do">To do</MenuItem>
                            <MenuItem value="in_progress">In progress</MenuItem>
                            <MenuItem value="qa">QA</MenuItem>
                            <MenuItem value="done">Done</MenuItem>
                        </Select>
                        {error && <FormHelperText sx={{ mx: '14px' }} error color='error'>{error}</FormHelperText>}
                    </FormControl>
                </>
            )
        }} />
    )
}

export default StatusSelect