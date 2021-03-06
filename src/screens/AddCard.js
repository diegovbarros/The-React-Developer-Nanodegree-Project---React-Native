import React, { PureComponent } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import AddCardContent from '@components/AddCardContent';

const DeckDetailStyled = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.background.color.first};
`;

class DeckDetail extends PureComponent {
  static navigationOptions = ({ screenProps: { theme } }) => {
    return {
      title: 'Deck Details',
      headerStyle: {
        backgroundColor: theme.background.color.first,
      },
      headerTintColor: theme.font.color.first,
    };
  };

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
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        enableOnAndroid
        enableAutomaticScroll={false}
        contentContainerStyle={{ flex: 1 }}
        innerRef={(ref) => {
          this.scroll = ref;
        }}
        onKeyboardWillShow={() => {
          this.scroll.props.scrollToPosition(0, 300);
        }}
      >
        <DeckDetailStyled>
          <AddCardContent navigation={navigation} deck={deck} />
        </DeckDetailStyled>
      </KeyboardAwareScrollView>
    );
  }
}

DeckDetail.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default DeckDetail;
