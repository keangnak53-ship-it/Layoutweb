
export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content?: string;
  isFeatured?: boolean;
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Kim Mex Wins 'Best Commercial Project' Award 2025",
    date: "October 15, 2025",
    category: "Company News",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    excerpt: "We are proud to announce that our work on the Skyline Plaza has been recognized for excellence in construction and design.",
    content: "<p>KIM MEX Construction is honored to receive the prestigious 'Best Commercial Project' award for the year 2025. This recognition highlights our commitment to delivering high-quality, sustainable, and innovative building solutions.</p><p>The Skyline Plaza project showcased our ability to manage complex high-rise developments while maintaining strict safety standards and architectural integrity. We thank our dedicated team and partners for their unwavering support in making this achievement possible.</p>" ,
    isFeatured: true
  },
  {
    id: 2,
    title: "Groundbreaking Ceremony for New Water Treatment Plant",
    date: "September 02, 2025",
    category: "Projects",
    image: "https://images.unsplash.com/photo-1621905252507-b354bcadc0d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    excerpt: "A major milestone in our infrastructure division as we begin construction on the Siem Reap water supply project.",
    content: "<p>The groundbreaking ceremony for the Siem Reap Water Treatment Plant marks a significant step forward in providing clean water access to thousands of residents. This project, funded in part by international development partners, will utilize state-of-the-art filtration and purification technologies.</p><p>KIM MEX is proud to be the lead contractor on this vital infrastructure project, which is expected to be completed by late 2026. Our teams are currently on-site initiating the foundational civil engineering works.</p>"
  },
  {
    id: 3,
    title: "Safety First: Achieving 1 Million Man-Hours Without LTI",
    date: "August 10, 2025",
    category: "Company News",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    excerpt: "Our commitment to safety has reached a new milestone. We celebrate the dedication of our site teams.",
    content: "<p>Safety is not just a priority at KIM MEX; it is a core value. We are incredibly proud to announce that our various project sites across Cambodia have collectively achieved 1,000,000 man-hours without a single Lost Time Incident (LTI).</p><p>This achievement is a testament to the rigorous safety training, strict adherence to protocols, and the vigilant eye of our workers on the ground. We will continue to invest in safety equipment and training to ensure every member of our team goes home safe every day.</p>"
  },
  {
    id: 4,
    title: "Annual CSR: Rebuilding Rural Schools",
    date: "July 22, 2025",
    category: "CSR",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    excerpt: "Giving back to the community is part of our DNA. This month, we helped renovate a primary school in Kampong Speu.",
    content: "<p>Our Corporate Social Responsibility (CSR) program took us to a remote village in Kampong Speu province this month. KIM MEX volunteers and engineering staff spent a week renovating the local primary school, which had fallen into disrepair.</p><p>The scope of work included structural repairs to the roof, painting the facade, and installing new ceiling fans and light fixtures. We also donated a set of new desks and chairs to ensure the children have a comfortable learning environment. At KIM MEX, we believe in building more than just structures; we believe in building futures.</p>"
  },
  {
    id: 5,
    title: "Expanding Our Fleet with New Heavy Machinery",
    date: "June 05, 2025",
    category: "Company News",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    excerpt: "To meet growing demand, Kim Mex has invested in state-of-the-art cranes and excavators.",
    content: "<p>KIM MEX continues to expand its logistical and execution capabilities by acquiring a new fleet of heavy construction machinery. The new shipment, arriving from leading global manufacturers, includes high-capacity tower cranes, hydraulic excavators, and concrete pumping trucks.</p><p>This investment allows us to take on larger and more complex projects with reduced lead times and increased precision. Modernizing our fleet also contributes to higher energy efficiency and lower environmental impact on our construction sites.</p>"
  },
  {
    id: 6,
    title: "New Partnership with Leading Design Firm",
    date: "May 18, 2025",
    category: "Industry",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    excerpt: "We are excited to announce a strategic partnership with Global Architects to deliver world-class design work.",
    content: "<p>KIM MEX is proud to announce a new strategic partnership with Global Architects, a world-renowned firm specializing in sustainable urban design. By combining our robust construction expertise with their forward-thinking architectural vision, we aim to deliver truly landmark developments.</p><p>This collaboration will focus on upcoming high-density residential and mixed-use projects in Phnom Penh, emphasizing green building standards and community-centric planning.</p>"
  }
];
