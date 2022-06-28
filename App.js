// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AppStack from './AppStack';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './store/store';
const THEME_COLOR = '#eaffd3'
const AppStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={[styles.statusbar, backgroundColor]}>
      <StatusBar backgroundColor={backgroundColor} {...props} />
    </View>
  );
};
export default function App() {
  return (
    <Provider store={store}>
      <AppStatusBar backgroundColor={THEME_COLOR} barStyle="dark-content" />
      <AppStack />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusbar: {
    // height: BAR_HEIGHT,
    backgroundColor: THEME_COLOR,
    color: '#fff'
  }
});
