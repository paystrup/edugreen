// Bookagent card on landingpage
export default function PlanetCard() {
  return (
    <section className="sectionPadding">
      <h3 className="BookAgentTitle font-blog-big">
        <b>CO2 besparelse </b>
        
      </h3>

      <div
        className="BookAgentCard"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.9248074229691877) 6%, rgba(0,0,0,0) 100%), url("http://wpedugreen.mbcproduction.dk/wp-content/uploads/2022/10/treee.png")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <p className="font-describe-title font-padding">VI HJÆLPER MILJØET</p>
          <h3 className="font-blog-big">I har sparet 2 ton CO2 gennem brug af vores app 🌱
          </h3>
        </div>
      </div>
    </section>
  );
}