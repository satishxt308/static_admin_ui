import React, { useState, useEffect } from "react";
import { Link, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { 
  FaCreditCard, 
  FaLeaf, 
  FaSeedling, 
  FaHandsHelping, 
  FaProjectDiagram,
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaBars, 
  FaTimes,
  FaCheck,
  FaArrowRight,
  FaUserFriends,
  FaShieldAlt,
  FaGift,
  FaTractor,
  FaCertificate,
  FaChartLine,
  FaUsers,
  FaClipboardList,
  FaRegClock
} from "react-icons/fa";

// ============ SUPPORTING PAGES COMPONENTS ============

const SDCardPage = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-24 px-4 sm:px-6 py-12">
    <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-violet-500/30 shadow-2xl">
      <h1 className="text-3xl sm:text-4xl font-bold text-violet-400 mb-8 text-center">
        <FaCreditCard className="inline mr-3 mb-1" />
        PSWB S-D Card Benefits
      </h1>
      
      <div className="space-y-8">
        <section className="bg-gradient-to-r from-violet-500/10 to-purple-600/10 border border-violet-500/30 rounded-xl p-6 mb-6">
          <p className="text-violet-300 font-semibold text-center text-lg">
            Exclusive Benefits for S-D Card Holders
          </p>
        </section>

        <section className="bg-gray-900/50 p-6 rounded-xl border-l-4 border-violet-500">
          <h3 className="text-xl font-semibold text-violet-300 mb-4">10 Exclusive Benefits</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: "🌱", title: "Organic Farming Support", desc: "Access to organic farming resources and guidance" },
              { icon: "💰", title: "Scheme Access", desc: "Direct assistance with agricultural schemes" },
              { icon: "🎁", title: "Special Discounts", desc: "Discounts on organic inputs and equipment" },
              { icon: "📊", title: "Market Linkages", desc: "Direct market access for organic produce" },
              { icon: "🏆", title: "Priority Projects", desc: "First access to new agricultural projects" },
              { icon: "🛡️", title: "Crop Insurance", desc: "Special crop insurance packages" },
              { icon: "🚜", title: "Equipment Sharing", desc: "Access to shared farming equipment" },
              { icon: "🎓", title: "Training Programs", desc: "Free agricultural training sessions" },
              { icon: "🤝", title: "Community Network", desc: "Access to farmers' community network" },
              { icon: "📈", title: "Growth Support", desc: "Business development assistance" },
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-violet-500/50 transition-all duration-300">
                <div className="text-2xl mb-2">{benefit.icon}</div>
                <h4 className="font-semibold text-gray-200">{benefit.title}</h4>
                <p className="text-sm text-gray-400 mt-1">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-900/50 p-6 rounded-xl border-l-4 border-purple-500">
          <h3 className="text-xl font-semibold text-purple-300 mb-4">How to Get Your S-D Card</h3>
          <ol className="list-decimal list-inside space-y-3 text-gray-300 pl-4">
            <li className="mb-3">Visit our nearest office or authorized center</li>
            <li className="mb-3">Submit required documents (Aadhar, Land documents)</li>
            <li className="mb-3">Complete the application form</li>
            <li className="mb-3">Attend orientation session</li>
            <li>Receive your S-D Card within 7 working days</li>
          </ol>
        </section>

        <div className="text-center pt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
          >
            <FaArrowRight />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const AboutUsPage = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-24 px-4 sm:px-6 py-12">
    <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-violet-500/30 shadow-2xl">
      <h1 className="text-3xl sm:text-4xl font-bold text-violet-400 mb-8 text-center">
        About PSWB Business Private Limited
      </h1>
      
      <div className="space-y-8 text-gray-300">
        <section className="text-center">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-violet-600 to-purple-700 flex items-center justify-center">
            <FaTractor className="text-5xl text-white" />
          </div>
          <p className="text-lg leading-relaxed">
            PSWB Business Private Limited is committed to transforming agriculture through 
            organic farming practices, scheme facilitation, and comprehensive agricultural 
            development. We empower farmers and promote sustainable agriculture.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-violet-300 mb-6 text-center">Our Mission</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Sustainable Agriculture", desc: "Promoting organic farming practices" },
              { title: "Farmer Empowerment", desc: "Enabling access to resources and schemes" },
              { title: "Land Development", desc: "Converting conventional farms to organic" },
              { title: "Community Growth", desc: "Building agricultural communities" },
            ].map((item, index) => (
              <div key={index} className="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
                <h4 className="text-xl font-semibold text-gray-200 mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-violet-600/20 to-purple-700/20 p-8 rounded-xl border border-violet-500/30">
          <h3 className="text-2xl font-semibold text-violet-300 mb-4 text-center">Our Projects</h3>
          <div className="space-y-6">
            {[
              { icon: "🆔", title: "S-D Card System", desc: "Providing comprehensive benefits to card holders" },
              { icon: "🌿", title: "Organic Agriculture", desc: "Developing organic farming activities" },
              { icon: "🔄", title: "Land Conversion", desc: "Converting land towards organic farming" },
              { icon: "🏛️", title: "Schemes", desc: "Direct service delivery to people" },
              { icon: "🚀", title: "Multipurpose Projects", desc: "Starting various agricultural projects" },
            ].map((project, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-2xl mt-1">{project.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-200">{project.title}</h4>
                  <p className="text-gray-400">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center pt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
          >
            <FaArrowRight />
            Explore Our Services
          </Link>
        </div>
      </div>
    </div>
  </div>
);

// ============ MAIN LANDING PAGE COMPONENT ============

const LandingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Projects Data based on content
  const projects = [
    {
      icon: <FaCreditCard className="text-3xl" />,
      title: "User Card System",
      description: "Generate user cards for identification and access to platform services",
      color: "from-violet-500 to-purple-600"
    },
    {
      icon: <FaLeaf className="text-3xl" />,
      title: "Organic Agriculture",
      description: "Providing guidance and support for organic farming practices",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: <FaSeedling className="text-3xl" />,
      title: "Land Conversion",
      description: "Support for transitioning towards organic farming methods",
      color: "from-lime-500 to-purple-600"
    },
    {
      icon: <FaHandsHelping className="text-3xl" />,
      title: "Service Guidance",
      description: "Providing general guidance related to agricultural services and processes",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <FaProjectDiagram className="text-3xl" />,
      title: "Multipurpose Projects",
      description: "Running various agriculture and development-focused initiatives",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: <FaUserFriends className="text-3xl" />,
      title: "Community Development",
      description: "Building farming communities and support networks",
      color: "from-orange-500 to-amber-600"
    },
  ];

  // Services list for User Services Access
  const servicesList = [
    "Organic farming guidance and resources",
    "Information support for external agricultural programs",
    "Access to farming-related service coordination",
    "Participation in community activities",
    "Updates on ongoing projects",
    "Training and awareness programs",
    "Networking opportunities",
    "General business support guidance"
  ];

  // Benefits features
  const benefitsFeatures = [
    {
      icon: <FaGift className="text-2xl" />,
      title: "Exclusive Access",
      description: "Get access to platform-based services and project updates"
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Full Support",
      description: "Guidance and assistance for organic farming activities"
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "Growth Monitoring",
      description: "Track progress and receive updates on submitted requests"
    },
    {
      icon: <FaCertificate className="text-2xl" />,
      title: "Documentation Support",
      description: "Assistance with document submission and review processes"
    }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      
      setTimeout(() => {
        setStatus("");
      }, 3000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    }
  };

  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const sections = ["home", "projects", "services", "benefits", "contact"];
      const scrollY = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollY >= element.offsetTop && scrollY < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Render supporting pages if not on home
  if (location.pathname !== '/') {
    return (
      <Routes>
        <Route path="/sd-card" element={<SDCardPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-gray-200 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-violet-600 to-purple-700 flex items-center justify-center">
              <FaLeaf className="text-white text-xl" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
              PSWB
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
            {[
              { id: "home", label: "Home" },
              { id: "projects", label: "Projects" },
              { id: "services", label: "Services" },
              { id: "benefits", label: "Benefits" },
              { id: "contact", label: "Contact" }
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`hover:text-violet-400 transition-all duration-300 ${
                    activeSection === item.id ? "text-violet-400 font-semibold border-b-2 border-violet-400 pb-1" : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl text-gray-300 hover:text-violet-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <ul className="flex flex-col p-4 gap-2">
              {[
                { id: "home", label: "Home" },
                { id: "projects", label: "Projects" },
                { id: "services", label: "Services" },
                { id: "benefits", label: "Benefits" },
                { id: "contact", label: "Contact" }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                      activeSection === item.id 
                        ? "bg-violet-500/20 text-violet-400 border-l-4 border-violet-400" 
                        : "text-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-24 pb-16 px-4 sm:px-6 flex flex-col justify-center items-center text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 to-purple-900/5"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-r from-violet-400 via-purple-400 to-violet-400 bg-clip-text text-transparent leading-tight">
            Transforming Agriculture
            <br />
            Empowering Farmers
          </h1>
          
          <p className="text-gray-400 mb-8 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            PSWB Business Private Limited is a private platform focused on supporting organic agriculture 
            development and providing guidance for farming-related activities through structured projects and services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white font-semibold py-4 px-8 rounded-full shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <FaArrowRight />
              <span className="text-lg">Explore Projects</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: "5000+", label: "Registered Users" },
              { value: "1000+", label: "Organic Farming Participants" },
              { value: "50+", label: "Service Categories" },
              { value: "25+", label: "Active Projects" }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800">
                <div className="text-2xl sm:text-3xl font-bold text-violet-400">{stat.value}</div>
                <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-violet-400">Our Core Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Supporting agriculture through structured development initiatives
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl border border-gray-800 shadow-lg hover:shadow-violet-500/20 hover:border-violet-500/30 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${project.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-200 group-hover:text-violet-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Services Access Section */}
      <section id="services" className="py-20 px-4 sm:px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-violet-400">User Services Access</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Access multiple support services through the PSWB platform
            </p>
          </div>

          <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl border border-violet-500/30 p-8">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {servicesList.map((service, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-300">
                  <FaCheck className="text-violet-400 flex-shrink-0" />
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Features Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefitsFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-b from-gray-900 to-black p-6 rounded-2xl border border-gray-800 hover:border-violet-500/30 transition-all duration-300 text-center">
                <div className="p-3 rounded-lg bg-gradient-to-r from-violet-500/20 to-purple-600/20 inline-flex mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-200 mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-violet-400">Get in Touch</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Contact us for service inquiries, project information, or support
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl border border-gray-800">
                <h3 className="text-2xl font-semibold mb-6 text-violet-300">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 text-gray-300">
                    <div className="bg-violet-500/20 p-3 rounded-lg">
                      <FaEnvelope className="text-violet-400 text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:pswinners2025@gmail.com" className="hover:text-violet-400">pswinners2025@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 text-gray-300">
                    <div className="bg-violet-500/20 p-3 rounded-lg">
                      <FaPhone className="text-violet-400 text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+919876543210" className="hover:text-violet-400">+91 9876543210</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 text-gray-300">
                    <div className="bg-violet-500/20 p-3 rounded-lg">
                      <FaMapMarkerAlt className="text-violet-400 text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold">Corporate Office</p>
                      <p>PSWB Business Private Limited, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Hours */}
              <div className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-violet-300">Service Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <p><span className="font-semibold">Monday - Saturday:</span> 9:00 AM - 6:00 PM IST</p>
                  <p><span className="font-semibold">Sunday:</span> 10:00 AM - 4:00 PM IST</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-semibold mb-6 text-violet-300">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full p-4 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent text-gray-200 placeholder-gray-500 transition-all"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full p-4 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent text-gray-200 placeholder-gray-500 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                      className="w-full p-4 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent text-gray-200 placeholder-gray-500 transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements or support request"
                    rows="4"
                    className="w-full p-4 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent text-gray-200 placeholder-gray-500 transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-4 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 ${
                    isLoading
                      ? 'bg-gray-700 cursor-not-allowed'
                      : 'bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 hover:shadow-violet-500/40'
                  }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : status === "success" ? (
                    "✅ Message Sent!"
                  ) : status === "error" ? (
                    "❌ Try Again"
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 p-6 bg-amber-500/10 rounded-2xl border border-amber-500/30">
            <div className="flex items-start gap-3">
              <FaShieldAlt className="text-amber-400 text-xl flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-400 mb-1">Important Disclaimer:</h3>
                <p className="text-sm text-gray-400">
                  PSWB Business Private Limited is a private organization. We are not a government entity and do not represent any government organization.
                  We do not provide financial services, loans, insurance, or direct government scheme services.
                  All information provided is for general guidance only. User submissions do not guarantee approval of any service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-10 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-violet-300 mb-2">PSWB Business Private Limited</h3>
              <p className="text-sm max-w-sm">
                Supporting agriculture through structured projects and service-based assistance.
              </p>
            </div>

            <div className="text-center md:text-left">
              <h4 className="font-semibold text-violet-300 mb-2">Contact Info</h4>
              <p>Email: <a href="mailto:pswinners2025@gmail.com" className="hover:text-violet-400">pswinners2025@gmail.com</a><br />
              Phone: <a href="tel:+919876543210" className="hover:text-violet-400">+91 9876543210</a></p>
            </div>

            <div className="text-center md:text-left">
              <h4 className="font-semibold text-violet-300 mb-2">Policy Links</h4>
              <div className="space-y-1">
                <Link to="/privacy-policy" className="block hover:text-violet-400">Privacy Policy</Link>
                <Link to="/terms-conditions" className="block hover:text-violet-400">Terms & Conditions</Link>
                <Link to="/refund-policy" className="block hover:text-violet-400">Refund Policy</Link>
                <Link to="/deletation" className="block hover:text-violet-400">Account Deletion</Link>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500 mt-8 pt-6 border-t border-gray-800">
            © 2026 PSWB Business Private Limited | All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;