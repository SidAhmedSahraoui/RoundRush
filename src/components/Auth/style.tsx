import { createUseStyles } from 'react-jss';
import colors from '../Styles/colors';
import { CARD_SHADOW, BUTTON_PRIMARY, INPUT_TEXT } from '../Styles/styling';

const useStyles = createUseStyles({
  root: {
    background: `linear-gradient(180deg, ${colors.secondary} 0%, ${colors.primary} 100%)`,
    padding: '0px',
    margin: '0px',
    width: "100%",
    height: "100vh",
    '&.card-shadow': CARD_SHADOW,
    '& .title': {
        margin: "0px",
      color: colors['text-gray-100'],
    },
    '& .subtitle': {
      color: colors['text-gray-700'],
      fontWeight: '400',
    },
    '& .button-primary': BUTTON_PRIMARY,
    '& .input-text': INPUT_TEXT,
    '& .form-link': {
      '& a': {
        color: colors['text-gray-700'],
        '& span': {
          fontWeight: 500,
        },
      },
    },
  },
});

export default useStyles;
