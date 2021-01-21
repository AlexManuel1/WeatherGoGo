import React from 'react';
import IndividualDataCard from "./IndividualDataCard";
import "./MultiDataCard.css"

class MultiDataCard extends React.Component {
    render() {  
              
        if (JSON.stringify(this.props.data) === "{}") {
            return null
        }

        const dataArray = this.props.data.map((data) => 
            <IndividualDataCard
                key={data.dt_txt.toString()}
                //data={data}
                temp={data.main.temp}
                time={data.dt_txt}
                timeShift={this.props.timeShift}
            />  
        )

        return (
            <div className="multi-card">
                {dataArray}
            </div>
        )
    }
}

export default MultiDataCard;