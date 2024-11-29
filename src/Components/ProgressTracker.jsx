import React from 'react';
import { LinearProgress, Box, Typography } from '@mui/material';

const ProgressTracker = ({ progress }) => {
  return (
    <Box sx={{ width: '100%', margin: '20px 0' }}>
      <Typography variant="body1" sx={{ marginBottom: '10px' }}>
        Progress: {progress}%
      </Typography>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
};

export default ProgressTracker;
