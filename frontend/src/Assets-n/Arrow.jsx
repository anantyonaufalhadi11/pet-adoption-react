import React from 'react'

export default function Arrow({className, onClick}) {
  return (
    <svg className={className} onClick={onClick} viewBox="0 0 40 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M6.90419 0.564426L39.0933 22.7493C39.383 22.9398 39.6129 23.1691 39.7689 23.4231C39.9248 23.6771 40.0034 23.9504 39.9999 24.2261C40.001 24.7951 39.6752 25.3413 39.0933 25.7456C27.4496 33.5605 16.228 41.1032 5.42873 48.3739C4.87321 48.7316 2.65112 49.6213 0.935674 48.3005C-0.779774 46.9766 0.260161 45.824 0.935674 45.347L32.347 24.2261L2.36225 3.56073C1.26899 2.52426 1.35787 1.56727 2.6289 0.689782C3.89993 -0.187708 5.32651 -0.230512 6.90419 0.564426Z" fill="white"/>
</svg>

  )
}
