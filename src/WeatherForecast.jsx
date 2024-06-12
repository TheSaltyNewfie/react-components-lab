import "./WeatherForcast.css"

export const WeatherForecast = (props) => {
    return (
        <div className="weather">
            <h2>{props.data.day}</h2>
            <img src={props.data.img} alt={props.data.imgAlt} />
            <p><span>conditions: </span>{props.data.conditions}</p>
            <p><span>time: </span>{props.data.time}</p>
        </div>
    )
}