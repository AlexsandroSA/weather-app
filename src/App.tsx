import React from 'react';

import { Card, Button } from './components';

const App: React.FC = () => {
  return (
    <Card title="APP">
      <div className="weather">
        <img src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-01-256.png" alt="" title="" className="weather-image" />
        <p className="weather-temperature">23 C</p>
        <p className="weather-location">Barueri, BR</p>
        <Button text="My location" onClick={() => console.log('click')} />
      </div>
    </Card>
  )
};

export default App;
