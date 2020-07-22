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
                {item.technique && <p><span>Técnica</span> {item.technique}</p>}
                {item.dimension && <p><span>Dimensão</span> {item.dimension}</p>}
                {item.year && <p><span>Ano</span> {item.year}</p>}
                {/* <p>valor sobre consulta</p> */}
                {/* <a href='#mais'>ver mais fotos</a> */}
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Sculptures;
