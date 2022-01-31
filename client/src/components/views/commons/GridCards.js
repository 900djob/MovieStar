import React from 'react';
import { Col } from 'antd';

function GridCards(props) {
  if(props.landingPage) {
    return (
      <div>
        <Col lg={25} md={24} xs={24}>
          <div style={{ position: "relative" }}>
            <a href={`/movie/${props.movieId}`}>
              <img
                style={{ width: "214px", height: "320px" }}
                src={props.image}
                alt={props.movieName}
              />
            </a>
          </div>
        </Col>
      </div>
    );
  } else {
    return (
      <div>
        <Col lg={24} md={24} xs={24}>
          <div style={{ position: "relative" }}>
              <img
                style={{ width: "214px", height: "320px" }}
                src={props.image}
                alt={props.actorName}
              />
              <div style={{textAlign: "center", fontSize: "20px"}}>{props.actorName}</div>
              <div style={{textAlign: "center", fontSize: "12px"}}>{props.characterName}</div>
          </div>
        </Col>
      </div>
    );
  }

}

export default GridCards;
