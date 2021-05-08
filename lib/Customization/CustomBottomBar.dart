import 'package:flutter/material.dart';
import 'package:google_nav_bar/google_nav_bar.dart';

class CustomBottomBar extends StatefulWidget {
  @override
  _CustomBottomBarState createState() => _CustomBottomBarState();
}

class _CustomBottomBarState extends State<CustomBottomBar> {
  @override
  Widget build(BuildContext context) {
    int itemSelected = 0;
    return Container(
      decoration: BoxDecoration(
          color: Colors.white,
          boxShadow: [
            BoxShadow(
              blurRadius: 20,
              color: Colors.black.withOpacity(.1),
            ),
          ],
          borderRadius: BorderRadius.only(
              topLeft: Radius.circular(40.0), topRight: Radius.circular(40.0))),
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 15.0, vertical: 8.0),
        child: GNav(
          selectedIndex: itemSelected,
          tabBackgroundColor: Colors.grey[100],
          tabs: [
            GButton(
              icon: Icons.home,
              iconColor: Colors.greenAccent,
              iconActiveColor: Colors.greenAccent,
              text: 'Home',
            ),
            GButton(
              icon: Icons.star,
              iconColor: Colors.deepOrangeAccent,
              iconActiveColor: Colors.deepOrangeAccent,
              text: 'Favorites',
            ),
            GButton(
              icon: Icons.settings,
              iconColor: Colors.blueGrey,
              iconActiveColor: Colors.blue,
              text: 'Settings',
            ),
            GButton(
              icon: Icons.help,
              iconColor: Colors.blue,
              iconActiveColor: Colors.blue,
              text: 'Help',
            ),
          ],
          onTabChange: (index) {
            setState(() {
              itemSelected = index;
            });
          },
        ),
      ),
    );
  }
}
