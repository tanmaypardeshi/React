import React, { useState, useEffect } from 'react';
import NewSongForm from './NewSongForm';
import uuid from 'uuid/dist/v1';


const SongList = () => {
    const [songs, setSongs] = useState([
        {title:'Love the way you lie', id:1},
        {title:'Country Roads', id:2},
        {title:'Back in Black', id:3}    
    ]);
    const [age, setAge] = useState(20);
    const addSong = (title) => {
        setSongs([...songs, {title: title, id: uuid()}]);
    }
    useEffect(() => {
        console.log('useEffect hook ran', songs);
    }, [songs])
    useEffect(() => {
        console.log('useEffect hook ran', age);
    }, [age])
    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return (
                        <li key={ song.id }>{ song.title }</li>
                    )
                })}
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={() => setAge(age+1)}>Add 1 to age: {age}</button>
        </div>
    )
}

export default SongList;