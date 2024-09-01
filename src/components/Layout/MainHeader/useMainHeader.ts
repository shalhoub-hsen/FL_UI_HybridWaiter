import { useMediaQuery, useTheme } from "@mui/material";
import { useAppDispatch } from "hooks/redux";
import React, { useState } from "react";
import { useLayoutContext } from "../hooks/useLayoutContext";
import { useAuthenticationState } from "reducers/authentication.reducer";
import { logout } from "actions/authentication.action";

export type MainHeaderProps = React.PropsWithChildren<{
  noSpace?: boolean;
  title?: string;
}>;

export const useMainHeader = (props: MainHeaderProps) => {
  const dispatch = useAppDispatch();
  const { noSpace, children, title } = props;
  const { mixins } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const authenticationState = useAuthenticationState();
  const { isAuthenticated, username } = authenticationState;
  const context = useLayoutContext();
  const { opened, setMenu } = context;

  const spacing = noSpace ? 0 : 2;
  const toolbarStyle = mixins.toolbar;

  const theme = useTheme();

  const onOpenMenu = () => {
    setMenu(!opened);
    // dispatch(toggleDrawer())
  };

  const [showModal, setShowModal] = useState(false);
  const handleRegistration = () => {
    setShowModal(true);
  };

  const handleLogout = () => {
    dispatch(logout());
    setShowModal(false);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  return {
    spacing,
    children,
    toolbarStyle,
    title,
    theme,
    onOpenMenu,
    isOpen,
    isAuthenticated,
    username,
    showModal,
    handleRegistration,
    onCloseModal,
    handleLogout,
  };
};
