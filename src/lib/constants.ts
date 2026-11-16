// ─── Brand Configuration ───────────────────────────────────────────────────────

export const BRAND = {
  name: 'MR.Engineers',
  tagline: 'Learn • Build • Repeat.',
  taglineFormatted: '— Learn • Build • Repeat —',
  statement: 'Engineering the Future.',
  description:
    'From industrial automation to intelligent IoT solutions, MR.Engineers transforms engineering ideas into practical technology.',
  url: 'https://mrengineers.in',
  email: 'mrengineers.contact@gmail.com',
  phone: '+91 XXXXX XXXXX', // Configurable placeholder
  location: 'Erode, Tamil Nadu, India',
  logo: '/images/logo.jpg',
} as const;

// ─── Founders ──────────────────────────────────────────────────────────────────

export const FOUNDERS = [
  {
    id: 'hariprasath-j',
    name: 'Hariprasath J',
    role: 'Co-Founder',
    title: 'Co-Founder & Technology Lead',
    instagram: 'https://www.instagram.com/_hari__prasath__j?cplk=MTR1amlpbmZjdHo5YQ==',
    bio: 'Passionate about hands-on industrial automation, embedded architectures, and IoT hardware. Focused on designing deterministic control systems, hardware-software co-design, and driving technical execution across industrial client deployments.',
    focusAreas: [
      'Industrial Automation & PLC',
      'Embedded Systems & ESP32',
      'IoT Architecture',
      'Cinema Automation Systems',
    ],
    imageSlot: '/images/founders/placeholder-hariprasath.svg',
  },
  {
    id: 'santhosh-m-m',
    name: 'Santhosh M M',
    role: 'Co-Founder',
    title: 'Co-Founder & Engineering Operations Lead',
    instagram: 'https://www.instagram.com/santhoshsanthosh7985?xtok=MWJqdm1ia2ozZTdhcA==',
    bio: 'Dedicated to electrical engineering design, control panel engineering, and technical education. Drives project development, field installation standards, student technical mentorship, and institutional engineering collaborations.',
    focusAreas: [
      'Electrical & Electronics Design',
      'Control Panel Fabrication',
      'SCADA & HMI Systems',
      'Technical Academy Programs',
    ],
    imageSlot: '/images/founders/placeholder-santhosh.svg',
  },
] as const;

// ─── Colors ────────────────────────────────────────────────────────────────────

export const COLORS = {
  background: '#080B10',
  backgroundSecondary: '#10151D',
  backgroundTertiary: '#161D28',
  textPrimary: '#F5F7FA',
  textSecondary: '#929BA8',
  accent: '#00D4FF',
  accentSecondary: '#7C5CFC',
  brandYellow: '#FFBE1A',
  border: 'rgba(255, 255, 255, 0.06)',
  borderHover: 'rgba(255, 255, 255, 0.12)',
  glass: 'rgba(16, 21, 29, 0.6)',
} as const;

// ─── Navigation Links ──────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Innovation & R&D', href: '/innovation' },
  { label: 'Academy', href: '/academy' },
  { label: 'Collaborations', href: '/collaborations' },
  { label: 'Founders', href: '/founders' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
] as const;

// ─── Official Social Links ─────────────────────────────────────────────────────

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/mr-engineers-66b101450',
  instagram: 'https://www.instagram.com/_auto_doc__?mdxt=MTFldGs0bTZzY2Rpdw==',
  youtube: 'https://www.youtube.com/@Mokkabusters',
} as const;

// ─── 9 Core Services ───────────────────────────────────────────────────────────

