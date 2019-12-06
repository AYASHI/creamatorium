import { createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import RootScreen from '../Screens/Root';
import NewOrderScreen from '../Screens/NewOrder';
import OrdersListScreen from '../Screens/OrdersList';
const AppNavigator =  createStackNavigator({
     Root: {
         screen: RootScreen,
         navigationOptions: {
             headerShown: false
         }
     },
     NewOrder: {
         screen: NewOrderScreen,
         navigationOptions: {
             title: 'cremate your ice cream'
         }
     },
     OrdersList: {
          screen: OrdersListScreen,
          navigationOptions: {
              title: 'Order List'
          }
      }
 }, {
     defaultNavigationOptions: {
          headerStyle: {
            backgroundColor: '#00CCBB',
          },
          headerBackTitle: null,
          headerTintColor: 'white'
      }
 })

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;