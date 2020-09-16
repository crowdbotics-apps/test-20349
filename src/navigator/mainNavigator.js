import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings102546Navigator from '../features/Settings102546/navigator';
import Settings102531Navigator from '../features/Settings102531/navigator';
import NotificationList102530Navigator from '../features/NotificationList102530/navigator';
import Maps102529Navigator from '../features/Maps102529/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings102546: { screen: Settings102546Navigator },
Settings102531: { screen: Settings102531Navigator },
NotificationList102530: { screen: NotificationList102530Navigator },
Maps102529: { screen: Maps102529Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
