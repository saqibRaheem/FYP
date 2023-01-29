import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import Btn from '../Buttons/Button';
import {applyJob} from "../../Lib/User.helper"
import {useHistory} from "react-router-dom"
function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function AppliedJobModal({jobTitle,jobId,userId,appliedId,loginStatus}) {

  const history = useHistory()
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    !loginStatus ? history.push("/login"): setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Btn  text={appliedId?  "Applied" :"Apply Now"} onClick={handleClickOpen} disabled={appliedId}/>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          {jobTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure, you want to apply for this job
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={()=>{
            applyJob(jobId,userId,handleClose)
          }}>Apply</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
