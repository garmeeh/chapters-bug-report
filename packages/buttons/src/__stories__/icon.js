/**
 * NOTE:
 * This will be it's own component and is TBC!
 */
import React from 'react';
import styled from 'styled-components';

import icons from './icons';
const IconStyled = styled.i`
  display: inline-block;
  width: 1em;
  height: 1em;
  fill: currentColor;
`;

const Icon = ({ icon }) => (
  <IconStyled data-icon dangerouslySetInnerHTML={{ __html: icons[icon] }} />
);

export default Icon;
