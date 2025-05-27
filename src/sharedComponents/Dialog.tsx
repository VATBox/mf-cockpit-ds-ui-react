import { Breakpoint, Dialog, DialogContent } from "@mui/material";
import { ReactChild, ReactFragment, ReactPortal } from "react";
type Props = {
  children: boolean | ReactChild | ReactFragment | ReactPortal;
  open: boolean;
  maxWidth: Breakpoint;
  className: string;
};
const SharedDialog = ({ children, open, maxWidth, className }: Props) => {
  return (
    <Dialog open={open} maxWidth={maxWidth} className={className ? className : ""} fullWidth>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default SharedDialog;
