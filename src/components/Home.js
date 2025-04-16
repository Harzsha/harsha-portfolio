import React from 'react';

const Home = () => {
  return (
    <div className='w-full pt-40  rounded-b-full h-5/6'>
      <div className='flex justify-center align-middle gap-10'>
        <div className='w-60 h-60 overflow-hidden rounded-full'>
          <img
            src='/harsha-logo.jpeg'
            alt='Harsha'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='w-6/12'>
          With over 5 years of hands-on experience, I specialize in developing modern, scalable, and user-centric web applications using Angular (7-19), React, TypeScript, JavaScript, RxJS, jQuery, HTML5, CSS3, SCSS, and PrimeNG. My expertise extends to UI/UX design, performance optimization, and front-end architecture to deliver seamless digital experiences.
          Beyond front-end development, I have a strong background in Go (Golang) for backend microservices, with hands-on experience in Docker, Kubernetes, and CI/CD pipelines. I work with cloud technologies such as GCP, AWS, and Azure, integrating Azure DevOps, Jenkins, and RESTful APIs to streamline development and deployment.</div>
      </div>
    </div>
  );
};

export default Home;
