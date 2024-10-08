

import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase } from '@mui/material';

// project imports
// import LogoSection from '../LogoSection';
// import SearchSection from './SearchSection';
// import ProfileSection from './ProfileSection';
// import NotificationSection from './NotificationSection';

// assets
import { IconMenu2 } from '@tabler/icons';
import { HeaderProps, useHeader } from './useHeader';
// import kutabAudol from'./../../assets/kutabAudol.png';
import kutabAudol from'./../../../assets/images/kutabAudol.png';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

// const Header = ({ handleLeftDrawerToggle }) => {
//     const theme = useTheme();

    const Header: React.FC<HeaderProps> = (props) => {
        const { children, name, title,theme, isOpen ,onOpenMenu} = useHeader(props);
      
    return (
        <>
            {/* logo & toggler button */}
            <Box
                sx={{
                    width: 228,
                    display: 'flex',
                    [theme.breakpoints.down('md')]: {
                        width: 'auto'
                    }
                }}
            >
                <Box component="span" sx={{ display: { xs: 'none', md: 'block' },  flexGrow: 1 }}>
                    {/* <LogoSection /> */}
                    <img  src={kutabAudol}  style={{ width: '8rem'}} alt="logo"/>

                    
                </Box>
                 <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
                    <Avatar
                        variant="rounded"
                        sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.mediumAvatar,
                            transition: 'all .2s ease-in-out',
                            background: theme.palette.secondary.main,
                            color: theme.palette.secondary.dark,
                            '&:hover': {
                                background: theme.palette.secondary.dark,
                                color: theme.palette.secondary.light
                            }
                        }}
                        onClick={onOpenMenu}
                        color="inherit"
                    >
                        <IconMenu2 stroke={1.5} size="1.3rem" />
                    </Avatar>
                    
                </ButtonBase>
            </Box>

            {/* header search */}
            {/* <SearchSection /> */}
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ flexGrow: 1 }} />

            {/* notification & profile */}
            {/* <NotificationSection />
            <ProfileSection /> */}
        </>
    );
};

// Header.propTypes = {
//     handleLeftDrawerToggle: PropTypes.func
// };

export default Header;
