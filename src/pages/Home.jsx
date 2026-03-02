import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.logo}>🌿 AgriPulse</h2>
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
    paddingBottom: "40px"
  },
  header: {
    backgroundColor: "#1F4D3A",
    padding: "20px",
    color: "white",
    textAlign: "center",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px"
  },
  logo: {
    margin: 0
  },
  welcome: {
    textAlign: "center",
    marginTop: "30px",
    marginBottom: "30px"
  },
  card: {
    backgroundColor: "white",
    margin: "15px 20px",
    padding: "18px",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    fontSize: "18px",
    fontWeight: "500",
    cursor: "pointer"
  }
};