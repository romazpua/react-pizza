import React from 'react'
import ContentLoader from 'react-content-loader'

const LoadingBlock = () => {
    return (
        <ContentLoader
            speed={ 2 }
            width={ 280 }
            height={ 458 }
            viewBox="0 0 280 458"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <circle cx="140" cy="130" r="120"/>
            <rect x="0" y="274" rx="8" ry="8" width="280" height="22"/>
            <rect x="0" y="317" rx="8" ry="8" width="280" height="84"/>
            <rect x="2" y="424" rx="8" ry="8" width="95" height="26"/>
            <rect x="138" y="413" rx="23" ry="23" width="140" height="46"/>
        </ContentLoader>
    )
}

export default LoadingBlock;