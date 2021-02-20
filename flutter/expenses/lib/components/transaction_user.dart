import 'dart:math';

import 'package:expenses/model/transaction.dart';
import 'package:flutter/material.dart';
import './transaction_form.dart';
import './transaction_list.dart';

class TransactionUser extends StatefulWidget {
  @override
  _TransactionUserState createState() => _TransactionUserState();
}

class _TransactionUserState extends State<TransactionUser> {

  List<Transaction> _transactions = [
    
    Transaction(
      id: 't1', 
      title: 'Internet', 
      value: 109.10, 
      date: DateTime.now()
    ),

    Transaction(
      id: 't2', 
      title: 'Faculdade', 
      value: 212.56, 
      date: DateTime.now()
    ),

    Transaction(
      id: 't3', 
      title: 'Aluguel', 
      value: 700.00, 
      date: DateTime.now()
    ),
  
  ];

  _addTransactions(String title, double value){
    final newTransaction = Transaction(
      id:Random().nextDouble().toString(),
      title:title,
      value:value,
      date: DateTime.now()
    );

    setState(() {
      _transactions.add(newTransaction);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        TransactionList(_transactions),
        TransactionForm(_addTransactions)
      ],
    );
  }
}