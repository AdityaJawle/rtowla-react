function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={`${item.label}-${item.time}`}>
          <span></span>
          <div>
            <strong>{item.label}</strong>
            <p>{item.description}</p>
            <small>{item.time}</small>
          </div>
        </li>
      ))}
    </ol>
  )
}

export default Timeline
