import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <form className="searchForm">
        <input
          type="text"
          autofocus={true}
          placeholder="Whats the weather like in..."
          className="searchInput"
        />
        <input type="submit" value="🔎" />
        <input type="submit" value="📍" />
      </form>
      <br></br>
      <hr></hr>
      <div className="alignLeft">
        <h2>The current weather in New York...</h2>
        <h3>Sunday, January 1 at 12:00</h3>
        <h4>Clear Sky</h4>
      </div>
      <div className="aboveForecastGrid">
        <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" />
        <h2 className="todayTemperature">6°C</h2>
        <ul className="weatherFactors">
          <li>Precipitation:</li>
          <li>Wind:</li>
          <li>Humidity:</li>
        </ul>
      </div>
      <br></br>
      <hr></hr>
      <div className="forecastGrid">
        <div>
          <h4>Monday</h4>
          <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" />
          <h4>
            <strong>High</strong> | Low
          </h4>
        </div>
        <div>
          <h4>Tuesday</h4>
          <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" />
          <h4>
            <strong>High</strong> | Low
          </h4>
        </div>
        <div>
          <h4>Wednesday</h4>
          <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" />
          <h4>
            <strong>High</strong> | Low
          </h4>
        </div>
        <div>
          <h4>Thursday</h4>
          <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" />
          <h4>
            <strong>High</strong> | Low
          </h4>
        </div>
        <div>
          <h4>Friday</h4>
          <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" />
          <h4>
            <strong>High</strong> | Low
          </h4>
        </div>
        <div>
          <h4>Saturday</h4>
          <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" />
          <h4>
            <strong>High</strong> | Low
          </h4>
        </div>
      </div>
    </div>
  );
}
