function AboutUs() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <span>About RTOWALA</span>
          <h1>Your Trusted Partner For RTO And Vehicle Services</h1>
          <p>
            RTOWALA helps you complete vehicle and driving licence work without
            wasting time in long queues, repeated office visits, or confusing
            document processes. We keep the service simple, clear, and reliable
            from start to finish.
          </p>
        </div>

      </section>

      <section className="about-story">
        <div className="about-main-copy">
          <h1>About Us</h1>
          <p>
            We are <span><b><i>RTOWALA</i></b></span>, your neighborhood RTO Agent.
            <br />
            We can help you. You won&apos;t need to take leave from your office,
            you won&apos;t have to run around the RTO office, and you won&apos;t
            have to stand in long queues.
            <br />
            For all of this, we are here for you.
            <br />
            If you need to transfer your vehicle, we will do it for you.
            <br />
            If you need to add hypothecation to your vehicle, we will do it for you.
            <br />
            If you need to terminate hypothecation on your vehicle, we will do it for you.
            <br />
            If you need to change your address, we will do that for you too.
            <br />
            <br />
            You just need to provide the required documents, and your RC will be
            delivered right to your home. We&apos;re just one call away!
          </p>
          <input type="submit" className="btn" value="Call Us! Now" />
        </div>

        <div>
          <h2>What We Do</h2>
          <p>
            Our work includes ownership transfer, hypothecation addition or
            removal, address change, RC-related updates, vehicle purchase and
            sell support, and driving licence related assistance. You bring the
            right documents, and we help manage the process carefully.
          </p>
        </div>
      </section>

      <section className="about-values">
        <article>
          <i className="fa-solid fa-file-shield"></i>
          <h3>Document Clarity</h3>
          <p>We guide you with the required documents before the process begins.</p>
        </article>

        <article>
          <i className="fa-solid fa-clock"></i>
          <h3>Time Saving</h3>
          <p>We reduce unnecessary visits and make the service more convenient.</p>
        </article>

        <article>
          <i className="fa-solid fa-handshake"></i>
          <h3>Reliable Support</h3>
          <p>You get practical help from enquiry to final service completion.</p>
        </article>
      </section>
    </main>
  )
}

export default AboutUs
