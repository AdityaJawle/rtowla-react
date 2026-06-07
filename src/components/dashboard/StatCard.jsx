function StatCard({ icon, label, value, note }) {
  return (
    <article className="stat-card">
      {icon && <i className={icon}></i>}
      <div>
        <p>{label}</p>
        <strong>{value}</strong>
        {note && <span>{note}</span>}
      </div>
    </article>
  )
}

export default StatCard
