function EmptyState({ icon = 'fa-solid fa-folder-open', title, message }) {
  return (
    <section className="empty-state">
      <i className={icon}></i>
      <h3>{title}</h3>
      {message && <p>{message}</p>}
    </section>
  )
}

export default EmptyState
