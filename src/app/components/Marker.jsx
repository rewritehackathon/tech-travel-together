import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${props => {
	  return props.radius;
  }};
  height: ${props => {
	  return props.radius;
  }};
  background-color: ${props => {
	  return props.color;
  }};
  opacity:0.5;
  border: 2px solid ${props => (props.color)};
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${props => {
	  (props.onClick ? 'pointer' : 'default')}};
  &:hover {
    z-index: 1;
  }

`;

const Marker = props => (
  <Wrapper
    alt={props.text}
    {...props.onClick ? { onClick: props.onClick } : {}}
	color={props.color}
	radius={props.radius}
  />
);

Marker.defaultProps = {
  onClick: null,
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Marker;