export const SERVICES = [
  {
    id: 'industrial-automation',
    title: 'Industrial Automation',
    shortDescription:
      'Designing and implementing intelligent automation systems that streamline industrial operations, optimize cycle times, and improve operational safety on the shop floor.',
    icon: 'Settings',
    technologies: ['PLCs', 'HMIs', 'VFDs', 'Sensors', 'Relay Logic', 'Pneumatics'],
    applications: [
      'Manufacturing line automation',
      'Conveyor & material transfer machinery',
      'Process sequencing & interlocking',
      'Packaging & sorting automation',
      'Safety shutdown systems',
    ],
    useCases: [
      'Automating repetitive assembly and packaging sequences',
      'Centralized monitoring and interlocking for motor starter panels',
      'Retrofitting manual legacy machines with automated PLC control',
    ],
  },
  {
    id: 'plc-scada',
    title: 'PLC & SCADA',
    shortDescription:
      'Programming and deploying robust PLC control architecture paired with intuitive SCADA/HMI interfaces for real-time supervisory control, alarming, and telemetry.',
    icon: 'Cpu',
    technologies: [
      'Siemens S7',
      'Allen Bradley',
      'Delta Electronics',
      'Mitsubishi',
      'Schneider Electric',
      'Modbus TCP/RTU',
    ],
    applications: [
      'Centralized plant supervisory control',
      'Alarm logging & automated dispatch',
      'Historical trend tracking & data archiving',
      'Multi-machine coordinated sequencing',
      'Recipe & batch management',
    ],
    useCases: [
      'Centralized plant monitoring dashboard for factory machinery',
      'Automated batching control system with real-time alarming',
      'Substation telemetry and remote breaker control via SCADA',
    ],
  },
  {
    id: 'esp32-arduino',
    title: 'ESP32 & Arduino Development',
    shortDescription:
      'Hardware-level firmware development and agile microcontroller prototyping for connected sensors, custom edge nodes, and hardware-software bridges.',
    icon: 'CircuitBoard',
    technologies: [
      'ESP32 (Wi-Fi / BLE)',
      'ESP8266',
      'Arduino Uno / Mega / Nano',
      'FreeRTOS',
      'I2C / SPI / UART',
      'MQTT / HTTP Edge',
    ],
    applications: [
      'Wireless sensor telemetry nodes',
      'Microcontroller relay switching modules',
      'Building climate & lighting controllers',
      'Remote equipment state monitors',
      'Edge data preprocessing',
    ],
    useCases: [
      'Building a multi-channel Wi-Fi relay controller for cinema lighting',
      'Designing a standalone wireless environmental data logger',
      'Interfacing legacy industrial machinery with an ESP32 telemetry bridge',
    ],
  },
  {
    id: 'iot-solutions',
    title: 'IoT Solutions',
    shortDescription:
      'End-to-end Internet of Things architecture connecting edge hardware to cloud analytics dashboards — enabling continuous remote asset visibility and automated alerts.',
    icon: 'Wifi',
    technologies: [
      'MQTT Protocol',
      'WebSockets',
      'Node.js / Express',
      'InfluxDB / TimescaleDB',
      'Grafana Dashboards',
      'Cloud Gateways',
    ],
    applications: [
      'Remote machinery telemetry & condition monitoring',
      'Distributed tank level & pump automation',
      'Smart energy & power consumption tracking',
      'Smart agriculture monitoring nodes',
      'Asset status tracking across multiple premises',
    ],
    useCases: [
      'Cloud-connected water reservoir monitoring with automated SMS/email alerts',
      'Live factory power consumption tracker with threshold analytics',
      'Remote cold-storage temperature & humidity compliance telemetry',
    ],
  },
  {
    id: 'embedded-systems',
    title: 'Embedded Systems',
    shortDescription:
      'Custom embedded hardware and firmware design tailored for specialized computational and control tasks — from schematic design and PCB layout to firmware optimization.',
    icon: 'Layers',
    technologies: [
      'ARM Cortex-M',
      'STM32 Series',
      'AVR / PIC',
      'Embedded C/C++',
      'KiCad PCB Design',
      'Oscilloscope & Logic Analyzer Testing',
    ],
    applications: [
      'Custom dedicated controller boards',
      'Industrial sensor conditioning modules',
      'Motor drive & inverter logic circuits',
      'Signal isolation & relay driver boards',
      'Low-power standalone telemetry devices',
    ],
    useCases: [
      'Designing a custom 4-layer PCB for harsh industrial signal processing',
      'Programming an STM32 controller for high-speed motor closed-loop feedback',
      'Developing an optically-isolated input/output module for machine protection',
    ],
  },
  {
    id: 'electrical-electronics',
    title: 'Electrical & Electronics',
    shortDescription:
      'Complete electrical project execution — electrical schematics, motor control panel fabrication, relay logic circuits, power distribution, and shop-floor commissioning.',
    icon: 'Zap',
    technologies: [
      'Motor Control Centers (MCC)',
      'Star-Delta & DOL Starters',
      'Relay Logic Panels',
      'Phase Protection Systems',
      'Surge & Grounding Infrastructure',
      'Single-Line Diagrams (SLD)',
    ],
    applications: [
      'Industrial electrical panel fabrication',
      'Commercial cinema power distribution & lighting panels',
      'Motor starter and VFD driver panels',
      'Power factor correction panels (APFC)',
      'System wiring and commissioning',
    ],
    useCases: [
      'Fabricating a dedicated power control cabinet for cinema auditorium lighting',
      'Assembling an industrial motor starter panel with overload protection',
      'Designing electrical safety interlocks for automated material conveyors',
    ],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    shortDescription:
      'Engineering high-performance, modern web applications, corporate websites, and real-time operational interfaces built on enterprise-grade frameworks.',
    icon: 'Globe',
    technologies: [
      'Next.js (App Router)',
      'React & TypeScript',
      'Tailwind CSS',
      'Node.js REST APIs',
      'PostgreSQL & Supabase',
      'Secure Authentication',
    ],
    applications: [
      'Corporate engineering web platforms',
      'Industrial telemetry dashboards',
      'Customer & partner portals',
      'Internal equipment booking & maintenance systems',
      'Technical documentation platforms',
    ],
    useCases: [
      'Engineering a real-time responsive web dashboard for equipment monitoring',
      'Building a client management portal with role-based access control',
      'Developing an interactive corporate platform with fast static rendering',
    ],
  },
  {
    id: 'app-development',
    title: 'Application Development',
    shortDescription:
      'Developing responsive mobile and desktop control interfaces for field operators, service technicians, and system supervisors for on-site or remote operation.',
    icon: 'Smartphone',
    technologies: [
      'React Native',
      'Flutter Cross-Platform',
      'REST & WebSocket APIs',
      'Local Storage & Offline Mode',
      'Bluetooth BLE Integration',
    ],
    applications: [
      'Mobile equipment control consoles',
      'Technician maintenance checklist apps',
      'Field inspection & sensor calibration tools',
      'Remote push notification alarming',
      'Bluetooth device configuration utilities',
    ],
    useCases: [
      'A tablet control application for cinema hall operators to trigger scenes',
      'A smartphone utility for configuring ESP32 Wi-Fi parameters via Bluetooth',
      'A field technician logging tool with offline data caching and sync',
    ],
  },
  {
    id: 'custom-engineering',
    title: 'Custom Engineering Solutions',
    shortDescription:
      'Bespoke multidisciplinary engineering projects requiring integrated hardware, custom circuit design, embedded code, mechanical fixtures, and dedicated software.',
    icon: 'Wrench',
    technologies: [
      'Cross-Domain Engineering',
      'Rapid Hardware Prototyping',
      'Custom Enclosure Design',
      'System Integration Testing',
      'Field Trial Commissioning',
    ],
    applications: [
      'Specialized cinema automation & masking controllers',
      'Custom manufacturing test rigs & jigs',
      'Turnkey R&D proof-of-concept prototypes',
      'Hardware retrofitting for older industrial machinery',
      'Unique industrial sensor interfacing',
    ],
    useCases: [
      'Designing an integrated cinema automation panel that syncs curtains and lights',
      'Building a custom automated endurance testing jig for mechanical switches',
      'Engineering a multi-sensor proof-of-concept device for agricultural monitoring',
    ],
  },
] as const;

