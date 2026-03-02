import { useState } from "react";

export default function ScanPlant() {
  const [result, setResult] = useState(null);

  const handleScan = () => {
    // Fake AI Result
    setResult({
      disease: "Leaf Rust",
      confidence: "87%",
      treatment: "Apply copper-based fungicide and improve air circulation."
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Plant Disease Detection</h1>

      <input type="file" style={styles.upload} />

      <button style={styles.button} onClick={handleScan}>
        Analyze Plant
      </button>

      {result && (
        <div style={styles.resultBox}>
          <h3>Detected Disease: {result.disease}</h3>
          <p>Confidence: {result.confidence}</p>
          <p>Suggested Treatment: {result.treatment}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#F5F1E6",
    padding: "60px",
    textAlign: "center"
  },
  title: {
    color: "#2E5E4E",
    marginBottom: "30px"
  },
  upload: {
    marginBottom: "20px"
  },
  button: {
    padding: "10px 25px",
    backgroundColor: "#2E5E4E",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  resultBox: {
    marginTop: "30px",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "500px",
    marginInline: "auto",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  }
};