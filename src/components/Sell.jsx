import { useState } from 'react'

function Sell() {

      const [formData, setFormData] = useState({
          make: "",
          model: "",
          color: "",
          fuel: "",
          year: "",
          owner: "",
          customOwner: "",
          fancyNumber: ""
        })

      const handleChange = (e) => {
          const { name, value } = e.target

          if (name === "customOwner") {
            if (!/^\d*$/.test(value)) return
          }
      
          setFormData((prev) => ({
            ...prev,
            [name]: value
          }))
        }


    const handleImageChange = (e) => {

      const file = e.target.files[0]

      if (!file) return

      const allowedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png"
      ]

      if (!allowedTypes.includes(file.type)) {

        alert("Only JPG, JPEG and PNG files are allowed")

        e.target.value = ""

        return
      }
        }

        const ownerValue =
            formData.owner === "Other"
                ? formData.customOwner
                : formData.owner

        const selectedOptions = `
            Car Brand: ${formData.make}
            Car Model: ${formData.model}
            Color: ${formData.color}
            Fuel Type: ${formData.fuel}
            Registration Year: ${formData.year}
            No. of Owners: ${ownerValue}
            Fancy Number: ${formData.fancyNumber}
            `

  return (
    <div className="main-container">

      <section>
        <div className="sellsec">

          <h1>Car Filter</h1>

          <form action="">

            <label htmlFor="car-make">Car Make</label>
            <br />

            <select id="car-make" id="make"
              name="make"
              required
              onChange={handleChange}>
              <option value="selmake">Select Maker</option>
              <option value="bmw">BMW</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
              <option value="tata">Tata</option>
              <option value="hyundai">Hyundai</option>
              <option value="kia">Kia</option>
              <option value="skoda">Skoda</option>
              <option value="honda">Honda</option>
              <option value="renault">Renault</option>
              <option value="jaguar">Jaguar</option>
              <option value="land-rover">Land Rover</option>
              <option value="toyota">Toyota</option>
              <option value="volkswagen">Volkswagen</option>
              <option value="byd">BYD</option>
            </select>

            <br />

            <label htmlFor="car-model">Car Model</label>
            <br />

            <select id="car-model"
              name="model"
              required
              onChange={handleChange}>
              <option value="selmode">Select Model</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="hatchback">Hatchback</option>
              <option value="coupe">Coupe</option>
            </select>

            <br />

            {/* COLOR */}
            <label htmlFor="color">Color *</label>
            <br />

            <select
              id="color"
              name="color"
              required
              onChange={handleChange}
            >
              <option value="">Select Color</option>

              <option value="White">
                White
              </option>

              <option value="Black">
                Black
              </option>

              <option value="Silver">
                Silver
              </option>

              <option value="Grey">
                Grey
              </option>

              <option value="Blue">
                Blue
              </option>

              <option value="Red">
                Red
              </option>

            </select>

            <br />

            {/* FUEL TYPE */}
            <label htmlFor="fuel">Fuel Type *</label>
            <br />

            <select
              id="fuel"
              name="fuel"
              required
              onChange={handleChange}
            >
              <option value="">Select Fuel</option>

              <option value="Petrol">
                Petrol
              </option>

              <option value="Diesel">
                Diesel
              </option>

              <option value="CNG">
                CNG
              </option>

              <option value="Electric">
                Electric
              </option>

              <option value="Hybrid">
                Hybrid
              </option>

            </select>

            <br />

            <label htmlFor="registration-year">
              Registration Year
            </label>

            <br />

            <select
              id="year"
              name="year"
              required
              onChange={handleChange}
            >
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>

            <br />

             {/* OWNER */}
            <label htmlFor="owner">
              Number of Owners *
            </label>

            <br />

            <select
              id="owner"
              name="owner"
              required
              onChange={handleChange}
            >
              <option value="">
                Select Owners
              </option>

              <option value="1">
                1st Owner
              </option>

              <option value="2">
                2nd Owner
              </option>

              <option value="3">
                3rd Owner
              </option>

              <option value="Other">
                Other
              </option>

            </select>

            <br />

            {formData.owner === "Other" && (
              <>
                <label htmlFor="customOwner">
                  Enter Number of Owners
                </label>

                <br />

                <input
                  type="text"
                  id="customOwner"
                  name="customOwner"
                  placeholder="Only numbers"
                  value={formData.customOwner}
                  onChange={handleChange}
                  required
                />

                <br />
              </>
            )}

            <div className="radio-group">

              <p>Fancy Number *</p>

              <label>
                <input
                  type="radio"
                  name="fancyNumber"
                  value="Yes"
                  required
                  onChange={handleChange}
                />
                Yes
              </label>

              <br />

              <label>
                <input
                  type="radio"
                  name="fancyNumber"
                  value="No"
                  required
                  onChange={handleChange}
                />
                No
              </label>

            </div>
          </form>
        </div>
      </section>

      <section>
        <div className="mainpart">

          <div>

            <label htmlFor="car-image-1">
              Upload Car Image 1
            </label>

            <input
              type="file"
              id="car-image-1"
              accept=".jpg,.jpeg,.png"
              required
              onChange={handleImageChange}
            />

            <label htmlFor="car-image-2">
              Upload Car Image 2
            </label>

            <input
              type="file"
              id="car-image-2"
              accept=".jpg,.jpeg,.png"
              required
              onChange={handleImageChange}
            />

          </div>

          <div className="selected-options">

            <label htmlFor="selected-options-box">
              Selected Options:
            </label>

            <textarea
               id="selected-options-box"
              value={selectedOptions}
              readOnly
              disabled
              placeholder="Selected car make, model, color will appear here..."
            ></textarea>

          </div>

          <input
            type="submit"
            className="btn"
            value="Submit"
          />

        </div>
      </section>

    </div>
  )
}

export default Sell
