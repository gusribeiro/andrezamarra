import React from 'react';
import '../assets/sculptures.scss';
import sculptures from '../data/sculptures';

const Sculptures = () => {
  return (
    <div className="wrapper">
      <h2>Obras</h2>
      <div className="sculptures">
        <ul>
          {sculptures.map(item =>
            <li key={item.title}>
              <img src={item.thumbnail} alt={item.title} />
              <div className="info">
                <p><span>Título</span> {item.title}</p>
                <p><span>Técnica</span> {item.technique}</p>
                <p><span>Dimensão</span> {item.dimension}</p>
                <p><span>Ano</span> {item.year}</p>
                <p>valor sobre consulta</p>
                <a href='#mais'>ver mais fotos</a>
              </div>
            </li>
          )}
          {/* <li>
            <img src="images/obras/obra1.jpeg" />
            <div>
              <p><strong>Tĩtulo:</strong> Vaso Fita</p>
              <p><strong>Técnica:</strong>Esculpida em argila.</p>
              <p><strong>Dimensão:</strong> 999x999</p>
              <p><strong>Ano:</strong> 2018</p>
              <p>valor sobre consulta</p>
              <a href="#">ver mais fotos</a>
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Sculptures;
