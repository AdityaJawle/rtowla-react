import { useState } from 'react'
import { DashboardLayout, PageHeader } from '../../dashboard'
import { guestServices } from '../mock-data/guestData'

function ServiceRequestPage() {
  const [selectedDocs, setSelectedDocs] = useState(['RC'])

  const toggleDoc = (doc) => {
    setSelectedDocs((current) =>
      current.includes(doc) ? current.filter((item) => item !== doc) : [...current, doc]
    )
  }

  return (
    <DashboardLayout title="Service Request" subtitle="Guest workflow" badge="Frontend Mock">
      <PageHeader
        eyebrow="Request"
        title="Create Service Request"
        description="Capture the service details and document checklist for clerk review."
      />

      <form className="dashboard-form">
        <div className="form-grid">
          <label>
            Service Type
            <select defaultValue="Vehicle Transfer">
              {guestServices.map((service) => <option key={service.title}>{service.title}</option>)}
            </select>
          </label>
          <label>
            Registration Number
            <input type="text" placeholder="MH 02 AB 4521" />
          </label>
          <label>
            Owner Name
            <input type="text" placeholder="Full name" />
          </label>
          <label>
            Mobile Number
            <input type="tel" placeholder="10 digit mobile number" />
          </label>
        </div>

        <section className="form-panel">
          <h3>Documents</h3>
          <div className="check-grid">
            {['RC', 'Insurance', 'PUC', 'Aadhar', 'PAN', 'Other'].map((doc) => (
              <label key={doc} className="check-option">
                <input type="checkbox" checked={selectedDocs.includes(doc)} onChange={() => toggleDoc(doc)} />
                <span>{doc}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="form-panel">
          <h3>Payment Selection</h3>
          <div className="radio-row">
            <label><input type="radio" name="payment" defaultChecked /> Online Payment</label>
            <label><input type="radio" name="payment" /> Cash Payment</label>
          </div>
        </section>

        <textarea placeholder="Additional service notes" rows="4"></textarea>
        <button type="button" className="btn form-submit">Save Mock Request</button>
      </form>
    </DashboardLayout>
  )
}

export default ServiceRequestPage
