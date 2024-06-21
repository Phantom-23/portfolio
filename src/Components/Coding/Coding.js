import React from 'react';
import './Coding.css';
import {Link} from 'react-router-dom';
import LeetCode from '../../Assests/Leetcode.png';
import codechefimg from '../../Assests/codechefimg.jpg';
import codeforcesimg from '../../Assests/codeforcesimg.jpg';

const Coding = () => {
  return (
    <main>
      <div className='codingCards'>

        <section className='codingProfileMain'>
          
          <h1>MY CODING SKILLS</h1>
          <br />
          <p>This page showcases my coding skills and achievements on various platforms.</p>
        </section>
    <div className='codingProfile'>
        <section className='codingProfileDesc'>
        <img src={codeforcesimg} alt="codeforcesimg" className='codingPlatformImg'/>
          <div className='profileTxt'>
          <h3>Codeforces Streak</h3>
          {/* <img src={codeforcesBadge} alt="Codeforces Badge" /> */}
          <p>I have maintained a Codeforces streak of 600 days.</p>
          <p>Iam specialist in codeforces.</p>
          <p>Participated more than 48 contests.</p>
          <p>Solved more than 800 problems</p>        
          <p className='profileLinkTxt'>my codeforces ID: <Link to="https://codeforces.com/profile/PHANTOM_23" className='profileLink'>Phantom_23</Link></p>
          </div>
        </section>

        <section className='codingProfileDesc'>
        <img src={codechefimg} alt="codechefimg" className='codingPlatformImg'/>
        <div className='profileTxt'>
          <h3>CodeChef Rating</h3>
          {/* <img src={codechefBadge} alt="CodeChef Badge" /> */}
          <p>I hold a 3-star rating on CodeChef with 1700+ rating.</p>
          <p>Solved more than 230 problems</p>
          <p className='profileLinkTxt'>my codechef ID:<Link to="https://www.codechef.com/users/say_nine" className='profileLink'>say_nine</Link></p>
        </div>
        </section>

        <section className='codingProfileDesc'>
          
          <img src={LeetCode} className="codingPlatformImg"alt="LeetCode Badge" />
          <div className='profileTxt'>
          <h3>LeetCode</h3>
          <p>
            I actively participate on LeetCode and have achieved a 100 days 2023 badge.</p>
            <p>I have gained a rating of 1700+.</p>
            <p> Additionally, I have six coding challenges batches.
          </p>
          <p className='profileLinkTxt'>my LeetCode ID:<Link to="https://leetcode.com/say_nine/" className='profileLink'> say_nine</Link></p>
          </div>
      </section>

      </div>
      {/* Add more sections for other platforms if needed */}
      </div>
    </main>
  );
};

export default Coding;