// ─── Real Projects Portfolio ───────────────────────────────────────────────────

export const PROJECTS = [
  {
    id: 'vijayan-cinemas',
    title: 'Vijayan Cinemas – Perunthalaiyur',
    location: 'Perunthalaiyur, Tamil Nadu',
    category: 'Cinema Automation',
    status: 'Completed & Commissioned',
    statusType: 'completed',
    overview:
      'A comprehensive cinema automation and centralized auditorium control system engineered for Vijayan Cinemas. Integrates screen lighting sequences, curtain triggers, and projection cues into an intuitive single-touch control architecture.',
    problem:
      'Manual management of cinema hall lighting zones and transition sequences led to operator inconsistency, delayed show timings, and cumbersome cable routing across the projection room.',
    solution:
      'Engineered an ESP32-based multi-channel controller paired with industrial relay isolation and a local web dashboard. Allows projection operators to trigger synchronized scenes ("Show Start", "Intermission", "End Credits", "Cleaning Mode") with deterministic timing.',
    technologies: [
      'ESP32 Architecture',
      'Multi-Channel Relay Logic',
      'Web-Based Local Dashboard',
      'Lighting Zone Automation',
      'Optocoupler Isolation',
    ],
    imageSlot: '/projects/placeholder-cinema.svg',
    highlight: 'Centralized single-touch auditorium control with 4 automated show modes.',
  },
  {
    id: 'royal-theater',
    title: 'Royal Theater – Pallipalayam',
    location: 'Pallipalayam, Tamil Nadu',
    category: 'Cinema Automation',
    status: 'Completed & Commissioned',
    statusType: 'completed',
    overview:
      'Auditorium ceiling lighting automation and stepped dimming control designed specifically for Royal Theater in Pallipalayam, improving patron viewing comfort and energy efficiency.',
    problem:
      'Legacy switchboards caused sudden harsh illumination changes between screenings, which deteriorated viewer experience and required manual operator attendance during every show cycle.',
    solution:
      'Deployed an ESP32-governed stepped relay switching module that automates ceiling lighting zones in a graduated fade sequence, triggered directly from the projection console or manual emergency override.',
    technologies: [
      'ESP32 Microcontroller',
      'Multi-Channel Relay Architecture',
      'Auditorium Ceiling Control',
      'Stepped Dimming Sequences',
      'Failsafe Manual Override',
    ],
    imageSlot: '/projects/placeholder-lighting.svg',
    highlight: 'Stepped ceiling illumination sequencing with zero operator latency.',
  },
  {
    id: 'sangeetha-multiplex',
    title: 'Sangeetha Multiplex – Karumattampatti',
    location: 'Karumattampatti, Tamil Nadu',
    category: 'Cinema Automation & Multi-Screen',
    status: 'Concept / Architecture Phase',
    statusType: 'concept',
    overview:
      'A scalable four-screen multiplex automation concept designed for centralized monitoring and screen-wise decentralized control across multiple auditoriums simultaneously.',
    problem:
      'Multiplex operations with multiple screens face high coordination overhead when operators must manually synchronize shows, lobby indicators, and screen-specific audio/light cues across multiple screens.',
    solution:
      'Architected a distributed system model where each screen has a dedicated ESP32 edge node, communicating via MQTT/WebSocket with a central manager console for unified status visualization, scheduling, and error diagnostics.',
    technologies: [
      'Distributed Edge Nodes (ESP32)',
      'Multi-Screen Architecture (4 Screens)',
      'MQTT Telemetry Protocol',
      'Centralized Monitoring Vision',
      'Scheduled Sequence Engine',
    ],
    imageSlot: '/projects/placeholder-dashboard.svg',
    highlight: 'Proposed 4-screen multiplex architecture featuring distributed edge nodes.',
  },
  {
    id: 'raven-media-works',
    title: 'Raven Media Works',
    location: 'Digital Marketplace • India',
    category: 'Creative Digital Asset Marketplace',
    status: 'Successfully Completed',
    statusType: 'completed',
    type: 'Website Design & Development / Digital Marketplace',
    hosting: 'GoDaddy',
    liveUrl: 'https://www.ravenmediaworks.in/',
    overview:
      'An India-oriented creative digital asset marketplace developed to provide a dedicated platform for discovering and accessing creative editing resources, visual effects templates, and design assets.',
    problem:
      'Digital video editors, content creators, and graphic designers in India often struggle with fragmented channels to find curated visual effects, video transitions, and design templates tailored to their workflows.',
    solution:
      'Engineered an intuitive, high-performance creative marketplace platform with structured asset categorization (FX Templates, Photoshop Templates, Video Transitions, Graphic Templates), seamless navigation, and GoDaddy production hosting.',
    technologies: [
      'Digital Marketplace Architecture',
      'UI/UX Design & Branding',
      'FX Templates Catalog',
      'Photoshop PSD Resources',
      'Video Transitions Engine',
      'Graphic Design Assets',
      'GoDaddy Cloud Deployment',
    ],
    imageSlot: '/projects/placeholder-raven.svg',
    highlight: 'Live digital asset marketplace uniting visual effects, transitions, and design templates.',
    detailUrl: '/projects/raven-media-works',
  },
] as const;

