import { Badge, Box, Grid } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TaskCard from "../Components/TaskCard";
import AddTask from "../Components/AddTask";

export default function Home() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid
          item
          sm={4}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "150px",
              fontWeight: "bold",
              border: "1px solid #999",
              padding: "5px 0px",
              borderRadius: "15px ",
            }}
          >
            Total Task
            <Badge color="secondary" badgeContent={0} max={99} showZero>
              <AssignmentIcon color="action" />
            </Badge>
          </Box>
        </Grid>

        <Grid
          item
          sm={8}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AddTask />
        </Grid>

        <Grid item xs={12}>
          <TaskCard />
        </Grid>
      </Grid>
    </>
  );
}
