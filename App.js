
import { View } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  return (
    <View style={{flex:1, flexDirection: 'row'}}>
      <View style={{flex: 1, backgroundColor: "red"}}></View>
      <View style={{flex: 1, backgroundColor: "blue"}}></View>
      <View style={{flex: 1, backgroundColor: "teal"}}></View>
    </View>
  );
}
