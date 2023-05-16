import {
    Box,
    Slide,
    Button,
    Dialog,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
  } from "@mui/material";
  import CloseIcon from "@mui/icons-material/Close";
  import GroupAddIcon from "@mui/icons-material/GroupAdd";
  
  import { useState, forwardRef } from "react";
  
  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
 
  export default function PopUpForm({ children, transferCloseData }) {
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <Button
          variant="contained"
          color="warning"
          onClick={handleClickOpen}
          startIcon={<GroupAddIcon />}
        >
          Add Member
        </Button>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: "relative", background: "#533391" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Add Member
              </Typography>
            </Toolbar>
          </AppBar>
          <Box sx={{ marginTop: "10px", height: "100%" }}>{children}</Box>
        </Dialog>
      </div>
    );
  }
  