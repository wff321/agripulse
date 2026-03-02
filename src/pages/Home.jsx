import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

export default function Home() {
  const navigate = useNavigate();

  return (
  <div style={styles.container}>

    {/* Header */}
    <div style={styles.header}>
      <div style={styles.logoContainer}>
        <Logo size={50} />
        <h2 style={styles.logoText}>AgriPulse</h2>
      </div>
    </div>

    {/* Welcome Section */}
    <div style={styles.welcome}>
      <h1>Welcome to AgriPulse</h1>
      <p>Your AI Farming Assistant</p>
    </div>

    {/* Cards */}
    <div style={styles.card} onClick={() => navigate("/scan")}>
      🔍 Plant Disease Scan
    </div>

    <div style={styles.card} onClick={() => navigate("/irrigation")}>
      💧 Irrigation Advice
    </div>

    <div style={styles.card} onClick={() => navigate("/market")}>
      📈 Market Prices
    </div>

    <div style={styles.card} onClick={() => navigate("/crops")}>
      🌾 Crop Recommendation
    </div>

  </div>
);
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#F5F1E6",
    paddingBottom: "90px"
  },

header: {
  backgroundColor: "#1F4D3A",
  paddingTop: "45px",
  paddingBottom: "60px",
  textAlign: "center",
  color: "white",
  borderBottomLeftRadius: "50% 50px",
  borderBottomRightRadius: "50% 50px"
},

  logoContainer: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "14px"
},

  logoIcon: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: "white",
    color: "#1F4D3A",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    fontWeight: "bold"
  },

  logoText: {
    fontSize: "24px",
    fontWeight: "600",
    letterSpacing: "0.5px"
  },

  welcome: {
    textAlign: "center",
    marginTop: "35px",
    marginBottom: "25px"
  },

  card: {
    backgroundColor: "white",
    margin: "15px 20px",
    padding: "20px",
    borderRadius: "18px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
    fontSize: "18px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "0.2s"
  }
};