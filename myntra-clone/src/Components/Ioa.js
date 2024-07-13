import React, { useEffect } from 'react';
import vid1 from './videos/vid1.mp4';
import vid2 from './videos/vid2.mp4';
import vid3 from './videos/vid3.mp4';
import vid4 from './videos/vid4.mp4';
import vid5 from './videos/vid5.mp4';
import '../App.css'; 
function Ioa() {
    const handleLike = (index) => {
        animateHearts(index);
    };

    const animateHearts = (index) => {
        const container = document.querySelectorAll('.videos')[index];
        const hearts = document.createElement('div');
        hearts.className = 'hearts';
        for (let i = 0; i < 20; i++) {  // Create 20 hearts
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = `${Math.random() * 80}%`;  // Randomize horizontal position more widely
            heart.style.animationDelay = `${Math.random() * 0.5}s`;  // Randomize animation start time
            heart.style.setProperty('--directionX', `${Math.random() * 200 - 100}`); // Random horizontal movement
            heart.style.setProperty('--directionY', `${Math.random() * -200 - 100}`); // Random vertical movement upwards
            hearts.appendChild(heart);
        }
        container.appendChild(hearts);
        setTimeout(() => {
            hearts.remove();
        }, 1500);
    };

    const callback = (entries) => {
        entries.forEach((entry) => {
            let ele = entry.target.childNodes[0];
            ele.play().then(() => {
                if (!ele.paused && !entry.isIntersecting) {
                    ele.pause();
                }
            });
        });
    };

    let observer = new IntersectionObserver(callback, { threshold: 0.6 });

    useEffect(() => {
        const elements = document.querySelectorAll('.videos');
        elements.forEach((element) => {
            observer.observe(element);
        });
    }, []);

    const videos = [vid1, vid2, vid3, vid4, vid5];

    return (
        <div className="video-containerss">
            {videos.map((video, index) => (
                <div className="videos" key={index}>
                    <video src={video} muted="muted" style={{ height: '85vh' }} />
                    <div className="video-actions">
                        <button className="like-button" onClick={() => handleLike(index)}>
                            ❤️
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Ioa;




// import React,{useEffect} from 'react'
// import vid1 from './videos/vid1.mp4';
// import vid2 from './videos/vid2.mp4';
// import vid3 from './videos/vid3.mp4';
// import vid4 from './videos/vid4.mp4';
// import vid5 from './videos/vid5.mp4';

// function Ioa() {
//     const callback = (entries) => {
//         entries.forEach((entry)=>{
//             let ele = entry.target.childNodes[0]
//             console.log(ele)
//             ele.play().then(()=>{
//                 if(!ele.paused && !entry.isIntersecting){
//                     ele.pause()
//                 }
//             })
//         })
//     }
//     let observer = new IntersectionObserver(callback, {threshold:0.6});
//     useEffect(()=>{
//         const elements = document.querySelectorAll(".videos")
//         elements.forEach((element)=>{
//             observer.observe(element)
//         })
//     },[])
//     return (
//         <div className="video-conatinerss">
//             <div className="videos">
//                 <video src={vid1} muted="muted" style={{height:'85vh'}}/>
//             </div>
//             <div className="videos">
//                 <video src={vid2} muted="muted" style={{height:'85vh'}}/>
//             </div>
//             <div className="videos">
//                 <video src={vid3} muted="muted" style={{height:'85vh'}}/>
//             </div>
//             <div className="videos">
//                 <video src={vid4} muted="muted" style={{height:'85vh'}}/>
//             </div>
//             <div className="videos">
//                 <video src={vid5} muted="muted" style={{height:'85vh'}}/>
//             </div>
//         </div>
//     )
// }
// export default Ioa;