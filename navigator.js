import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Login from './Login';
import Form from './Test';

const AppStackNavigator = createSwitchNavigator({
  Login: Login,
  //Customer: CustomerForm
  Form: Form
});

const AppContainer = createAppContainer(AppStackNavigator);
export default AppContainer;
