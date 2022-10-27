// Bookagent card on landingpage
export default function BookAgent() {
  return (
    <section className="sectionPadding">
      <h3 className="BookAgentTitle font-blog-big">
        <b>Brug vores bogagent </b>
        og modtag opdateringer, når den bog du mangler sættes til salg.
      </h3>

      <div
        className="BookAgentCard"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.9248074229691877) 6%, rgba(0,0,0,0) 100%), url("http://wpedugreen.mbcproduction.dk/wp-content/uploads/2022/10/gulfer-ergin-LUGuCtvlk1Q-unsplash-1-scaled.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <p className="font-describe-title font-padding">Kommer snart</p>
          <h3 className="font-blog-big">Opret din bogagent 📖</h3>
        </div>
      </div>
    </section>
  );
}
