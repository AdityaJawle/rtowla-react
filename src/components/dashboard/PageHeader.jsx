function PageHeader({ eyebrow, title, description, children }) {
  return (
    <section className="page-header">
      <div>
        {eyebrow && <span>{eyebrow}</span>}
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {children && <div className="page-header-actions">{children}</div>}
    </section>
  )
}

export default PageHeader
