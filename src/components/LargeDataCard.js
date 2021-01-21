import React from 'react';
import "./LargeDataCard.css"

class LargeDataCard extends React.Component {
    render() {

        if (JSON.stringify(this.props.currentData) === "{}") {
            return null
        }

        console.log(this.props.currentData);

        return (
            <div className="large-container">
                <div className="info-container">
                    <div className="city-name">{this.props.location}</div>
                    <div className="high-low-values">
                        <div>High: {Math.floor(this.props.currentData.main.temp_min)}&#xb0;</div>
                        <div>Low: {Math.floor(this.props.currentData.main.temp_max)}&#xb0;</div>
                    </div>
                </div>
                <div className="weather-container">
                    <img 
                        src={"http://openweathermap.org/img/wn/" + this.props.currentData.weather[0].icon + "@2x.png"}
                        alt={this.props.currentData.weather[0].description}
                        className="weather-img"
                    />
                    <div className="temp">{Math.floor(this.props.currentData.main.temp)}&#xb0;</div>
                </div>
            </div>
        );
    };
}

export default LargeDataCard;