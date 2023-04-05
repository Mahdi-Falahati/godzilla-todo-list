import {
  Box,
  Button,
  Checkbox,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import HowToRegIcon from "@mui/icons-material/HowToReg";

import PopUpForm from "./PopUpForm";
import { useReducer, useState } from "react";
import { v4 as uuid } from "uuid";

export default function AddMember() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [skills, setSkills] = useState([]);

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

  const handelSkills = (e) => {
    dispatch({ type: types.skill, value: e.target.value });
  };

  const addSkill = () => {
    dispatch({ type: types.skill, value: "" });
    setSkills((prevState) => [
      ...prevState,
      { id: uuid(), value: state.skill },
    ]);
  };

  const deleteSkill = (e) => {
    e.preventDefault();
    const result = skills.filter((item) => item.id !== e.target.id);
    setSkills(result);
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

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              width: { xs: "28ch", sm: "40ch" },
            }}
          >
            <TextField
              value={state.skill}
              onChange={handelSkills}
              label="Enter Your Skills "
              id="standard-start-adornment"
              variant="standard"
            />
            <Button variant="contained" onClick={addSkill}>
              Add
            </Button>
          </Box>
          <Box
            sx={{
              width: { xs: "95%", sm: "85%" },
              margin: "15px 0px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            {skills?.map((item) => {
              return (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "3px 7px",
                    background: "orangered",
                    color: "#fff",
                    borderRadius: "10px",
                    margin: "5px",
                  }}
                >
                  <button
                    id={item.id}
                    onClick={deleteSkill}
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      borderRadius: "50%",
                      width: "22px",
                      textAlign: "ceneter",
                      border: "1px #fff solid",
                      outline: "none",
                      cursor: "pointer",
                      background: "#FFF",
                      borderRight: "1px solid #fff",
                      marginRight: "5px",
                    }}
                  >
                    X
                  </button>
                  {item.value}
                </Box>
              );
            })}
          </Box>

          <Box sx={{ width: { xs: "28ch", sm: "40ch" } }}>
            <Typography
              sx={{
                textAlign: "left",
              }}
              variant="h6"
            >
              Select Languages :
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              <div>
                <Checkbox
                  defaultChecked
                  id="english"
                  value="English"
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                />
                <label htmlFor="english">English</label>
              </div>
              <div>
                <Checkbox
                  id="persion"
                  value="Persion"
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                />
                <label htmlFor="persion">Persion</label>
              </div>
              <div>
                <Checkbox
                  id="arabic"
                  value="Arabic"
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                />
                <label htmlFor="arabic">Arabic</label>
              </div>
              <div>
                <Checkbox
                  id="germany"
                  value="Germany"
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                />
                <label htmlFor="germany">Germany</label>
              </div>
              <div>
                <Checkbox
                  id="turkish"
                  value="Turkish"
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                />
                <label htmlFor="turkish">Turkish</label>
              </div>
            </Box>
          </Box>

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
  skill: "UPDATE__SKILL",
};

const initialState = {
  name: "",
  age: 18,
  github: "",
  linkedin: "",
  skill: "",
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
    case types.skill:
      return { ...state, skill: action.value };
    default:
      break;
  }
};

const inputStyle = {
  m: 1,
  width: { xs: "28ch", sm: "40ch" },
  marginTop: "15px",
};
