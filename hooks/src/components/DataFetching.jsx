import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataFetching() {
    const [posts, setPosts] = useState([]);
    const [photoid, setPhotoId] = useState('');
    const [photourl, setPhotourl] = useState('');

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/photos', {
                params: {
                    _limit: 1000, // Limit the number of photos to 1000
                },
            })
            .then((result) => {
                console.log(result);
                setPosts(result.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleFetchPhoto = () => {
        axios
            .get(`https://jsonplaceholder.typicode.com/photos/${photoid}`)
            .then((res) => {
                setPhotourl(res.data.url);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className='card p-4 text-center text-info bg-dark d-grid gap-4 mx-auto d-flex'>
            <h1 className='fs-1 text-white'>DataFetching (1000 images)</h1>

            <div className='d-flex mx-auto flex-wrap'>
                {posts.map((post) => (
                    <img src={post.url} alt='not loaded' height='20px' key={post.id} />
                ))}
            </div>
            <label >Give photoid and press button</label>
            <input
                type='text'
                className='form-control mx-auto'
                value={photoid}
                onChange={(e) => setPhotoId(e.target.value)}
                placeholder='Enter Photo ID less than 3000'
            />
            <button onClick={handleFetchPhoto} className='btn btn-info mx-auto'>Fetch Photo</button>
            <div className='container p-3'>
                <img src={photourl} alt='no image' height='200px' width='200px' />
            </div>
        </div>
    );
}

export default DataFetching;