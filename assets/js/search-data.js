// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Papers grouped by research area, newest first.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "News",
          description: "Papers, talks and other updates.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https:/drive.google.com/file/d/1r5mEobtKH764gFwxULxSPIhSMSJj7X-V/view?usp=sharing";
          },
        },{id: "news-two-papers-accepted-at-emnlp-2025-on-cultural-alignment-and-cultural-bias-interpretability",
          title: '🎉 Two papers accepted at EMNLP 2025 on Cultural Alignment and Cultural Bias...',
          description: "",
          section: "News",},{id: "news-our-work-on-religious-bias-has-been-accepted-in-ai-amp-amp-society-the-paper-is-available-here",
          title: '🎉 Our work on Religious Bias has been accepted in AI &amp;amp;amp; Society....',
          description: "",
          section: "News",},{id: "news-our-work-on-islamic-lifestyle-applications-has-been-accepted-in-the-international-journal-of-human-computer-interaction-the-paper-is-open-access-and-available-here",
          title: '🎉 Our work on Islamic lifestyle applications has been accepted in the International...',
          description: "",
          section: "News",},{id: "news-our-collaborative-work-on-cross-cultural-translation-is-accepted-at-lrec-2026-available-here",
          title: '🎉 Our collaborative work on Cross-Cultural Translation is accepted at LREC 2026. Available...',
          description: "",
          section: "News",},{id: "news-our-work-on-multilingual-financial-misinformation-is-accepted-at-acl-findings-2026-available-on-arxiv",
          title: '🎉 Our work on Multilingual Financial Misinformation is accepted at ACL Findings 2026....',
          description: "",
          section: "News",},{id: "news-i-delivered-an-invited-talk-at-the-university-of-turku-with-the-turkunlp-group-on-cross-cultural-reasoning-in-llms-details-and-slides-are-available-here",
          title: '💬 I delivered an invited talk at the University of Turku with the...',
          description: "",
          section: "News",},{id: "news-three-papers-accepted-in-emnlp-2026-one-of-them-xcr-bench-benchmarks-cross-cultural-reasoning-in-llms",
          title: '🎉 Three papers accepted in EMNLP 2026. One of them, XCR-Bench, benchmarks cross-cultural...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%64%6D%6F%68%73%69%6E%75%6C.%6B%61%62%69%72@%6D%61%6E%63%68%65%73%74%65%72.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mohsinulkabir14", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/mohsinul_kabir", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=eVVCkREAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
