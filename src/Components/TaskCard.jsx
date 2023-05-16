import { useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  AvatarGroup,
  ButtonGroup,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

import DeleteIcon from "@mui/icons-material/Delete";
import CompleteIcon from "@mui/icons-material/Verified";
import EditIcon from "@mui/icons-material/Edit";

export default function TaskCard() {
  const [expanded, setEcpanded] = useState(false);

  const handleChange = () => {
    setEcpanded(!expanded);
  };

  return (
    <Card
      sx={{
        boxShadow: "inset 1px -2px 5px 0px #999",
        borderRadius: "10px",
        maxWidth: "400px",
        my: 3,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5" sx={{ textAlign: "center" }}>
            TaskName
          </Typography>
          <Box>
            <Accordion expanded={expanded === true} onChange={handleChange}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Description
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    textAlign: "right",
                    width: "100%",
                    fontSize: "14px",
                  }}
                >
                  Show More
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Donec placerat, lectus sed mattis semper, neque lectus feugiat
                  lectus, varius pulvinar diam eros in elit. Pellentesque
                  convallis laoreet laoreet.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            pl: 1,
            pb: 1,
            justifyContent: "center",
          }}
        >
          <AvatarGroup total={7}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          m: 2,
        }}
      >
        <ButtonGroup aria-label="button group" variant="outlined" size="small">
          <Button endIcon={<DeleteIcon />} color="error">
            Delete
          </Button>
          <Button endIcon={<EditIcon />} color="warning">
            Edit
          </Button>
          <Button endIcon={<CompleteIcon />} color="success">
            Complete
          </Button>
        </ButtonGroup>
      </Box>
    </Card>
  );
}
