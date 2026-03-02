export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Smart Farming for Lebanon</h1>
        <p style={styles.subtitle}>
          AI-powered agricultural decisions for better productivity,
          sustainability, and profitability.
        </p>
        <button style={styles.button}>Get Started</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#F5F1E6", // Beige
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  hero: {
    textAlign: "center",
    maxWidth: "600px"
  },
  title: {
    fontSize: "48px",
    color: "#2E5E4E",
    marginBottom: "20px"
  },
  subtitle: {
    fontSize: "18px",
    color: "#4A4A4A",
    marginBottom: "30px"
  },
  button: {
    padding: "12px 30px",
    fontSize: "16px",
    backgroundColor: "#2E5E4E",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  }
};