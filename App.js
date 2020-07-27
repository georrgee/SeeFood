import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
  Search: SearchScreen
}, {
  initalRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
   }
  }
);

export default createAppContainer(navigator);

//export default createAppContainer(navigator); 
// App.js is a special file, anything export by this file is going to be taken by React Native