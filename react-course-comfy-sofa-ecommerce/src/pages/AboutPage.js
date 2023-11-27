import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return(
  <main>
    <PageHero title='about'/>
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt='nice desk'/>
      <article>
        <div className='title'>
          <h2>Welcome to Comfy Sloth</h2>
          <div className='underline'></div>
        </div>
        <p>At Comfy Sloth, we’re all about one thing: comfort. 
          Our carefully curated collection of sofas isn’t just furniture; 
          it’s a promise of coziness and style for your home.
        </p>
        <p>Picture sinking into one of our plush sofas after a long day—this is the feeling we aim to deliver. 
          Each piece is designed not only for comfort but also for enduring quality. We handpick materials to ensure your sofa becomes a cherished part of your home for years to come.
        </p>
        <p>But our commitment doesn’t stop there. From your first click on our site to the day your sofa arrives, 
          we're here to ensure your journey with us is effortless and enjoyable.
          Join us in the pursuit of comfort, style, and the joy of relaxation. 
          Welcome to Comfy Sloth, where your comfort is our priority.
        </p>
        <p>Your perfect sofa is just a click away—come, explore, and make yourself at home.
        </p>
      </article>
    </Wrapper>
  </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 1rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
