import ffmpeg

input_file = r'C:\Users\aniru\OneDrive\Desktop\IELTS-simulator\backend\public\PT1\listening\mp3 files\PT1P4.mp3'
output_dir = r'C:\Users\aniru\OneDrive\Desktop\IELTS-simulator\backend\public\PT1\listening\http live streaming files\PT1\PT1P4\PT1P4master.m3u8'

(
    ffmpeg
    .input(input_file)
    .output(output_dir, c='aac', b='192k', ac=2, f='hls', hls_time=10, preset='ultrafast', flags='-global_header', map='0:a')
    .run()
)