// ─── Innovation & R&D Roadmap ──────────────────────────────────────────────────

export const RND_ROADMAP = [
  {
    id: 'smart-building',
    title: 'Smart Building Automation',
    category: 'Building Infrastructure',
    phase: 'Research & Prototyping',
    description:
      'Exploring modular building management nodes integrating occupancy sensing, HVAC scheduling, and ambient light harvesting for commercial premises.',
    technologies: ['ESP32', 'Zigbee / Matter', 'RS485 Modbus', 'Energy Harvesting'],
  },
  {
    id: 'industrial-iot',
    title: 'Advanced Industrial IoT Gateways',
    category: 'Industrial Edge',
    phase: 'Architecture & Design',
    description:
      'Developing hardened DIN-rail mounted IoT edge gateways capable of bi-directional PLC telemetry, edge protocol conversion, and encrypted cloud synchronization.',
    technologies: ['STM32', 'Modbus TCP', 'Cellular LTE-M / NB-IoT', 'TLS 1.3 Security'],
  },
  {
    id: 'smart-energy',
    title: 'Smart Energy Monitoring Systems',
    category: 'Energy & Power',
    phase: 'Laboratory Testing',
    description:
      'Sub-metering sensor architectures using current transformers (CTs) and digital signal processors to log phase angle, power factor, and harmonics in real time.',
    technologies: ['ADE7758 / Dedicated Energy ICs', 'Current Transformers', 'TimescaleDB', 'Grafana'],
  },
  {
    id: 'ai-automation',
    title: 'AI-Assisted Automation & Diagnostics',
    category: 'Intelligent Systems',
    phase: 'Conceptual Exploration',
    description:
      'Investigating edge anomaly detection models to flag motor vibration deviations, bearing wear indicators, and predictive thermal anomalies before equipment failure.',
    technologies: ['Edge Impulse', 'TinyML on Microcontrollers', 'Accelerometers', 'Python Analytics'],
  },
  {
    id: 'advanced-plc-scada',
    title: 'Advanced Modular PLC & SCADA Stack',
    category: 'Deterministic Control',
    phase: 'Engineering Study',
    description:
      'Frameworks for unified HMI development utilizing modern web runtimes running directly on industrial embedded panels with IEC-61131-3 logic.',
    technologies: ['OpenPLC', 'WebAssembly', 'MQTT Sparkplug B', 'Industrial Web HMIs'],
  },
  {
    id: 'embedded-hardware-rnd',
    title: 'Embedded Hardware & Custom Silicon R&D',
    category: 'Hardware Design',
    phase: 'Schematic Phase',
    description:
      'Custom PCB standard cell designs for standardized industrial input/output cards featuring optoisolation, self-resetting fuses, and multi-voltage supplies.',
    technologies: ['KiCad EDA', 'Multi-Layer PCB Design', 'EMC/EMI Shielding', 'Power Circuitry'],
  },
  {
    id: 'industrial-dashboards',
    title: 'Industrial Dashboard Platforms',
    category: 'Software Infrastructure',
    phase: 'Prototype in Development',
    description:
      'A low-latency web platform specifically built for factory floor tablets, supporting drag-and-drop telemetry widgets, animated piping diagrams, and instant alerts.',
    technologies: ['Next.js', 'WebSockets', 'SVG Dynamic Schematics', 'Role-Based Access'],
  },
  {
    id: 'advanced-cinema',
    title: 'Next-Gen Multiplex Cinema Automation',
    category: 'Specialized Systems',
    phase: 'Field Trial Research',
    description:
      'Researching automated motorized screen masking, DMX512 architectural wash lighting, and direct projector serial protocol integration for future theater retrofits.',
    technologies: ['DMX512 Protocol', 'RS232 Projector Interfacing', 'Motorized Stepper Drives'],
  },
] as const;

