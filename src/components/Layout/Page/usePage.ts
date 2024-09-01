import { useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { bool } from "yup";
import { useLayoutContext } from "../hooks/useLayoutContext";

// import { useMsal, useAccount } from '@azure/msal-react'
// import { useConfigurationState } from 'reducers/configuration.reducer'
// import { useLayoutContext } from '../hooks/useLayoutContext'

export type PageProps = React.PropsWithChildren<{
  noSpace?: boolean;
  title: string;
}>;

export const usePage = (props: PageProps) => {
  const { noSpace, children, title } = props;
  const { mixins } = useTheme();
  //   const { accounts } = useMsal()
  //   const { customTitle, customSubtitle } = useLayoutContext()
  //   const { showNews } = useConfigurationState()
  //   const account = useAccount(accounts[0] || {})
  //   const { name } = account || {}
   const context = useLayoutContext();
  const { opened, setMenu } = context;

  const spacing = noSpace ? 0 : 2;
  const toolbarStyle = mixins.toolbar;

  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("lg"));

  // Handle left drawer
  //   const leftDrawerOpened = useSelector(
  //     (state: boolean) => state.customization.opened
  //   );
  //   const dispatch = useAppDispatch();
  //   const handleLeftDrawerToggle = () => {
  //     dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
  //   };

  //   useEffect(() => {
  //     dispatch({ type: SET_MENU, opened: !matchDownMd });
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [matchDownMd]);

  return {
    spacing,
    // showNews,
    children,
    toolbarStyle,
    // title: customTitle || title,
    title,
    // customSubtitle,
    theme,
    name,

    // handleLeftDrawerToggle,
    // leftDrawerOpened,
    opened,
  };
};
