/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: true, // keep splash screen
};

// SEO Related settings
const seo = {
  title: "José I. Contreras Raggio",
  description:
    "Data-driven bioengineer and ML/AI specialist using imaging, modeling and automation to solve real-world problems in healthcare and advanced manufacturing.",
  og: {
    title: "Portfolio | José Ignacio Contreras Raggio",
    type: "website",
    url: "https://josecontreras.ch/",
  },
};

// Home Page
const greeting = {
  title: "José Ignacio Contreras Raggio",
  logo_name: "Jose I. Contreras Raggio",
  nickname: "I Use Data to Solve Real-World Problems",
  subTitle:
    "Data-driven bioengineer and PhD candidate. I work across the biomedical and engineering sectors, using ML/AI, image analysis and modeling to solve problems, improve processes and extract actionable insights from complex data.",
  resumeLink: "https://josecontreras.ch/cv.pdf",
  portfolio_repository: "https://github.com/JICRa/JICRa.github.io",
  githubProfile: "https://github.com/JICRa",
};

// Social Media Links
const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jicr/",
    fontAwesomeIcon: "fa-brands:linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Email",
    link: "mailto:joseiraggio@gmail.com",
    fontAwesomeIcon: "fa-solid:envelope",
    backgroundColor: "#D14836",
  },
  {
    name: "ORCID",
    link: "https://orcid.org/0000-0002-7457-9559",
    fontAwesomeIcon: "simple-icons:orcid",
    backgroundColor: "#A6CE39",
  },
  {
    name: "ResearchGate",
    link: "https://www.researchgate.net/profile/Jose_Contreras_Raggio",
    fontAwesomeIcon: "simple-icons:researchgate",
    backgroundColor: "#00CCBB",
  },
  {
    name: "Google Scholar",
    link: "https://scholar.google.com/citations?user=6uE9zYUAAAAJ&hl=en",
    fontAwesomeIcon: "simple-icons:googlescholar",
    backgroundColor: "#4285F4",
  },
  {
    name: "Github",
    link: "https://github.com/JICRa",
    fontAwesomeIcon: "fa-brands:github",
    backgroundColor: "#181717",
  },
];
const skills = {
  data: [
    {
      title: "Data Science & Applied Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Turning biomedical and engineering datasets into clear, actionable insights that support real decision-making.",
        "⚡ Building reliable ML/AI pipelines with strong feature engineering, validation and interpretability.",
        "⚡ Developing end-to-end workflows for data cleaning, modeling, visualization and automated quality control.",
        "⚡ Experienced with complex scientific data (microCT, microscopy, point clouds, retrieval data).",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: { color: "#013243" },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: { color: "#150458" },
        },
        {
          skillName: "scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: { color: "#F7931E" },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: { color: "#EE4C2C" },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: { color: "#276DC3" },
        },
      ],
    },

    {
      title: "Software Development & Automation",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building robust software tools for data processing, automation, image analysis and reporting.",
        "⚡ Writing maintainable code in Python, JavaScript and Vue.js using modern engineering practices.",
        "⚡ Automating high-throughput workflows (e.g., 10,000+ images segmented and analyzed).",
        "⚡ Experience in full-stack development (Laravel + Vue.js) and workflow optimization for real users.",
      ],
      softwareSkills: [
        {
          skillName: "Git & GitHub",
          fontAwesomeClassname: "fa-github",
          style: { color: "#181717" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#1488C6" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { color: "#F7DF1E" },
        },
        {
          skillName: "Vue.js",
          fontAwesomeClassname: "simple-icons:vuedotjs",
          style: { color: "#42B883" },
        },
        {
          skillName: "REST APIs",
          fontAwesomeClassname: "mdi:api",
          style: { color: "#4CAF50" },
        },
      ],
    },

    {
      title: "Bioengineering: Fabrication, Biomechanics & Biology",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Fabricating and characterizing 3D-printed scaffolds and composite biomaterials for bone tissue engineering.",
        "⚡ Skilled in chemical, mechanical and biological testing (rheology, SEM/EDS, FTIR, mechanical testing, cell assays).",
        "⚡ Using imaging (microCT, microscopy, point clouds) to link design → structure → function.",
        "⚡ Designing and operating dynamic bioreactor systems for perfusion and mechanical loading during in vitro testing.",
      ],
      softwareSkills: [
        {
          skillName: "3D Printing (DIW/FFF)",
          fontAwesomeClassname: "mdi:printer-3d",
          style: { color: "#FF9800" },
        },
        {
          skillName: "Autodesk (CAD)",
          fontAwesomeClassname: "simple-icons:autodesk",
          style: { color: "#0696D7" },
        },
        {
          skillName: "Matlab",
          imageSrc: "matlab.svg",
          style: { width: "45px", height: "45px" },
        },
        {
          skillName: "CellProfiler",
          imageSrc: "cellprofiler.svg",
          style: { width: "45px", height: "45px" },
        },
        {
          skillName: "Ilastik",
          imageSrc: "ilastik-icon.png",
          style: { width: "45px", height: "45px" },
        },
      ],
    },

    {
      title: "PhD, Leadership & Collaboration",
      fileName: "DesignImg",
      skills: [
        "⚡ Completing a PhD in Complex Systems Engineering at UAI–Empa/ETH Zürich (data, imaging, biomechanics, materials).",
        "⚡ Author/co-author of 10 peer-reviewed publications across materials, biomechanics and computational methods.",
        "⚡ Mentored 8+ Master’s students and collaborated with interdisciplinary and international teams.",
        "⚡ Strong autonomy, adaptability and ownership, delivering reliable results with an industry-oriented mindset.",
      ],
      softwareSkills: [
        {
          skillName: "Project Management",
          fontAwesomeClassname: "mdi:clipboard-text-outline",
          style: { color: "#00ACC1" },
        },
        {
          skillName: "Scientific Writing",
          fontAwesomeClassname: "mdi:file-document-edit-outline",
          style: { color: "#6D4C41" },
        },
        {
          skillName: "Team Leadership",
          fontAwesomeClassname: "mdi:account-group",
          style: { color: "#1E88E5" },
        },
      ],
    },
  ],
};

