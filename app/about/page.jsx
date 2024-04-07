import React from 'react'
import Link from 'next/link';

const about = () => {
  return (
    <div className='main main-top'>
      <div className="page-head">
        <div className='title-box '>
          <h1 className='title'>About me.</h1>
          <div className='title-decore'></div>
          <div className='title-decore2'></div>
        </div>
        
        <div className='about-menu'>
          <ul class='section-list'>
            <li className='section-tag'>
              <Link href='#Background' className='section-link'>Background</Link>
            </li>
            <li className='section-tag'>
              <a href='#Present' className='section-link'>Present</a>
            </li>
            <li className='section-tag'>
              <a href='#Interests' className='section-link'>Interests</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="img-text-contain" style={{scrollBehavior:'smooth'}}>
        <section className="section-box" id='Background'>
          <div className='about-paragraph'>
            <h2 className="page-subhead padd-bottom reduce-width">Why I am in this field.</h2>
            <h3 className="page-text">I recently completed my Bachelor's Degree in computer science, with a minor in psychology, specifically the areas of mental health, motivation, and 
            behaviour. Two very different fields, some would argue, however, my passions in both areas extend into my childhood, and drive me to search for ways I can apply my knowledge of 
            the two in conjunction. When I was young, building was how I spent my time, from Lego crossbows that left holes in the walls of my house, to homemade planes which I competed for
            gliding distance with friends, anything I could harness creativity to design, build, and optimize. In school, I loved design class so much that I bullied my teacher into 
            making a design club where I could go use the 3d printer or the programmable robots at lunch hour. The desire to make everything into a design project is still engrained 
            into me, as I spent a month making my desktop PC into a liquid-cooled art piece with custom-cut and sanded PET tubing and a coolant solution. All this being said, I knew from very early on that I needed to find a career in which I could 
            find a problem, and create a solution. Computer science resonated with me because of the synergy with consumer-oriented design, limitless possibilities of what types of projects I could be working on, and the 
            ease of self-directed learning. All I need is a computer, and I can create almost anything I can imagine.
            </h3>
            <h3 className="page-text">
            Around this time, I also began paying more and more attention to the behaviour of other people. I wondered what drove us to make 
            decisions... why do we procrastinate? why do we have panic attacks? As I got older, I noticed the rapid increase in ADHD cases, anxiety and depression in school-age kids, 
            and with this, the relationship between technology and our psychology became painfully clear. With today's technology, we can design and program software to help people, but 
            this is not always what happens. We witnessed smartphones transition from a new concept, to the single thing you can guarantee every person has with them. With the speed of 
            this transition, there was no time to study the impact of the drastic lifestyle change on the consumer, especially the developing brain. I have watched friends and loved ones
            mental health deteriorate as applications that were originally designed for entertainment, became chains by which they developed body dysmorphia, anxiety, lost their drive 
            to perform in school and ultimately lost the ability to cope. The impact of technology on our brain chemistry is what drove me to minor in psychology, and through my learning,
            I was stunned to find out just how easy it is to manipulate our brains. Now, after completing my degree, my knowledge in these two fields, which I hope to have convinced you
            are not so separate after all, allows me to design software which can both harness the power we have over our brain and respect its boundaries. 
            </h3>
          </div>
          
          <div className='small-about-image-container'>
            <img src="assets/images/glider.jpg" alt="glider" className="small-about-image"></img>
            <div className="image-decore"></div>
            <div className='image-decore2'></div>
          </div>
        </section>
        
        <section className="section-box" id='Present'>
          <div className='about-image-container'>
            <img src="assets/images/hawaiiMed.jpg" alt="Profile Picture" className="about-image"></img>
            <div className="image-decore"></div>
            <div className='image-decore2'></div>
          </div>
          <div className="about-paragraph middle">
            <h2 className="page-subhead padd-sides padd-bottom">Where I'm at.</h2>
            <h3 className="page-text">As I've finished my degree now, I'm looking to start my career somewhere I can learn and improve. I'm hoping to work in person where I can form relationships
            with my colleagues and be a part of a community. In terms of work, I won't say no to anything, I am not one to turn down a challenge, and at this early stage, I believe it's 
            paramount that I gain experience out of my comfort zone and expand my skill stack. That being said, my passions fall in software that is helping improve lives.
            Obviously, that's a fairly broad statement, but for example, designing software for the smooth running of a hospital, or mental health company would give
            me a daily sense of accomplishment and purpose. I am also very interested in machine learning, and most application development, both mobile and web. Most of my experience falls in the
            domain of full-stack development, including interning for a Fin-Tech startup, so that's my central focus presently. 
            </h3>
          </div>
          
        </section>
        
        <section className="section-box" id="Interests">
          <div className="about-paragraph">
            <h2 className="page-subhead padd-sides padd-bottom">Interests, passions, and life away from the Screen.</h2>
            <h3 className="page-text">Being passionate about technology and design is great, and boy am I glad that I don't dread waking up and getting on a computer. However, this is 
            not what defines me as a person, rather, it is a productive outlet for my creativity and a career prospect. My true life lies in the outdoors, I am an adventurous person 
            who loves backpacking, skiing, surfing, and mountain biking, as well as most anything athletic. I played competitive volleyball for ten years and competed at the national 
            level in high school. I was also awarded the most outstanding athlete in my high school as well as captaining several teams. I mention this not to boast, but to discuss 
            the importance of the values that I've gained through these passions. Volleyball taught me early on that teams who do not respect and trust each other, or cannot 
            communicate consistently will fail. Whereas teams that help each other improve and instill confidence and motivation in their peers, grow and become more successful over 
            time. As a team captain, I learned the value of leading by example, understanding that those around you will work hard if they see you working hard, and will slack
            off if they notice that behaviour from you. Playing sports has imprinted in me the value of hard work and persistent pursuit of one's goals. Something that I know
              I can take with me into the workplace. </h3>
            <h3 className="page-text">Aside from sports and athletics, which have been a foundational part of my life and character, is my passion for psychology and the mind. As I
            mentioned earlier, I've long been fascinated with behaviour and motivation, enough to pursue it as part of my undergrad. The knowledge I've gained has inherent value in
              that I enjoyed the learning, but there is substantial merit in understanding the reward system of the brain. Before I started learning about the chemical reactions of 
              motivation in our brain, I was an avid procrastinator, I had a serious content addiction like so many of today's youth, and I was diagnosed with clinical depression and
              anxiety. I wholeheartedly believe these diagnoses, along with many of today's ADHD diagnoses, arose from a lack of addressing the underlying overuse of quick reward 
              sources like our phones. Our brains have a threshold of dopamine that is the driving factor in why we perform daily activities: get out of bed, eat food, exercise, and 
              pursue goals. When a more appealing dopamine source exists in our pocket and we condition ourselves every day that we can be happy just from opening TikTok, our brain 
              adapts and begins to find no joy in the everyday activities that previously motivated us. This leads to dopamine starvation, a state most teens find themselves in on a
                daily basis, and is one of the main reasons so many of us are unproductive and feel depressed. Once I made the necessary changes to how I treated my reward system, the
                creative spark that existed in me as a child reignited and I found a new passion for pursuing goals and attempting hard tasks, I lost any symptoms of depression, and 
                my anxiety quickly diminished to normal healthy levels. This knowledge of how to manipulate our brains to enjoy hard work is a fundamental reason I believe I can be 
                an asset to any team I am a part of. I have helped friends overcome slumps of wanting to drop out of university, simply thought resetting their reward system and 
                helping them overcome the content addiction that is being engrained into the modern lifestyle. I believe that simple lifestyle changes can drastically improve 
                productivity, and more importantly, enjoyment of our work.</h3>
          </div>
          <div className='big-about-image-container hide-med'>
            <img src="assets/images/vball.PNG" alt="Profile Picture" className="big-about-image"></img>
            <div className="image-decore"></div>
            <div className='image-decore2'></div>
          </div>
        </section>
       
      </div>
      
    </div>
  )
}

export default about
