import React from 'react';

import './Rating.css';

const Rating = ({ stars = 0 }) => {
    
    const renderAllStars = () => {
        return [...Array(5)].map( (e, i)=> {
            return (
                <React.Fragment key={i}>
                    {renderStar()}
                </React.Fragment>
            )
        } )
    }

    const renderStar = () => {
        return (
            <div className="rating__star">
                <div className="rating__star__inner">
                    <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z"/></svg>
                </div>
            </div>
        )
    }

    const renderRatingMessage = () => {
        if(stars < 1){
            return(
                <span className="rating__message">
                    <div className="rating__message__inner">
                        No reviews yet
                    </div>
                </span>
            )
    
        }
    }

    return (
        <div className="rating">
            <div className="rating__inner">
                {renderAllStars()}
                {renderRatingMessage()}
            </div>
        </div>
    )
}


export default Rating;