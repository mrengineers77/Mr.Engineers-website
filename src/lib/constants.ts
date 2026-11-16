// ─── Brand Configuration ───────────────────────────────────────────────────────

export const BRAND = {
  name: 'MR.Engineers',
  tagline: 'Learn • Build • Repeat.',
  taglineFormatted: '— Learn • Build • Repeat —',
  description:
    'We engineer intelligent solutions at the intersection of industrial automation, electronics, IoT and software — transforming ideas into practical innovations.',
  url: 'https://mrengineers.in',
  email: 'contact@mrengineers.in',
  phone: '+91 XXXXX XXXXX',
  location: 'Erode, Tamil Nadu, India',
  logo: '/images/logo.jpg',
} as const;

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
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
] as const;

// ─── Social Links ──────────────────────────────────────────────────────────────

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/mrengineers',
  instagram: 'https://instagram.com/mrengineers',
  youtube: 'https://youtube.com/@mrengineers',
} as const;

// ─── Services ──────────────────────────────────────────────────────────────────

export const SERVICES = [
  {
    id: 'industrial-automation',
    title: 'Industrial Automation',
    shortDescription:
      'Designing and implementing intelligent automation systems that streamline industrial processes, reduce manual intervention, and improve operational efficiency.',
    icon: 'Cpu',
    technologies: ['PLCs', 'HMIs', 'SCADA', 'VFDs', 'Sensors', 'Actuators'],
    applications: [
      'Manufacturing process automation',
      'Conveyor & material handling systems',
      'Quality control automation',
      'Energy management systems',
      'Packaging & bottling automation',
    ],
    useCases: [
      'Automating repetitive industrial tasks',
      'Monitoring and controlling factory floor equipment remotely',
      'Reducing downtime with predictive maintenance integration',
    ],
  },
  {
    id: 'plc-scada',
    title: 'PLC & SCADA',
    shortDescription:
      'Programming and deploying PLC-based control systems with SCADA interfaces for real-time monitoring, data acquisition, and supervisory control of industrial infrastructure.',
    icon: 'Settings',
    technologies: [
      'Siemens S7',
      'Allen Bradley',
      'Delta',
      'Mitsubishi',
      'Schneider',
      'WinCC',
      'Ignition',
    ],
    applications: [
      'Real-time process monitoring',
      'Alarm management systems',
      'Historical data logging & analysis',
      'Remote access & control',
      'Recipe management',
    ],
    useCases: [
      'Centralized control of distributed industrial equipment',
      'Real-time dashboards for plant operations',
      'Automated reporting and compliance logging',
    ],
  },
  {
    id: 'esp32-arduino',
    title: 'ESP32 & Arduino',
    shortDescription:
      'Rapid prototyping and production-ready embedded solutions using ESP32 and Arduino platforms for sensor integration, wireless communication, and hardware-software interfacing.',
    icon: 'CircuitBoard',
    technologies: [
      'ESP32',
      'ESP8266',
      'Arduino Uno / Mega / Nano',
      'Wi-Fi',
      'Bluetooth',
      'MQTT',
      'I2C',
      'SPI',
    ],
    applications: [
      'Sensor data acquisition systems',
      'Wireless control modules',
      'Home & building automation prototypes',
      'Environmental monitoring devices',
      'Custom IoT gateways',
    ],
    useCases: [
      'Building a custom temperature and humidity monitoring device',
      'Creating a Wi-Fi-enabled relay controller for appliances',
      'Developing a Bluetooth-based asset tracker prototype',
    ],
  },
  {
    id: 'iot-development',
    title: 'IoT Development',
    shortDescription:
      'End-to-end Internet of Things solutions — from edge device firmware to cloud dashboards — enabling remote monitoring, data-driven decisions, and smart infrastructure.',
    icon: 'Wifi',
    technologies: [
      'MQTT',
      'HTTP/REST',
      'WebSocket',
      'Node.js',
      'Firebase',
      'AWS IoT',
      'InfluxDB',
      'Grafana',
    ],
    applications: [
      'Remote asset monitoring & management',
      'Smart agriculture systems',
      'Fleet tracking & telematics',
      'Smart energy metering',
      'Connected industrial equipment',
    ],
    useCases: [
      'Monitoring water tank levels remotely via a mobile dashboard',
      'Tracking real-time power consumption across multiple locations',
      'Automating greenhouse climate control with cloud-connected sensors',
    ],
  },
  {
    id: 'embedded-systems',
    title: 'Embedded Systems',
    shortDescription:
      'Designing custom embedded hardware and firmware for specialized applications — from PCB design to real-time operating system programming and hardware-software co-design.',
    icon: 'Microchip',
    technologies: [
      'ARM Cortex',
      'STM32',
      'AVR',
      'C/C++',
      'RTOS',
      'PCB Design',
      'KiCad',
      'Altium',
    ],
    applications: [
      'Custom controller boards',
      'Signal processing modules',
      'Power electronics controllers',
      'Motor drive systems',
      'Data loggers & recorders',
    ],
    useCases: [
      'Designing a custom PCB for an industrial sensor node',
      'Building a motor speed controller with feedback',
      'Creating a portable data logger for field measurements',
    ],
  },
  {
    id: 'electrical-electronics',
    title: 'Electrical & Electronics',
    shortDescription:
      'Comprehensive electrical and electronics project development — circuit design, panel fabrication, wiring, testing, and commissioning for industrial and commercial applications.',
    icon: 'Zap',
    technologies: [
      'Power Distribution',
      'Motor Control Panels',
      'Relay Logic',
      'Circuit Design',
      'Protection Systems',
      'Earthing',
    ],
    applications: [
      'Electrical panel design & fabrication',
      'Motor starter & drive panels',
      'Lighting control systems',
      'Power factor correction',
      'Protection & safety systems',
    ],
    useCases: [
      'Designing a star-delta motor starter panel',
      'Implementing a cinema hall lighting automation system',
      'Building a power distribution board for a commercial building',
    ],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    shortDescription:
      'Building modern, responsive web applications and dashboards using cutting-edge frameworks — from corporate websites to real-time IoT control interfaces and admin panels.',
    icon: 'Globe',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Tailwind CSS',
      'PostgreSQL',
      'MongoDB',
      'REST APIs',
    ],
    applications: [
      'Corporate websites & landing pages',
      'IoT dashboards & control panels',
      'Admin portals & management tools',
      'E-commerce platforms',
      'API development & integration',
    ],
    useCases: [
      'Building a real-time monitoring dashboard for factory sensors',
      'Creating a customer portal for service management',
      'Developing an internal tool for equipment inventory tracking',
    ],
  },
  {
    id: 'app-development',
    title: 'Application Development',
    shortDescription:
      'Developing cross-platform mobile and desktop applications for equipment control, data visualization, remote monitoring, and operational management.',
    icon: 'Smartphone',
    technologies: [
      'React Native',
      'Flutter',
      'Firebase',
      'Supabase',
      'REST APIs',
      'Push Notifications',
      'Offline Sync',
    ],
    applications: [
      'Mobile IoT control apps',
      'Field service & maintenance apps',
      'Inventory & asset management apps',
      'Customer-facing service apps',
      'Internal productivity tools',
    ],
    useCases: [
      'A mobile app to control smart home devices remotely',
      'A field technician app for logging maintenance tasks',
      'An inventory tracker with barcode scanning capability',
    ],
  },
  {
    id: 'technical-projects',
    title: 'Technical Project Development',
    shortDescription:
      'Complete technical project development services for academic institutions, startups, and enterprises — from concept validation and prototyping to deployment-ready solutions.',
    icon: 'Wrench',
    technologies: [
      'Full-Stack Development',
      'Embedded Systems',
      'IoT Platforms',
      'Cloud Services',
      'Hardware Prototyping',
      '3D Printing',
    ],
    applications: [
      'Academic final year projects',
      'Startup MVP development',
      'Research & development prototypes',
      'Proof of concept demonstrations',
      'Competition & hackathon projects',
    ],
    useCases: [
      'Developing a final-year engineering project with working prototype',
      'Building an MVP for a startup idea involving hardware and software',
      'Creating a proof-of-concept for an industrial process improvement',
    ],
  },
] as const;

