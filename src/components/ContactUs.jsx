function ContactUs() {
  return (
    <main className="contact-page">
      <section className="contact-panel">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>Need help with vehicle transfer, RC work, license service, or document support? Send your details and our team will contact you.</p>

          <div className="contact-detail">
            <i className="fa-solid fa-phone"></i>
            <span>+91 87796 50424</span>
          </div>

          <div className="contact-detail">
            <i className="fa-solid fa-envelope"></i>
            <span>support@rtowla.com</span>
          </div>

          <div className="contact-detail">
            <i className="fa-solid fa-location-dot"></i>
            <span>RTO Service Center, Maharashtra</span>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Mobile Number" required />
          <select defaultValue="" required>
            <option value="" disabled>Select Service</option>
            <option>Vehicle Transfer</option>
            <option>Driving Licence</option>
            <option>RC Update</option>
            <option>Other</option>
          </select>
          <textarea placeholder="Write your message" rows="5"></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </section>
    </main>
  )
}

export default ContactUs
