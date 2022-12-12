import React from "react";
import AllCards from "../components/AllCards";
import { getAllCards } from "../utils/tarot_app";
import { useLoaderData } from "react-router-dom";
import CardCarousel from "../components/CardCarousel";
import { Row, Col } from "react-bootstrap";

export async function loader() {
  const cards = await getAllCards();
  return { cards };
}

export default function HomePage() {
  const { cards } = useLoaderData();

  return (
    <div>
      <br />
      <Row className="home-row">
        <Col md="auto">
          <CardCarousel cards={cards} />
        </Col>
        <Col>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nulla
            nisl, mollis id mattis non, gravida in nisi. In fringilla mattis
            tincidunt. Aliquam vehicula ante at nulla dignissim, tempor egestas
            neque ultricies. Aenean pharetra massa nisl, eget pellentesque elit
            aliquet ac. Nullam volutpat sodales nisi, eu vehicula nisi semper
            vitae. Maecenas pharetra massa auctor arcu pretium, eu elementum
            felis scelerisque. Integer varius, dolor nec tempus rhoncus, nunc
            libero iaculis nisi, sed ornare nunc urna nec elit. Proin dapibus
            enim dolor, quis bibendum lectus aliquam fermentum. Mauris eu
            ultricies enim. Phasellus erat purus, volutpat sit amet augue et,
            ultrices scelerisque mi. Pellentesque pharetra at sem sit amet
            condimentum. Integer tempor magna sed nulla placerat, ut consectetur
            tortor tempus. Nullam ut purus vitae magna lobortis sodales.
            Praesent quis rhoncus turpis. Proin suscipit eu quam in lobortis.
            Praesent at facilisis est. In neque libero, rhoncus sed neque
            fringilla, sagittis interdum enim. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Proin enim
            elit, blandit feugiat fermentum at, euismod ut odio. Maecenas
            blandit dolor lorem, ut malesuada dolor interdum ut. Fusce sit amet
            tempor nibh. Donec nec dui vitae nibh interdum fermentum. Praesent
            consectetur luctus sem. Pellentesque tempus sodales lectus nec
            sodales. Proin et dolor malesuada, auctor diam porttitor, dignissim
            magna. Quisque nec ligula at diam ultricies aliquet. Etiam rutrum
            suscipit orci, euismod cursus nisi ornare quis. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Phasellus quis
            bibendum lacus. Vestibulum sit amet dapibus leo. Nam neque mauris,
            efficitur a feugiat sed, hendrerit eu lacus. In sem turpis,
            scelerisque at lectus sed, efficitur vehicula quam. Mauris suscipit,
            justo euismod luctus accumsan, dolor mi dapibus quam, sit amet
            facilisis libero leo nec augue. Suspendisse sodales tortor eget
            augue tincidunt commodo. Sed commodo facilisis mattis. Pellentesque
            ullamcorper viverra elementum.
          </p>
        </Col>
      </Row>
    </div>
  );
}
