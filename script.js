(() => {
  'use strict';
  const en = {
    skip: 'Skip to content', navigationLabel: 'Main navigation',
    navProjects: 'Work', navNow: 'Now', navContact: 'Contact',
    location: 'Shenzhen, China', hello: 'Hi, I’m', name: 'James Rao.', alias: 'My Chinese name is 饶小建.',
    introFirst: 'I study computer science at Shenzhen University. These days, I mostly work on robots.',
    introSecond: 'Collecting data, running simulations, and trying models on real arms and dexterous hands. Here are a few things I’m working on.',
    explore: 'Take a look at my work',
    heroArtAlt: 'Concept illustration of an ivory robotic arm reaching toward an orange cube', heroArtLabel: 'Concept artwork',
    projectsEyebrow: 'SELECTED WORK', projectsTitle: 'Things I’m building', allProjects: 'All repositories',
    categoryRobot: 'Robotics', categoryData: 'Robot data', categoryHand: 'Dexterous hands', categoryGame: 'AI in games',
    projectG1: 'Running policy models on G1’s arms and dexterous hands. Test in simulation, then see how it goes on the real robot.',
    projectData: 'Collecting camera, tactile, and robot-state data together, checking and cleaning it, then getting it ready for training.',
    projectHand: 'Mapping human hand motions to robot hands. Currently working on retargeting and simulation checks; data collection and imitation learning come next.',
    projectGame: 'AI conversations for Stardew Valley NPCs, with memory of past chats and awareness of what’s happening in the game.',
    tagTactile: 'Tactile sensing', tagMemory: 'Character memory', also: 'A few more tools',
    coverG1Alt: 'G1 policy evaluation interface with three real-robot camera views', coverG1Label: 'Real-robot evaluation interface',
    coverWorldAlt: 'Main camera view from a data-collection task', coverWristAlt: 'Wrist-camera view of the same task', coverDataLabel: 'Main camera / wrist camera',
    coverHandAlt: 'Concept illustration of motion mapping between a robot hand and a human-hand wireframe', coverHandLabel: 'Hand retargeting · Concept art',
    coverGameAlt: 'Pixel-art project cover of two characters talking in a farming village', coverGameLabel: 'AI NPCs · Cover illustration',
    galleryTitle: 'A closer look', galleryTabLabel: 'Project images', gallerySimulation: 'G1 simulation', galleryEvaluation: 'Robot evaluation', galleryData: 'Data collection', galleryHand: 'Robot hand',
    enlargeImage: 'Enlarge image', closeImage: 'Close image', galleryHint: 'Click to enlarge ↗',
    nowEyebrow: 'NOW', nowTitle: 'On my desk', nowNote: 'Still mostly working with real robots.',
    nowRobotTitle: 'Trying models on robots', nowRobot: 'Deploying and evaluating policies on G1 and Piper-X, to see how much of their simulation performance carries over.',
    nowDataTitle: 'Getting the data right', nowData: 'Collecting and aligning RGB-D, tactile, and robot-state data to make training and replay a little less painful.',
    nowHandTitle: 'More experiments with robot hands', nowHand: 'Starting with human-to-robot retargeting, then connecting simulation, data collection, and imitation learning.',
    contactEyebrow: 'CONTACT', contactTitle: 'Got something to talk about?', contactText: 'Open an issue for project questions, or say hello about robots, data, or AI in games.',
    contactButton: 'Find me on GitHub', footer: 'Writing code. Figuring things out along the way.', backToTop: 'Back to top'
  };
  const zh = {};
  const textNodes = [...document.querySelectorAll('[data-i18n]')];
  const labels = [...document.querySelectorAll('[data-i18n-label]')];
  const alts = [...document.querySelectorAll('[data-i18n-alt]')];
  textNodes.forEach(node => { zh[node.dataset.i18n] = node.textContent; });
  labels.forEach(node => { zh[node.dataset.i18nLabel] = node.getAttribute('aria-label'); });
  alts.forEach(node => { zh[node.dataset.i18nAlt] = node.alt; });
  const languageButton = document.querySelector('.language-switch');
  const galleries = {
    simulation: { src: 'assets/g1-simulation.png', zh: 'G1 的 Isaac Sim 仿真场景', en: 'G1 tabletop scene in Isaac Sim' },
    evaluation: { src: 'assets/g1-evaluation.png', zh: 'G1 策略评估界面与三路真机相机画面', en: 'G1 policy evaluation interface and three real-robot camera views' },
    data: { src: 'assets/data-world.jpg', zh: '真机数据采集中的主视角画面', en: 'Main camera view from real-robot data collection' },
    hand: { src: 'assets/leap-hand.png', zh: 'LEAP Hand · Phase 0 仿真模型验证', en: 'LEAP Hand · Phase 0 simulation model checks' }
  };
  const galleryImage = document.getElementById('gallery-image');
  const galleryCaption = document.getElementById('gallery-caption');
  const tabs = [...document.querySelectorAll('[data-gallery]')];
  const galleryPanel = document.getElementById('gallery-panel');
  let currentGallery = 'simulation';
  let language = 'zh';

  function updateGallery(key) {
    currentGallery = key;
    const gallery = galleries[key];
    galleryImage.src = gallery.src;
    galleryImage.alt = gallery[language];
    galleryCaption.textContent = gallery[language];
    tabs.forEach(tab => {
      const selected = tab.dataset.gallery === key;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected) galleryPanel.setAttribute('aria-labelledby', tab.id);
    });
  }

  function setLanguage(value) {
    language = value === 'en' ? 'en' : 'zh';
    const dictionary = language === 'en' ? en : zh;
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
    textNodes.forEach(node => { node.textContent = dictionary[node.dataset.i18n]; });
    labels.forEach(node => { node.setAttribute('aria-label', dictionary[node.dataset.i18nLabel]); });
    alts.forEach(node => { node.alt = dictionary[node.dataset.i18nAlt]; });
    languageButton.firstChild.textContent = language === 'en' ? '中文 ' : 'EN ';
    languageButton.setAttribute('aria-label', language === 'en' ? '切换到中文' : 'Switch to English');
    document.title = language === 'en' ? 'James Rao · Robotics & Projects' : '饶小建 · James Rao';
    document.querySelector('meta[name="description"]').content = dictionary.introFirst + ' ' + dictionary.introSecond;
    try { localStorage.setItem('james-homepage-language', language); } catch { /* Storage may be disabled. */ }
    updateGallery(currentGallery);
  }

  let savedLanguage;
  try { savedLanguage = localStorage.getItem('james-homepage-language'); } catch { /* Use Chinese by default. */ }
  const requestedLanguage = new URLSearchParams(window.location.search).get('lang');
  setLanguage(requestedLanguage || savedLanguage || 'zh');
  languageButton.hidden = false;
  document.querySelector('.gallery-tabs').hidden = false;
  languageButton.addEventListener('click', () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
    const url = new URL(window.location.href);
    url.searchParams.set('lang', language);
    try { history.replaceState(null, '', url); } catch { /* Local file previews may restrict history. */ }
  });

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => updateGallery(tab.dataset.gallery));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) {
        event.preventDefault();
        updateGallery(tabs[next].dataset.gallery);
        tabs[next].focus();
      }
    });
  });

  const dialog = document.querySelector('.image-dialog');
  document.querySelector('.gallery-image-button').addEventListener('click', () => {
    const enlarged = document.getElementById('dialog-image');
    enlarged.src = galleryImage.src;
    enlarged.alt = galleryImage.alt;
    document.getElementById('dialog-caption').textContent = galleryCaption.textContent;
    dialog.showModal();
  });
  document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  document.getElementById('year').textContent = new Date().getFullYear();
})();