// ─── MR.Engineers Academy ──────────────────────────────────────────────────────

export const ACADEMY_DOMAINS = [
  {
    title: 'Industrial Automation',
    description: 'Relay logic, sensor selection, safety interlocks, contactor wiring, and industrial panel standards.',
    skills: ['Relay Circuits', 'Panel Wiring', 'Sensors & Actuators', 'Industrial Safety Standards'],
  },
  {
    title: 'PLC & SCADA',
    description: 'Ladder logic programming, memory addressing, timer/counter circuits, and HMI screen development.',
    skills: ['Ladder Logic (LD)', 'Siemens & Delta PLCs', 'HMI Interface Design', 'Modbus Telemetry'],
  },
  {
    title: 'ESP32 & Arduino',
    description: 'Hardware timers, interrupts, analog reading, serial communication, and Wi-Fi/Bluetooth integration.',
    skills: ['C/C++ for Microcontrollers', 'GPIO & PWM Control', 'Wi-Fi & BLE Stacks', 'Hardware Troubleshooting'],
  },
  {
    title: 'IoT Development',
    description: 'Edge-to-cloud communication, MQTT broker configuration, REST APIs, and live sensor dashboards.',
    skills: ['MQTT Messaging', 'Cloud Data Ingestion', 'JSON Payloads', 'Real-Time Web Dashboards'],
  },
  {
    title: 'Embedded Systems',
    description: 'Microcontroller architecture, register-level coding, peripheral buses, and PCB schematic design.',
    skills: ['ARM & AVR Architectures', 'I2C / SPI / UART Protocols', 'Schematic Design in KiCad', 'Soldering & Assembly'],
  },
  {
    title: 'Electrical & Electronics',
    description: 'Single-phase & 3-phase circuits, motor starters, power supplies, component testing, and safety.',
    skills: ['3-Phase Motor Control', 'Starter Circuits (DOL/Star-Delta)', 'Multimeter Diagnostics', 'Power Supplies'],
  },
  {
    title: 'Web Development',
    description: 'Building modern interfaces with HTML, CSS, JavaScript, React, and connecting with IoT backend APIs.',
    skills: ['Modern React & Next.js', 'Tailwind CSS', 'API Integration', 'WebSocket Data Streams'],
  },
  {
    title: 'Final Year Engineering Projects',
    description: 'Structured technical guidance to conceptualize, fabricate, program, and document working prototypes.',
    skills: ['System Architecture', 'Hardware Fabrication', 'Code Development', 'Technical Documentation'],
  },
] as const;

