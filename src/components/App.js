import React from 'react';
import SearchBar from './SearchBar';
import Header from './Header';
import LargeDataCard from './LargeDataCard';
import MultiDataCard from './MultiDataCard';

class App extends React.Component {
    state = { 
        city: 'New York', 
        currentWeather: {}, 
        hourlyWeather: {},
        dailyWeather: {},
        timeShift: 0
    };

    onSearchSubmit(term) {
        this.forecast(term);
    }

    forecast(city) {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=c759b9338ad26a72a136d0741dfc4ae7`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    city: data.city.name, 
                    currentWeather: data.list[0],
                    hourlyWeather: Object.values(data.list).slice(0,5),
                    dailyWeather: getDailyData(Object.values(data.list)),
                    timeShift: data.city.timezone
                });
                let i = 1;
                console.log("API used: " + i);
                i += 1;
                console.log(data);
                console.log("Current Weather: " + this.state.currentWeather);
                console.log("Hourly Weather: " + this.state.hourlyWeather);
                console.log("Daily Weather: " + this.state.dailyWeather);
            })
            .catch(data => console.log('invalid city name'));

            function getDailyData (dataList) {
                let days = [];
                let i = 7;
                while (i <= dataList.length) {
                    days.push(dataList[i]);
                    i += 8;
                }
                return days;
            }
    }

    componentDidMount() {
        this.forecast(this.state.city);
    }

    render() {
        return (
            <div>
                <Header />
                <SearchBar userSubmit={(term) => this.onSearchSubmit(term)}/>
                <MultiDataCard 
                    data={this.state.hourlyWeather}
                    timeShift={this.state.timeShift}     
                />
                <LargeDataCard 
                    location = {this.state.city}
                    currentData = {this.state.currentWeather}
                    timeShift = {this.state.timeShift}
                />
                <MultiDataCard 
                    data={this.state.dailyWeather}
                />
            </div>
        )
    }
}

export default App;