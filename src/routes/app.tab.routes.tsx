import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/Home';
import {RFValue} from 'react-native-responsive-fontsize';
import {TabIcon} from '../components/TabIcon';
import theme from '../styles/theme';
import {BudgetScreen} from '../screens/Budget';
import { HomeStackRoutes } from './app.home.stack.routes';
import { HomeBudgetStackRoutes } from './app.home.budget.stack.routes ';
const Tab = createBottomTabNavigator();

export const AppTabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingBottom: 10,
          height: 80,
          alignItems: 'flex-start',
        },
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: RFValue(10),
          textTransform: 'capitalize',
          color: theme.colors.initialGradientColor,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackRoutes}
        options={{
          tabBarIcon: ({focused}) => {
            return <TabIcon active={focused} icon="home" />;
          },
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Status"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <TabIcon active={focused} icon="graph" />;
          },
          tabBarLabel: 'Status',
        }}
      />
      <Tab.Screen
        name="Budget"
        component={HomeBudgetStackRoutes}
        options={{
          tabBarIcon: ({focused}) => {
            return <TabIcon active={focused} icon="file-directory" />;
          },
        }}
      />
      {/* <Tab.Screen
        name="Person"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <TabIcon active={focused} icon="person" />;
          },
        }}
      /> */}
    </Tab.Navigator>
  );
};
