import { useNavigate, useLocation } from "react-router-dom";

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div style={styles.nav}>
      <NavItem label="Home" icon="🏠" active={isActive("/")} onClick={() => navigate("/")} />
      <NavItem label="Irrigation" icon="💧" active={isActive("/irrigation")} onClick={() => navigate("/irrigation")} />
      <NavItem label="Markets" icon="📈" active={isActive("/market")} onClick={() => navigate("/market")} />
      <NavItem label="Crops" icon="🌾" active={isActive("/crops")} onClick={() => navigate("/crops")} />
    </div>
  );
}

function NavItem({ label, icon, active, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        ...styles.item,
        color: active ? "#1F4D3A" : "#777"
      }}
    >
      <div>{icon}</div>
      <small>{label}</small>
    </div>
  );
}

const styles = {
  nav: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-around",
    padding: "10px 0",
    boxShadow: "0 -2px 10px rgba(0,0,0,0.1)"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "18px"
  }
};