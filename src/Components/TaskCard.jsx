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
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
        width: "400px",
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
    </Card>
  );
}
