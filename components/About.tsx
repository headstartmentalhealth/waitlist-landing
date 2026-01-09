import Image from 'next/image';
import React from 'react';
import Icon from './ui/icons/Icon';

const About = () => {
  return (
    <section className='w-full px-6 py-10 md:py-18 bg-white dark:bg-gray-900'>
      <div className='flex flex-col justify-center items-center gap-2 mb-4'>
        {/* Badge */}
        <div className='mb-2'>
          <span className='flex gap-2 px-3 py-2 text-sm text-gray-500 dark:text-gray-400 dark:border-gray-600 dark:border shadow-sm rounded-full '>
            <Icon url='/images/brief.png' />
            Brief Description
          </span>
        </div>

        {/* Heading */}
        <h1 className='text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4'>
          About HeadStart Connect
        </h1>
      </div>
      <div className='max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12'>
        {/* Left Content */}
        <div className='flex-1'>
          {/* Description */}
          <p className='text-gray-600 dark:text-gray-300 mb-8 max-w-xl leading-relaxed'>
            HeadStart Connect is an all-in-one mental wellbeing platform
            designed to support children, youth, and families through early
            screening, personalized coping tools, and engaging self-help
            experiences—accessible, supportive, and stigma-free.
          </p>

          {/* Features Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 text-gray-700 dark:text-gray-200 text-sm max-w-lg mt-10'>
            {/* Screening & Assessment */}
            <div className='flex flex-col justify-center items-center text-center gap-2'>
              <Icon url='/images/screening.png' width={30} />
              <h3 className='text-gray-900 dark:text-white mb-1'>
                Screening & Mood Check-ins
              </h3>
              <p>
                Age-appropriate mental health screeners and regular mood
                tracking to identify concerns early.
              </p>
            </div>

            {/* Personalized Action Plans */}
            <div className='flex flex-col justify-center items-center text-center gap-2'>
              <Icon url='/images/tools.png' width={30} />
              <h3 className='text-gray-900 dark:text-white mb-1'>
                Personalized Action Plans
              </h3>
              <p>
                Coping tools, skill-building modules, and daily challenges
                tailored to individual needs.
              </p>
            </div>

            {/* Engagement & Gamification */}
            <div className='flex flex-col justify-center items-center text-center gap-2'>
              <Icon url='/images/gamification.png' width={30} />
              <h3 className='text-gray-900 dark:text-white mb-1'>
                Engagement & Gamification
              </h3>
              <p>
                Badges, avatars, unlockable content, and calming mini-games that
                make wellbeing engaging.
              </p>
            </div>

            {/* Professional & Reflection Support */}
            <div className='flex flex-col justify-center items-center text-center gap-2'>
              <Icon url='/images/support.png' width={30} />
              <h3 className='text-gray-900 dark:text-white mb-1'>
                Support & Reflection
              </h3>
              <p>
                Guided journaling, mood insights, crisis support access, and
                referrals to professional care when needed.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className='flex-1 flex justify-center'>
          <Image
            src='/images/workspace.png' // Replace this with actual path
            alt='Workspace'
            width={500}
            height={400}
            className='w-full max-w-md'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