export const INTERNSHIP_ROLES = [
  {
    role: 'Automation Intern',
    duration: '1 to 3 Months (Configurable)',
    eligibility: 'B.E. / B.Tech / Diploma in EEE, ECE, Mechatronics, or related streams',
    focus: 'Hands-on PLC wiring, relay panels, ladder logic testing, and industrial equipment diagnostics.',
  },
  {
    role: 'Embedded Systems Intern',
    duration: '1 to 3 Months (Configurable)',
    eligibility: 'B.E. / B.Tech / Diploma in ECE, EEE, Robotics, or Computer Engineering',
    focus: 'Microcontroller firmware development, sensor interfacing, circuit assembly, and hardware testing.',
  },
  {
    role: 'IoT Development Intern',
    duration: '1 to 3 Months (Configurable)',
    eligibility: 'Students or graduates with interest in networking, microcontrollers, and cloud protocols',
    focus: 'ESP32 IoT nodes, MQTT telemetry pipelines, cloud dashboard design, and edge data processing.',
  },
  {
    role: 'Electronics Intern',
    duration: '1 to 3 Months (Configurable)',
    eligibility: 'Diploma / Degree in Electronics, Electrical, or Instrumentation Engineering',
    focus: 'PCB schematic capture, component soldering, power supply circuits, and laboratory testing.',
  },
  {
    role: 'Software Development Intern',
    duration: '1 to 3 Months (Configurable)',
    eligibility: 'Students with knowledge of JavaScript/TypeScript, Python, or backend programming',
    focus: 'Building API endpoints, database schema design, and server-side logic for telemetry platforms.',
  },
  {
    role: 'Web Development Intern',
    duration: '1 to 3 Months (Configurable)',
    eligibility: 'Students passionate about frontend interfaces, responsive design, and modern web frameworks',
    focus: 'Building responsive web pages, data visualization charts, dashboard UI, and modern styling.',
  },
] as const;