// Competitive Programming / Sites – not really your focus, so keep it minimal or empty
const competitiveSites = {
  competitiveSites: [],
};
// Education
const degrees = {
  degrees: [
    {
      title: "Universidad Adolfo Ibáñez (UAI) & Empa / ETH Zürich",
      subtitle: "PhD in Complex Systems Engineering (candidate)",
      logo_path: "logo-uai-v2.png",
      alt_name: "UAI & Empa / ETH Zürich",
      duration: "Apr 2022 – Jan 2026 (expected)",
      descriptions: [
        'Thesis: "Investigating the mechanical and biological properties of seeded 3D-Bioplotted Composite Scaffolds in an in-vitro dynamic bone culture model."',
        "Multidisciplinary research integrating complex systems, bioengineering and advanced manufacturing with a data-driven approach to materials and biomechanics.",
      ],
      website_link: "",
    },
    {
      title: "Universidad Adolfo Ibáñez (UAI)",
      subtitle: "MSc in Bioengineering (GPA: 6.5/7.0)",
      logo_path: "logo-uai-v2.png",
      alt_name: "UAI",
      duration: "Mar 2020 – Dec 2022",
      descriptions: [
        'Thesis: "Fabrication and Characterization of 3D-Bioplotting of Polycaprolactone–Bioactive Glass Composite Scaffolds for Tissue Engineering Applications."',
        "Thesis grade: 7.0/7.0.",
        "Focused on experimental design and analysis: design of experiments (DoE), project design and evaluation, and statistical modeling for bioengineering applications.",
      ],
      website_link: "https://www.uai.cl/",
    },
    {
      title: "Universidad Adolfo Ibáñez (UAI)",
      subtitle: "Engineering in Bioengineering (Professional Degree)",
      logo_path: "logo-uai-v2.png",
      alt_name: "UAI",
      duration: "Mar 2015 – Jul 2021",
      descriptions: [
        'Thesis: "Design-Fidelity-Structure-Assessment of controlled geometry 3D-bioplotted composite porous scaffolds."',
        "Thesis grade: 6.9/7.0.",
        "Comprehensive bioengineering training on using biological insight as input for engineering problem-solving, complemented by courses in innovation, management and business.",
      ],
      website_link: "https://www.uai.cl/",
    },
    {
      title: "Universidad Adolfo Ibáñez (UAI)",
      subtitle: "BSc in Bioengineering",
      logo_path: "logo-uai-v2.png",
      alt_name: "UAI",
      duration: "Mar 2015 – Jul 2021",
      descriptions: [
        "Built a strong foundation in mathematics, physics, chemistry and biology, learning to break down large, complex problems into tractable parts while developing solid software/IT skills and a grounding in business concepts.",
      ],
      website_link: "https://www.uai.cl/",
    },
  ],
};

