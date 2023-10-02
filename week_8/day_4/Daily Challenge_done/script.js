class Video {
    constructor(title,uploader,time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
    }
}

const video = new Video('black&white','bob', '100 min')
console.log(video);
video.watch()

const videosArr = [
    {
    uploader: 'mike',
    time: '25 min',
    title: 'big money'
    },
    {
    uploader: 'bob',
    time: '5 min',
    title: 'low money'
    },
    {
    uploader: 'dido',
    time: '15 min',
    title: 'money'
    }
]

const videos = videosArr.map(({uploader,time,title}) => new Video(title,uploader,time))
console.log(videos);