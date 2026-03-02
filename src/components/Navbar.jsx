import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>AgriPulse</div>

      <div style={styles.links}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/scan">Scan Plant</Link>
        <Link style={styles.link} to="/irrigation">Irrigation</Link>
        <Link style={styles.link} to="/market">Market</Link>
        <Link style={styles.link} to="/crops">Crops</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    width: "100%",
    backgroundColor: "#efe9d7",
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "2px solid #183129"
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#183129"
  },
  links: {
    display: "flex",
    gap: "25px"
  },
  link: {
    textDecoration: "none",
    color: "#183129",
    fontWeight: "500"
  }
};