import StatusBadge from './StatusBadge'

function DataTable({ columns, rows, onRowAction, actionLabel = 'View', emptyMessage = 'No records found' }) {
  if (!rows.length) {
    return (
      <div className="empty-state">
        <i className="fa-solid fa-folder-open"></i>
        <h3>{emptyMessage}</h3>
      </div>
    )
  }

  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
            {onRowAction && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id || row.name || row.requestId}>
              {columns.map((column) => (
                <td key={column.key}>
                  {column.type === 'status' ? (
                    <StatusBadge status={row[column.key]} />
                  ) : (
                    row[column.key]
                  )}
                </td>
              ))}
              {onRowAction && (
                <td>
                  <button type="button" className="table-action" onClick={() => onRowAction(row)}>
                    {actionLabel}
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
