import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className={"card"} style={{width: "18rem", marginBottom: "20px"}}>
      {props.children}

      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href="https://www.google.ru/" className="btn btn-primary">More</a>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
}

Card.defaultProps = {
  title: '',
  text: ''
}

export default Card;
