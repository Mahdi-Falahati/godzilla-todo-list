import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import UserIcon from "@mui/icons-material/AccountCircle";
import ModifyIcon from "@mui/icons-material/AutoFixHigh";
import DateRangeIcon from "@mui/icons-material/DateRange";
import FingerprintIcon from "@mui/icons-material/Fingerprint";

export default function HistroyOutput({
  TaskId,
  TypeOfModifiction,
  dataTime,
  userName,
}) {
  return (
    <Card>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
          The Task
        </Typography>
        <Typography sx={centerItemStyles} variant="h6" component="div">
          <FingerprintIcon sx={{ mx: 1 }} />
          {TaskId}
        </Typography>
        <Typography color="text.secondary">Has Been</Typography>
        <Typography variant="body2" sx={centerItemStyles}>
          <Typography sx={centerItemStyles} variant="button">
            <ModifyIcon sx={{ mx: 1 }} />
            {TypeOfModifiction}
          </Typography>
          <Typography sx={centerItemStyles} variant="button">
            by
            <UserIcon sx={{ mx: 1 }} />
            {userName}
          </Typography>
          <Typography sx={centerItemStyles} variant="button">
            at
            <DateRangeIcon sx={{ mx: 1 }} /> {dataTime}
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}

const centerItemStyles = {
  mx: 1,
  marginTop: "5px",
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  justifyContent: "center",
};