// ─── Featured Projects ─────────────────────────────────────────────────────────

export const PROJECTS = [
  {
    id: 'cinema-automation',
    title: 'Cinema Automation System',
    category: 'Cinema Automation',
    overview:
      'An integrated automation system for cinema halls, controlling screen masking, lighting sequences, curtain movements, and audio triggers through a centralized PLC-based control panel.',
    technologies: ['PLC', 'Relay Logic', 'VFD', 'Motor Control', 'HMI'],
    problem:
      'Manual operation of cinema equipment requires multiple operators and is prone to timing errors and inconsistency between shows.',
    solution:
      'A single-touch automation system that sequences all cinema operations — from curtain opening to lighting dimming — with precise timing and reliable execution.',
    image: '/projects/placeholder-cinema.svg',
  },
  {
    id: 'smart-lighting',
    title: 'Smart Lighting Control',
    category: 'Industrial Automation',
    overview:
      'An intelligent lighting management system for commercial buildings that adjusts brightness based on occupancy, time schedules, and ambient light conditions.',
    technologies: ['ESP32', 'MQTT', 'Relay Modules', 'Web Dashboard', 'Sensors'],
    problem:
      'Conventional lighting wastes energy by operating at full capacity regardless of actual need, with no centralized control.',
    solution:
      'A sensor-driven smart lighting system with a web-based control dashboard, enabling scheduled automation and real-time remote control of all lighting zones.',
    image: '/projects/placeholder-lighting.svg',
  },
  {
    id: 'iot-monitoring',
    title: 'IoT Monitoring System',
    category: 'IoT & Embedded Systems',
    overview:
      'A cloud-connected monitoring platform that collects real-time data from distributed sensors and displays it on an accessible web dashboard with alerting capabilities.',
    technologies: ['ESP32', 'MQTT', 'Node.js', 'InfluxDB', 'Grafana', 'React'],
    problem:
      'Industrial facilities lack real-time visibility into equipment status and environmental conditions across multiple locations.',
    solution:
      'A scalable IoT platform with edge devices for data collection, cloud-based processing, and an intuitive dashboard for monitoring, analysis, and automated alerts.',
    image: '/projects/placeholder-iot.svg',
  },
  {
    id: 'custom-hardware',
    title: 'Custom Hardware & Electronics',
    category: 'Electrical & Electronics',
    overview:
      'Design and development of custom electronic circuits and hardware modules tailored for specific industrial and commercial applications.',
    technologies: ['PCB Design', 'KiCad', 'Microcontrollers', 'Power Electronics', 'Soldering'],
    problem:
      'Off-the-shelf electronic modules often do not meet specific requirements in terms of form factor, functionality, or integration capability.',
    solution:
      'Custom-designed PCBs and hardware modules built to exact specifications, optimized for the target application with proper testing and documentation.',
    image: '/projects/placeholder-hardware.svg',
  },
  {
    id: 'web-dashboard',
    title: 'Web-Based Control Dashboard',
    category: 'Software & Dashboard Development',
    overview:
      'A real-time web application for monitoring and controlling industrial equipment, featuring live data visualization, command execution, and historical data analysis.',
    technologies: ['Next.js', 'TypeScript', 'WebSocket', 'PostgreSQL', 'Chart.js'],
    problem:
      'Operators need physical access to equipment or proprietary software to monitor and control industrial systems.',
    solution:
      'A browser-based dashboard accessible from any device, providing real-time equipment status, control capabilities, and data export for analysis.',
    image: '/projects/placeholder-dashboard.svg',
  },
] as const;

// ─── Process Steps ─────────────────────────────────────────────────────────────

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We begin by understanding your requirements, challenges, and goals. Through detailed discussions, we map out the project scope and identify the right technical approach.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We design the system architecture, select technologies, create schematics, and plan the development workflow — ensuring every decision aligns with your objectives.',
  },
  {
    number: '03',
    title: 'Develop',
    description:
      'Our engineers build, program, and integrate the solution — from hardware assembly and firmware to software development and testing — with iterative feedback loops.',
  },
  {
    number: '04',
    title: 'Deliver',
    description:
      'We deploy, commission, and hand over the complete solution with documentation, training, and ongoing support to ensure long-term operational success.',
  },
] as const;

// ─── Project Categories ────────────────────────────────────────────────────────

export const PROJECT_CATEGORIES = [
  'All',
  'Industrial Automation',
  'Cinema Automation',
  'IoT & Embedded Systems',
  'Electrical & Electronics',
  'Software & Dashboard Development',
] as const;
