import React, { useState, useEffect } from 'react';
import './Coding.css';
import { Link } from 'react-router-dom';
import LeetCode from '../../Assests/Leetcode.png';
import codechefimg from '../../Assests/codechefimg.jpg';
import codeforcesimg from '../../Assests/codeforcesimg.jpg';

const Coding = () => {
  const [codeforcesData, setCodeforcesData] = useState(0);
  const [leetcodeBadges, setLeetcodeBadges] = useState([]);
  const [activeBadge, setActiveBadge] = useState(null);
  const [upcomingBadges, setUpcomingBadges] = useState([]);
  const [codechefRating, setCodechefRating] = useState(0);

  useEffect(() => {
    // Fetch the Codeforces data
    fetch('https://codeforces.com/api/user.info?handles=PHANTOM_23')
      .then(response => response.json())
      .then(data => {
        const maxrr = data.result[0].maxRating;
        setCodeforcesData(maxrr);
      })
      .catch(error => console.error("Error fetching Codeforces data:", error));

      fetch('https://codechef-api.vercel.app/handle/say_nine')
      .then(response => response.json())
      .then(data => {
        const maxrr = data.highestRating;
        setCodechefRating(maxrr);
      })
      .catch(error => console.error("Error fetching Codeforces data:", error));
    // Fetch the LeetCode badges
    fetch('https://alfa-leetcode-api.onrender.com/say_nine/badges')
      .then(response => response.json())
      .then(data => {
        setLeetcodeBadges(data.badges);
        setActiveBadge(data.activeBadge);
        setUpcomingBadges(data.upcomingBadges);
      })
      .catch(error => console.error("Error fetching LeetCode badges:", error));
  }, []);

  // Function to handle the image URL prefix
  const getImageUrl = (url) => {
    return url.startsWith('/static') ? `https://assets.leetcode.com/static_assets/public${url.slice(7)}`:url;
  };

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
            <img src={codeforcesimg} alt="codeforcesimg" className='codingPlatformImg' />
            <div className='profileTxt'>
              <h3>Codeforces Streak</h3>
              <p>I have maintained a Codeforces streak of 600 days.</p>
              <p>I am a specialist in Codeforces.</p>
              <p>Participated in more than 48 contests.</p>
              
              <p>My Highest Codeforces rating is {codeforcesData}.</p>
              <p className='profileLinkTxt'>
                my Codeforces ID: <Link to="https://codeforces.com/profile/PHANTOM_23" className='profileLink'>Phantom_23</Link>
              </p>
            </div>
          </section>

          <section className='codingProfileDesc'>
            <img src={codechefimg} alt="codechefimg" className='codingPlatformImg' />
            <div className='profileTxt'>
              <h3>CodeChef Rating</h3>
              <p>I hold a {codechefRating} rating on CodeChef.</p>
              <p>Solved more than 230 problems</p>
              <p className='profileLinkTxt'>
                my CodeChef ID: <Link to="https://www.codechef.com/users/say_nine" className='profileLink'>say_nine</Link>
              </p>
            </div>
          </section>

          <section className='codingProfileDesc'>
            <img src={LeetCode} className="codingPlatformImg" alt="LeetCode Badge" />
            <div className='profileTxt'>
              <h3>LeetCode</h3>
              <p>I actively participate on LeetCode and have achieved multiple badges:</p>
              <div className="badges">
                {leetcodeBadges.map((badge) => (
                  <div key={badge.id} className="badge">
                    <img src={getImageUrl(badge.icon)} alt={badge.displayName} className="badgeIcon" />
                    <p>{badge.displayName}</p>
                    <p>Earned on: {badge.creationDate}</p>
                  </div>
                ))}
              </div>
              {activeBadge && (
                <div className="activeBadge">
                  <h4>Active Badge:</h4>
                  <div className="badge">
                    <img src={getImageUrl(activeBadge.icon)} alt={activeBadge.displayName} className="badgeIcon" />
                    <p>{activeBadge.displayName}</p>
                    <p>Earned on: {activeBadge.creationDate}</p>
                  </div>
                </div>
              )}
              {upcomingBadges.length > 0 && (
                <div className="upcomingBadges">
                  <h4>Upcoming Badges:</h4>
                  {upcomingBadges.map((badge, index) => (
                    <div key={index} className="badge">
                      <img src={getImageUrl(badge.icon)} alt={badge.name} className="badgeIcon" />
                      <p>{badge.name}</p>
                    </div>
                  ))}
                </div>
              )}
              <p className='profileLinkTxt'>
                my LeetCode ID: <Link to="https://leetcode.com/say_nine/" className='profileLink'>say_nine</Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Coding;
