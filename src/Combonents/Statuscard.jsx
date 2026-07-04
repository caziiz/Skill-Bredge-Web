function Statuscard({ icon, name, numb }) {
  return (
    <div className="stat-card">
      <div className="stat-left">
        <div className="stat-icon">{icon}</div>
        <span className="stat-label">{name}</span>
         <div className="stat-value">{numb}</div>
      </div>

     
    </div>
  );
}

export default Statuscard;
