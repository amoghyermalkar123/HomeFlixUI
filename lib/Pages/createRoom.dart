import 'package:flutter/material.dart';
import 'package:chewie/chewie.dart';
import 'package:home_flix/Customization/VideoPlayerConfig.dart';
import 'package:video_player/video_player.dart';

class CreateRoom extends StatefulWidget {
  @override
  _CreateRoomState createState() => _CreateRoomState();
}

class _CreateRoomState extends State<CreateRoom> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: EdgeInsets.all(10.0),
          child: Column(
            children: [
              Container(
                height: 400,
                width: double.infinity,
                child: VideoPlayerConfig(
                    videoPlayerController: VideoPlayerController.network(
                        'https://86cbf865dff5.ngrok.io/media/1/stream/')),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
