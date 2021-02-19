import 'package:flutter/material.dart';
import './questionario.dart';
import './resultado.dart';

main() => runApp(PerguntaApp());


class PerguntaApp extends StatefulWidget{

  @override
  _PerguntaAppState createState() => _PerguntaAppState();
}

class _PerguntaAppState extends State<PerguntaApp> {
  
  var perguntaSelecionada = 0;
  var totalDePontos = 0;

  final List<Map<String, Object>> perguntas = [
    {
      'texto':'Qual é a sua cor favorita',
      'respostas':[
        {'texto':'Preto','ponto':7},
        {'texto':'Vermelho','ponto':3},
        {'texto':'Verde', 'ponto':10},
        {'texto':'Branco','ponto':5},
      ],
    },
    {
      'texto':'Qual é o seu animal favorito',
      'respostas':[
        {'texto':'Coelho','ponto':10},
        {'texto':'Cobra','ponto':7},
        {'texto':'Elefante', 'ponto':5},
        {'texto':'Leão','ponto':3},
      ],
    },
    {
      'texto':'Qual é o seu instrutor favorito',
      'respostas':[
        {'texto':'Maria','ponto':3},
        {'texto':'João','ponto':7},
        {'texto':'Léo', 'ponto':5},
        {'texto':'Pedro','ponto':10},
      ],
    }
  ];

  void responder(int pontos){
    if(temPerguntaSelecionada){
      setState(() {
        perguntaSelecionada++;
      });
      setState(() {
        totalDePontos = totalDePontos + pontos;
      });
    }
  }

  void resetQuiz(){
    setState(() {
      perguntaSelecionada =0;
      totalDePontos = 0;
    });
  }

  bool get temPerguntaSelecionada{
    return perguntaSelecionada < perguntas.length;
  }

  @override
  Widget build(BuildContext context) {
    List<Map<String,Object>> respostas = temPerguntaSelecionada 
      ? perguntas[perguntaSelecionada]['respostas']
      :null;

    /* for(var textResp in respostas){
      wdgs.add(Resposta(textResp, responder));
    } */

    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Pergunta App'),
        ),
        body: temPerguntaSelecionada 
        ? Questionario(
          pergunta: perguntas[perguntaSelecionada]['texto'],
          respostas: respostas,
          onSelect: responder,
        )
        :Resultado(
          totalDePontos,
          resetQuiz
        )
      ),
    );
  }
}