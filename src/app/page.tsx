import About from "./(sections)/about/page";
import Contact from "./(sections)/contact/page";
import Jumbotron from "./(sections)/jumbotron/jumbotron";
import Services from "./(sections)/services/page";

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <Jumbotron />
          <div className="pl-10 pr-10">
            <About />
            <Services />
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
}
