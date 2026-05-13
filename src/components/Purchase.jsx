import audi from '../assets/a-logo.png'
import bmw from '../assets/b-logo.png'
import hyundai from '../assets/h-logo.png'
import tata from '../assets/t-logo.png'

const vehicles = [
  {
    image: audi,
    name: 'Audi A8 Premium',
    owners: '1st Owner',
    amount: 'Rs. 24,50,000'
  },
  {
    image: bmw,
    name: 'BMW 3 Series',
    owners: '2nd Owner',
    amount: 'Rs. 28,75,000'
  },
  {
    image: hyundai,
    name: 'Hyundai Creta SX',
    owners: '1st Owner',
    amount: 'Rs. 11,90,000'
  },
  {
    image: tata,
    name: 'Tata Nexon XZ',
    owners: '1st Owner',
    amount: 'Rs. 8,40,000'
  }
]

function Purchase() {
  return (
    <main className="purchase-page">
      <h1>Purchase Vehicle</h1>

      <div className="vehicle-grid">
        {vehicles.map((vehicle) => (
          <article className="vehicle-card" key={vehicle.name}>
            <div className="vehicle-image-wrap">
              <img src={vehicle.image} alt={vehicle.name} />
            </div>

            <div className="vehicle-card-body">
              <h2>{vehicle.name}</h2>
              <p>No. of Owner: {vehicle.owners}</p>
              <p className="vehicle-price">{vehicle.amount}</p>
              <button type="button" className="btn vehicle-btn">
                More Details
              </button>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}

export default Purchase
