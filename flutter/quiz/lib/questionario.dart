import 'package:flutter/material.dart';
import 'package:quiz/resposta.dart';
import './questao.dart';
import './resposta.dart';


class Questionario extends StatelessWidget {

  final String pergunta;
  final List<Map<String,Object>> respostas;
  final void Function(int) onSelect;

  Questionario({
    @required this.pergunta, 
    @required this.respostas, 
    @required this.onSelect
  });

  @override
  Widget build(BuildContext context) {
    return  Column(
      children: [
        Questao(pergunta),
        ...respostas.map((res) => Resposta(
          res['texto'], 
          () => onSelect(res['ponto'])
        )).toList(),
      ],
    );
  }
}