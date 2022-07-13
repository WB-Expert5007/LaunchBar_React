import { Typography, Box } from '@mui/material';
import { useLocation } from 'react-router';

import { PageTitle } from '../PageTitle';

export const PageDefault = () => {
  const location = useLocation();
  return (
    <>
      <PageTitle title={location.pathname.replaceAll('/', ' ').trimStart()} />
      <Box sx={{ p: 3 }}>
        <Typography paragraph>
          LaunchBar
        </Typography>
      </Box>
    </>
  );
};
