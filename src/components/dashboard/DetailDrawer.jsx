import StatusBadge from './StatusBadge'
import Timeline from './Timeline'

function DetailDrawer({ item, title = 'Request Details', onClose }) {
  if (!item) return null

  return (
    <aside className="detail-drawer" aria-label={title}>
      <div className="detail-drawer-head">
        <div>
          <p>{title}</p>
          <h2>{item.requestId || item.id || item.name}</h2>
        </div>
        <button type="button" onClick={onClose} aria-label="Close details">
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>

      {item.status && <StatusBadge status={item.status} />}

      <dl className="detail-list">
        {Object.entries(item)
          .filter(([key]) => !['timeline'].includes(key))
          .map(([key, value]) => (
            <div key={key}>
              <dt>{key.replace(/([A-Z])/g, ' $1')}</dt>
              <dd>{Array.isArray(value) ? value.join(', ') : value}</dd>
            </div>
          ))}
      </dl>

      {item.timeline && <Timeline items={item.timeline} />}
    </aside>
  )
}

export default DetailDrawer
