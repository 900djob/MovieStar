import React from 'react';
import { Col } from 'antd';

function GridCards(props) {
  return (
    <div>
      <Col lg={24} md={24} xs={24}>
        <div style={{ position: "relative" }}>
          <a href={`/movie/${props.movidId}`}>
            <img
              style={{ width: "100%", height: "320px" }}
              src={props.image}
              alt={props.movieName}
            />
          </a>
        </div>
      </Col>
    </div>
  );
}

export default GridCards;
