import 'package:expenses/model/transaction.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class TransactionList extends StatelessWidget {

  final List<Transaction> transactions;

  TransactionList(this.transactions);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: transactions.map((tr) => Row(
        children: [
          Container(
            margin: EdgeInsets.symmetric(
              horizontal: 15,
              vertical: 10
            ),
            decoration: BoxDecoration(
              border: Border.all(
                color: Colors.purple,
                width: 2,
              ),
              borderRadius: BorderRadius.circular(50)
            ),
            padding: EdgeInsets.all(10),
            child: Text(
              "R\$ ${tr.value.toStringAsFixed(2)}",
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 20,
                color: Colors.purple
              ),
            )
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                tr.title,
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 16
                ),
              ),
              Text(
                DateFormat('d MMM y').format(tr.date),
                style: TextStyle(
                  color: Colors.grey
                ),
              )
            ],
          )
        ],
      )).toList(),
    );
  }
}