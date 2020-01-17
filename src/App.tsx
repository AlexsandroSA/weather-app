import React from 'react';

const App: React.FC = () => {
  return (
    <section className="card">
      <header className="card-header">
        <h1 className="card-title">Weather App</h1>
      </header>
      <div className="card-content">

        <div className="weather">

          <img src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-01-256.png" alt="" title="" className="weather-image" />

          <p className="weather-temperature">23 C</p>
          <p className="weather-location">Barueri, BR</p>

          <button className="button is-large">My location</button>
        </div>
      </div>
      <footer className="card-footer"></footer>
    </section>
  )
};

export default App;
