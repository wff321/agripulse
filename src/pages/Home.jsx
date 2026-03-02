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
  <h1 style={styles.title}>
  <span style={styles.light}>Welcome to </span>
  <span style={styles.bold}>AgriPulse</span>
</h1>
  <p>Your AI Farming Assistant</p>
  <p style={styles.arabic}>
    مساعدك الذكي للزراعة
  </p>
</div>

{/* Cards */}
<div style={styles.card} onClick={() => navigate("/scan")}>
  <div style={styles.cardTitle}>Plant Disease Scan</div>
  <div style={styles.cardArabic}>فحص أمراض النباتات</div>
</div>

<div style={styles.card} onClick={() => navigate("/irrigation")}>
  <div style={styles.cardTitle}>Irrigation Advice</div>
  <div style={styles.cardArabic}>نصائح الري</div>
</div>

<div style={styles.card} onClick={() => navigate("/market")}>
  <div style={styles.cardTitle}>Market Prices</div>
  <div style={styles.cardArabic}>أسعار السوق</div>
</div>

<div style={styles.card} onClick={() => navigate("/crops")}>
  <div style={styles.cardTitle}>Crop Recommendation</div>
  <div style={styles.cardArabic}>توصيات المحاصيل</div>
</div>
</div>
);
}

const styles = {
  title: {
  fontSize: "30px",
  marginBottom: "10px"
},

light: {
  fontWeight: "300"
},

bold: {
  fontWeight: "700"
},
  container: {
    minHeight: "100vh",
    backgroundColor: "#ede7d6",
    paddingBottom: "90px"
  },

header: {
  backgroundColor: "#1f342d",
  paddingTop: "45px",
  paddingBottom: "30px",
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
    marginBottom: "25px", 
    color: "#1F4D3A"
  },

  card: {
    backgroundColor: "#f7f2e2",
    margin: "15px 20px",
    padding: "20px",
    borderRadius: "18px",
    boxShadow: "0 6px 15px #1f342d",
    fontSize: "18px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "0.2s", 
    color: "#1f342d"
  }
};