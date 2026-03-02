import { useNavigate, useLocation } from "react-router-dom";

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

return(
<div style={styles.nav}>
  <NavItem label="Home" active={isActive("/")} onClick={() => navigate("/")} />
  <NavItem label="Irrigation" active={isActive("/irrigation")} onClick={() => navigate("/irrigation")} />
  <NavItem label="Markets" active={isActive("/market")} onClick={() => navigate("/market")} />
  <NavItem label="Crops" active={isActive("/crops")} onClick={() => navigate("/crops")} isLast />
</div>
);
}

function NavItem({ label, active, onClick, isLast }) {
  return (
    <div
      onClick={onClick}
      style={{
        ...styles.item,
        color: active ? "#1F4D3A" : "#777",
        borderRight: isLast ? "none" : "1px solid rgba(0,0,0,0.08)"
      }}
    >
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
    backgroundColor: "#fbf7ed",
    display: "flex",
    justifyContent: "space-around",
    padding: "10px 0",
    boxShadow: "0 -2px 10px rgba(0,0,0,0.1)"
  },
  item: {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  fontSize: "18px",
  padding: "5px 0"
}
};