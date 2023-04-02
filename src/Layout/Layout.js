import { Outlet } from "react-router";
import { Fragment } from "react";
import Header from "../Components/Header";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

export default function Layout() {
  return (
    <Fragment>
      <header>
        <nav>
          <Header />
        </nav>
      </header>
      <CssBaseline />
      <Container maxWidth="xl">
        <main style={{marginTop:"75px",background:"#000"}}>{<Outlet />}</main>
      </Container>
    </Fragment>
  );
}
