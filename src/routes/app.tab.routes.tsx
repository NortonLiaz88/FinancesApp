import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Octicons from 'react-native-vector-icons/Octicons';
import {HomeScreen} from '../pages/Home';
import {RFValue} from 'react-native-responsive-fontsize';
import { TabIcon } from '../components/TabIcon';
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
        tabBarActiveTintColor: 'tomato',
        tabBarShowLabel: true,

        tabBarLabelStyle: {
          fontSize: RFValue(10),
          textTransform: 'capitalize',
          color: '#417d7a',
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: props => {
            return <TabIcon active={props.focused} icon='home'/>
          },
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Status"
        component={HomeScreen}
        options={{
            tabBarIcon: props => {
                return <TabIcon active={props.focused} icon='graph'/>
              },
          tabBarLabel: 'Status',
        }}
      />
      <Tab.Screen
        name="Budget"
        component={HomeScreen}
        options={{
          tabBarIcon: props => (
            <Octicons name={'file-directory'} size={24} color={'#417d7a'} />
          ),
        }}
      />
      <Tab.Screen
        name="Person"
        component={HomeScreen}
        options={{
          tabBarIcon: props => (
            <Octicons name="person" size={24} color={'#417d7a'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
