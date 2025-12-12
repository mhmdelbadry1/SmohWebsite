import React, { useState, useEffect } from 'react';

export const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  style = {},
  blurDataURL = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23f3f4f6"/%3E%3C/svg%3E'
}) => {
  const [imageSrc, setImageSrc] = useState(blurDataURL);
  const [imageRef, setImageRef] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    let observer;
    
    if (imageRef && !isInView) {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsInView(true);
              setImageSrc(src);
              observer.unobserve(imageRef);
            }
          });
        },
        {
          rootMargin: '50px', // Start loading 50px before the image enters viewport
          threshold: 0.01
        }
      );
      observer.observe(imageRef);
    }
    
    return () => {
      if (observer && imageRef) {
        observer.unobserve(imageRef);
      }
    };
  }, [imageRef, isInView, src]);

  return (
    <div 
      ref={setImageRef}
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      {/* Blur placeholder */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{
            backgroundImage: `url(${blurDataURL})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(20px)',
            transform: 'scale(1.1)',
          }}
        />
      )}
      
      {/* Actual image */}
      <img
        src={imageSrc}
        alt={alt}
        className={`w-full h-full transition-all duration-500 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
        style={{ objectFit: 'cover' }}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
      />
    </div>
  );
};
