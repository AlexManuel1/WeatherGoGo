import React from 'react';
import './IndividualDataCard.css';

class IndividualDataCard extends React.Component {

    // changes time zone from utc to local time
    // parameters: int epochtime, int offset
    // returns integer
    adjustTimeZone(time, timeOffset) { 
        let timeAsInt = parseInt(time.slice(11,13));
        if (timeAsInt === 0) {
            timeAsInt = 24;
        }
        if (timeAsInt + (timeOffset/3600) <= 0) {
            timeAsInt = 24 + timeAsInt + (timeOffset/3600);
        } else {
            timeAsInt += (timeOffset/3600);
            if (timeAsInt > 24) {
                timeAsInt = timeAsInt - 24;
            }
        }
        return timeAsInt;
    }

    // gets correct abbreviation based on military time
    // parameters: int time
    // returns string
    setAbbreviation(time) {
        let abb;
        if (time < 12) {
            abb = "am";
        } else if (time === 24) {
            abb = "am";
            time = 12;
        } else if (time === 12) {
            abb = "pm";
        } else {
            abb = "pm";
            time -= 12;
        }
        return `${time} ${abb}`;
    }

    // gets correct date
    // parameters: string 
    // returns string
    getCalendarDate(date) {
        let dateDay = parseInt(date.slice(5,7));
        let dateMonth = parseInt(date.slice(8,10));
        return `${dateDay}/${dateMonth}`;
    }

    render() {

        let timeOrDate;
        
        if (this.props.timeShift === undefined) {
            timeOrDate = this.getCalendarDate(this.props.time);
        } else {
            timeOrDate = this.setAbbreviation(this.adjustTimeZone(this.props.time, this.props.timeShift));
        }

        return (
            <div className="card">
                <div className="time">
                    {timeOrDate}
                </div>
                <div className="degrees">
                    {Math.round(this.props.temp)}&#xb0;
                </div>
            </div>
        )
    }
}

export default IndividualDataCard