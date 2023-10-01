// material-ui
import { Box, useMediaQuery } from '@mui/material';

// project import
import Profile from './Profile';
import { useContext } from 'react';
import { UserContext } from 'context/user/user';
import { useTheme } from '@mui/material/styles';
import { Stack, Typography } from '../../../../../node_modules/@mui/material/index';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const { user } = useContext(UserContext);
  const theme = useTheme();

  return (
    <>
      <Stack flexDirection="column" marginTop={1}>
        <Typography>Willkommen zurück,</Typography>
        <Typography sx={{ fontSize: 36, fontWeight: theme.typography.fontWeightBold }}>{user?.displayName}</Typography>
      </Stack>
      <Profile />
    </>
  );
};

export default HeaderContent;
