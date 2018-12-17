import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { hasColider } from "./utils";

import _ from 'lodash';

console.log(
  _.join(['Another', 'module', 'loaded!'], ' ')
);

export class Ass extends PureComponent {
  render() {
    hasColider();
    return <div />;
  }
}

Ass.propTypes = {};
Ass.defaultProps = {};



export default Ass
