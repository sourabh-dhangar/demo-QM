import { Code, Globe, Layout, Users, ShieldCheck, Cpu } from 'lucide-react';

export const SERVICES = [
  {
    id: 'software',
    title: 'Software Engineering',
    description: 'We take your specific business requirements and build full-scale, bespoke software from the ground up. Our solutions are designed to fit your workflow perfectly, not the other way around.',
    icon: Code,
    features: [
      'Tailored requirement analysis',
      'Custom architecture design',
      'Full-stack build-to-order',
      'Legacy modernization',
      'Scalable enterprise solutions',
      'Seamless deployment'
    ]
  },
  {
    id: 'web',
    title: 'Web and Mobility',
    description: 'Custom web platforms and mobile apps built to deliver your unique value proposition to your customers on any device.',
    icon: Globe,
    features: [
      'Bespoke PWA development',
      'Custom iOS & Android builds',
      'Requirement-specific APIs',
      'E-commerce platforms',
      'High-performance interfaces'
    ]
  },
  {
    id: 'uiux',
    title: 'UI /UX design',
    description: 'Designing interfaces that align with your brand requirements and user behavior patterns.',
    icon: Layout,
    features: [
      'Requirement-based research',
      'Custom wireframing',
      'User-centric prototyping',
      'Brand alignment'
    ]
  },
  {
    id: 'staff',
    title: 'Staff Augmentation',
    description: 'Need specific skills? We provide the experts required to complete your internal projects on time.',
    icon: Users,
    features: [
      'Skill-specific talent',
      'Flexible team scaling',
      'Direct requirement matching'
    ]
  },
  {
    id: 'qa',
    title: 'Testing & QA',
    description: 'Rigorous validation to ensure the software we build meets 100% of your initial requirements.',
    icon: ShieldCheck,
    features: [
      'Requirement verification',
      'Automated bug detection',
      'Performance stress tests'
    ]
  },
  {
    id: 'aiml',
    title: 'AI/ML Services',
    description: 'Building custom intelligence models tailored to your data and specific business goals.',
    icon: Cpu,
    features: [
      'Custom ML models',
      'Specific NLP solutions',
      'Data-driven insights'
    ]
  }
];

export const STATS = [
  { value: '11+', label: 'Clients Catered Globally', icon: Globe },
  { value: '2+', label: 'Years Experience', icon: Users },
  { value: '12+', label: 'Custom Projects Delivered', icon: Code },
  { value: '5', label: 'Expert Builders', icon: Users },
];

export const TEAM_MEMBERS = [
  { name: 'Sourabh', role: 'CEO & Co-Founder', type: 'founder', initials: 'S', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800&h=1000' },
  { name: 'Prathamesh', role: 'CTO & Co-Founder', type: 'founder', initials: 'P', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800&h=1000' },
  { name: 'Santosh', role: 'Developer', type: 'team', initials: 'SA', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=1000' },
  { name: 'Aadarsh', role: 'Developer', type: 'team', initials: 'A', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800&h=1000' },
  { name: 'Nishigandha', role: 'Developer', type: 'team', initials: 'N', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=1000' },
];
