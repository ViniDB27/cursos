import 'package:flutter/material.dart';

class TransactionForm extends StatelessWidget {

  final void Function(String, double) addTransaction;

  TransactionForm(this.addTransaction);

  final title = TextEditingController();
  final value = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 5,
      child: Padding(
        padding: EdgeInsets.all(10),
        child: Column(
          children: [
            TextField(
              decoration: InputDecoration(
                labelText: 'Titulo'
              ),
              controller: title,
            ),
            TextField(
              decoration: InputDecoration(
                labelText: 'Valor (R\$)'
              ),
              controller: value,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                FlatButton(
                  child: Text('Nova Transação'),
                  textColor: Colors.white,
                  color: Colors.purple,
                  onPressed: () => addTransaction(title.text, double.tryParse(value.text) ?? 0.0)
                ),
              ],
            )
          ],
        ),
      ),
    );
  }
}