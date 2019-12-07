import 'package:flutter/material.dart';

import 'package:flutter_localizations/flutter_localizations.dart';


import 'package:letstalk/src/pages/LoginPage.dart';
import 'package:letstalk/src/routes/routes.dart';

void main() => runApp(MyApp());
  
  
class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      localizationsDelegates: [
        // ... app-specific localization delegate[s] here
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
        //GlobalCupertinoLocalizations.delegate,
      ],
      supportedLocales: [
        const Locale('en'), // English
        const Locale('es'), // Español
        const Locale.fromSubtags(languageCode: 'zh'), // Chinese *See Advanced Locales below*
        // ... other locales the app supports
      ],
      initialRoute: '/',
      routes: getApplicationRoutes(),
      onGenerateRoute: ( settings ){
        return MaterialPageRoute(
          builder: (BuildContext context ) => LoginPage(),
        );
      },
    );
  }
}

