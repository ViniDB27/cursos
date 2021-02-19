import 'package:flutter/material.dart';

class Resultado extends StatelessWidget {

  final int pontos;
  final void Function() rezet;

  Resultado(this.pontos, this.rezet);

  String get resultadoFrase{
    if(pontos < 10){
      return 'Parabéns!';
    }else if(pontos < 15){
      return  'Você é bom!';
    }else if(pontos < 20){
      return 'Impressionante!';
    }else{
      return 'Nivel Jedi!';
    }
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(
            resultadoFrase,
            style: TextStyle(fontSize: 28),
          ),
          RaisedButton(
            textColor: Colors.white,
            color: Colors.blue,
            child:Text('Reiniciar Jogo'),
            onPressed: rezet,
          ),
        ],
      )
    );
  }
}