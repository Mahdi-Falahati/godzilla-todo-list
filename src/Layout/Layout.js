import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header className="container mx-auto">
        <nav className="font-bold flex justify-between">
          <section>
            <NavLink to="/" className="m-3 p-3 inline-block nav-link">
              Home
            </NavLink>
            <NavLink to="/history" className="m-3 p-3 inline-block nav-link">
              History
            </NavLink>
            <NavLink to="/members" className="m-3 p-3 inline-block nav-link">
              Members
            </NavLink>
          </section>
          <h2 className="m-4 p3"><Link to="/">TODO GODZILLA</Link></h2>
        </nav>
      </header>
      <main className="container mx-auto">{<Outlet />}</main>
    </>
  );
}
