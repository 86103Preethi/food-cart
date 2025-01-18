import React from 'react';
import { Snackbar, SnackbarContent, IconButton } from '@mui/material';
import { CheckCircle, Cancel } from '@mui/icons-material';

export function ToastNotification({ successAlert, failureAlert, alertMessage, setSuccessAlert, setFailureAlert, setAlertMessage }) {
  
  const onClose = () => {
    setFailureAlert(false);
    setSuccessAlert(false);
    setAlertMessage('');
  };

  return (
    <div className="absolute top-0 right-80 mt-14 transform translate-x-1/2 z-50 flex flex-col p-4">
      {/* Success Toast */}
      {successAlert && (
        <Snackbar open={successAlert} autoHideDuration={6000} onClose={onClose}>
          <SnackbarContent
            style={{
              backgroundColor: '#4caf50',
              display: 'flex',
              alignItems: 'center',
            }}
            message={
              <span>
                <CheckCircle style={{ marginRight: '8px' }} />
                {alertMessage}
              </span>
            }
            action={
              <IconButton size="small" aria-label="close" color="inherit" onClick={onClose}>
                <Cancel fontSize="small" />
              </IconButton>
            }
          />
        </Snackbar>
      )}

      {/* Failure Toast */}
      {failureAlert && (
        <Snackbar open={failureAlert} autoHideDuration={6000} onClose={onClose}>
          <SnackbarContent
            style={{
              backgroundColor: '#f44336',
              display: 'flex',
              alignItems: 'center',
            }}
            message={
              <span>
                <Cancel style={{ marginRight: '8px' }} />
                {alertMessage}
              </span>
            }
            action={
              <IconButton size="small" aria-label="close" color="inherit" onClick={onClose}>
                <Cancel fontSize="small" />
              </IconButton>
            }
          />
        </Snackbar>
      )}
    </div>
  );
}