// ─── College & Industry Collaborations ─────────────────────────────────────────

export const COLLABORATION_OFFERINGS = [
  {
    title: 'College Partnerships',
    description: 'Memorandum of Understanding (MoU) frameworks for guest lectures, technology demonstration labs, and faculty industrial interaction.',
    icon: 'GraduationCap',
  },
  {
    title: 'Technical Hands-On Workshops',
    description: 'Intensive 1-day to 3-day practical workshops on ESP32 IoT, PLC programming, and PCB design held at college campuses.',
    icon: 'Wrench',
  },
  {
    title: 'Structured Student Internships',
    description: 'Real-world project-oriented internship batches providing practical engineering exposure to complement academic curriculum.',
    icon: 'Briefcase',
  },
  {
    title: 'Final Year Project Mentorship',
    description: 'Guiding student teams to build authentic, functional hardware and software prototypes that solve legitimate problems.',
    icon: 'Cpu',
  },
  {
    title: 'Industrial Automation Projects',
    description: 'Collaborative engineering consultancy for small and medium manufacturing enterprises across Tamil Nadu.',
    icon: 'Settings',
  },
  {
    title: 'Technology Demonstrations',
    description: 'Interactive hardware showcases demonstrating real-time sensor control, cinema automation setups, and IoT telemetry.',
    icon: 'Zap',
  },
] as const;

// ─── Four-Step Engineering Process ─────────────────────────────────────────────

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We deeply analyze operational constraints, electrical specifications, and functional goals to formulate a precise engineering roadmap.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We architect the circuit schematics, select industrial-grade components, design panel layouts, and structure firmware architecture.',
  },
  {
    number: '03',
    title: 'Develop',
    description:
      'Our engineers solder prototypes, program deterministic logic, fabricate electrical enclosures, and write responsive dashboard software.',
  },
  {
    number: '04',
    title: 'Deliver',
    description:
      'We perform rigorous field testing, verify fail-safe behaviors, install on-site, and provide comprehensive documentation and training.',
  },
] as const;
