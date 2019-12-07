import 'package:flutter/material.dart';
import 'package:letstalk/src/pages/LoginPage.dart';
import 'package:letstalk/src/pages/ProfilePages.dart';
import 'package:letstalk/src/pages/RegisterPage.dart';

Map<String, WidgetBuilder> getApplicationRoutes(){
      return <String, WidgetBuilder> {
        '/'       : ( BuildContext context ) => LoginPage(),
        'register': ( BuildContext context ) => RegisterPage(),
        'profile' : ( BuildContext context ) => ProfilePage(),
        //'profile' : ( BuildContext context ) => ProfilePage(),
      };
}