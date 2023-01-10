
import { bd } from "./bd";
import './Images.css'
import { useState } from "react";

import { AiFillHeart, AiOutlineHeart, AiOutlineShareAlt, AiOutlineFlag, AiFillFlag } from 'react-icons/ai';

export const Images = () => {

    return (
        <div className="feed">
            {
                bd.map(img => {
                    const [liked, setLiked] = useState(false);
                    const changeLikedValue = () => {
                        !liked ? setLiked(true) : setLiked(false);
                    }
                    return (
                        <div className="img-box" key={img.file}>
                            <div className="img-container">
                                <img 
                                    className="img-item" 
                                    src={'./src/resources/imgs/'+img.file} 
                                    alt="" 
                                />
                            </div>
                            <div className="interactions">
                                <div onClick={ changeLikedValue }>
                                    { 
                                        !liked ? <AiOutlineHeart /> : <AiFillHeart className="liked-icon" /> 
                                    }
                                </div>
                                <div>
                                    <AiOutlineShareAlt />
                                </div>
                                <div>
                                    <AiOutlineFlag />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
