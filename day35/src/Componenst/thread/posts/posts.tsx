// import { useSelector } from 'react-redux'
// import { rootReducerType } from '../../../reducers';
import { useState } from 'react'
import './posts.scss'
import StorySection from './StorySection/StorySection'

const Posts = () => {
    // const user = useSelector( (state : rootReducerType) => state.data);
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
    return(
        <>
        <div className="story-section">
            <StorySection/>
            {
                [...Array(10)].map((_, index) => {
                    return(
                        <div key={index} className="container">
                        <div className="card">
                            <div className="top">
                            <div className="top-left">
                                <img className="pfp" src="https://picsum.photos/700" alt=""/>
                                <span className="username">Indian stanup</span>
                            </div>
                            <div className="top-right">
                                <i className="fas fa-ellipsis-v"></i>
                            </div>
                            </div>
                        <div className="img">
                            <img src="https://picsum.photos/700" alt=""/>
                        </div>
                        <div className="bottom">
                            <div className="bottom-menu">
                            <div className="bottom-left">
                            {
                                isLiked ? <i className="fas fa-heart" onClick={() => setIsLiked(false)}></i> : <i className="fal fa-heart"onClick={() => setIsLiked(true)}></i>
                            }
                                
                                <i className="fal fa-comment"></i>
                                <i className="fal fa-paper-plane"></i>
                            </div>
                            <div className="bottom-right">
                              {
                                  isBookmarked ? <i className="fas fa-bookmark" onClick={() => setIsBookmarked(false)}></i> : <i className="fal fa-bookmark" onClick={() => setIsBookmarked(true)}></i>
                              } 
                            </div>
                            </div>
                            <p className="likes"> <strong>you</strong> and 256 other liked </p>
                        </div>
                        </div>
                        </div>
                    )
                })
            }
        </div>
        <div className="post"></div>
        </>
    )
}

export default Posts;