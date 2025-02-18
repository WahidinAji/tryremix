// import { Link, Outlet } from "@remix-run/react";

// export default function AboutLayout() {
//   return (
//     <div className="about-layout">
//       <nav>
//         |
//         <Link to="/about">About Main</Link>
//         |&nbsp;
//         |
//         <Link to="/about/team">Our Team</Link>
//         |&nbsp;
//         |
//         <Link to="/about/contact">Contact</Link>
//         |
//       </nav>

//       <div className="content">
//         <h1>About</h1>
//         <p>This is the about page.</p>
//         <Outlet />
//       </div>
//     </div>
//   );
// }

import { Link, Outlet } from "@remix-run/react";
import styles from "~/styles/about.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

// export default function AboutLayout() {
//   return (
//     <div style={{ display: "flex", minHeight: "100vh" }}>
//       <nav style={{
//         width: "250px",
//         padding: "2rem",
//         backgroundColor: "#f5f5f5",
//         borderRight: "1px solid #e0e0e0",
//         display: "flex",
//         flexDirection: "column",
//         gap: "1rem"
//       }}>
//         <Link
//           to="/about"
//           style={{
//             padding: "0.75rem 1rem",
//             textDecoration: "none",
//             color: "#333",
//             borderRadius: "4px",
//             transition: "background-color 0.2s",
//             ':hover': {
//               backgroundColor: "#e0e0e0"
//             }
//           }}
//         >
//           About Main
//         </Link>
//         <Link
//           to="/about/team"
//           style={{
//             padding: "0.75rem 1rem",
//             textDecoration: "none",
//             color: "#333",
//             borderRadius: "4px",
//             transition: "background-color 0.2s",
//             ':hover': {
//               backgroundColor: "#e0e0e0"
//             }
//           }}
//         >
//           Our Team
//         </Link>
//         <Link
//           to="/about/contact"
//           style={{
//             padding: "0.75rem 1rem",
//             textDecoration: "none",
//             color: "#333",
//             borderRadius: "4px",
//             transition: "background-color 0.2s",
//             ":hover": {
//               backgroundColor: "#e0e0e0"
//             }
//           }}
//         >
//           Contact
//         </Link>
//       </nav>

//       <div style={{ flex: 1, padding: "2rem" }}>
//         <h1>About</h1>
//         <p>This is the about page.</p>
//         <Outlet />
//       </div>
//     </div>
//   );
// }

export default function AboutLayout() {
  return (
    <div className="layout">
      <nav className="sidebar">
        <Link to="/about" className="nav-link">
          About Main
        </Link>
        <Link to="/about/team" className="nav-link">
          Our Team
        </Link>
        <Link to="/about/contact" className="nav-link">
          Contact
        </Link>
      </nav>

      <div className="content">
        <h1>About</h1>
        <p>This is the about page.</p>
        <Outlet />
      </div>
    </div>
  );
}