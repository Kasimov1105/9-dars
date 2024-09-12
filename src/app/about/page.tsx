import React from 'react';
import Image from 'next/image';

function Page() {
  return (
    <div className="max-w-7xl m-auto">
      <h1 className="text-5xl my-5">About page</h1>
      <p className="text-xl mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <Image 
      className='m-auto'
        src="/img.jpg"
        alt="Description of the image"
        width={1000}
        height={400}
      />
    </div>
  );
}

export default Page;
