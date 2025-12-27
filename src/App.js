import React, {useState, useEffect} from 'react';
import {Github, Linkedin, Mail, ExternalLink, ArrowRight, Menu, X, BookOpen, Users, Award, GraduationCap, Heart, Target, Brain, Presentation, Monitor, Code, Globe, Calendar, MapPin, Clock, ChevronRight, Eye, Shield, Trash2, ChevronDown, ChevronUp, Search} from 'lucide-react';
import profileImage from './images/profile/GCosma2.jpg';
import decodeImage from './images/projects/decode-ai.jpg';
import isirchImage from './images/projects/isirch-ai.jpg';
import themisImage from './images/projects/themis-ai.jpg';
import personImage from './images/team-members/person.jpg';
import svgcKtpImage from './images/projects/svgc-ktp.svg';


export default function ProfCosmaPortfolio() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentProject, setCurrentProject] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(null);

  // ADD THIS USEEFFECT HERE - right after your state declarations
  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-EJFJQWKWR9', {
        page_title: currentPage,
        page_path: `/${currentPage}`,
        page_location: window.location.href
      });
    }
  }, [currentPage]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Research themes data
  const researchThemes = [
    {
      id: 'information-retrieval',
      title: 'Information Retrieval',
      icon: Eye,
      gradient: 'from-blue-500 to-cyan-500',
      keywords: ['Computer Vision', 'Natural Language Processing', 'Vision Transformers', 'CLIP', 'Neural Search', 'Retrieval-Augmented Generation', 'Cross-Modal Learning'],
      applications: ['Image Search', 'Content Discovery', 'Multimedia Retrieval', 'Digital Libraries', 'Knowledge Systems', 'Question Answering'],
      description: 'Advancing neural architectures that enable AI systems to understand, retrieve, and generate information across visual and textual modalities with enhanced contextual understanding.',
      whatIsIt: 'Information retrieval encompasses advanced techniques for finding and accessing information across different data modalities. This includes cross-modal retrieval that bridges the semantic gap between images and text, retrieval-augmented generation systems that combine large language models with dynamic knowledge retrieval, and neural search architectures that understand complex user queries.',
    },
    {
      id: 'nlp-agentic',
      title: 'NLP & Agentic AI Systems',
      icon: Brain,
      gradient: 'from-purple-500 to-indigo-500',
      keywords: ['Large Language Models', 'Autonomous Agents', 'Continual Learning', 'Machine Unlearning', 'Explainable AI'],
      applications: ['Healthcare Analytics', 'Document Processing', 'Bias Detection', 'Decision Support'],
      description: 'Developing autonomous AI agents that independently process, analyse, and generate insights from textual data whilst maintaining transparency and human oversight.',
      whatIsIt: 'Agentic NLP systems are autonomous agents that combine large language models with independent decision-making capabilities, enabling complex language tasks with human-level understanding and beyond-human scalability.',
    },
    {
      id: 'healthcare-ai',
      title: 'Healthcare AI & Temporal Modelling',
      icon: Heart,
      gradient: 'from-red-500 to-pink-500',
      keywords: ['Electronic Health Records', 'Temporal Modelling', 'Clinical NLP', 'Statistical ML', 'Patient Stratification'],
      applications: ['Clinical Decision Support', 'Patient Trajectories', 'Predictive Healthcare', 'Population Health'],
      description: 'Advanced AI systems for healthcare applications, focusing on temporal modelling of electronic health records and multimodal clinical data analysis.',
      whatIsIt: 'Healthcare AI encompasses sophisticated systems for medical applications, focusing on temporal modelling of EHRs to capture longitudinal patient trajectories and multimodal data integration.',
  
    },
    {
      id: 'responsible-innovation',
      title: 'Responsible AI Innovation',
      icon: Shield,
      gradient: 'from-green-500 to-emerald-500',
      keywords: ['AI Ethics', 'Bias Detection', 'Healthcare Equity', 'GDPR Compliance', 'Vulnerable Populations'],
      applications: ['Healthcare Equity', 'Public Policy', 'Social Justice', 'Regulatory Compliance'],
      description: 'A foundational principle embedded across all our projects - ensuring AI systems address societal challenges ethically, fairly, and safely through bias detection, transparency, and protection of vulnerable populations.',
      whatIsIt: 'Responsible AI innovation is integral to every project we undertake, prioritising ethical principles, fairness, and societal benefit while addressing healthcare equity, bias detection, and regulatory compliance requirements across all our work.',
    }
  ];

  const projects = [
    {
      id: 1,
      title: "DECODE",
      fullTitle: "Data-driven machinE-learning aided stratification & management of multiple long-term COnditions in adults with intellectual disabilitiEs",
      description: "A £2.8 million NIHR-funded project developing machine learning solutions for healthcare management of adults with intellectual disabilities.",
      detailedDescription: "DECODE addresses the complex healthcare needs of adults with intellectual disabilities through AI-driven stratification and management tools. We're developing predictive models using clinical records and temporal data to identify at-risk patients and recommend personalised care pathways, with a strong focus on ethical AI frameworks for vulnerable populations.",
      objectives: [
        "Develop predictive models for patient stratification using clinical records analysis",
        "Create AI tools for personalised care pathway recommendations",
        "Establish ethical frameworks for AI use with vulnerable populations",
        "Build scalable solutions for NHS integration",
        "Conduct validation studies ensuring safety and efficacy"
      ],
      impact: "DECODE will improve healthcare outcomes for adults with intellectual disabilities across England and Wales through AI-driven care coordination tools. The project will deliver decision support systems for NHS implementation, accessible visualisations for patients and carers, and establish ethical frameworks for AI use with vulnerable populations. Findings will directly inform NHS commissioning strategies and care policies, creating scalable solutions that reduce health inequalities whilst delivering cost savings through more efficient care pathways.",
      tech: ["Clinical Records Analysis", "Temporal Data Processing", "Predictive Modeling", "Healthcare AI", "Ethical AI"],
      category: "Healthcare AI & Data Science",
      status: "Active (2022-2025)",
      funding: "£2.8M NIHR",
      role: "Co-Investigator (AI lead)",
      icon: Heart,
      image: decodeImage,
      gradient: "from-emerald-400 to-cyan-600",
      partners: ["Leicestershire Partnership NHS Trust", "University of Leicester", "King's College London", "Swansea University"],
      osf: "https://www.decode-project.org/", 
      youtubeId: "5SaU7rDzC3g",
      hasVideo: true,
      pageId: "decode"
    },
    {
      id: 2,
      title: "I-SIRCh",
      fullTitle: "Using artificial intelligence to improve the investigation of factors contributing to adverse maternity incidents involving mothers and families across ethnic groups",
      description: "A £180K THF/NIHR project using advanced NLP to address critical healthcare inequalities in maternal mortality.",
      detailedDescription: "I-SIRCh tackles the healthcare inequality in pregnancy and childbirth. Using sophisticated natural language processing, we analyse maternity incident reports to identify causal factors and systemic biases that contribute to these disparities.",
      objectives: [
        "Develop NLP systems for analysing maternity incident reports",
        "Identify causal factors and interaction patterns in adverse outcomes",
        "Create bias detection algorithms for healthcare investigations",
        "Generate actionable insights for healthcare policy",
        "Establish best practices for AI analysis of sensitive healthcare data"
      ],
      impact: "Will inform targeted interventions to reduce maternal mortality among mothers, influencing national healthcare policy and training programmes.",
      tech: ["Natural Language Processing", "Named Entity Recognition", "Healthcare AI", "Bias Mitigation", "Social Justice AI"],
      category: "Healthcare Equity & AI Ethics",
      status: "Active Research",
      funding: "£180K THF/NIHR",
      role: "Joint Principal Investigator with Patrick Waterson (human factors)",
      icon: Target,
      image: isirchImage,
      gradient: "from-purple-400 to-pink-600",
      partners: ["Healthcare Safety Investigation Branch (HSIB)", "The Health Foundation"],
      github: "https://github.com/gcosma/I-SIRchProjectCollection", 
      youtubeIds: ["2h4u5WdZ7dM", "98lofiDaM-A"],
      hasVideo: true,
      hasMultipleVideos: true,
      pageId: "isirch"
    },
    {
      id: 3,
      title: "Themis.AI",
      fullTitle: "Identifying Early Help Referrals for Local Authorities with Machine Learning and Bias Analysis",
      description: "A £75K project developing ethical AI systems for local government early intervention identification.",
      detailedDescription: "Named after the Greek goddess of justice, Themis.AI develops machine learning models to help local authorities identify families needing early help interventions. The project emphasises bias-free algorithms, explainable AI interfaces, and comprehensive ethical frameworks for public sector deployment.",
      objectives: [
        "Develop machine learning models for early intervention prediction",
        "Create comprehensive bias detection and mitigation frameworks",
        "Build data preparation pipelines for local authority datasets",
        "Design explainable AI interfaces for social workers",
        "Establish ethical guidelines for AI in local government"
      ],
      impact: "Will help local authorities provide timely family support whilst ensuring AI decisions are fair and transparent. Framework scalable to other UK local authorities.",
      tech: ["Machine Learning", "Bias Analysis", "Data Science", "Public Sector AI", "Explainable AI", "Ethical AI"],
      category: "Public Sector AI & Ethics",
      status: "Active Development",
      funding: "£75K Loughborough EPG & Leicestershire CC",
      role: "Principle Investigator",
      github: "https://github.com/gcosma/ThemisAIPapers-Code",
      icon: Brain,
      image: themisImage,
      gradient: "from-blue-400 to-indigo-600",
      partners: ["Leicestershire County Council", "Dr Axel Finke", "Loughborough University"],
      youtubeId: null,
      hasVideo: false,
      pageId: "themis"
    },
    {
      id: 4,
      title: "KTP with SVGC",
      fullTitle: "Innovative Document Deduplication Algorithms for Government Digital Systems",
      description: "Knowledge Transfer Partnership with SVGC developing innovative algorithms for government document deduplication and adaptive AI systems that evolve with changing policy landscapes.",
      detailedDescription: "This pioneering KTP with SVGC develops innovative algorithms specifically for government document deduplication and processing. Our adaptive AI systems are designed to evolve with changing policy landscapes, addressing the critical challenge of managing vast government document repositories. The project creates intelligent deduplication algorithms that understand government document contexts, reduce storage costs, improve information retrieval, and adapt to evolving public sector requirements and policy changes.",
      objectives: [
        "Develop innovative algorithms for intelligent government document deduplication",
        "Create adaptive AI systems that evolve with changing policy landscapes",
        "Build context-aware deduplication systems for public sector document management",
        "Implement algorithms that understand government document hierarchies and relationships",
        "Establish frameworks for scalable document processing in government databases",
        "Reduce storage costs and improve information retrieval efficiency in public sector"
      ],
      impact: "Delivering transformative efficiency in government document management through intelligent deduplication algorithms. The adaptive systems significantly reduce storage costs, eliminate redundant information, and improve document retrieval times. The AI systems evolve with policy changes, ensuring long-term effectiveness and scalability across government departments.",
      tech: ["Document Deduplication", "Adaptive Algorithms", "Government AI", "Policy-Aware Systems", "Intelligent Document Processing", "Public Sector Innovation"],
      category: "Government AI & Document Processing",
      status: "Active Research",
      funding: "KTP Grant - SVGC Partnership",
      role: "Principle Investigator/Academic Supervisor",
      icon: Target,
      image: svgcKtpImage, // Use the new image variable
      gradient: "from-green-400 to-emerald-600",
      partners: ["SVGC", "Loughborough University"],
      youtubeId: null,
      hasVideo: false,
      pageId: "svgc-ktp"
    }    
  ];

