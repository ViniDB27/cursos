import 'package:flutter/material.dart';

class Resposta extends StatelessWidget {

  final String resposta;
  final void Function() onSelect;

  Resposta(this.resposta, this.onSelect);

  @override
  Widget build(BuildContext context) {
    return  Container(
      width: double.infinity,
      child: RaisedButton(
        textColor: Colors.white,
        color: Colors.blue,
        child: Text(resposta),
        onPressed: onSelect,
      ),
    );
  }
}