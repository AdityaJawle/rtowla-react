import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className="footer">
      
      <div className="f-left">
        <h3>Address</h3>
        <p>Shop No 5, Plot no 120</p>
        <p>Aadrsheela Heights,</p>
        <p>Gorai 2, Borivali West</p>
        <p>Mumbai, 400092</p>
      </div>

      <div className="f-mid">
        <h3>Quick Links</h3>

        <Link to="">RTOWLA</Link>

        <Link to="">Home</Link>

        <Link to="/sell">Sell</Link>

        <Link to="/purchase">Purchase</Link>

        <Link to="/about">About Us</Link>

        <Link to="/contact">Contact Us</Link>
      </div>

      <div className="f-right">
        <h3>Get More Info</h3>

        <a href="https://instagram.com/rto_wala" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-instagram"></i> @rto_wala
        </a>

        <a href="tel:+918268613197">
          <i className="fa-solid fa-phone"></i> +91 87796 50424
        </a>

        <a href="mailto:rtowala@gmail.com">
          <i className="fa-solid fa-envelope"></i> support@rtowla.com
        </a>
      </div>

    </footer>
  )
}

export default Footer
