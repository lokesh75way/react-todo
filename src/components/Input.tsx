import React from 'react';
import { TextField, InputAdornment, BaseTextFieldProps } from '@mui/material';

type Props = BaseTextFieldProps & { adornment?: React.ReactElement }

const CustomInputField = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { adornment } = props;
  return (
    <TextField
      ref={ref}
      margin='dense'
      fullWidth
      {...props}
      InputProps={{
        startAdornment: adornment ? (
          <InputAdornment position="start">
            {adornment}
          </InputAdornment>
        ) : undefined,
      }}
    />
  );
});
export default CustomInputField;