// Certifications / Awards
const certifications = {
  certifications: [
    {
      title: "Top 100 Young Leaders in Chile",
      subtitle: "Recognized among Chile’s Top 100 Young Leaders 2023",
      logo_path: "uai_v2.PNG",
      certificate_link:
        "https://sociologia.uc.cl/wp-content/uploads/2023/07/lideres-2023-1.pdf",
      alt_name: "Top 100 Young Leaders",
      color_code: "white",
      duration: "2023",
    },
    {
      title: "Data Visualization: Storytelling",
      subtitle: "LinkedIn Learning – Storytelling with Data",
      logo_path: "linkedin.svg",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/882920970262f5308665e6d6e3760610ff1445864f453d8706c0d9217bad761e?trk=share_certificate",
      alt_name: "LinkedIn Learning",
      color_code: "white",
      duration: "1h 32m",
    },
    {
      title: "Statistics Foundations 2: Probability",
      subtitle: "LinkedIn Learning – Probability Foundations",
      logo_path: "linkedin.svg",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/90aa4fd1a4b74758c652af5b766472d9af12d7f87765dc2828205aed94f1ea6d",
      alt_name: "LinkedIn Learning",
      color_code: "white",
      duration: "1h 15m",
    },
    {
      title: "Statistics Foundations 1: The Basics",
      subtitle: "LinkedIn Learning – Statistics Foundations",
      logo_path: "linkedin.svg",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/9a8b7f95c788881533172b4d8522c0449a0bda267b75abb0c85d532b7b67f78e",
      alt_name: "LinkedIn Learning",
      color_code: "white",
      duration: "36m",
    },
    {
      title: "Data Science Foundations: Fundamentals",
      subtitle: "LinkedIn Learning – Data Analytics & Data Science Foundations",
      logo_path: "linkedin.svg",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/5158137020e9f3f366293227aa888c15dd4d35553704a0f4d1c6410e587e6185",
      alt_name: "LinkedIn Learning",
      color_code: "white",
      duration: "5h 24m",
    },
    {
      title:
        "Data Science and Analytics Career Paths and Certifications: First Steps",
      subtitle:
        "LinkedIn Learning – Career Path Planning, Data Analytics, Tech Career Skills",
      logo_path: "linkedin.svg",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/5158137020e9f3f366293227aa888c15dd4d35553704a0f4d1c6410e587e6185",
      alt_name: "LinkedIn Learning",
      color_code: "white",
      duration: "1h 32m",
    },
    {
      title: "The Non-Technical Skills of Effective Data Scientists",
      subtitle: "LinkedIn Learning – Data Science Soft Skills",
      logo_path: "linkedin.svg",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/e35c5e8aa648d8332eafe6c259b56eafab85ab80e7fc239bbc03ddb8c86bde7b",
      alt_name: "LinkedIn Learning",
      color_code: "white",
      duration: "50m",
    },
    {
      title: "A Day in the Life of a Data Scientist",
      subtitle: "LinkedIn Learning – Career Management & Tech Career Skills",
      logo_path: "linkedin.svg",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/d263f74fa437b53848bba3b954908687af3df8e2f58dbc21aabb86f377c27a5c",
      alt_name: "LinkedIn Learning",
      color_code: "white",
      duration: "1h 3m",
    },
  ],
};

