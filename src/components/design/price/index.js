import { ParallaxLayer } from "@react-spring/parallax";
import Section from "../section";
import { Coin1, Coin2, Coin3, Coin4, Coin5, Coin6 } from "../../../utils/coins";
import * as Styles from "./styles";

function Price(props) {
  const { id, title, description, blink } = props;

  return (
    <Styles.Wrapper>
      <ParallaxLayer offset={0.15} speed={0.05} factor={0}>
        <Coin1 />
      </ParallaxLayer>
      <ParallaxLayer offset={0.3} speed={0.1} factor={0}>
        <Coin2 />
      </ParallaxLayer>
      <ParallaxLayer offset={0.8} speed={0.25} factor={0}>
        <Coin3 />
      </ParallaxLayer>
      <ParallaxLayer offset={0.6} speed={0.2} factor={0}>
        <Coin4 />
      </ParallaxLayer>
      <ParallaxLayer offset={0.55} speed={0.1} factor={0}>
        <Coin5 />
      </ParallaxLayer>
      <ParallaxLayer offset={0.95} speed={0.25} factor={0}>
        <Coin6 />
      </ParallaxLayer>

      <Section id={id} color="green">
        <h2>{title}</h2>
        <p>{description}</p>
        <span>{blink}</span> 😉
      </Section>
    </Styles.Wrapper>
  );
}

export default Price;
