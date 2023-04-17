import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import MainLayout from '../layout/MainlLayout';
import axios from 'axios';

function PicturesPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=1');
      setPosts(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Navbar />
      <MainLayout>
        {loading ? (
          <div>Data is loading</div>
        ) : (
          <div>
            {posts.map((post) => (
              <div key={post.id}>
                <img className='imag' src="https://i.ibb.co/DCk8C1V/placeholder.png" alt='The Sunflowers' />
                <p>The Sunflowers</p>
                <img src="" alt='' />
                <p></p>
                <img src="" alt='' />
                <p></p>
                
              </div>
            ))}
          </div>
        )}
        
      </MainLayout>
    </>
  );
}

export default PicturesPage;



