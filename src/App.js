import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { main, comic } from "./styles/design-tokens";
import GlobalStyle from "./styles/global-style";
import NavMenu from "./components/nav-menu";
import Intro from "./components/intro";
import Examples from "./components/examples";
import Sdk from "./components/sdk";
import Features from "./components/features";
import Templates from "./components/templates";
import Bounties from "./components/bounties";
import Pricing from "./components/pricing";
import Projects from "./components/projects";
import Footer from "./components/footer";
import KonamiTrigger from "./components/konami";

function App() {
  const [heroIsVisible, setHeroIsVisible] = useState(true);
  const [comicTheme, setComicTheme] = useState(false);

  return (
    <ThemeProvider theme={comicTheme ? comic : main}>
      <GlobalStyle comicTheme={comicTheme} />
      <KonamiTrigger
        easterEggIsActive={(easterEggIsActive) =>
          setComicTheme(easterEggIsActive)
        }
      />
      <NavMenu heroIsVisible={heroIsVisible} comicTheme={comicTheme} />
      <Intro isVisible={(isVisible) => setHeroIsVisible(isVisible)} />
      <Examples comicTheme={comicTheme} />
      <Sdk />
      <Features id="features" />
      <Templates id="templates" />
      <Bounties comicTheme={comicTheme} />
      <Pricing id="pricing" comicTheme={comicTheme} />
      <Projects />
      <Footer comicTheme={comicTheme} />
    </ThemeProvider>
  );
}

export default App;
