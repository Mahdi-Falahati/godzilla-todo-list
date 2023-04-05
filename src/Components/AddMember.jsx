import { Box, Button, InputAdornment, TextField } from "@mui/material";
import HowToRegIcon from "@mui/icons-material/HowToReg";

import PopUpForm from "./PopUpForm";
import { useReducer } from "react";

export default function AddMember() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handelName = (e) => {
    dispatch({ type: types.name, value: e.target.value });
  };

  const handelAge = (e) => {
    dispatch({ type: types.age, value: e.target.value });
  };

  const handelGithubAddres = (e) => {
    dispatch({ type: types.github, value: e.target.value });
  };

  const handelLinkedinAddres = (e) => {
    dispatch({ type: types.linkedin, value: e.target.value });
  };

  return (
    <PopUpForm transferCloseData={false}>
      <Box
        sx={{
          width: { xs: "100%", sm: "70%" },
          margin: "15px auto ",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            onChange={handelName}
            value={state.name}
            label="Enter Your Name :"
            id="standard-start-adornment"
            sx={inputStyle}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">My Name Is </InputAdornment>
              ),
            }}
            variant="standard"
          />

          <TextField
            onChange={handelAge}
            value={state.age}
            id="standard-number"
            label="Enter Your Age "
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            sx={inputStyle}
          />

          <TextField
            onChange={handelGithubAddres}
            value={state.github}
            label="Enter Your User Name GitHub :"
            id="standard-start-adornment"
            sx={inputStyle}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">github.com / </InputAdornment>
              ),
            }}
            variant="standard"
          />

          <TextField
            onChange={handelLinkedinAddres}
            value={state.linkedin}
            label="Enter Your User Name Linkedin :"
            id="standard-start-adornment"
            sx={inputStyle}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  linkedin.com /{" "}
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          
          <Button
            sx={{
              width: { sm: "300px" },
              letterSpacing: "1px",
              height: "35px",
              marginTop: "15px",
            }}
            variant="contained"
            type="submit"
            color="secondary"
            endIcon={<HowToRegIcon />}
          >
            Save Member
          </Button>
        </form>
      </Box>
    </PopUpForm>
  );
}

const types = {
  name: "UPDATE__NAME",
  age: "UPDATE__AGE",
  github: "UPDATE__GITHUB_USERNAE",
  linkedin: "UPDATE__LINKEDIN_USERNAE",
};

const initialState = {
  name: "",
  age: 15,
  github: "",
  linkedin: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.name:
      return { ...state, name: action.value };
    case types.age:
      return { ...state, age: action.value };
    case types.github:
      return { ...state, github: action.value };
    case types.linkedin:
      return { ...state, linkedin: action.value };
    default:
      break;
  }
};

const inputStyle = {
  m: 1,
  width: { xs: "28ch", sm: "40ch" },
  marginTop: "15px",
};
