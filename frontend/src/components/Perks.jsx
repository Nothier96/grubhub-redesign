function Perks() {
  return (
    <section className="perks-section">
        <div className="perk-card">
            <img 
              src="https://res.cloudinary.com/grubhub-assets/image/upload/v1567194984/illustration_1_gh_tqpnjw.svg"
              alt="local-favourites"
              className="perks-img"
            />
            <h3 className="perk-card-title">Local favorites</h3>
            <p>
              Satisfy any craving with delivery from popular neighborhood restaurants and chains. Reorder go-tos or find something new.
            </p>
        </div>
        <div className="perk-card">
            <img 
              src="https://res.cloudinary.com/grubhub-marketing/image/upload/f_auto,fl_lossy/v1584729480/HERMES/2020/DINER/BRD/BRD-20200316-COVID-19-RELIEF/DonatethechangeGHunauthenticated.png"
              alt="coins"
              className="perks-img"
            />
            <h3 className="perk-card-title">Support local restaurants impacted by the pandemic</h3>
            <p>
              Donate your change at checkout to the Restaurant Strong Fund to support local restaurants that have been impacted by the pandemic.
            </p>
        </div>
        <div className="perk-card">
            <img 
              src="https://res.cloudinary.com/grubhub-assets/image/upload/v1567212067/illustration_3_gh_wzrh6c.svg"
              alt="diamond"
              className="perks-img"
            />
            <h3 className="perk-card-title">Exclusive Perks</h3>
            <p>
              Discover more deals and restaurant rewards near you. Cash in on Perks and get $100s in savings.
            </p>
        </div>
    </section>
  )
}

export default Perks