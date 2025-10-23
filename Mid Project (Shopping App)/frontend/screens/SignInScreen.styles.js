import { StyleSheet } from 'react-native';
import colors from '../themes/colors';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.cream, alignItems: 'center', opacity:1 },
  body: { flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' },
  textBlock: { width: '86%', maxWidth: 332, alignSelf: 'center', marginBottom: 17 },
  info: { color: colors.Black,  fontFamily: 'RobotoSlab-Regular', fontSize: 16, lineHeight: 20, textAlign: 'center' },
  btnWrap: { width: '86%', maxWidth: 332, alignSelf: 'center', gap: 22, marginTop: 8, marginBottom: -290 },
  skip: { color: colors.mutedBrown, fontFamily: 'Roboto-Regular', fontSize: 16, textAlign: 'center', textDecorationLine: 'underline', marginTop: 6 },
  brandArea: { width: '100%', alignItems: 'center', paddingBottom: 29 },
});
