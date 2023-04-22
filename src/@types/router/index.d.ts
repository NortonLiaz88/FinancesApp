import {RootStackParamList} from '../../routes/app.tab.routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
