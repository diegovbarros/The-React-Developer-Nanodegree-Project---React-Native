import React, { PureComponent } from 'react';
import { withTheme } from 'styled-components/native';
import PropTypes from 'prop-types';
import Styles from '@components/QuizCard/styles';
import ScoreGauge from '@components/ScoreGauge';

class QuizCard extends PureComponent {
  render() {
    const { quizz, theme, ranking } = this.props;
    return (
      <Styles.DescriptionCardStyledView>
        <Styles.DescriptionCardTitleStyledText>
          Ranked #{ranking + 1}
        </Styles.DescriptionCardTitleStyledText>
        <Styles.DescriptionCardDateStyledText>
          Start Date: {quizz.date}
        </Styles.DescriptionCardDateStyledText>
        <ScoreGauge points={quizz.points} theme={theme} />
      </Styles.DescriptionCardStyledView>
    );
  }
}

const QuizCardEmpty = () => {
  return (
    <Styles.DescriptionCardStyledView>
      <Styles.DescriptionCardTitleStyledText style={{ textTransform: 'none', textAlign: 'center' }}>
        No quizzes at all!
      </Styles.DescriptionCardTitleStyledText>
    </Styles.DescriptionCardStyledView>
  );
};

QuizCard.propTypes = {
  theme: PropTypes.object.isRequired,
  quizz: PropTypes.object.isRequired,
  ranking: PropTypes.number.isRequired,
};

export { QuizCardEmpty };
export default withTheme(QuizCard);
