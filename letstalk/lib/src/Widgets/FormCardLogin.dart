import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class FormCard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Container(
      width: double.infinity,
      height: ScreenUtil.getInstance().setHeight(500),
      decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(8.0),
          boxShadow: [
            BoxShadow(
                color: Colors.black12,
                offset: Offset(0.0, 15.0),
                blurRadius: 15.0),
            BoxShadow(
                color: Colors.black12,
                offset: Offset(0.0, -10.0),
                blurRadius: 10.0),
          ]),
      child: Padding(
        padding: EdgeInsets.only(left: 16.0, right: 16.0, top: 16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Text("Iniciar sesión",
                style: TextStyle(
                    fontSize: ScreenUtil.getInstance().setSp(45),
                    fontFamily: "Poppins-Bold",
                    letterSpacing: .6)),
            SizedBox(
              height: ScreenUtil.getInstance().setHeight(30),
            ),
            Text("Correo electrónico",
                style: TextStyle(
                    fontFamily: "Poppins-Medium",
                    fontSize: ScreenUtil.getInstance().setSp(26))),
            TextFormField(
              keyboardType: TextInputType.emailAddress,
              decoration: InputDecoration(
                  hintText: "Correo electrónico",
                  hintStyle: TextStyle(color: Colors.grey, fontSize: 12.0)),
              validator: (value) => value.isEmpty ? 'El correo no puede estar vacío' : null,
              //onSaved: (value) => _email = value.trim(),
            ),
            SizedBox(
              height: ScreenUtil.getInstance().setHeight(30),
            ),
            Text("Contraseña",
                style: TextStyle(
                    fontFamily: "Poppins-Medium",
                    fontSize: ScreenUtil.getInstance().setSp(26))),
            TextFormField(
              obscureText: true,
              decoration: InputDecoration(
                  hintText: "Contraseña",
                  hintStyle: TextStyle(color: Colors.grey, fontSize: 12.0)),
              validator: (value) => value.isEmpty ? 'La contraseña no puede estar vacía' : null,
              //onSaved: (value) => _password = value.trim(),
            ),
            SizedBox(
              height: ScreenUtil.getInstance().setHeight(35),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: <Widget>[
                Text(
                  "¿Olvidó su contraseña?",
                  style: TextStyle(
                      color: Colors.blue,
                      fontFamily: "Poppins-Medium",
                      fontSize: ScreenUtil.getInstance().setSp(28)),
                )
              ],
            )
          ],
        ),
      ),
    );
  }
}