import React from 'react'
import LazyLoad from 'react-lazyload'

const LazyImg = ({
  src,
  alt,
  height,
  once
}) => (
    <LazyLoad height={height} once={once} >
      <img
        src={src}
        alt={alt}
      />
    </LazyLoad>
  )

export default LazyImg