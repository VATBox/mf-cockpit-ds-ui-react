import { Alert, AlertColor, Snackbar } from "@mui/material";

type Props = {
  onClose: any;
  severity: AlertColor;
  message: string;
  open: boolean;
};

const SharedSnackBar = ({ open, onClose, severity, message }: Props) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={open}
      autoHideDuration={5000}
      onClose={onClose}
    >
      <Alert severity={severity} onClose={onClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SharedSnackBar;
