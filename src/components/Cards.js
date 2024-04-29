import React, { useState } from "react";
import "./../App.css";
import Dialog from "./Dialog";
import { Avatar, Grid, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import SubjectIcon from "@mui/icons-material/Subject";
import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";

const Card = ({ id, title, description, draggable }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const dragStart = (e) => {
    setIsDragging(true);
    e.dataTransfer.setData("card_id", id);
  };

  const dragEnd = () => {
    setIsDragging(false);
  };

  const handleClick = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <div
      id={id}
      className={`card ${isDragging ? "dragging" : ""}`}
      draggable={draggable}
      onDragStart={dragStart}
      onDragEnd={dragEnd}
      onClick={handleClick}
    >
      {openDialog && <Dialog onClose={handleClose} />}
      <Grid container>
        <Grid item xs={10}>
          <Grid container item>
            <Typography style={{ color: "#676273", paddingRight: "5px" }}>
              Space
            </Typography>
            <CircleIcon style={{ color: "#C34949", paddingRight: "5px" }} />
            <Typography style={{ color: "#676273" }}>List</Typography>
          </Grid>
          <Typography
            style={{ fontSize: "12px", fontWeight: 400, fontFamily: "Lexend" }}
          >
            TH100 - malware of virus attack{" "}
          </Typography>
          <Typography
            style={{
              color: "#676273",
              fontSize: "10px",
              fontWeight: 400,
              alignItems: "center",
              display: "flex",
            }}
          >
            Lorem ipsum set amet da pitn{" "}
            <SubjectIcon style={{ color: "#CCCDDD", paddingLeft: "10px" }} />{" "}
          </Typography>
          <Typography
            style={{ alignItems: "center", display: "flex", paddingTop: "5px" }}
          >
            {" "}
            <AssistantPhotoIcon style={{ color: "#E13121" }} />
            7/27/22{" "}
          </Typography>
        </Grid>
        <Grid item xs={2} p={"40px 0px 0px 5px"}>
          <Avatar
            style={{
              width: "25px",
              height: "25px",
              marginRight: "5px",
              backgroundColor: "#7869E6",
              fontSize: "16px",
            }}
          >
            F
          </Avatar>
        </Grid>
        <Grid container pt={"15px"}>
          <Grid item xs={2}>
            <Avatar
              style={{
                width: "25px",
                height: "25px",
                marginRight: "5px",
                backgroundColor: "#7869E6",
                fontSize: "16px",
              }}
            >
              F
            </Avatar>
          </Grid>
          <Grid item xs={10}>
            <Typography style={{ fontSize: "10px", color: "#989EA9" }}>
              Owner
            </Typography>
            <Typography style={{ fontSize: "10px", color: "#676273" }}>
              Nawab Ali
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Card;
