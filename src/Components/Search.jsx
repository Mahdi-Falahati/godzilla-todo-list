import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { useState } from "react";

export default function Search({ transferTerm }) {
  const [term, setTerm] = useState("");

  const termHandler = (event) => {
    setTerm(event.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (term) {
      transferTerm(term);
    }
  };

  return (
    <form onSubmit={formHandler}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          value={term}
          onChange={termHandler}
          id="input-with-sx"
          label="Search In Members..."
          variant="standard"
        />
        <Button
          sx={{ height: "35px", marginLeft: "10px",marginTop:"10px" }}
          variant="contained"
          type="submit"
          color="secondary"
          endIcon={<PersonSearchIcon />}
        >
          Search
        </Button>
      </Box>
    </form>
  );
}
