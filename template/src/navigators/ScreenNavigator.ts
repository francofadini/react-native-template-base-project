import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export class ScreenNavigator {
  private navigation: StackNavigationProp<ParamListBase>
  private route?: RouteProp<ParamListBase, string>

  constructor(navigation: StackNavigationProp<ParamListBase>,route?: RouteProp<ParamListBase, string>) {
    this.navigation = navigation
    this.route = route
  }

  public push(route: string, parameters?: any) {
    this.navigation.push(route, parameters)
  }

  public navigate(route: string, parameters?: any) {
    this.navigation.navigate(route,{params: parameters})
  }

  public getParams() {
    return this.route?.params
  }
}