const teamMembers = [
    // =============================================================================
    // CURRENT TEAM MEMBERS
    // =============================================================================
    
    // Current PhD Students (Primary Supervision)
    {
      name: "Petros Andreou",
      position: "PhD Student in neural machine unlearning",
      specialisation: "Selective Forgetting for Large Language Models",
      funder: "Darktrace",
      startDate: "April 2024",
      type: "phd",
      status: "current",
      image: personImage
    },
    {
      name: "Alex Buck",
      position: "PhD Student in AI Applications", 
      specialisation: "AI-based tools for Vehicle Condition Monitoring",
      funder: "Royal Air Force (RAF)",
      startDate: "October 2023",
      type: "phd",
      status: "current",
      image: personImage
    },
    {
      name: "Mikel Williams",
      position: "PhD Student in Information Retrieval",
      specialisation: "Neural Information Retrieval with cross-modal knowledge transfer",
      funder: "self-funded",
      startDate: "July 2021",
      type: "phd",
      status: "current",
      image: personImage
    },
    {
      name: "Jamie Lanyon",
      position: "PhD Student in neural machine unlearning",
      specialisation: "Selective Forgetting for Large Language Models",
      funder: "self-funded",
      startDate: "October 2024 (PT-mode)",
      type: "phd",
      status: "current",
      image: personImage
    },

    // Current Visiting Fellows
    {
      name: "Dr Rania Kousovista",
      position: "Senior Researcher, Department of Epidemiology, Erasmus MC & Visiting Fellow in AI, Loughborough University",
      specialisation: "Clinical Records Analysis & Temporal Data Processing",
      previousRole: "Research Fellow - DECODE Project",
      type: "visiting_fellow",
      status: "current",
      image: personImage
    },
    {
      name: "Dr Mohit Kumar",
      position: "Lecturer in Transport and Logistics Management, University of Greenwich & Visiting Fellow in AI, Loughborough University",
      specialisation: "Natural Language Processing & Healthcare Equity",
      previousRole: "Research Fellow - I-SIRCh Project",
      type: "visiting_fellow",
      status: "current",
      image: personImage
    },

    // Current KTP Associate
    {
      name: "Tom Middleton",
      position: "KTP Associate - Document Deduplication Algorithms",
      specialisation: "Innovative algorithms for government document deduplication and adaptive AI systems",
      funder: "KTP Partnership with SVGC",
      previousRole: "MSc AI at Loughborough University",
      startDate: "January 2024",
      endDate: "December 2025",
      type: "visiting_fellow",
      status: "current",
      image: personImage
    },

  // Current Assistant Researchers
  {
    name: "Abena Fosuaa Gyasi",
    position: "Assistant Researcher in AI",
    specialisation: "Artificial Intelligence Research",
    type: "research_staff",
    status: "current",
    image: personImage
  },
  {
    name: "Ihsane Boushaba",
    position: "Assistant Researcher in AI", 
    specialisation: "Artificial Intelligence Research",
    type: "research_staff",
    status: "current",
    image: personImage
  },
  
  // Current EPSRC Intern
  {
    name: "Krina Vara",
    position: "EPSRC Funded Internship in AI",
    specialisation: "Artificial Intelligence Research Internship",
    funder: "EPSRC",
    type: "intern",
    status: "current",
    image: personImage
  },

    // =============================================================================
    // ALUMNI - RESEARCH STAFF (Now in Academic Positions)
    // =============================================================================
    
    {
      name: "Dr Emeka Raphael",
      position: "Lecturer, Aston University",
      specialisation: "Machine Learning & Healthcare AI",
      previousRole: "Research Fellow - DECODE Project", 
      type: "research_alumni",
      image: personImage
    },
    {
      name: "Dr Eufrasio Lima Neto",
      position: "Associate Professor, Department of Statistics, Federal University of Paraíba",
      specialisation: "Machine Learning & Bias Analysis",
      previousRole: "Research Fellow - Themis.AI Project",
      type: "research_alumni", 
      image: personImage
    },
        {
      name: "Dr Aboozar Taherkhani",
      position: "Senior Lecturer, Demontfort University",
      specialisation: "Machine Learning & Spiking Neural Networks",
      previousRole: "Leverhulme Research Fellow - Multi-modal Neural Learning",
      type: "research_alumni", 
      image: personImage
    },

    // =============================================================================
    // ALUMNI - PhD GRADUATES
    // =============================================================================
    
    // Recent PhD Completions (2021-2024)
    {
      name: "Andrew Houston", 
      position: "PhD Graduate - Healthcare AI",
      specialisation: "Complexity-based approaches to improve trust in healthcare AI",
      funder: "Academic Department of Military Rehabilitation",
      startDate: "January 2021",
      completionDate: "2024",
      type: "phd_alumni",
      image: personImage
    },
    {
      name: "Jingrui (Jerry) Hou",
      position: "PhD Graduate - Machine Learning", 
      specialisation: "Continual Lifelong Learning for Cross-Modal Information Retrieval",
      funder: "Chinese Scholarship Council (CSC)",
      startDate: "October 2021",
      completionDate: "2024",
      type: "phd_alumni",
      image: personImage
    },
    
    // PhD Completions (2020-2023)
    {
      name: "Clifford Zhang",
      position: "PhD Graduate - AI & Surface Analysis",
      specialisation: "AI-based Detection, Classification and Analysis of Defects on Surfaces", 
      funder: "Railston & Co Ltd and Loughborough University",
      startDate: "October 2020",
      completionDate: "December 2023",
      type: "phd_alumni",
      image: personImage
    },
    {
      name: "Yan Gong",
      position: "PhD Graduate - Information Retrieval",
      specialisation: "Visual-Semantic Embedding Networks for Cross-modal Information Retrieval",
      funder: "Self-funded", 
      startDate: "October 2020",
      completionDate: "August 2023",
      type: "phd_alumni",
      image: personImage
    },
    
    // Earlier PhD Completion (2016-2019)
    {
      name: "Sadegh Salesi",
      position: "PhD Graduate - Evolutionary Computation",
      specialisation: "Evolutionary Computation-based Feature Selection for Finding a Stable Set of Features in High-dimensional Data",
      startDate: "October 2016", 
      completionDate: "August 2019",
      type: "phd_alumni",
      image: personImage
    },

    // =============================================================================
    // ALUMNI - MRes GRADUATES  
    // =============================================================================
    
    {
      name: "Salim Maaji",
      position: "MRes Graduate - Deep Learning",
      specialisation: "Deep Learning for Real-time Voltage Stability Prediction",
      institution: "Nottingham Trent University",
      completionDate: "2019",
      type: "mres_alumni",
      image: personImage
    },
    {
      name: "Gulrukh Turabee", 
      position: "MRes Graduate - Deep Learning",
      specialisation: "Sleep EEG data classification using transparent deep learning",
      institution: "Nottingham Trent University",
      completionDate: "2019",
      type: "mres_alumni",
      image: personImage
    },
    {
      name: "Bhavesh Pandya",
      position: "MRes Graduate - Biometric Recognition", 
      specialisation: "Deep Learning for multi-modal Biometric Recognition",
      institution: "Nottingham Trent University",
      completionDate: "2018",
      type: "mres_alumni",
      image: personImage
    }
  ];

  const Navigation = () => (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">GC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Prof. Georgina Cosma</h1>
              <p className="text-xs text-gray-500">Loughborough University</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {['home', 'projects', 'topics', 'group', 'grants', 'outreach', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => {
                        setCurrentPage(page);
                        setCurrentProject(null); // Clear project view when navigating
                      }}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 capitalize ${
                  currentPage === page 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
        
                {page === 'group' ? 'Research Group' : page === 'outreach' ? 'Outreach' : page}
              </button>
            ))}
          </div>

          <button 
            className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 mt-4">
            <div className="space-y-2 pt-4">
              {['home', 'projects', 'topics', 'grants', 'group', 'outreach', 'contact'].map((page) => (
                <button
                  key={page}
                  onClick={() => { setCurrentPage(page); setIsMenuOpen(false); }}
                  className="block w-full text-left px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 capitalize"
                >
                  {page === 'group' ? 'Research Group' : 
                  page === 'outreach' ? 'Outreach' : 
                  page === 'grants' ? 'Grant Capture' : page}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );

const GrantCapturePage = () => {
  const fundingEvents = [
    {
      year: "2023-2027",
      type: "Principal Investigator",
      title: "Developing AI-based tools for Vehicle Condition Monitoring and Maintenance",
      funder: "Royal Air Force (RAF)",
      amount: "£148k",
      description: "AI-based tools for vehicle condition monitoring and maintenance. PhD student: Sebastian Cheshire.",
      color: "blue"
    },
    {
      year: "2023-2025",
      type: "Principal Investigator", 
      title: "KTP project on intelligent SENSE software tool for Government departments",
      funder: "UKRI",
      amount: "£199k",
      description: "Knowledge Transfer Partnership with SVGC technologies. Research Associate: Daniel Blake.",
      color: "emerald"
    },
    {
      year: "2022",
      type: "Principal Investigator",
      title: "Research Consultancy via Loughborough University",
      funder: "Industry Partner",
      amount: "~£7k",
      description: "Research consultancy services through Loughborough University.",
      color: "gray"
    },
    {
      year: "2022-2025",
      type: "Co-Investigator",
      title: "DECODE: Data-driven machinE-learning aided stratification management of multiple long-term COnditions",
      funder: "NIHR",
      amount: "£2.8M total (£748k to School of Science)",
      description: "Large-scale healthcare AI project for adults with intellectual disabilities. PI: Dr Thomas Jun. Research Associates: Dr Rania Kousovista and Dr Emeka Raphael.",
      color: "purple"
    },
    {
      year: "2022-2024",
      type: "Joint Principal Investigator",
      title: "I-SIRch: Using AI to improve investigation of adverse maternity incidents involving black mothers and families",
      funder: "THF/NIHR", 
      amount: "£180k total (£110k to School of Science)",
      description: "AI for healthcare equity in maternity care. Joint-PI with Professor Patrick Waterson. Research Associate: Dr Mohit Kumar.",
      color: "rose"
    },
    {
      year: "2022-2023",
      type: "Principal Investigator",
      title: "Themis.AI: Identifying Early Help Referrals for Local Authorities with Machine Learning and Bias Analysis",
      funder: "Loughborough EPG & Leicestershire County Council",
      amount: "£75k",
      description: "Ethical AI for local government early intervention. Co-lead: Dr Axel Finke. Research Associate: Dr Eufrasio Lima Neto.",
      color: "indigo"
    },
    {
      year: "2020-2023",
      type: "Principal Investigator",
      title: "Defect Detection on Wind Turbine Surfaces using AI",
      funder: "Railston & Co Ltd (jointly funded with LU)",
      amount: "£80k",
      description: "AI for renewable energy infrastructure. PhD student: Clifford Zhang. Featured in national engineering media.",
      color: "amber"
    },
    {
      year: "2020-2023",
      type: "Principal Investigator", 
      title: "Responsible and Explainable AI in healthcare with focus on military and healthcare patient data",
      funder: "Academic Department of Military Rehabilitation (ADMR)",
      amount: "£20k",
      description: "Focus on military and healthcare patient data. PhD student: Andrew Houston.",
      color: "cyan"
    },
    {
      year: "2019-2022",
      type: "Co-Investigator",
      title: "Managing Affective-learning Through Intelligent Atoms and Smart InteractionS (MATHISIS)",
      funder: "European Commission H2020",
      amount: "£467k",
      description: "Large-scale EU project on intelligent learning systems. Research Associate: M. Taheri.",
      color: "green"
    },
    {
      year: "2018-2019",
      type: "Co-Investigator",
      title: "Gender Recognition Act Consultancy",
      funder: "Government Equality Office",
      amount: "£24k",
      description: "Government research/consultancy project. Research Associates: S. Salesi and O. Oloruntoba.",
      color: "violet"
    },
    {
      year: "2018-2019",
      type: "Principal Investigator",
      title: "Gender Recognition Act Consultancy (QR funds)",
      funder: "Government Equality Office",
      amount: "£12k",
      description: "Additional QR-funded research. Research Associates: S. Salesi and O. Oloruntoba.",
      color: "violet"
    },
    {
      year: "2018-2019",
      type: "Principal Investigator",
      title: "Design and development of an instant messaging mobile app",
      funder: "Nottingham Business School",
      amount: "£10k",
      description: "Mobile app development project. Research Associate: T. Thomas.",
      color: "blue"
    },
    {
      year: "2018-2019",
      type: "Co-Investigator",
      title: "Prostate cancer blood data collection and data preparation",
      funder: "NTU Health and wellbeing funds",
      amount: "£15k",
      description: "Healthcare data project. Research Associate: Dr Simon Hood.",
      color: "teal"
    },
    {
      year: "2018-2019",
      type: "Principal Investigator",
      title: "AI-based welding defect detection system (x-ray images and other data)",
      funder: "Laser Optical Engineering ltd",
      amount: "£20k",
      description: "Industrial AI application. Research Associates: S. Salesi and T. Thomas.",
      color: "orange"
    },
    {
      year: "2018-2019",
      type: "Principal Investigator",
      title: "AI-based multi-modal biometrics system",
      funder: "Secure Socialising Ltd (Enabling Innovation fund)",
      amount: "£10k",
      description: "Biometric systems research. Research Associate: B. Pandya.",
      color: "pink"
    },
    {
      year: "2017-2018",
      type: "Principal Investigator",
      title: "AI-based system for coding medical records",
      funder: "Health and Wellbeing grant (Care IS ltd)",
      amount: "£20k",
      description: "Healthcare AI system. Research Associates: D. Nagades Carlon and G. Vourgides.",
      color: "emerald"
    },
    {
      year: "2016-2019",
      type: "Principal Investigator",
      title: "Novel Approaches for Constructing Optimised Multimodal Data Spaces",
      funder: "The Leverhulme Trust (RPG)",
      amount: "£115k",
      description: "Fundamental research in multimodal AI. Research Fellow: Dr A. Taherkhani.",
      color: "purple"
    },
    {
      year: "2015-2016",
      type: "Co-Investigator",
      title: "Barriers & Inequalities: Towards a Better Understanding of Poor Prognostic Outcomes for Prostate Cancer in the African-Caribbean Community",
      funder: "Nottingham City Clinical Commissioning Group (NCCG)",
      amount: "£48k",
      description: "Healthcare equity research in the African-Caribbean community.",
      color: "teal"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: { bg: "bg-emerald-500", badge: "bg-emerald-100 text-emerald-800", glow: "shadow-emerald-200" },
      blue: { bg: "bg-blue-500", badge: "bg-blue-100 text-blue-800", glow: "shadow-blue-200" },
      purple: { bg: "bg-purple-500", badge: "bg-purple-100 text-purple-800", glow: "shadow-purple-200" },
      rose: { bg: "bg-rose-500", badge: "bg-rose-100 text-rose-800", glow: "shadow-rose-200" },
      indigo: { bg: "bg-indigo-500", badge: "bg-indigo-100 text-indigo-800", glow: "shadow-indigo-200" },
      amber: { bg: "bg-amber-500", badge: "bg-amber-100 text-amber-800", glow: "shadow-amber-200" },
      cyan: { bg: "bg-cyan-500", badge: "bg-cyan-100 text-cyan-800", glow: "shadow-cyan-200" },
      green: { bg: "bg-green-500", badge: "bg-green-100 text-green-800", glow: "shadow-green-200" },
      violet: { bg: "bg-violet-500", badge: "bg-violet-100 text-violet-800", glow: "shadow-violet-200" },
      orange: { bg: "bg-orange-500", badge: "bg-orange-100 text-orange-800", glow: "shadow-orange-200" },
      teal: { bg: "bg-teal-500", badge: "bg-teal-100 text-teal-800", glow: "shadow-teal-200" },
      pink: { bg: "bg-pink-500", badge: "bg-pink-100 text-pink-800", glow: "shadow-pink-200" },
      gray: { bg: "bg-gray-500", badge: "bg-gray-100 text-gray-800", glow: "shadow-gray-200" }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-24">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-blue-600 mb-8 shadow-lg border border-blue-100">
            <Award className="w-4 h-4 mr-2" />
            Research Funding Portfolio
          </div>
          <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Grant Capture
            </span>
            <br />
            <span className="text-gray-900 text-4xl lg:text-5xl">Timeline</span>
          </h1>
    
        </div>

        {/* Funding Timeline */}
        <section className="mb-20">
          <div className="relative">
            {/* Enhanced Timeline line with gradient */}
            <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 rounded-full shadow-lg"></div>
            
            {/* Floating timeline dots */}
            <div className="absolute left-6 top-0 bottom-0">
              {fundingEvents.map((_, index) => (
                <div 
                  key={index} 
                  className="absolute w-8 h-8 bg-white rounded-full shadow-lg border-4 border-blue-300"
                  style={{ top: `${(index * 100) / (fundingEvents.length - 1)}%` }}
                ></div>
              ))}
            </div>
            
            <div className="space-y-12 pl-4">
              {fundingEvents.map((grant, index) => {
                const colorClasses = getColorClasses(grant.color);
                
                return (
                  <div key={index} className="relative flex items-start gap-12">
                    {/* Enhanced Timeline dot */}
                    <div className={`relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl ${colorClasses.bg} ${colorClasses.glow} transform hover:scale-110 transition-all duration-300 rotate-3 hover:rotate-0`}>
                      <Award className="w-10 h-10 text-white" />
                      <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent rounded-2xl"></div>
                    </div>
                    
                    {/* Enhanced Content card */}
                    <div className="flex-1 group">
                      <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2">
                        {/* Card decoration */}
                        <div className={`absolute top-0 left-0 w-20 h-1 ${colorClasses.bg} rounded-full`}></div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                          <div className={`px-4 py-2 rounded-full text-sm font-semibold ${colorClasses.badge} shadow-sm`}>
                            <Calendar className="w-4 h-4 inline mr-2" />
                            {grant.year}
                          </div>
                          <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                            {grant.type}
                          </div>
                          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                            {grant.amount}
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                          {grant.title}
                        </h3>
                        
                        <div className="mb-4">
                          <p className="text-gray-700 font-medium text-lg mb-2">
                            <span className="font-semibold">Funder:</span> {grant.funder}
                          </p>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed text-base">
                          {grant.description}
                        </p>
                        
                        {/* Hover effect decoration */}
                        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};


const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-24">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-blue-600 mb-8 shadow-lg">
                <Award className="w-4 h-4 mr-2" />
                Professor of AI & Data Science
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gray-900">Professor</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Georgina Cosma
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Leading innovative research in Neural Information Retrieval, Computational Intelligence, 
                and Responsible AI at Loughborough University.
              </p>

              <div className="flex justify-center lg:justify-start gap-4">
                <a href="https://github.com/gcosma" target="_blank" rel="noopener noreferrer" className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <Github className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
                </a>
                <a href="https://www.linkedin.com/in/georginacosma/" target="_blank" rel="noopener noreferrer" className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
                </a>
                <a href="https://scholar.google.co.uk/citations?hl=en&user=OpHkDDIAAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noopener noreferrer" className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <BookOpen className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
                </a>
                <a href="mailto:g.cosma@lboro.ac.uk" className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <Mail className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
                </a>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-3xl rotate-3 shadow-2xl"></div>
                <div className="absolute inset-4 bg-white rounded-3xl shadow-inner flex items-center justify-center -rotate-3">
                  <img 
                    src={profileImage}
                    alt="Professor Georgina Cosma"
                    className="w-80 h-80 rounded-2xl object-contain"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                  <Brain className="w-12 h-12 text-indigo-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I am Professor of AI & Data Science at Loughborough University, where I lead the Neural Information 
                Processing, Retrieval & Modelling research group. My research focuses on developing AI systems that 
                are not only technically advanced but also ethical, fair, and beneficial to society.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My academic journey began with a PhD in Computer Science from the University of Warwick, specialising 
                in intelligent information retrieval. Since then, I have built a research programme that spans neural 
                information retrieval, computational intelligence, and responsible AI development. 
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
In addition to my research, I teach the Natural Language Processing (NLP) module to MSc Artificial Intelligence and MSc Advanced Computer Science students, focusing on foundational 
and state-of-the-art topics including vector space models, information retrieval, large language models (LLMs), and their applications.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                What drives my research is the conviction that AI must serve humanity responsibly. I work on projects 
                that address real societal challenges—from healthcare inequalities to supporting vulnerable populations. 
              </p>
            </div>
            
<div className="grid grid-cols-2 gap-6">
  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-2xl">
    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
      <GraduationCap className="w-6 h-6 text-white" />
    </div>
    <h3 className="font-bold text-gray-900 mb-2">Academic Excellence</h3>
    <p className="text-gray-600 text-sm">Leading research group with distinguished publication record</p>
  </div>
  
  <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-2xl">
    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
      <Award className="w-6 h-6 text-white" />
    </div>
    <h3 className="font-bold text-gray-900 mb-2">Grant Leadership</h3>
    <p className="text-gray-600 text-sm">Principal and co- investigator on externally funded projects</p>
  </div>
  
  <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-2xl">
    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
      <Heart className="w-6 h-6 text-white" />
    </div>
    <h3 className="font-bold text-gray-900 mb-2">Social Impact</h3>
    <p className="text-gray-600 text-sm">Addressing healthcare inequalities through responsible AI</p>
  </div>
  
  <div className="bg-gradient-to-br from-orange-50 to-red-100 p-6 rounded-2xl">
    <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-4">
      <Users className="w-6 h-6 text-white" />
    </div>
    <h3 className="font-bold text-gray-900 mb-2">Community Service</h3>
    <p className="text-gray-600 text-sm">Active reviewer for EPSRC and other funding bodies. Associate Editor of Elsevier Pattern Recognition</p>
  </div>
  
  <div className="bg-gradient-to-br from-amber-50 to-yellow-100 p-6 rounded-2xl">
    <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mb-4">
      <Globe className="w-6 h-6 text-white" />
    </div>
    <h3 className="font-bold text-gray-900 mb-2">Government Partnerships</h3>
    <p className="text-gray-600 text-sm"> Collaborations with NHS trusts and local authorities</p>
  </div>
  
  <div className="bg-gradient-to-br from-cyan-50 to-blue-100 p-6 rounded-2xl">
    <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center mb-4">
      <Target className="w-6 h-6 text-white" />
    </div>
    <h3 className="font-bold text-gray-900 mb-2">Industry Innovation</h3>
    <p className="text-gray-600 text-sm">Strategic partnerships with industry leaders</p>
  </div>
</div>
          </div>


{/* ADD YOUR ENHANCED EXPERTISE SECTION HERE */}
    <div className="mt-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Core Expertise</h2>
        <p className="text-xl text-gray-600">Specialised research areas driving innovation in AI and data science</p>
      </div>
      
      <div className="bg-gradient-to-br from-white/95 to-blue-50/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
            <div className="relative">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20"></div>
            </div>
            <span className="text-gray-800 font-medium group-hover:text-blue-700 transition-colors">Natural Language Processing & Large Language Models</span>
          </div>

          <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
            <div className="relative">
              <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="absolute inset-0 bg-indigo-400 rounded-full animate-ping opacity-20"></div>
            </div>
            <span className="text-gray-800 font-medium group-hover:text-indigo-700 transition-colors">Cross-Modal Information Retrieval</span>
          </div>

          <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
            <div className="relative">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping opacity-20"></div>
            </div>
            <span className="text-gray-800 font-medium group-hover:text-purple-700 transition-colors">Neural Machine Unlearning</span>
          </div>

          <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
            <div className="relative">
              <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-20"></div>
            </div>
            <span className="text-gray-800 font-medium group-hover:text-emerald-700 transition-colors">Healthcare AI & Temporal Modelling</span>
          </div>

          <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
            <div className="relative">
              <div className="w-6 h-6 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="absolute inset-0 bg-rose-400 rounded-full animate-ping opacity-20"></div>
            </div>
            <span className="text-gray-800 font-medium group-hover:text-rose-700 transition-colors">Agentic AI Systems</span>
          </div>

          <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
            <div className="relative">
              <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="absolute inset-0 bg-amber-400 rounded-full animate-ping opacity-20"></div>
            </div>
            <span className="text-gray-800 font-medium group-hover:text-amber-700 transition-colors">Responsible AI & Ethics</span>
          </div>

        </div>
      </div>
    </div>
        
        </div>
      </section>
    </div>
  );

const ProjectsPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-24">
    {/* Hero Section */}
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm border border-blue-200 rounded-full text-sm font-medium mb-8 shadow-lg">
          <Target className="w-4 h-4 mr-2 text-blue-600" />
          <span className="text-blue-700">Current Research Portfolio</span>
        </div>

        <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
            Research Projects
          </span>
          <br />
          <span className="text-gray-900 text-4xl lg:text-5xl">Driving Innovation in AI</span>
        </h1>

        <p className="text-xl text-gray-600 mb-16 max-w-5xl mx-auto leading-relaxed">
          Leading innovative research projects at the intersection of artificial intelligence, healthcare, 
          and social justice. Each project represents a significant contribution to responsible AI development.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center max-w-6xl mx-auto">
          <button 
            onClick={() => scrollToSection('decode-section')}
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 px-6 py-4 rounded-xl font-semibold transition-all text-white flex items-center gap-2 text-sm lg:text-base shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[180px]"
          >
            <Heart className="w-5 h-5" />
            DECODE
          </button>
          <button 
            onClick={() => scrollToSection('isirch-section')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-6 py-4 rounded-xl font-semibold transition-all text-white flex items-center gap-2 text-sm lg:text-base shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[180px]"
          >
            <Target className="w-5 h-5" />
            I-SIRCh
          </button>
          <button 
            onClick={() => scrollToSection('themis-section')}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 px-6 py-4 rounded-xl font-semibold transition-all text-white flex items-center gap-2 text-sm lg:text-base shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[180px]"
          >
            <Brain className="w-5 h-5" />
            Themis.AI
          </button>
          <button 
            onClick={() => scrollToSection('svgc-ktp-section')}
            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-6 py-4 rounded-xl font-semibold transition-all text-white flex items-center gap-2 text-sm lg:text-base shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[180px]"
          >
            <Target className="w-5 h-5" />
            KTP with SVGC
          </button>
        </div>
      </div>
    </section>

    {/* Research Projects */}
    <section className="relative py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={project.id} id={`${project.pageId}-section`} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-75 rounded-3xl`}></div>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="relative w-full h-80 object-contain rounded-3xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold text-gray-700">{project.category}</span>
                    </div>
                    <div className="absolute bottom-6 right-6 bg-white p-4 rounded-2xl shadow-lg">
                      <IconComponent className="w-8 h-8 text-gray-700" />
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-white rounded-3xl p-10 shadow-2xl">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {project.status}
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {project.funding}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
                    <h3 className="text-lg text-gray-600 mb-6 font-medium">{project.fullTitle}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Role: {project.role}</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="font-medium text-gray-700 mb-2">Key Partners:</h5>
                        <div className="text-sm text-gray-600">
                          {project.partners.join(", ")}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <button 
                        onClick={() => setCurrentProject(project)}
                        className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        View Project Details
                      </button>
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-3 bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          View on GitHub
                        </a>
                      )}
                      {project.osf && (
                        <a 
                          href={project.osf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          DECODE (official) website
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className="relative py-32 px-6 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-12 shadow-2xl border border-blue-200">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium mb-4">
              <Users className="w-4 h-4 mr-2" />
              Research Collaboration
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Interested in Our Research?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Explore opportunities for collaboration, funding partnerships, or academic exchange in AI and data science research.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:g.cosma@lboro.ac.uk"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[200px]"
            >
              <Mail className="w-5 h-5" />
              Contact for Collaboration
            </a>
            <button 
              onClick={() => setCurrentPage('topics')}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[200px]"
            >
              <Eye className="w-5 h-5" />
              Explore Research Areas
            </button>
            <a 
              href="https://github.com/gcosma"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[200px]"
            >
              <Github className="w-5 h-5" />
              Research Code
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
);



  // New Research Themes Page
  const ResearchThemesPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-24">
      {/* Hero Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm border border-blue-200 rounded-full text-sm font-medium mb-8 shadow-lg">
            <Brain className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-blue-700">Neural Information Processing, Retrieval & Modelling Research Group</span>
          </div>

          <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Advanced NLP Research
            </span>
            <br />
            <span className="text-gray-900 text-4xl lg:text-5xl">Four Core Research Areas</span>
          </h1>
          <p className="text-xl text-gray-600 mb-16 max-w-5xl mx-auto leading-relaxed">
            Advancing the frontiers of artificial intelligence through Cross-Modal Information Retrieval, 
            Agentic NLP Systems, Healthcare AI & Temporal Modelling, and Responsible AI Innovation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center max-w-6xl mx-auto">
            <button 
              onClick={() => scrollToSection('information-retrieval-section')}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-6 py-4 rounded-xl font-semibold transition-all text-white flex items-center gap-2 text-sm lg:text-base shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[180px]"
            >
              <Eye className="w-5 h-5" />
              Information Retrieval
            </button>
            <button 
              onClick={() => scrollToSection('nlp-agentic-section')}
              className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 px-6 py-4 rounded-xl font-semibold transition-all text-white flex items-center gap-2 text-sm lg:text-base shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[180px]"
            >
              <Brain className="w-5 h-5" />
              Agentic NLP
            </button>
            <button 
              onClick={() => scrollToSection('healthcare-ai-section')}
              className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 px-6 py-4 rounded-xl font-semibold transition-all text-white flex items-center gap-2 text-sm lg:text-base shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[180px]"
            >
              <Heart className="w-5 h-5" />
              Healthcare AI
            </button>
            <button 
              onClick={() => scrollToSection('responsible-innovation-section')}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-6 py-4 rounded-xl font-semibold transition-all text-white flex items-center gap-2 text-sm lg:text-base shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[180px]"
            >
              <Shield className="w-5 h-5" />
              Responsible AI
            </button>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="relative py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {researchThemes.map((theme, index) => {
              const IconComponent = theme.icon;
              const isExpanded = activeTheme === theme.id;
              
              return (
                <div key={theme.id}  id={`${theme.id}-section`} className="bg-white backdrop-blur-sm border border-gray-200 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[200px]">
                  <div 
                    className="p-8 cursor-pointer hover:bg-gray-50 transition-all duration-300"
                    onClick={() => setActiveTheme(isExpanded ? null : theme.id)}
                  >
                    <div className="flex items-start gap-8">
                      <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${theme.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <IconComponent className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <h3 className="text-3xl font-bold text-gray-900">{theme.title}</h3>
                          <ChevronRight className={`w-6 h-6 text-gray-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">{theme.description}</p>
                        
                        {/* Keywords and Applications */}
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-2">🔑 Key Technologies:</h5>
                            <div className="flex flex-wrap gap-2">
                              {theme.keywords.map((keyword, i) => (
                                <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                  {keyword}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-2">🎯 Applications:</h5>
                            <div className="flex flex-wrap gap-2">
                              {theme.applications.map((app, i) => (
                                <span key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                  {app}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-6">
                          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200 shadow-sm">
                            <h4 className="text-lg font-bold text-blue-700 mb-3">What is {theme.title}?</h4>
                            <p className="text-gray-700 leading-relaxed">{theme.whatIsIt}</p>
                          </div>
                        

                          {/* Machine Unlearning container - only for cross-modal theme */}
                          {theme.id === 'information-retrieval' && (
                            <div className="space-y-6">
      
                              
                              {/* Cross-Modal Information Retrieval subsection */}
                              <div className="bg-cyan-50 rounded-2xl p-6 border-l-4 border-cyan-500 border border-cyan-200 shadow-sm">
                                <h4 className="text-lg font-bold text-cyan-700 mb-3 flex items-center gap-2">
                                  <Eye className="w-5 h-5" />
                                  Cross-Modal Information Retrieval
                                </h4>
                                <p className="text-gray-700 leading-relaxed">
                                  Cross-modal information retrieval bridges the semantic gap between different data modalities by learning joint representations where semantically similar content from different formats such as images, text, and video are positioned close together in a shared embedding space. Our research focuses on developing sophisticated neural architectures that enable seamless understanding and retrieval across visual and textual content.
                                </p>
                              </div>

                              {/* Machine Unlearning subsection */}
                              <div className="bg-orange-50 rounded-2xl p-6 border-l-4 border-orange-500 border border-orange-200 shadow-sm">
                                <h4 className="text-lg font-bold text-orange-700 mb-3 flex items-center gap-2">
                                  <Trash2 className="w-5 h-5" />
                                  Machine Unlearning in Information Retrieval Systems
                                </h4>
                                <p className="text-gray-700 leading-relaxed">
                                  Our research addresses the critical challenge of selective data removal from trained information retrieval models. When users request data deletion under GDPR regulations, traditional retraining is computationally prohibitive for large-scale retrieval systems. We develop novel unlearning techniques that can selectively remove text, images and specific image-text pairs from trained embeddings whilst preserving overall model performance and cross-modal alignment quality. This work is essential for ensuring compliance with privacy regulations while maintaining the effectiveness of sophisticated retrieval architectures.
                                </p>
                              </div>

                              {/* RAG subsection */}
                              <div className="bg-teal-50 rounded-2xl p-6 border-l-4 border-teal-500 border border-teal-200 shadow-sm">
                                <h4 className="text-lg font-bold text-teal-700 mb-3 flex items-center gap-2">
                                  <Search className="w-5 h-5" />
                                  Retrieval-Augmented Generation (RAG)
                                </h4>
                                <p className="text-gray-700 leading-relaxed">
                                  Our research in Retrieval-Augmented Generation focuses on developing systems that enhance large language model capabilities by dynamically retrieving relevant information from external knowledge bases. We work on improving retrieval accuracy, developing efficient indexing strategies for multimodal content, and creating robust architectures that seamlessly integrate retrieval with generation processes. This includes research into dense passage retrieval, cross-modal knowledge fusion, and adaptive retrieval strategies that can handle diverse query types and knowledge domains.
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="border-t border-gray-200 p-8 bg-gray-50">
                      <div className="text-center">
                        <p className="text-gray-600 text-lg mb-6">
                          For detailed publications and technical specifications, please visit our{' '}
                          <a 
                            href="https://scholar.google.co.uk/citations?hl=en&user=OpHkDDIAAAAJ&view_op=list_works&sortby=pubdate"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 font-semibold underline"
                          >
                            Google Scholar profile
                          </a>{' '}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-12 shadow-2xl border border-blue-200">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium mb-4">
                <Users className="w-4 h-4 mr-2" />
                Let's Collaborate
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Research Collaboration Opportunities</h2>
              <p className="text-xl text-gray-600 mb-8">
                Interested in cross-modal information retrieval, agentic NLP systems, healthcare AI & temporal modelling, or responsible AI innovation?
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:g.cosma@lboro.ac.uk"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[200px]"
              >
                <Mail className="w-5 h-5" />
                Contact for Collaboration
              </a>
              <a 
                href="https://scholar.google.co.uk/citations?hl=en&user=OpHkDDIAAAAJ&view_op=list_works&sortby=pubdate"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[200px]"
              >
                <BookOpen className="w-5 h-5" />
                Full Publication List
              </a>
              <a 
                href="https://github.com/gcosma"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[200px]"
              >
                <Github className="w-5 h-5" />
                Research Code
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );


  const ProjectPageTemplate = ({ project }) => {
    const IconComponent = project.icon;
    
    // I-SIRCh project publications timeline data
    const isirchPublications = project.pageId === 'isirch' ? [
      {
        year: "2025",
        type: "Project Establishment",
        title: "LENS.ai - Learning from Evidence through Natural language Systems",
        venue: "Software Development Project Launch",
        description: "Continuation of I-SIRCh research, extending AI capabilities from HSIB maternity investigation reports to coroners' reports and other healthcare documents, focusing on using artificial intelligence to improve the investigation of factors contributing to adverse maternity incidents involving mothers across ethnic groups",
        location: "Project Establishment",
        color: "amber"
      },
      {
        year: "2025",
        type: "Conference Presentation",
        title: "What do Prevention of Future Death Reports tell us about maternity care in UK hospitals?",
        venue: "HealTAC 2025",
        authors: "Georgina Cosma, Patrick Waterson, Thomas Jun and Jonathan Back",
        location: "Conference Presentation",
        color: "emerald"
      },
      {
        year: "2025",
        type: "Policy Conference Talk",
        title: "On the role of digital transformation in improving the safety of maternity care, including next steps for the use of AI tools in improving safety outcomes",
        venue: "Westminster Health Forum policy conference: Priorities for improving maternity services in England",
        description: "Panel member on 'Priorities for improving maternal and neonatal safety, and next steps for tackling disparities in care'. Chaired half the conference.",
        date: "28th January 2025",
        location: "Westminster, London",
        color: "purple"
      },
      {
        year: "2024",
        type: "Conference Talk",
        title: "Data Science and AI Solutions for Healthcare",
        venue: "NortHFutures Digital Health Symposium",
        date: "8th November 2024",
        color: "blue"
      },
      {
        year: "2024",
        type: "Journal Article",
        title: "I-SIRch: AI-powered concept annotation tool for equitable extraction and analysis of safety insights from maternity investigations",
        authors: "Singh, MK, Cosma, G, Waterson, P, Back, J, Jun, GT",
        venue: "International Journal of Population Data Science",
        volume: "9(2)",
        doi: "10.23889/ijpds.v9i2.2439",
        year_published: "2024",
        color: "indigo"
      },
      {
        year: "2024",
        type: "Conference Paper",
        title: "Intelligent Multi-document Summarisation for Extracting Insights on Racial Inequalities from Maternity Incident Investigation Reports",
        authors: "Cosma, G., Singh, M.K., Waterson, P., Jun, G.T., Back, J.",
        venue: "Artificial Intelligence in Healthcare. AIiH 2024",
        series: "Lecture Notes in Computer Science, vol 14976",
        publisher: "Springer, Cham",
        doi: "10.1007/978-3-031-67285-9_23",
        editors: "Xie, X., Styles, I., Powathil, G., Ceccarelli, M. (eds)",
        color: "rose"
      },
      {
        year: "2024",
        type: "Conference Paper", 
        title: "Unveiling disparities in maternity care: a topic modelling approach to analysing maternity incident investigation reports",
        authors: "Cosma, G, Singh, MK, Waterson, P, Jun, GT, Back, J",
        venue: "Artificial Intelligence in Healthcare. First International Conference, AIiH 2024",
        location: "Swansea, UK, September 4–6, 2024",
        pages: "pp.295-308",
        isbn: "9783031672774",
        doi: "10.1007/978-3-031-67278-1_23",
        editors: "Xie, X, Styles, I, Powathil, G, Ceccarelli, M (ed)",
        publisher: "Springer",
        color: "cyan"
      }
    ] : [];

  const decodePublications = project.pageId === 'decode' ? [
    {
      year: "2025",
      type: "Journal Article", 
      title: "Comorbidity Patterns and Temporal Associations of Multiple Long-Term Conditions in Adults with Intellectual Disability: an observational study in the United Kingdom",
      authors: "Cosma, G, Abakasanga, E, Kousovista, R, Shabnam, S, Kaur, N, Akbari, A, Kiani, R, Zaccardi, F, Jun, GT, Gangadharan, S",
      venue: "Accepted to Appear",
      status: "Accepted for Publication",
      color: "purple"
    },
    {
      year: "2025", 
      type: "Journal Article",
      title: "Temporal patterns of multiple long-term conditions in individuals with intellectual disability living in Wales: an unsupervised clustering approach to disease trajectories",
      authors: "Kousovista, R, Cosma, G, Abakasanga, E, Akbari, A, Zaccardi, F, Jun, GT, Kiani, R, Gangadharan, S",
      venue: "Frontiers in Digital Health",
      volume: "Volume 7",
      year_published: "2025",
      url: "https://www.frontiersin.org/journals/digital-health/articles/10.3389/fdgth.2025.1528882",
      doi: "10.3389/fdgth.2025.1528882",
      issn: "2673-253X",
      color: "blue"
    },
    {
      year: "2025",
      type: "Journal Article",
      title: "Nature and prevalence of long-term conditions in people with intellectual disability: retrospective longitudinal population-based study",
      authors: "Lewin, G, Kousovista, R, Abakasanga, E, Shivamurthy, R, Cosma, G, Jun, G, Kaur, N, Akbari, A, Gangadharan, S",
      venue: "BMJ Open",
      volume: "15(1)",
      pages: "e090857-e090857",
      issn: "2044-6055",
      doi: "10.1136/bmjopen-2024-090857",
      color: "emerald"
    },
    {
      year: "2025",
      type: "Journal Article",
      title: "Equitable hospital length of stay prediction for patients with learning disabilities and multiple long-term conditions using machine learning",
      authors: "Abakasanga, E, Kousovista, R, Cosma, G, Akbari, A, Zaccardi, F, Kaur, N, Fitt, D, Jun, GT, Kiani, R, Gangadharan, S",
      venue: "Frontiers in Digital Health",
      volume: "7",
      pages: "1538793",
      date: "February 14, 2025",
      doi: "10.3389/fdgth.2025.1538793",
      pmid: "40026843",
      pmcid: "PMC11868268",
      color: "amber"
    },
    {
      year: "2024",
      type: "Conference Paper",
      title: "Cluster and trajectory analysis of multiple long-term conditions in adults with learning disabilities",
      authors: "Abakasanga, E, Kousovista, R, Cosma, G, Jun, GT, Kiani, R, Gangadharan, S",
      venue: "AIiH: International Conference on AI in Healthcare",
      editors: "Xie, X, Styles, I, Powathil, G, Ceccarelli, M (ed)",
      location: "Swansea, United Kingdom",
      isbn: "9783031672842",
      doi: "10.1007/978-3-031-67285-9_1",
      color: "rose"
    },
    {
      year: "2024",
      type: "Conference Paper",
      title: "Identifying clusters on multiple long-term conditions for adults with learning disabilities",
      authors: "Abakasanga, E, Kousovista, R, Cosma, G, Jun, GT, Kiani, R, Gangadharan, S",
      venue: "AIiH: International Conference on AI in Healthcare",
      editors: "Xie, X, Styles, I, Powathil, G, Ceccarelli, M (ed)",
      location: "Swansea, United Kingdom", 
      isbn: "9783031672774",
      doi: "10.1007/978-3-031-67278-1_4",
      color: "cyan"
    },
    {
      year: "2024",
      type: "Conference Abstract",
      title: "Nature and prevalence of long-term conditions in people with intellectual disability: a study that combines the powers of AI, big data and lived experience",
      authors: "Lewin, G, Kousovista, R, Abakasanga, E, Shivamurthy, R, Cosma, G",
      venue: "BJPsych Open",
      volume: "10(S1)",
      doi: "10.1192/bjo.2024.192",
      description: "[Abstract]",
      color: "indigo"
    }
  ] : [];




    const getPublicationColorClasses = (color) => {
      const colors = {
        emerald: { bg: "bg-emerald-500", badge: "bg-emerald-100 text-emerald-800", glow: "shadow-emerald-200" },
        blue: { bg: "bg-blue-500", badge: "bg-blue-100 text-blue-800", glow: "shadow-blue-200" },
        purple: { bg: "bg-purple-500", badge: "bg-purple-100 text-purple-800", glow: "shadow-purple-200" },
        rose: { bg: "bg-rose-500", badge: "bg-rose-100 text-rose-800", glow: "shadow-rose-200" },
        indigo: { bg: "bg-indigo-500", badge: "bg-indigo-100 text-indigo-800", glow: "shadow-indigo-200" },
        cyan: { bg: "bg-cyan-500", badge: "bg-cyan-100 text-cyan-800", glow: "shadow-cyan-200" },
        amber: { bg: "bg-amber-500", badge: "bg-amber-100 text-amber-800", glow: "shadow-amber-200" }
      };
      return colors[color] || colors.blue;
    };
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-24">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <button 
            onClick={() => setCurrentProject(null)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 font-medium"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Projects
          </button>

          <div className="bg-white rounded-3xl p-10 shadow-2xl mb-12">
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {project.status}
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {project.funding}
                  </span>
                </div>
                
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
                <h2 className="text-xl text-gray-600 mb-6 font-medium">{project.fullTitle}</h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">{project.detailedDescription}</p>
                
                {/* LENS Project Information for I-SIRCh page */}
                {project.pageId === 'isirch' && (
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 p-6 rounded-lg mb-8">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <h3 className="text-xl font-bold text-gray-900">LENS.ai - Learning from Evidence through Natural language Systems</h3>
                    </div>
                    <p className="text-gray-700 mb-3 font-medium">A continuation of I-SIRCh</p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      I-SIRCh tackled healthcare inequalities in maternity care by analysing maternity investigation reports provided by HSIB. LENS.ai extends this capability to analyse coroners' reports and can be further developed to analyse other healthcare reports, using sophisticated natural language processing to identify causal factors and systemic biases that contribute to disparities across ethnic groups.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Key System Capabilities:</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li><strong>Automated Data Collection:</strong> Web scraping of UK Judiciary PFD reports with metadata extraction</li>
                        <li><strong>Intelligent Document Clustering:</strong> Semantic similarity-based grouping and thematic organisation</li>
                        <li><strong>Advanced Topic Modelling:</strong> Multiple vectorisation methods (TF-IDF, BM25, weighted schemes) for pattern discovery</li>
                        <li><strong>Generative Summarisation:</strong> AI-powered cluster summaries and extractive text analysis</li>
                        <li><strong>Healthcare-Specific Annotation:</strong> ClinicalBERT for medical concept identification</li>
                        <li><strong>Multi-Framework Analysis:</strong> Theme identification across I-SIRCh, House of Commons, and custom frameworks</li>
                        <li><strong>Interactive Dashboards:</strong> Comprehensive visualisation with correlation analysis and temporal trends</li>
                      </ul>
                    </div>
                    <p className="text-gray-700 font-semibold">
                      <strong>My Role: Principal Investigator</strong>
                    </p>
                  </div>
                )}
                
                {/* ADD THIS THEMIS PUBLICATION CODE RIGHT HERE */}
                {project.pageId === 'themis' && (
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-400 p-6 rounded-lg mb-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-orange-600" />
                      Related Publication
                    </h4>
                    <p className="text-gray-700 mb-4">
                      Read our comprehensive research paper on ethical AI frameworks for local government applications.
                    </p>
                    <a 
                      href="https://link.springer.com/article/10.1007/s42001-023-00242-7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors"
                    >
                      View on Springer
                      <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">My Role: {project.role}</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
{/* I-SIRCh Image for I-SIRCh page */}
{project.pageId === 'isirch' && (
  <div className="relative mt-24">
    <img 
      src={isirchImage}
      alt="I-SIRCh AI System Interface"
      className="w-full h-80 object-cover rounded-3xl shadow-lg"
    />
  </div>
)}

{/* Themis Image for Themis page - matching I-SIRCh positioning */}
{project.pageId === 'themis' && (
  <div className="relative mt-24">
    <img 
      src={themisImage}
      alt="Themis.AI Ethical AI System"
      className="w-full h-80 object-cover rounded-3xl shadow-lg"
    />
    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
      <span className="text-sm font-semibold text-gray-700">{project.category}</span>
    </div>
    <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 rounded-lg mt-4">
      <p className="text-center text-base text-emerald-800 font-medium">We are seeking partnerships with government departments and public sector organisations for AI implementation.</p>
    </div>
  </div>
)}

{/* SVGC KTP Image for SVGC KTP page - matching I-SIRCh positioning */}
{project.pageId === 'svgc-ktp' && (
  <div className="relative mt-24">
    <img 
      src={svgcKtpImage}
      alt="SVGC KTP Document Deduplication System"
      className="w-full h-80 object-contain rounded-3xl shadow-lg"
    />
    <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 rounded-lg mt-4">
      <p className="text-center text-base text-emerald-800 font-medium">Seeking collaboration with organisations who are seeking solutions in document processing, modelling and retrieval.</p>
    </div>
  </div>
)}
                
                {project.hasVideo && project.hasMultipleVideos && project.youtubeIds ? (
                  <div className="space-y-4 mt-24">
                    {project.youtubeIds.map((videoId, index) => (
                      <div key={index} className="relative">
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                          <iframe
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title={`${project.title} Project Video ${index + 1}`}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                        {index === 0 && (
                          <p className="text-center text-sm text-gray-600 mt-3">Project overview and research findings</p>
                        )}
                      </div>
                    ))}
                    {/* ADD THIS FOR i-SIRCH */}
                {project.pageId === 'isirch' && (
                  <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 rounded-lg mt-4">
                    <p className="text-center text-base text-emerald-800 font-medium">If you are interested in exploring our software for extracting and analysing PfD reports, please get in touch.</p>
                  </div>
                )}
                  </div>
                ) : project.hasVideo && project.youtubeId ? (
                  <div className="relative mt-24">
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                      <iframe
                        src={`https://www.youtube.com/embed/${project.youtubeId}`}
                        title={`${project.title} Project Video`}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <p className="text-center text-sm text-gray-600 mt-3">Watch our software demo</p>
                    {project.pageId === 'decode' && (
                      <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 rounded-lg mt-4">
                        <p className="text-center text-base text-emerald-800 font-medium">If you are interested in exploring our trajectory analysis software for adults with intellectual disabilities, please get in touch.</p>
                      </div>
                    )}
                  </div>
) : (
                  // Default image layout for other projects (only DECODE will use this now)
                  project.pageId !== 'isirch' && project.pageId !== 'themis' && project.pageId !== 'svgc-ktp' && (
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-75 rounded-3xl`}></div>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="relative w-full h-80 object-cover rounded-3xl"
                      />
                      <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-sm font-semibold text-gray-700">{project.category}</span>
                      </div>
                      <div className="absolute top-6 right-6 bg-white p-4 rounded-2xl shadow-lg">
                        <IconComponent className="w-8 h-8 text-gray-700" />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Objectives</h3>
                <ul className="space-y-4">
                  {project.objectives.map((objective, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-4">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                      </div>
                      <p className="text-gray-700">{objective}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Expected Impact</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{project.impact}</p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Collaborating Partners</h3>
                <div className="grid grid-cols-2 gap-4">
                  {project.partners.map((partner, i) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-gray-700 font-medium">{partner}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

  
          
          {/* Publications Timeline  */}
          {((project.pageId === 'isirch' && isirchPublications.length > 0) || project.pageId === 'decode') && (
            <div className="bg-white rounded-3xl p-10 shadow-2xl">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-gray-900 mb-4">Publications & Presentations Timeline</h3>
                {project.pageId === 'decode' && (
                  <div>
                    <p className="text-xl text-gray-600 font-medium">Work Package 2: AI & Machine Learning Publications</p>
                    <div className="mb-6"></div>
                  </div>
                )}
              </div>
              <div className="relative">
                {/* Enhanced Timeline line with gradient */}
                <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-indigo-500 rounded-full shadow-lg"></div>
                
                {/* Floating timeline dots */}
                <div className="absolute left-6 top-0 bottom-0">
                  {(project.pageId === 'isirch' ? isirchPublications : decodePublications).map((_, index) => (
                    <div 
                      key={index} 
                      className="absolute w-8 h-8 bg-white rounded-full shadow-lg border-4 border-blue-300"
                      style={{ top: `${(index * 100) / ((project.pageId === 'isirch' ? isirchPublications : decodePublications).length - 1)}%` }}
                    ></div>
                  ))}
                </div>
          

                <div className="space-y-12 pl-4">
                  {(project.pageId === 'isirch' ? isirchPublications : decodePublications).map((pub, index) => {
                    const colorClasses = getPublicationColorClasses(pub.color);
                    
                    return (
                      <div key={index} className="relative flex items-start gap-12">
                        {/* Enhanced Timeline dot */}
                        <div className={`relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl ${colorClasses.bg} ${colorClasses.glow} transform hover:scale-110 transition-all duration-300 rotate-3 hover:rotate-0`}>
                          <BookOpen className="w-10 h-10 text-white" />
                          <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent rounded-2xl"></div>
                        </div>
                        
                        {/* Enhanced Content card */}
                        <div className="flex-1 group">
                          <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2">
                            {/* Card decoration */}
                            <div className={`absolute top-0 left-0 w-20 h-1 ${colorClasses.bg} rounded-full`}></div>
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                              <div className={`px-4 py-2 rounded-full text-sm font-semibold ${colorClasses.badge} shadow-sm`}>
                                <Calendar className="w-4 h-4 inline mr-2" />
                                {pub.year}
                              </div>
                              <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                                {pub.type}
                              </div>
                            </div>
                            
                            <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                              {pub.title}
                            </h4>
                            
                            {pub.authors && (
                              <p className="text-gray-600 text-lg mb-3 leading-relaxed">
                                <span className="font-medium">Authors:</span> {pub.authors}
                              </p>
                            )}
                            
                            <div className="mb-3">
                              <p className="text-gray-700 font-medium text-lg">{pub.venue}</p>
                              {pub.volume && <p className="text-gray-600 text-sm">Volume: {pub.volume}</p>}
                              {pub.series && <p className="text-gray-600 text-sm">{pub.series}</p>}
                              {pub.location && <p className="text-gray-600 text-sm">{pub.location}</p>}
                              {pub.publisher && <p className="text-gray-600 text-sm">Publisher: {pub.publisher}</p>}
                              {pub.editors && <p className="text-gray-600 text-sm">Editors: {pub.editors}</p>}
                            </div>
                            
                            {pub.description && (
                              <p className="text-gray-600 mb-3 leading-relaxed bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
                                {pub.description}
                              </p>
                            )}
                            
                            {pub.date && (
                              <p className="text-gray-500 text-sm mb-3 flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {pub.date}
                              </p>
                            )}
                            
                            <div className="flex flex-wrap gap-3 text-sm">
                              {pub.pages && (
                                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">
                                  Pages: {pub.pages}
                                </span>
                              )}
                              {pub.isbn && (
                                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-medium">
                                  ISBN: {pub.isbn}
                                </span>
                              )}
                              {pub.doi && (
                                <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full font-medium">
                                  DOI: <a 
                                    href={`https://doi.org/${pub.doi}`} 
                                    className="text-blue-600 hover:text-blue-800 hover:underline font-medium transition-colors" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    title={`View publication: ${pub.title}`}
                                  >
                                    {pub.doi}
                                  </a>
                                </span>
                              )}
                              {pub.year_published && pub.year_published !== pub.year && (
                                <span className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full font-medium">
                                  Published: {pub.year_published}
                                </span>
                              )}
                            </div>
                            
                            {/* Hover effect decoration */}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  
const ResearchGroupPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-24">
      {/* Hero Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm border border-blue-200 rounded-full text-sm font-medium mb-8 shadow-lg">
            <Users className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-blue-700">Neural Information Processing, Retrieval & Modelling Research Group</span>
          </div>

          <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Research Group
            </span>
            <br />
            <span className="text-gray-900 text-4xl lg:text-5xl">Researchers & PhD Students</span>
          </h1>

          <p className="text-xl text-gray-600 mb-16 max-w-5xl mx-auto leading-relaxed">
            Meet our talented researchers and PhD students working on cutting-edge AI and data science projects, 
            advancing the frontiers of neural information retrieval, computational intelligence, and responsible AI.
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="relative py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Current PhD Students */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">Current PhD Students</h2>
                <p className="text-gray-600 mt-1">  Advancing the frontiers of artificial intelligence through Information Retrieval systems, 
  Agentic NLP Systems, and Healthcare AI & Temporal Modelling.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {teamMembers.filter(member => member.type === 'phd' && member.status === 'current').map((member, i) => (
                <div key={i} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="w-10 h-10 text-white" />
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="absolute top-0 right-0 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{member.name}</h3>
                  <div className="bg-blue-50 rounded-xl p-3 mb-4">
                    <p className="text-blue-800 text-sm font-medium">{member.position}</p>
                  </div>
                  <p className="text-gray-700 font-medium mb-4 leading-relaxed">{member.specialisation}</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="text-gray-600 text-sm">Funded by: <span className="font-medium">{member.funder}</span></p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <p className="text-gray-600 text-sm">Started: <span className="font-medium">{member.startDate}</span></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Current Visiting Fellows */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">Current Visiting Fellows and Associates</h2>
                <p className="text-gray-600 mt-1">Current Researchers and Associates with ongoing affiliations at Loughborough University</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {teamMembers.filter(member => member.type === 'visiting_fellow' && member.status === 'current').map((member, i) => (
                <div key={i} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-emerald-200">
                  <div className="flex items-start gap-6">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Award className="w-10 h-10 text-white" />
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <div className="absolute top-0 right-0 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">{member.name}</h3>
                      <div className="bg-emerald-50 rounded-xl p-3 mb-3">
                        <p className="text-emerald-800 text-sm font-medium">{member.position}</p>
                      </div>
                      <p className="text-gray-700 font-medium mb-3 leading-relaxed">{member.specialisation}</p>
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-lg">
                        <p className="text-blue-700 text-sm font-medium">Previously: {member.previousRole}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Current Research Staff */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">Current Research Staff & Interns</h2>
                <p className="text-gray-600 mt-1">Assistant researchers and funded interns contributing to our AI research projects.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {teamMembers.filter(member => (member.type === 'research_staff' || member.type === 'intern') && member.status === 'current').map((member, i) => (
                <div key={i} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-green-200">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-10 h-10 text-white" />
                      <div className="absolute -inset-1 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="absolute top-0 right-0 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">{member.name}</h3>
                  <div className="bg-green-50 rounded-xl p-3 mb-4">
                    <p className="text-green-800 text-sm font-medium">{member.position}</p>
                  </div>
                  <p className="text-gray-700 font-medium mb-4 leading-relaxed">{member.specialisation}</p>
                  {member.funder && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <p className="text-gray-600 text-sm">Funded by: <span className="font-medium">{member.funder}</span></p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>


          {/* Research Alumni */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">Research Alumni</h2>
                <p className="text-gray-600 mt-1">Former research staff who have moved to prestigious academic positions</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {teamMembers.filter(member => member.type === 'research_alumni').map((member, i) => (
                <div key={i} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-purple-200">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-10 h-10 text-white" />
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">{member.name}</h3>
                      <div className="bg-purple-50 rounded-xl p-3 mb-3">
                        <p className="text-purple-800 text-sm font-medium">{member.position}</p>
                      </div>
                      <p className="text-gray-700 font-medium mb-3 leading-relaxed">{member.specialisation}</p>
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-lg">
                        <p className="text-blue-700 text-sm font-medium">{member.previousRole}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PhD Alumni */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">PhD Alumni</h2>
                <p className="text-gray-600 mt-1">Successful PhD graduates from our research program</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {teamMembers.filter(member => member.type === 'phd_alumni').map((member, i) => (
                <div key={i} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-indigo-200">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-10 h-10 text-white" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{member.name}</h3>
                  <div className="bg-indigo-50 rounded-xl p-3 mb-3">
                    <p className="text-indigo-800 text-sm font-medium">{member.position}</p>
                  </div>
                  <p className="text-gray-700 font-medium mb-4 leading-relaxed">{member.specialisation}</p>
                  <div className="space-y-2">
                    {member.funder && (
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <p className="text-gray-600 text-xs">Funded by: <span className="font-medium">{member.funder}</span></p>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <p className="text-gray-600 text-xs">
                        <span className="font-medium">{member.startDate} - {member.completionDate}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* MRes Alumni */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">MRes Alumni</h2>
                <p className="text-gray-600 mt-1">Master by Research graduates with specialized expertise</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {teamMembers.filter(member => member.type === 'mres_alumni').map((member, i) => (
                <div key={i} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-amber-200">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-10 h-10 text-white" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">{member.name}</h3>
                  <div className="bg-amber-50 rounded-xl p-3 mb-3">
                    <p className="text-amber-800 text-sm font-medium">{member.position}</p>
                  </div>
                  <p className="text-gray-700 font-medium mb-4 leading-relaxed">{member.specialisation}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <p className="text-gray-600 text-xs">Institution: <span className="font-medium">{member.institution}</span></p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <p className="text-gray-600 text-xs">Completed: <span className="font-medium">{member.completionDate}</span></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="mt-24">
            <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-12 text-white shadow-2xl overflow-hidden">
              {/* Background decorations */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                  <Users className="w-4 h-4 mr-2" />
                  Join Our Research Group
                </div>
                <h2 className="text-4xl font-bold mb-6">Interested in Joining Our Team?</h2>
                <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  We welcome researchers interested in neural information retrieval, computational intelligence, 
                  healthcare AI, and responsible AI development.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:g.cosma@lboro.ac.uk" 
                className="group bg-white text-blue-600 hover:bg-blue-50 px-10 py-5 rounded-2xl font-bold transition-all duration-300 inline-flex items-center gap-4 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Contact for PhD Opportunities
              </a>
              <button 
                onClick={() => setCurrentPage('projects')}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-10 py-5 rounded-2xl font-bold transition-all duration-300 inline-flex items-center gap-4 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <ExternalLink className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Explore Our Research
              </button>
            </div>
            <p className="text-center text-blue-100 text-sm mt-4 italic">
              Note: No funded PhD positions are currently available
            </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );

  const OutreachPage = () => {
    const timelineEvents = [
      {
        date: "December 5, 2025",
        title: "AI, Data, and Creative Practices for Solidaristic Healthcare",
        type: "Workshop",
        description: "AI, Data Modelling, and Ethics",
        status: "completed",
        icon: Shield,
        color: "red"
      },
      {
        date: "July 29, 2025",
        title: "Preserving and Accessing: Secure AI Solutions for Sensitive Information Systems",
        type: "Workshop",
        description: "LUSTRE GLOW Workshop: Government Records and AI",
        status: "completed",
        icon: Shield,
        color: "red"
      },
      {
        date: "July 23, 2025", 
        title: "Pack to the Future 2025",
        type: "Conference Talk",
        description: "Professor Georgina Cosma and Dr Nikki Clarke, Loughborough University - AI: The Future: Research and Innovation at Loughborough University. Midlands Packaging Society event.",
        status: "completed",
        icon: Presentation,
        color: "violet"
      },      
      {
        date: "June 2025",
        title: "HealTac Conference Poster Presentation",
        type: "Conference Presentation",
        description: "Presented research poster at the HealTac conference, What do Prevention of Future Death Reports tell us about maternity care in UK hospitals?",
        status: "completed",
        icon: Award,
        color: "emerald"
      },
      {
        date: "February 6, 2025",
        title: "AI Opportunities Action Plan – lessons and opportunities for the public sector",
        type: "Talk",
        description: "Delivered talk on AI opportunities and lessons for public sector implementation.",
        status: "completed",
        icon: Presentation,
        color: "blue"
      },
      {
        date: "January 28, 2025",
        title: "Westminster Health Forum: Priorities for improving maternity services in England",
        type: "Panel Discussion",
        description: "Panel member discussing priorities for improving maternal and neonatal safety, and next steps for tackling disparities in care. Chaired half the conference on digital transformation role in maternity care safety.",
        status: "completed",
        icon: Users,
        color: "purple"
      },
      {
        date: "November 8, 2024",
        title: "NortHFutures Digital Health Symposium",
        type: "Talk",
        description: "Presented 'Data Science and AI Solutions for Healthcare' at the digital health symposium.",
        status: "completed",
        icon: Heart,
        color: "rose"
      },
      {
        date: "October 2023",
        title: "Ethics and Governance in AI Course",
        type: "Course Delivery",
        description: "Delivered 12-hour course on Ethics and Governance in AI via the Royal Statistical Society.",
        status: "completed",
        icon: BookOpen,
        color: "indigo"
      },
      {
        date: "October 2023",
        title: "AI Ethics Training for CDT PhD Students",
        type: "Training",
        description: "Delivered AI ethics awareness training for PhD students of CDT centres.",
        status: "completed",
        icon: GraduationCap,
        color: "amber"
      },
      {
        date: "March 2023",
        title: "Ethical AI Webinar for NHS Knowledge Specialists",
        type: "Webinar",
        description: "Conducted webinar about ethical AI specifically for NHS Knowledge and Library specialists.",
        status: "completed",
        icon: Monitor,
        color: "cyan"
      },
      {
        date: "2023",
        title: "County Council Ethics and Governance Course",
        type: "Short Course",
        description: "Delivered short course on Ethics and Governance in AI to county councils.",
        status: "completed",
        icon: Code,
        color: "violet"
      },
      {
        date: "2023",
        title: "PPI Group Training Sessions",
        type: "Training",
        description: "Delivered 4 short courses on machine learning, AI and ethical AI to I-SIRCh and DECODE project Patient and Public Involvement (PPI) groups.",
        status: "completed",
        icon: Users,
        color: "teal"
      },
      {
        date: "January 25, 2023",
        title: "C-Dice AI Ethics Training",
        type: "Training",
        description: "Delivered AI ethics awareness training for C-Dice Postgraduate Researchers and PhD students.",
        status: "completed",
        icon: Brain,
        color: "orange"
      },
      {
        date: "October 2022",
        title: "Royal Statistical Society AI Course",
        type: "Course Delivery",
        description: "Delivered 20-hour courses on Ethics and Governance in AI via the Royal Statistical Society.",
        status: "completed",
        icon: BookOpen,
        color: "pink"
      },
      {
        date: "2022",
        title: "County Council Data Processing Training",
        type: "Consultancy Training",
        description: "Delivered training to County Council employees on pre-processing large data towards ethical machine learning.",
        status: "completed",
        icon: Target,
        color: "lime"
      }
    ];

    const getColorClasses = (color) => {
      const colors = {
        emerald: { bg: "bg-emerald-500", badge: "bg-emerald-100 text-emerald-800", glow: "shadow-emerald-200" },
        blue: { bg: "bg-blue-500", badge: "bg-blue-100 text-blue-800", glow: "shadow-blue-200" },
        purple: { bg: "bg-purple-500", badge: "bg-purple-100 text-purple-800", glow: "shadow-purple-200" },
        rose: { bg: "bg-rose-500", badge: "bg-rose-100 text-rose-800", glow: "shadow-rose-200" },
        indigo: { bg: "bg-indigo-500", badge: "bg-indigo-100 text-indigo-800", glow: "shadow-indigo-200" },
        amber: { bg: "bg-amber-500", badge: "bg-amber-100 text-amber-800", glow: "shadow-amber-200" },
        cyan: { bg: "bg-cyan-500", badge: "bg-cyan-100 text-cyan-800", glow: "shadow-cyan-200" },
        violet: { bg: "bg-violet-500", badge: "bg-violet-100 text-violet-800", glow: "shadow-violet-200" },
        teal: { bg: "bg-teal-500", badge: "bg-teal-100 text-teal-800", glow: "shadow-teal-200" },
        orange: { bg: "bg-orange-500", badge: "bg-orange-100 text-orange-800", glow: "shadow-orange-200" },
        pink: { bg: "bg-pink-500", badge: "bg-pink-100 text-pink-800", glow: "shadow-pink-200" },
        lime: { bg: "bg-lime-500", badge: "bg-lime-100 text-lime-800", glow: "shadow-lime-200" }
      };
      return colors[color] || colors.blue;
    };

  const CollapsibleConsultancyBox = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <section className="mb-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Header - Always Visible - REDUCED PADDING */}
            <div 
              className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-300"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Consultancy & Advisory Services</h2>
                    <p className="text-gray-500 text-sm">Click to learn more about my consultancy offerings</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 hidden sm:block">
                    {isExpanded ? 'Show less' : 'Show more'}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-6 h-6 text-gray-400 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 transition-transform duration-300" />
                  )}
                </div>
              </div>
            </div>

            {/* Expandable Content - REDUCED PADDING */}
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="px-6 pb-6 border-t border-gray-100 bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="pt-4">
                  <p className="text-base text-gray-700 leading-relaxed mb-4">
                    In addition to my research and teaching, I provide consultancy and advisory services to organisations 
                    seeking expertise in AI and data science. I offer guidance across the full AI/ML development lifecycle 
                    - from problem definition and designing solutions, through data preparation and collection, to model training, validation, deployment, and monitoring.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href="mailto:g.cosma@lboro.ac.uk"
                      className="group bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-semibold transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      Discuss Your Requirements
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };   



    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-24">
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-blue-600 mb-8 shadow-lg border border-blue-100">
              <Globe className="w-4 h-4 mr-2" />
              Professional Outreach & Education
            </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Outreach & Course Delivery
            </span>
          </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Sharing research and knowledge through conferences, workshops, training sessions, and community engagement activities.
            </p>
          </div>

        <CollapsibleConsultancyBox />

          {/* Timeline Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Activities Timeline</h2>
            <div className="relative">
              {/* Enhanced Timeline line with gradient */}
              <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"></div>
              
              {/* Floating timeline dots */}
              <div className="absolute left-6 top-0 bottom-0">
                {timelineEvents.map((_, index) => (
                  <div 
                    key={index} 
                    className="absolute w-8 h-8 bg-white rounded-full shadow-lg border-4 border-blue-300"
                    style={{ top: `${(index * 100) / (timelineEvents.length - 1)}%` }}
                  ></div>
                ))}
              </div>
              
              <div className="space-y-12 pl-4">
                {timelineEvents.map((event, index) => {
                  const IconComponent = event.icon;
                  const colorClasses = getColorClasses(event.color);
                  
                  return (
                    <div key={index} className="relative flex items-start gap-12">
                      {/* Enhanced Timeline dot */}
                      <div className={`relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl ${colorClasses.bg} ${colorClasses.glow} transform hover:scale-110 transition-all duration-300 rotate-3 hover:rotate-0`}>
                        <IconComponent className="w-10 h-10 text-white" />
                        <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent rounded-2xl"></div>
                      </div>
                      
                      {/* Enhanced Content card */}
                      <div className="flex-1 group">
                        <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2">
                          {/* Card decoration */}
                          <div className={`absolute top-0 left-0 w-20 h-1 ${colorClasses.bg} rounded-full`}></div>
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          
                          <div className="flex flex-wrap items-center gap-3 mb-6">
                            <div className={`px-4 py-2 rounded-full text-sm font-semibold ${colorClasses.badge} shadow-sm`}>
                              <Calendar className="w-4 h-4 inline mr-2" />
                              {event.date}
                            </div>
                            <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                              {event.type}
                            </div>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-lg">
                            {event.description}
                          </p>
                          
                          {/* Hover effect decoration */}
                          <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Enhanced Contact Section */}
          <section className="text-center">
            <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-12 text-white shadow-2xl overflow-hidden">
              {/* Background decorations */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-white/5 to-transparent rounded-full"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                  <Mail className="w-4 h-4 mr-2" />
                  Professional Collaboration
                </div>
                <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
                <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  For information about outreach opportunities, conference presentations, course delivery, or ethical AI training, please contact me.
                </p>
                <a 
                  href="mailto:g.cosma@lboro.ac.uk" 
                  className="group bg-white text-blue-600 hover:bg-blue-50 px-10 py-5 rounded-2xl font-bold transition-all duration-300 inline-flex items-center gap-4 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  Contact Me
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };

  const ContactPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-24">
    <div className="max-w-4xl mx-auto px-6 py-20">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-blue-600 mb-8 shadow-lg border border-blue-100">
          <Mail className="w-4 h-4 mr-2" />
          Get in Touch
        </div>
     <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Contact Details
            </span>
          </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          I welcome collaborations, research discussions, and opportunities to share knowledge about AI, data science, and ethical technology development.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Email Card */}
        <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Email</h3>
          <p className="text-gray-600 mb-4">
            For research collaborations, consultancy inquiries, or general questions.
          </p>
          <a 
            href="mailto:g.cosma@lboro.ac.uk"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            g.cosma@lboro.ac.uk
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Office Location Card */}
        <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Office Location</h3>
          <p className="text-gray-600 mb-4">
            School of Science<br />
            Loughborough University<br />
            Leicestershire, LE11 3TU<br />
            United Kingdom
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-white rounded-3xl p-8 shadow-xl mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Connect with Me</h3>
        <div className="flex justify-center gap-6">
          <a 
            href="https://x.com/gcosma1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <svg className="w-8 h-8 text-gray-700 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a 
            href="https://github.com/gcosma" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <Github className="w-8 h-8 text-gray-700 group-hover:text-blue-600 transition-colors" />
          </a>
          <a 
            href="https://www.linkedin.com/in/georginacosma/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-8 h-8 text-gray-700 group-hover:text-blue-600 transition-colors" />
          </a>
          <a 
            href="https://scholar.google.co.uk/citations?hl=en&user=OpHkDDIAAAAJ&view_op=list_works&sortby=pubdate" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <BookOpen className="w-8 h-8 text-gray-700 group-hover:text-blue-600 transition-colors" />
          </a>
        </div>
      </div>
      

      {/* Collaboration CTA */}
      <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-12 text-white shadow-2xl overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
        
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Collaborate</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Interested in ethical AI research, healthcare technology, or academic partnerships? I'd love to hear from you.
          </p>
          <a 
            href="mailto:g.cosma@lboro.ac.uk" 
            className="group bg-white text-blue-600 hover:bg-blue-50 px-10 py-5 rounded-2xl font-bold transition-all duration-300 inline-flex items-center gap-4 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            Send Me an Email
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

  const Footer = () => (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">GC</span>
              </div>
              <div>
                <h3 className="font-bold">Prof. Georgina Cosma</h3>
                <p className="text-gray-400 text-xs">Loughborough University</p>
              </div>
            </div>
            <div className="flex gap-3">
              <a href="https://x.com/gcosma1" target="_blank" rel="noopener noreferrer" 
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://github.com/gcosma" target="_blank" rel="noopener noreferrer" 
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/georginacosma/" target="_blank" rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://scholar.google.co.uk/citations?hl=en&user=OpHkDDIAAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                <BookOpen className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['home', 'projects', 'group', 'grants', 'topics', 'outreach', 'contact'].map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    setCurrentProject(null);
                    window.scrollTo(0, 0);
                  }}
                  className="text-gray-400 hover:text-white transition-colors capitalize text-sm text-left"
                >
                  {page === 'group' ? 'Research Group' : page === 'outreach' ? 'Outreach' : page}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <div className="space-y-2">
              <a href="mailto:g.cosma@lboro.ac.uk" 
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                <Mail className="w-3 h-3" />
                g.cosma@lboro.ac.uk
              </a>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-3 h-3 mt-1 flex-shrink-0" />
                <div className="text-xs leading-relaxed">
                  School of Science, Loughborough University<br />
                  Leicestershire, LE11 3TU, UK
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-6 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-gray-500 text-xs">
              © 2025 Professor Georgina Cosma. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              AI & Data Science • Loughborough University
            </p>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="font-sans antialiased text-gray-900">
      <Navigation />
      
      {currentProject ? (
        <ProjectPageTemplate project={currentProject} />
      ) : (
        <>
          {currentPage === 'home' && <HomePage />}
          {currentPage === 'projects' && <ProjectsPage />}
          {currentPage === 'topics' && <ResearchThemesPage />}
          {currentPage === 'group' && <ResearchGroupPage />}
          {currentPage === 'grants' && <GrantCapturePage />}
          {currentPage === 'outreach' && <OutreachPage />}
          {currentPage === 'contact' && <ContactPage />}
        </>
      )}
      <Footer />
    </div>
  );
}
