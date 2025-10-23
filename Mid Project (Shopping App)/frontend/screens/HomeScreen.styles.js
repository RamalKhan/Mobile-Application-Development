import { StyleSheet } from 'react-native';
import colors from '../themes/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  /* ---------- SALE BANNER ---------- */
  // banner container
  bannerWrap: {
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  banner: {
    width: '100%',
    height: 190,
  },

  // overlay + content
  bannerShade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',   // subtle dark overlay
  },
  bannerContent: {
    position: 'absolute',
    left: 25,
    right: 16,
    bottom: 29,
  },

  // heading "60–30% OFF"
  discountRow: { flexDirection: 'row', alignItems: 'baseline' },
  discountNum: {
    color: '#FFFFFF',
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 42,             // large like Figma
    letterSpacing: 0.2,
  },
  discountOff: {
    color: '#F7B23B',         
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 42,
    letterSpacing: 0.2,
  },

  // subheading
  bannerSub: {
    marginTop: 4,
    color: '#FFFFFF',
    fontFamily: 'Roboto-Bold', 
    fontSize: 18,
    letterSpacing: 0.5,
  },

  // outlined "Shop Now" button with arrow
  ghostBtn: {
    marginTop: 12,
    height: 45,
    paddingHorizontal: 14,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: 'transparent',
  },
  ghostBtnText: {
    color: '#FFFFFF',
    fontFamily: 'Roboto-Medium',
    fontSize: 19,
    marginRight: 8,
  },
  ghostBtnIcon: {
    width: 16,
    height: 16,
    tintColor: '#FFFFFF',
    resizeMode: 'contain',
  },

  /* ---------- SEARCH + FILTER ---------- */
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 28,
  },
  inputWrap: {
    flex: 1,
    height: 44,
    borderRadius: 25,
    backgroundColor: '#f7f7edff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  searchIcon: {
    width: 18,
    height: 18,
    tintColor: colors.brown,
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: colors.Black,
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
  },
  smallBtn: {
    width: 44,
    height: 44,
    marginLeft: 8,
    borderRadius: 22,
    backgroundColor: '#f7f7edff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallIcon: {
    width: 18,
    height: 18,
    tintColor: colors.brown,
  },
  sectionHeader: {
  marginTop: 40,
  paddingHorizontal: 25,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},
sectionTitle: { fontSize: 28, fontFamily: 'RobotoSlab-Bold', color: colors.brown },
seeAll: { fontSize: 18, fontFamily: 'Roboto-Regular', color: colors.brown },
arrow: { fontSize: 18, fontFamily: 'Roboto-Bold' },
productList: { paddingLeft: 16, paddingVertical: 25 },
});
