import React, { ReactNode } from "react";
import Button from "@mui/material/Button";

type Props = {
  children: ReactNode;
  handleOnClick: React.MouseEventHandler<HTMLButtonElement>;
  handleDisable: boolean;
  cssId: string;
};

const SharedButton = ({ children, handleOnClick, handleDisable, cssId }: Props) => {
  return (
    <Button variant="contained" onClick={handleOnClick} color="primary" id={cssId} disabled={handleDisable}>
      {children}
    </Button>
  );
};

export default SharedButton;
