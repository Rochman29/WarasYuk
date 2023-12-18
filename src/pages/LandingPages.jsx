import NavigationBar from "../components/NavigationBar";
import Intro from "../components/Intro";
import About from "../components/About";
import Meditation from "../components/Meditation";
import Footer from "../components/Footer";
import Parallax from "../components/Parallax";

import "../style/LandingPage.css";

function Home() {
  return (
    <div>
      {/* intro section */}
      <div className="introBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* end of intro */}

      {/* about section  */}
      <div className="aboutBG">
        <About />
      </div>
      {/* end of about */}

      {/* parallax section */}
      <div className="parallaxBG">
        <Parallax />
      </div>
      {/* end of parallax */}

      {/* meditation section */}
      <div className="meditationBG">
        <Meditation />
      </div>
      {/* end of meditation */}

      {/* footer section */}
      <div>
        <Footer />
      </div>
      {/* end of footer */}
    </div>
  );
}

export default Home;
