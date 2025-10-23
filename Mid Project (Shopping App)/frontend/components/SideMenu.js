import React, { useEffect, useRef, useState } from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  Pressable,
  Animated,
  StyleSheet,
  Dimensions,
} from 'react-native';
import colors from '../themes/colors';

const { width } = Dimensions.get('window');
const PANEL_W = Math.min(width * 0.86, 340);

const TABS = ['Women', 'Men', 'Perfumes'];

const SideMenu = ({ visible, onClose, navigation }) => {
  const slideX = useRef(new Animated.Value(-PANEL_W)).current;
  const [active, setActive] = useState('Women');

  useEffect(() => {
    Animated.timing(slideX, {
      toValue: visible ? 0 : -PANEL_W,
      duration: 220,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  // Map what to show + where to navigate
  const getItems = () => {
    if (active === 'Women') {
      return [
        { label: 'Stitched',   route: 'WomenStitched' },
        { label: 'Unstitched', route: 'WomenUnstitched' },
      ];
    }
    if (active === 'Men') {
      return [
        { label: 'Stitched',   route: 'MenStitched' },
        { label: 'Unstitched', route: 'MenUnstitched' },
      ];
    }
    return [
      { label: 'Male',   route: 'PerfumesMale' },
      { label: 'Female', route: 'PerfumesFemale' },
    ];
  };

  const handlePress = (route) => {
    onClose?.();
    navigation.navigate(route);
  };

  const Row = ({ label, onPress }) => (
    <Pressable onPress={onPress} style={styles.row}>
      <Text style={styles.rowText}>{label}</Text>
    </Pressable>
  );

  return (
    <Modal transparent visible={visible} animationType="none" onRequestClose={onClose}>
      {/* backdrop */}
      <Pressable style={styles.backdrop} onPress={onClose} />

      {/* panel */}
      <Animated.View style={[styles.panel, { transform: [{ translateX: slideX }] }]}>
        {/* top bar with tabs + close */}
        <View style={styles.topBar}>
          <View style={{ width: 24 }} />
          <View style={styles.tabs}>
            {TABS.map(t => (
              <Pressable key={t} onPress={() => setActive(t)} style={styles.tab}>
                <Text style={[styles.tabText, active === t && styles.tabActive]}>{t}</Text>
                {active === t && <View style={styles.underline} />}
              </Pressable>
            ))}
          </View>
          <Pressable onPress={onClose}>
            <Image source={require('../assets/icons/close.png')} style={styles.close} />
          </Pressable>
        </View>

        <View style={styles.divider} />

        {/* dynamic rows */}
        {getItems().map(item => (
          <Row key={item.route} label={item.label} onPress={() => handlePress(item.route)} />
        ))}
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.25)' },
  panel: {
    position: 'absolute', top: 0, bottom: 0, left: 0, width: PANEL_W,
    backgroundColor: '#fff', elevation: 12, shadowColor: '#000',
    shadowOpacity: 0.2, shadowOffset: { width: 2, height: 0 }, shadowRadius: 8,
  },
  topBar: {
    height: 56, paddingHorizontal: 12, flexDirection: 'row',
    alignItems: 'center', justifyContent: 'space-between',
  },
  tabs: { flexDirection: 'row', gap: 16, alignItems: 'flex-end' },
  tab: { alignItems: 'center' },
  tabText: { color: '#9E9E9E', fontSize: 14, fontFamily: 'Roboto-Medium' },
  tabActive: { color: colors.brown },
  underline: { height: 3, width: 24, backgroundColor: colors.brown, marginTop: 4, borderRadius: 2 },
  close: { width: 18, height: 18, tintColor: colors.brown },
  divider: { height: 1, backgroundColor: '#EFEFEF' },

  row: {
    height: 56, paddingHorizontal: 16, flexDirection: 'row',
    alignItems: 'center', borderBottomWidth: StyleSheet.hairlineWidth, borderColor: '#EEEEEE',
  },
  rowText: { color: '#212121', fontSize: 15, fontFamily: 'Roboto-Regular' },
});

export default SideMenu;
