import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from './components/Slider';
import HomeData from './components/HomeData'
import Aboutfacility from './components/Aboutfacility';
import Classessfacility from './components/Classessfacility';
import MeetourTrainers from './components/MeetourTrainers';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts from WordPress REST API
    axios.get('http://localhost/wordpress//wp-json/wp/v2/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching blog posts:', error);
      });
  }, []);

  return (
    <div>
    {/* //   {posts.map(post => ( */}
    {/* //     <div key={post.id}> */}
    {/* //       <h2>{post.title.rendered}</h2> */}
    {/* //       <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} /> */}
    {/* //     </div> */}
      {/* // ))} */}
<Slider/>
<HomeData/>
<Aboutfacility/>
<Classessfacility/>
<MeetourTrainers/>
    </div>
  );
}

export default Home;
