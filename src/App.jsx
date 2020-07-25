import React from "react";
import "./App.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { portfolio } from "./assets/data";

function App() {
  return (
    <>
      <div className="home">
        <div className="social">
          <a
            href="https://www.instagram.com/andreza_marra/"
            target="instagram"
            className="instagram"
          >
            andreza_marra
          </a>
        </div>
        <div className="logo">
          <p>Andreza Marra</p>
          <span>
            <em>A</em>M
          </span>
        </div>
      </div>

      <div className="about">
        <div className="wrapper">
          <p>
            <img src="andreza.jpeg" alt="Andreza Marra" />
            <span>Andreza Marra</span> nasceu no Rio de Janeiro, em 1972. Ainda
            na infância, mudou-se para São Paulo, onde vive e trabalha
            atualmente. Formada em Arquitetura e Urbanismo, em São Paulo, seu
            contato com a arte começou com desenhos e aquarelas, porém sempre
            buscando outras formas para se expressar. Foi assim que, em 2015,
            afloraram seu talento e as DESCOBERTAS para seus novos trabalhos.
            Desde então, ela se expressa através das esculturas. Usando diversos
            materiais, tais como metais, resina e papel, a artista revela em
            suas obras um reflexo claro de sua personalidade. Inquieta, sensível
            e incansável, ela busca traduzir, de forma sútil e elegante, porém
            não menos expressiva e imponente, o movimento, que percebe na
            natureza. A artista convida a explorar esses movimentos expressivos,
            provocando uma leitura de suas obras, por todos os ângulos, assim
            permitindo que os olhos deslizem pelas linhas e, dessa forma,
            provocando sensações que derivam do efeito luz e sombra, que surgem
            propositalmente em suas obras. Os movimentos fluídos extraem uma
            reflexão humana e suas observações. Essas são as grandes
            características de seu trabalho. A artista tem participado,
            destacando-se, de inúmeras exposições e semanas de arte e design
            pelo mundo.
          </p>
        </div>
      </div>

      <div className="portfolio">
        <div className="wrapper">
          <h2 className="title">Obras</h2>
          {portfolio.map((item) => (
            <div key={item.title} className="gallery">
              <Slider
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                initialSlide={0}
                adaptiveHeight={true}
                prevArrow={<MdKeyboardArrowLeft />}
                nextArrow={<MdKeyboardArrowRight />}
              >
                {item.images.map((image) => (
                  <img key={image} src={`portfolio/${image}`} alt={image} />
                ))}
              </Slider>
              <div className="description">
                <p>
                  <span>Título</span>
                  {item.title}
                </p>
                <p>
                  <span>Técnica</span>
                  {item.technique}
                </p>
                {item.dimensions && (
                  <p>
                    <span>Dimensões</span>
                    {item.dimensions.width}x{item.dimensions.depth}x
                    {item.dimensions.height}cm
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
