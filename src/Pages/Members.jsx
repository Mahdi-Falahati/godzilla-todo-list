import Grid from "@mui/material/Grid";

import Search from "../Components/Search";

export default function Members() {
  const termHandler = (term) => {
    console.log(term);
  };
  
  return (
    <>
      <Grid container spacing={2}>
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
          <Search transferTerm={termHandler} />
        </Grid>
        <Grid item sm={4} xs={12}>
          <span>a</span>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </>
  );
}
