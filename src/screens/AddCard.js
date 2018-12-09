import React, { PureComponent } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import Header from '@components/Header';
import StatusBar from '@components/StatusBar';
import AddCardContent from '@components/AddCardContent';
import Footer from '@components/Footer';

const DeckDetailStyled = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.background.color.first};
`;

class DeckDetail extends PureComponent {
  render() {
    const {
      navigation,
      navigation: {
        state: {
          params: { deck },
        },
      },
    } = this.props;
    return (
      <DeckDetailStyled>
        <StatusBar />
        <Header navigation={navigation} />
        <AddCardContent navigation={navigation} deck={deck} />
        <Footer />
      </DeckDetailStyled>
    );
  }
}

DeckDetail.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default DeckDetail;
