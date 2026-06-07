import { DashboardLayout, PageHeader } from '../../dashboard'

function SellVehiclePage() {
  return (
    <DashboardLayout title="Sell Vehicle" subtitle="Guest workflow" badge="Vehicle Listing">
      <PageHeader
        eyebrow="Listing"
        title="Vehicle Selling Form"
        description="Collect vehicle details, documents, photos, and payment preference for review."
      />

      <form className="dashboard-form">
        <div className="form-grid">
          <label>Model<input type="text" placeholder="Creta SX" /></label>
          <label>Maker<input type="text" placeholder="Hyundai" /></label>
          <label>Color<input type="text" placeholder="White" /></label>
          <label>Registration Year<input type="number" placeholder="2022" /></label>
          <label>Registration Number<input type="text" placeholder="MH 02 AB 4521" /></label>
          <label>Fancy Number<select defaultValue="No"><option>Yes</option><option>No</option></select></label>
          <label>Expected Price<input type="text" placeholder="Rs. 11,90,000" /></label>
        </div>

        <label className="full-field">
          Description
          <textarea rows="4" placeholder="Vehicle condition, service history, ownership notes"></textarea>
        </label>

        <section className="form-panel">
          <h3>Image Upload UI</h3>
          <div className="upload-grid">
            {[1, 2, 3, 4, 5].map((item) => (
              <label key={item} className="upload-box">
                <i className="fa-solid fa-image"></i>
                <span>Image {item}</span>
                <input type="file" accept=".jpg,.jpeg,.png" />
              </label>
            ))}
          </div>
        </section>

        <section className="form-panel">
          <h3>Documents</h3>
          <div className="check-grid">
            {['RC', 'Insurance', 'PUC', 'Aadhar', 'PAN', 'Other'].map((doc) => (
              <label key={doc} className="check-option">
                <input type="checkbox" />
                <span>{doc}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="form-panel">
          <h3>Payment Selection</h3>
          <div className="radio-row">
            <label><input type="radio" name="sellPayment" defaultChecked /> Online Payment</label>
            <label><input type="radio" name="sellPayment" /> Cash Payment</label>
          </div>
        </section>

        <button type="button" className="btn form-submit">Submit Listing</button>
      </form>
    </DashboardLayout>
  )
}

export default SellVehiclePage
