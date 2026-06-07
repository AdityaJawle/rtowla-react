function StatusBadge({ status }) {
  const className = status ? status.toLowerCase().replace(/\s+/g, '-') : 'default'

  return <span className={`status-badge status-${className}`}>{status || 'Pending'}</span>
}

export default StatusBadge
