import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#000',
  },
  bg: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center', // centers the block horizontally
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 350,                     
  },
  content: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'RobotoSlab-Bold', 
    fontSize: 40,
    lineHeight: 40,
    letterSpacing: 0.5,
    textAlign: 'center',
    includeFontPadding: false,
  },
  subtitle: {
    color: '#ffffffff',
    fontFamily: 'RobotoSlab-Regular',
    fontSize: 18,
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 8,
    includeFontPadding: false,
  },
  button: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F96331',
    borderRadius: 25,
    height: 55,
    paddingHorizontal: 40,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'RobotSlab-Bold',
    fontSize: 20,
    marginRight: 8,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#FFFFFF',
  },
});

export default styles;
