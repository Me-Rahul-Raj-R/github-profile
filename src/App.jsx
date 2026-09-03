import React, { useState, useEffect } from 'react';
import { profileData } from './data/profileData.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import AboutMe from './components/AboutMe.jsx';
import TechEcosystem from './components/TechEcosystem.jsx';
import FeaturedProjects from './components/FeaturedProjects.jsx';
import BuildLogGallery from './components/BuildLogGallery.jsx';
import ExperienceTimeline from './components/ExperienceTimeline.jsx';
import ProblemSolving from './components/ProblemSolving.jsx';
import Achievements from './components/Achievements.jsx';
import Foundation from './components/Foundation.jsx';
import GitHubActivity from './components/GitHubActivity.jsx';
import ContactFooter from './components/ContactFooter.jsx';
import ReadmeViewer from './components/ReadmeViewer.jsx';

export default function App() {
  const [data, setData] = useState(profileData);
  const [activeTab, setActiveTab] = useState('ecosystem');
  const [readmeText, setReadmeText] = useState('');

  useEffect(() => {
    fetch('/api/profile')
      .then(res => res.json())
      .then(dt => {
        if (dt) setData(dt);
      })
      .catch(() => {
        // fallback to local imported profileData
      });

    fetch('/api/readme')
      .then(res => res.json())
      .then(res => {
        if (res && res.readme) setReadmeText(res.readme);
      })
      .catch(() => {});
  }, []);

  return (
    <div style={{minHeight: '100vh', position: 'relative', overflowX: 'hidden'}}>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 'readme' ? (
        <ReadmeViewer readmeContent={readmeText || 'README.md ready...'} />
      ) : (
        <main>
          <Hero profile={data.profile} leetcode={data.leetcode} />
          <AboutMe profile={data.profile} />
          <TechEcosystem ecosystem={data.ecosystem} />
          <FeaturedProjects projects={data.featuredProjects} />
          <BuildLogGallery repositoryGroups={data.repositoryGroups} />
          <ExperienceTimeline experience={data.experience} />
          <ProblemSolving leetcode={data.leetcode} />
          <Achievements achievements={data.achievements} />
          <Foundation education={data.education} certifications={data.certifications} />
          <GitHubActivity githubStats={data.githubStats} />
          <ContactFooter profile={data.profile} />
        </main>
      )}
    </div>
  );
}