import 'package:flutter/material.dart';
import 'package:meals/models/category.dart';

class CategoryItem extends StatelessWidget {

  final Category category;

  CategoryItem(this.category);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(15),
      child: Text(category.title),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(15),
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            category.color.withOpacity(0.5),
            category.color,
          ],
        ),
      ),
    );
  }
}