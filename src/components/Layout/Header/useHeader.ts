import { useMediaQuery, useTheme } from "@mui/material";
import { useAppDispatch } from "hooks/redux";
import React, { useState } from "react";
import { useLayoutContext } from "../hooks/useLayoutContext";
// import { useMsal, useAccount } from '@azure/msal-react'
// import { useConfigurationState } from 'reducers/configuration.reducer'
// import { useLayoutContext } from '../hooks/useLayoutContext'

export type HeaderProps = React.PropsWithChildren<{
  noSpace?: boolean;
  title: string;
}>;

export const useHeader = (props: HeaderProps) => {
  const { noSpace, children, title } = props;
  const { mixins } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const context = useLayoutContext();
  const { opened, setMenu } = context;

  const spacing = noSpace ? 0 : 2;
  const toolbarStyle = mixins.toolbar;

  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("lg"));

  const onOpenMenu = () => {
    setMenu(!opened);
    // dispatch(toggleDrawer())
  };

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
    onOpenMenu,

    // handleLeftDrawerToggle,
    // leftDrawerOpened,
    isOpen,
  };
};
