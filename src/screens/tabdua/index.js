import React from 'react';
import { Container, Header, Left, Icon, Body, Title } from 'native-base';

export default class TabSatu extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon name="ios-menu" style={{ color: 'white' }} />
          </Left>
          <Body>
            <Title>Tab Dua</Title>
          </Body>
        </Header>
      </Container>
    );
  }
}