// Experience
const experience = {
  title: "Experience",
  subtitle: "Research, Industry & Volunteering",
  description:
    "I work at the intersection of data science, imaging, biomechanics and advanced manufacturing. I enjoy turning complex experimental datasets into tools and insights that help researchers, clinicians and industry make better decisions.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "PhD Researcher - Academic Guest",
          company: "Empa / ETH Zürich",
          department: "Mechanical Systems Engineering",
          company_url: "https://www.empa.ch/",
          logo_path: "empa-logo.png",
          duration: "Jul 2025 – Nov 2025",
          location: "Dübendorf, Switzerland",
          country: "switzerland",
          description: [
            "Analyzing 10,000+ microscopy images using automated segmentation pipelines combining machine learning tools and custom algorithms.",
            "Building reproducible data-processing workflows to extract quantitative biological metrics for scaffold–cell interaction studies.",
            "Integrating imaging, mechanics and materials data into unified datasets to support model development and decision-making.",
          ],
          color: "#00506A",
        },

        {
          title: "PhD Researcher",
          company: "Universidad Adolfo Ibáñez (UAI)",
          department: "Bioengineering Department",
          company_url: "https://www.uai.cl/",
          logo_path: "logo-uai-v2.png",
          duration: "Oct 2024 – Jun 2025",
          location: "Viña del Mar, Chile",
          country: "chile",
          description: [
            "Applied a custom dynamic bioreactor system to in vitro bone tissue engineering experiments, combining perfusion and mechanical stimulation.",
            "Coordinated interdisciplinary projects linking 3D printing, biomaterials and biological assays within the PhD research line.",
            "Supported Master’s students with data analysis, figure preparation and scientific writing for thesis completion.",
          ],
          color: "#004080",
        },

        {
          title: "PhD Researcher - Academic Guest",
          company: "Empa / ETH Zürich",
          department: "Mechanical Systems Engineering",
          company_url: "https://www.empa.ch/",
          logo_path: "empa-logo.png",
          duration: "Jul 2023 – Sep 2024",
          location: "Dübendorf, Switzerland",
          country: "switzerland",
          description: [
            "Led the development of 10+ bioactive composite formulations, integrating synthesis, 3D printing and multi-scale characterization.",
            "Characterized 200+ scaffold samples using mechanical, thermal, chemical and imaging methods, accelerating workflows by ~40%.",
            "Contributed to peer-reviewed publications and ongoing collaborative projects in biomaterials, biomechanics and additive manufacturing.",
          ],
          color: "#00506A",
        },

        {
          title: "PhD Researcher",
          company: "Universidad Adolfo Ibáñez (UAI)",
          department: "Bioengineering Department",
          company_url: "https://www.uai.cl/",
          logo_path: "logo-uai-v2.png",
          duration: "May 2022 – Jun 2023",
          location: "Viña del Mar, Chile",
          country: "chile",
          description: [
            "Designed and validated a dynamic bioreactor system for in vitro bone tissue engineering, enabling combined perfusion and mechanical loading.",
            "Connected 3D-bioplotted composite scaffolds with biological assays to study mechano-biological response in controlled in vitro settings.",
            "Provided technical guidance to students in experimental design, data collection and documentation of lab protocols.",
          ],
          color: "#004080",
        },

        {
          title: "Graduate Research Assistant",
          company: "Universidad Adolfo Ibáñez (UAI)",
          department: "Bioengineering Department",
          company_url: "https://www.uai.cl/",
          logo_path: "logo-uai-v2.png",
          duration: "Dec 2021 – Apr 2022",
          location: "Santiago & Viña del Mar, Chile (remote/on-site)",
          country: "chile",
          description: [
            "Supported biomaterials and tissue engineering projects by coordinating sample preparation, imaging and mechanical testing.",
            "Contributed to grant proposals and internal reports by summarizing experimental progress and key quantitative results.",
          ],
          color: "#004080",
        },

        {
          title: "Master’s Internship",
          company: "Empa / ETH Zürich",
          department: "Mechanical Systems Engineering",
          company_url: "https://www.empa.ch/",
          logo_path: "empa-logo.png",
          duration: "Mar 2021 – Nov 2021",
          location: "Dübendorf, Switzerland",
          country: "switzerland",
          description: [
            "Achieved ~98% printing success rate and improved dimensional accuracy to within ~4% error using custom Python scripts and process optimization.",
            "Systematically linked ink rheology, printing parameters and scaffold fidelity to improve design-to-print translation.",
            "Contributed to the preparation and submission of methods papers on rheology-based parameter prediction for DIW 3D printing.",
          ],
          color: "#00506A",
        },

        {
          title: "Graduate Research Assistant",
          company: "Universidad Adolfo Ibáñez (UAI)",
          department: "Engineering Department",
          company_url: "https://www.uai.cl/",
          logo_path: "logo-uai-v2.png",
          duration: "Jan 2020 – Feb 2021",
          location: "Santiago & Viña del Mar, Chile (remote/on-site)",
          country: "chile",
          description: [
            "Supported biomaterials and 3D-printing projects and began mentoring students on experimental design and data handling.",
          ],
          color: "#004080",
        },

        {
          title: "Bachelor Internship (IAESTE)",
          company: "Empa / ETH Zürich",
          department: "Mechanical Systems Engineering",
          company_url: "https://www.empa.ch/",
          logo_path: "empa-logo.png",
          duration: "Mar 2019 – Dec 2019",
          location: "Dübendorf, Switzerland",
          country: "switzerland",
          description: [
            "Designed and validated 6+ standardized protocols for chemical, thermal and mechanical characterization of polymer–ceramic scaffolds.",
            "Established laboratory workflows for scaffold assessment that remain in use by the group.",
            "Contributed to a peer-reviewed publication by supporting data acquisition, analysis and methods documentation.",
          ],
          color: "#00506A",
        },

        {
          title: "Undergraduate Research Assistant",
          company: "Universidad Adolfo Ibáñez (UAI)",
          department: "Engineering Department",
          company_url: "https://www.uai.cl/",
          logo_path: "logo-uai-v2.png",
          duration: "Jul 2016 – Feb 2019",
          location: "Santiago, Chile",
          country: "chile",
          description: [
            "Designed and validated 3 standardized methods for 3D-printed scaffold fabrication and mechanical testing, enabling reproducible workflows.",
            "Investigated how print fidelity, porosity and geometry affect mechanical performance of porous scaffolds.",
            "Supported day-to-day lab activities, including sample preparation, testing and preliminary data analysis.",
          ],
          color: "#004080",
        },

        {
          title: "Teaching Assistant (10+ courses)",
          company: "Universidad Adolfo Ibáñez (UAI)",
          department: "Engineering Department",
          company_url: "https://www.uai.cl/",
          logo_path: "logo-uai-v2.png",
          duration: "Aug 2016 – Dec 2022",
          location: "Santiago, Chile",
          country: "chile",
          description: [
            "Assisted more than 10 courses from introductory to senior level, including programming, calculus, microeconomics, tissue engineering, biomaterials and biomechanics.",
            "Led problem-solving sessions, tutorials and review workshops to support student learning.",
            "Contributed to exam and assignment design, grading and feedback, ensuring fair and consistent assessment.",
          ],
          color: "#004080",
        },

        {
          title: "Senior Software Developer",
          company: "CloudLab – Sonda & UAI",
          department: "Software Development",
          company_url: "https://www.sonda.com/",
          logo_path: "sonda.png",
          duration: "Oct 2016 – Mar 2017",
          location: "Santiago, Chile",
          country: "chile",
          description: [
            "Led development of a Laravel–Vue.js customer management dashboard for Sonda employees, used daily by 100+ users.",
            "Coordinated feature planning, implementation and testing within a small development team.",
            "Improved internal administrative workflows by translating user needs into robust software features.",
          ],
          color: "#FF6F00",
        },

        {
          title: "Junior Software Developer",
          company: "CloudLab – Sonda & UAI",
          department: "Software Development",
          company_url: "https://www.sonda.com/",
          logo_path: "sonda.png",
          duration: "Jun 2016 – Sep 2016",
          location: "Santiago, Chile",
          country: "chile",
          description: [
            "Contributed to full-stack development using Laravel and Vue.js for internal web applications.",
            "Delivered high-quality features on a tight timeline, leading to promotion to Senior Developer in only 4 months (vs. typical 1.5 years).",
          ],
          color: "#FF6F00",
        },
      ],
    },
    {
      title: "Volunteerships",
      work: false,
      experiences: [
        {
          title: "IT Board Member & Local Committee Event Organizer",
          company: "IAESTE",
          department: "Student Exchange & Networking",
          company_url: "https://www.iaeste.org/",
          logo_path: "iaeste.png",
          duration: "2023 – Present",
          location: "Zürich, Switzerland",
          country: "switzerland",
          description: [
            "Lead IT operations for the IAESTE Local Committee, ensuring the reliability of all digital systems supporting international trainees.",
            "Develop automated tools and data dashboards to reduce administrative workload and improve decision-making for student placement and support.",
            "Analyze participation and performance metrics for 100+ incoming and outgoing students to enhance program impact and operational efficiency.",
            "Organize and support 10+ events each year, including cultural activities, onboarding sessions, and networking meetups with local companies.",
            "Contribute to IAESTE’s mission as a global non-profit organization by providing high-quality support to international students seeking internships worldwide.",
          ],
          color: "#0C5A83",
        },
        {
          title: "Co-Founder – Family Clothing Startup",
          company: "Independent Project",
          department: "Entrepreneurship & Design",
          company_url: "",
          logo_path: "di-raggio.jpg",
          duration: "Side project",
          location: "Santiago, Chile",
          country: "chile",
          description: [
            "Co-founded and managed a small clothing brand focused on custom-designed and limited-edition apparel.",
            "Led marketing strategy, branding, and social media engagement to grow early customer awareness and product interest.",
            "Coordinated suppliers, handled inventory planning, and managed customer communication to ensure consistent delivery and quality.",
            "Applied business development, design thinking and family entrepreneurship principles to establish the early stage of the venture.",
          ],
          color: "#795548",
        },
        {
          title: "Committee President – LoL UAI",
          company: "Universidad Adolfo Ibáñez",
          department: "Student Gaming & Community Organization",
          company_url: "",
          logo_path: "lol-uai.jpeg",
          duration: "2015 – 2018",
          location: "Santiago, Chile",
          country: "chile",
          description: [
            "Led a large student organization dedicated to esports, community building and gaming culture at the university.",
            "Organized tournaments and meetups for 100+ participants, creating one of the most active student gaming communities on campus.",
            "Managed sponsorships, coordinated university funding and secured partnerships with external collaborators.",
            "Maintained direct communication with Riot Games to coordinate official support and event visibility.",
            "Oversaw logistics, marketing and team operations while mentoring committee members.",
          ],
          color: "#5A4FCF",
        },
        {
          title: "Bowling Athlete – National & International Representation",
          company: "Team Chile",
          department: "Sports & Community",
          company_url: "",
          logo_path: "team-chile.png",
          duration: "2011 – 2016",
          location: "Santiago, Chile",
          country: "Chile",
          description: [
            "Trained consistently for several years in competitive bowling, demonstrating discipline, focus, and long-term commitment.",
            "Represented Chile in international bowling competitions, participating at a high-performance level.",
            "Promoted community building by organizing local bowling meetups and supporting low resources students through sports and social activities.",
            "Engaged in daily practice, teamwork, and continuous improvement as part of national and local sports communities.",
          ],
          color: "#3F51B5",
        },
        {
          title: "Community Ambassador",
          company: "Ankama Games",
          department: "Gaming Community & Events",
          company_url: "https://www.ankama.com/",
          logo_path: "ankama.png",
          duration: "2012 – 2015",
          location: "Santiago, Chile",
          country: "chile",
          description: [
            "Served as official community ambassador for Ankama Games, supporting the Dofus/Wakfu player base in Chile.",
            "Organized local gaming events for 200+ attendees, including competitions, meetups and promotional activities.",
            "Collaborated with Ankama’s international team to represent and support the LATAM community.",
            "Developed local engagement strategies and promoted a positive and inclusive environment for players.",
          ],
          color: "#E64A19",
        },
        {
          title: "Patrol Leader – Scout Movement",
          company: "Scouts de Chile",
          department: "Youth Leadership & Outdoor Education",
          company_url: "",
          logo_path: "scout.png", // Add a small scout icon if desired
          duration: "2006 – 2010",
          location: "Santiago, Chile",
          country: "chile",
          description: [
            "Led the Puma Patrol, guiding young members through outdoor skills, teamwork and values-based activities.",
            "Developed early leadership experience through planning, coordination and responsibility for group performance.",
            "Organized camping activities, team challenges and community service projects.",
            "Built foundational skills in communication, mentoring and group management.",
          ],
          color: "#388E3C",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I build data and imaging pipelines that connect experimental setups (bioreactors, 3D printing, retrievals) with robust analytics and ML models. Many of my projects are part of larger research collaborations in biomaterials, biomechanics and tissue engineering.",
  avatar_image_path: "projects_image.svg",
};

// (Optional) highlight a few key projects explicitly if your template supports it
// Example structure if needed by your template:
// const projects = {
//   data: [ ... ]
// };

// Publications
const publicationsHeader = {
  title: "Publications",
  description:
    "Peer-reviewed work built at the intersection of biomaterials, additive manufacturing, biomechanics and machine-learning–driven quantitative analysis",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "seashells-to-scaffolds",
      title:
        "From Seashells to Scaffolds: A Comparative Chemical, Mechanical, and Biological Characterization of Natural and Synthetic Calcium Carbonate in 3D-Printed PCL Composites",
      description:
        "In-preparation study comparing natural seashell-derived and synthetic CaCO₃ in PCL composite scaffolds.",
      url: "", // add DOI or preprint link when available
      journal: "Biomaterials Advances (in preparation)",
      year: 2025,
      type: "Manuscript",
      isFirstAuthor: true,
      bullets: [
        "Synthesized natural seashell-derived bioactive material, compounded PCL composites, and 3D-printed scaffolds.",
        "Compared chemical, mechanical and biological performance of natural versus synthetic calcium carbonate fillers.",
        "Applied microscopy imaging and ML-based cell morphology analysis to quantify biological response.",
      ],
    },
    {
      id: "pcl-bioglass-biocompatibility",
      title:
        "Biocompatibility of Polycaprolactone-Bioglass Composite Scaffolds: Cellular and Molecular Insights for Tissue Engineering",
      description:
        "In-preparation work on the biocompatibility of PCL–bioglass scaffolds, from fabrication to cellular response.",
      url: "",
      journal: "Biomaterials Advances (in preparation)",
      year: 2025,
      type: "Manuscript",
      isFirstAuthor: true,
      bullets: [
        "Led the full fabrication workflow from material compounding and 3D printing to post-processing.",
        "Performed morphological, chemical and biological analyses to evaluate scaffold performance.",
        "Combined rheology, SEM/EDS and confocal imaging to interpret cellular and molecular responses.",
      ],
    },
    {
      id: "argonpecten-shells",
      title:
        "Biocompatibility and Morphological Analysis of Argopecten purpuratus Carbonate Shells for Tissue Engineering Applications with Human Gingival Mesenchymal Stem Cells",
      description:
        "Submitted study on carbonate shells as biomaterials for tissue engineering applications.",
      url: "", // add DOI when accepted
      journal: "Materials Today Communications (submitted)",
      year: 2025,
      type: "Journal article",
      isFirstAuthor: false,
      bullets: [
        "Contributed to manuscript writing and interpretation of experimental results.",
        "Performed microCT-based and chemical characterization of Argopecten purpuratus shells.",
        "Supported data visualization and figure preparation for the publication.",
      ],
    },
    {
      id: "rheology-methods",
      title:
        "Methodology to Predict 3D Printing Parameters of Custom-Made Inks Based on Characterization of Ink Rheology",
      description:
        "Under-review methods paper linking ink rheology to optimal printing parameters.",
      url: "", // add DOI when available
      journal: "MethodsX (under review)",
      year: 2025,
      type: "Methods paper",
      isFirstAuthor: true,
      bullets: [
        "Developed and validated analytical formulas correlating viscosity, shear rate and print fidelity.",
        "Reduced trial-and-error in parameter selection for custom inks in DIW 3D printing.",
        "Implemented Python-based models for rheology-informed printing parameter prediction.",
      ],
    },
    {
      id: "porme",
      title:
        "PorMe: A validated open-source image-based pore size and porosity measurement tool for 3D-printed structures",
      description: "Open-source tool for pore and porosity quantification.",
      url: "https://doi.org/10.1016/j.mex.2025.103611",
      journal: "MethodsX",
      year: 2025,
      type: "Methods paper",
      isFirstAuthor: true,
      bullets: [
        "Developed an automated open-source tool for pore size and porosity quantification of 3D-printed scaffolds.",
        "Enabled reproducible, user-friendly analysis of complex porous structures from 2D/3D imaging data.",
        "Combined Python, image analysis and algorithm development to support research and quality control.",
      ],
    },
    {
      id: "pcl-bg-polymers-2025",
      title:
        "Effect of Processing Parameters on the Printability and Mechano-Biological Properties of Polycaprolactone–Bioactive Glass Composites for 3D-Printed Scaffold Fabrication",
      description:
        "Processing–structure–function study of PCL–bioactive glass composite scaffolds.",
      url: "https://doi.org/10.3390/polym17111554",
      journal: "Polymers",
      year: 2025,
      type: "Journal article",
      isFirstAuthor: true,
      bullets: [
        "Investigated how 3D-printing parameters influence scaffold architecture, fidelity and cell response.",
        "Covered synthesis, manufacturing, characterization and analysis of polymer–ceramic scaffolds for bone regeneration.",
        "Used rheology, SEM and biological assays to link processing conditions to mechano-biological performance.",
      ],
    },
    {
      id: "dreyer-jor-2024",
      title:
        "The Influence of Implant Design and Limb Alignment on In Vivo Wear Rates of Fixed-Bearing and Rotating-Platform Knee Implant Retrievals",
      description:
        "Retrieval study on knee implants assessing design and alignment effects on wear.",
      url: "https://doi.org/10.1002/jor.25734",
      journal: "Journal of Orthopaedic Research",
      year: 2024,
      type: "Journal article",
      isFirstAuthor: false,
      bullets: [
        "Supported quantitative analysis of retrieved knee implants and in vivo wear evaluation.",
        "Contributed to mechanical testing and data processing workflows.",
        "Collaborated with an interdisciplinary team in orthopaedic biomechanics.",
      ],
    },
    {
      id: "polymers-2022-scaling",
      title:
        "Height-to-Diameter Ratio and Porosity Strongly Influence Bulk Compressive Mechanical Properties of 3D-Printed Polymer Scaffolds",
      description:
        "Co–first author work on mechanical scaling effects in 3D-printed scaffolds.",
      url: "https://doi.org/10.3390/polym14225017",
      journal: "Polymers",
      year: 2022,
      type: "Journal article",
      isFirstAuthor: true, // co–first, but you're named first
      bullets: [
        "Led design, printing and testing of 3D-printed polymer scaffolds to analyze geometric scaling.",
        "Quantified how height-to-diameter ratio and porosity affect bulk compressive properties.",
        "Combined mechanical testing, microCT and data analysis to understand structure–function relationships.",
      ],
    },
    {
      id: "shape-fidelity-2022",
      title:
        "Shape Fidelity, Mechanical and Biological Performance of 3D-Printed Polycaprolactone–Bioactive Glass Composite Scaffolds",
      description:
        "Study on shape fidelity and performance of PCL–bioactive glass composite scaffolds.",
      url: "https://doi.org/10.1016/j.msec.2021.112540",
      journal: "Biomaterials Advances",
      year: 2022,
      type: "Journal article",
      isFirstAuthor: false, // shared first in CV; you can toggle if you want to emphasise
      bullets: [
        "Worked on synthesis, manufacturing, characterization and analysis of polymer–ceramic scaffolds.",
        "Evaluated shape fidelity, mechanical behavior and biological performance for bone regeneration.",
        "Used microscopy, mechanical testing and statistical analysis to link composition and performance.",
      ],
    },
    {
      id: "msec-2021-structure-function",
      title:
        "Structure–Function Assessment of 3D-Printed Porous Scaffolds by a Low-Cost/Open-Source FFF Printer",
      description:
        "Evaluation of porous scaffolds printed with a low-cost FFF system.",
      url: "https://doi.org/10.1016/j.msec.2021.111945",
      journal: "Materials Science and Engineering C",
      year: 2021,
      type: "Journal article",
      isFirstAuthor: false,
      bullets: [
        "Evaluated printing fidelity and mechanical properties using low-cost, open-source FFF technology.",
        "Linked structural parameters to mechanical response of 3D-printed porous scaffolds.",
        "Promoted reproducible research using open-source tools and workflows.",
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "personal.jpg", // replace with your own avatar
    description:
      "Actively seeking Data Science / ML / AI roles in biomedical, engineering or industrial settings. I enjoy working at the interface of AI, imaging and engineering. Feel free to reach out if you’re working on data-driven solutions in healthcare or advanced manufacturing.",
  },
  blogSection: {
    title: "Writing",
    subtitle:
      "I occasionally write about imaging, data workflows and research-to-industry transitions.",
    link: "https://medium.com/@JICR",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Dübendorf, Zürich, Switzerland",
    locality: "Dübendorf",
    country: "Switzerland",
    region: "Zürich",
    postalCode: "8600",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/cJ8jtbEJTQSZhFek8",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+41 78 339 64 47",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
