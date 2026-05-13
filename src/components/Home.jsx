import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section>
        <div className="home" id="home">
          <div className="home-content">
            <span>Fast RTO Help</span>
            <h1>Vehicle And Licence Services Made Simple</h1>
            <p>
              RTOWALA helps with vehicle transfer, RC updates, hypothecation,
              address change, vehicle buying support, selling support, and
              driving licence related services.
            </p>

            <div className="home-actions">
              <Link to="/sell" className="btn">Sell Vehicle</Link>
              <Link to="/purchase" className="btn home-secondary-btn">Purchase Vehicle</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-services">
        <div className="home-section-title">
          <span>Our Services</span>
          <h2>Everything You Need For RTO Work</h2>
        </div>

        <div className="home-service-grid">
          <article>
            <i className="fa-solid fa-car-side"></i>
            <h3>Vehicle Transfer</h3>
            <p>Ownership transfer support for buying or selling used vehicles.</p>
          </article>

          <article>
            <i className="fa-solid fa-file-circle-check"></i>
            <h3>RC Services</h3>
            <p>Help with RC updates, address change, and hypothecation work.</p>
          </article>

          <article>
            <i className="fa-solid fa-id-card"></i>
            <h3>Driving Licence</h3>
            <p>Guidance for licence related documents, renewal, and updates.</p>
          </article>

          <article>
            <i className="fa-solid fa-handshake"></i>
            <h3>Buy And Sell</h3>
            <p>List your vehicle or explore available vehicles for purchase.</p>
          </article>
        </div>

        <div className="home-help-strip">
          <div>
            <h2>Need Help Choosing The Right Service?</h2>
            <p>Share your requirement and RTOWALA will guide you with the next step.</p>
          </div>
          <Link to="/contact" className="btn">Contact Us</Link>
        </div>
      </section>
    </>
  )
}

export default Home
