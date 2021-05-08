import 'package:chewie/chewie.dart';
import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';

class VideoPlayerConfig extends StatefulWidget {
  final VideoPlayerController videoPlayerController;
  final bool looping;

  VideoPlayerConfig(
      {@required this.videoPlayerController, this.looping, Key key})
      : super(key: key);

  @override
  _VideoPlayerConfigState createState() => _VideoPlayerConfigState();
}

class _VideoPlayerConfigState extends State<VideoPlayerConfig> {
  ChewieController _chewieController;

  @override
  void initState() {
    _chewieController = ChewieController(
        videoPlayerController: widget.videoPlayerController,
        aspectRatio: 16 / 9,
        autoInitialize: true,
        looping: widget.looping);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(10.0),
      child: Chewie(
        controller: _chewieController,
      ),
    );
  }

  @override
  void dispose() {
    super.dispose();
    widget.videoPlayerController.dispose();
    _chewieController.dispose();
  }
}
