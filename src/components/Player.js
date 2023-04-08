import React from 'react'
import ReactAplayer from 'react-aplayer'

export const Player = () => {
    const props = {
        fixed: true,
        theme: '#f4cf47',
        audio: [{
            name: 'name',
            artist: 'artist',
            url: 'http://m801.music.126.net/20230408214810/6bf1e6eab981d5d1ea19b272d28c3d73/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/20371455918/1b0b/d260/166b/524820950882617a87862640522f4556.mp3',
            cover: 'https://source.unsplash.com/random',
        }]
    }
    onPlay = () => {
        console.log('on play');
    }
    
    return (
        <div>
            <ReactAplayer 
                {...props}
                
            />
        </div>
    )
}