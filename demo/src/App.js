import HeroCard from "./Components/HeroCard.jsx";
import Kicker from "./Kicker.jsx";

function App() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <HeroCard>
            <Kicker />
          </HeroCard>
        </div>
      </section>
    </main>
  );
}

export default App;
