import React, { useEffect, useState } from 'react';
import 'assets/home.scss';

const Home = () => {
  const [calculatedOpacity, setCalculatedOpacity] = useState(1);

  useEffect(() => {
    window.addEventListener('scroll', e => {
      let vh = window.innerHeight / 1.5;
      let scrollTop = window.scrollY;

      if (vh > scrollTop) {
        setCalculatedOpacity(1 - (scrollTop / vh));
      } else {
        setCalculatedOpacity(0);
      }
    })
  }, []);

  return (
    <div className="main-header">
      <span className="main-image" style={{ opacity: calculatedOpacity }}></span>
    </div>
  );
}

export default Home;
