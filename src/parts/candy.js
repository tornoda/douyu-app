import React from 'react';
import styled from 'styled-components';

export default ({
  mimg,
  name,
  pc,
  gx
}) => (
  <List backgroundImg={mimg} alt="gift-logo">
    {name + ': ' + pc + '（价格）/' + gx + '（贡献值）'}
  </List>
);

const List = styled.li`
  background: url(${props => props.backgroundImg}) no-repeat;
  background-size: 20px;
  padding-left: 22px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`