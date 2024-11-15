import React from 'react';
import { Github, Mail, Twitter, Linkedin } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';

const Portfolio = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Frontdoor Inc.",
      companyUrl: "https://www.frontdoorhome.com/",
      period: "2021 - Present",
      highlights: [
        "Led development of Cancel/Transfer system, implementing data collection workflows that reduced service request transfers by 25% and improved vendor retention",
        "Migrated vendor assignment system from PL/SQL to Golang, achieving 3x faster processing and enhancing scalability to handle 100K+ monthly requests",
        "Led a team of 3 backend developers in implementing Vendor Tier system, resulting in 15% improved customer satisfaction and 30% faster service request assignments",
        "Designed and documented technical architecture for vendor management systems, reducing cross-team dependencies by 50% and improving developer onboarding efficiency",
        "Demonstrated technical leadership by implementing 90% test coverage, coordinating with 6 cross-functional teams, and creating comprehensive documentation"
      ]
    },
    {
      title: "Mobile Application Developer (Contractor)",
      company: "Global Satellite Engineering",
      companyUrl: "https://gsat.us",
      period: "2021 - 2024",
      highlights: [
        "Built Android BLE configuration app from scratch using Java/Kotlin, enabling customers to manage device settings and firmware updates through an intuitive interface",
        "Implemented critical features including automatic cloud sync, bulk firmware updates, and remote device configuration, reducing customer setup time by 60%",
        "Migrated 80% of iOS codebase from Objective-C to Swift, improving app performance by 40% and reducing crash rates by 70%",
        "Customized Zulip messaging platform for internal communications with company-specific security protocols and workflow integrations",
        "Drove cross-platform development improvements, achieving 95% code sharing between Android and iOS platforms, 30% reduction in configuration setup time, and seamless integration with the web platform for real-time sync"
      ]
    },
    {
      title: "Google Summer of Code (GSoC) Developer",
      company: "MZmine Project, Google",
      companyUrl: "https://summerofcode.withgoogle.com/",
      period: "May 2020 - Aug 2020",
      highlights: [
        "Architected and implemented an Ion Mobility Spectrometry (IMS) data processing module in Java/JavaFX, enabling complex mass spectrometry data analysis for 1000+ scientists globally",
        "Developed a high-performance visualization system with real-time intensity and XIC plots, handling datasets up to 2GB and rendering 50% faster than previous implementations",
        "Modernized UI architecture by migrating from Swing to JavaFX, resulting in 3x faster data rendering and a 40% reduction in maintenance overhead",
        "Expanded platform compatibility by implementing Bruker data format support, increasing supported file formats by 30% and the user base by 25%"
      ]
    },
    {
      title: "Google Summer of Code Intern",
      company: "INCF, Google",
      companyUrl: "https://summerofcode.withgoogle.com/",
      period: "May 2019 - Aug 2019",
      highlights: [
        "Designed and implemented a WebGL-based connectivity matrix viewer, achieving 70% better performance for 100K+ node graphs compared to traditional renderers",
        "Built a responsive graph visualization system in JavaScript and WebGL, achieving sub-second rendering for matrices up to 1000x1000 nodes",
        "Optimized large dataset handling using custom WebGL shaders and efficient memory management, reducing load times by 60%",
        "Enhanced user experience with intuitive edge-editing features and interactive controls, increasing user engagement by 40%"
      ]
    },
    {
      title: "Open Source Contributor",
      company: "MLpack",
      period: "2019",
      highlights: [
        "Refactored machine learning algorithms and contributed to the build system",
        "Added callback support for the Softmax algorithm, enhancing model optimization capabilities"
      ]
    }
  ];

  const projects = [
    {
      title: "Spendulam, Expense Tracker",
      url: "https://play.google.com/store/apps/details?id=com.spendulam.budgettracker",
      highlights: [
        "Built full-stack Flutter expense tracking application supporting multi-currency transactions across multiple accounts.",
        "Implemented real-time financial analytics with interactive charts, processing years of transaction history with sub-second response time.",
        "Designed scalable architecture supporting: Multi-account management with automatic balance reconciliation, Custom budget tracking across 10+ expense categories, Real-time statistical analysis and reporting, Cross-platform deployment with 99.9% code sharing between iOS and Android."
      ]
    },
    {
      title: "Matching game",
      url: "https://github.com/knakul853/matching-game",
      highlights: [
        "3 game modes (easy, medium, hard) with 3 difficulty levels: from 4x2 up to 6x4 cards.",
        "Card packs with funny cats, food, fruits and vegetables, flags, shapes, letters, music, sport, attractions, and numbers.",
        "Simple and easy-to-master interface with track of your best score."
      ]
    }
  ];

  const awards = [
    {
      title: "Google Summer of Code 2020",
      organization: "Google",
      description: "Successfully completed two evaluations in Google's prestigious open-source program, delivering high-impact contributions to critical projects.",
      certificateUrl: "https://drive.google.com/file/d/1W2ThuQjc6hXmS4TYjpgnzrLV7H1yQvlg/view"
    },
    {
      title: "Google Summer of Code 2019",
      organization: "Google",
      description: "Successfully completed Google's globally recognized open-source program, demonstrating advanced programming capabilities and contributing to significant project growth.",
      certificateUrl: "https://drive.google.com/file/d/0B5G3Kjd_SJ36N2xVbE1XdE5JcU1GS3NHTVlQdUpYQ1JvSGdV/view"
    },
    {
      title: "Programming Excellence Award",
      organization: "Shri Mata Vaishno Devi University",
      description: "Received four consecutive awards recognizing exceptional programming skills and consistent academic excellence.",
      certificateUrl: "https://drive.google.com/file/d/1kfYz5ALpnAZfB5EAADlum5_ewimULvPl/view"
    }
  ];

  const skills = {
    "Backend": ["Golang", "Java", "Kafka", "Docker"],
    "Mobile": ["Android (Java/Kotlin)", "iOS (Swift)", "Flutter"],
    "Tools": ["Git", "Docker", "Splunk", "Elastic"]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Name and About */}
          <div className="md:col-span-1">
            <div className="space-y-6 sticky top-8">
              {/* Profile Picture - Add after About Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <Image 
                      src={process.env.NODE_ENV === 'production' ? '/portfolio/profile.png' : '/profile.png'}
                      alt="Nakul Bharti"
                      width={500}
                      height={500}
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
              {/* Name and Social Links */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Nakul Bharti</h1>
                <div className="mt-4 flex space-x-4">
                  <a 
                    href="https://github.com/knakul853" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:knakul853@gmail.com" 
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://twitter.com/knakul853" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/nakul-bharti-a7b783135/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* About */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">About</h2>
                  <p className="text-gray-600">
                    Experienced backend developer and mobile application engineer with a strong track record 
                    in building scalable systems and cross-platform mobile applications. Google Summer of 
                    Code alumnus with expertise in performance optimization and system architecture.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Experience and Skills */}
          <div className="md:col-span-2">
            {/* Experience Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Experience</h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{exp.title}</h3>
                          <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                            {exp.company}
                          </a>
                        </div>
                        <span className="text-gray-600">{exp.period}</span>
                      </div>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm">{highlight}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Projects Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Projects</h2>
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="mb-2">
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-lg text-blue-600 hover:text-blue-800">
                          {project.title}
                        </a>
                      </div>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm">{highlight}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Awards and Achievements Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Awards & Achievements</h2>
              <div className="space-y-6">
                {awards.map((award, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{award.title}</h3>
                          <p className="text-gray-600">{award.organization}</p>
                        </div>
                        <a 
                          href={award.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 text-sm"
                        >
                          View Certificate
                        </a>
                      </div>
                      <p className="text-gray-600 text-sm">{award.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Skills</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(skills).map(([category, items]) => (
                  <Card key={category}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">{category}</h3>
                      <ul className="space-y-2">
                        {items.map((item, idx) => (
                          <li key={idx} className="text-gray-600">• {item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;