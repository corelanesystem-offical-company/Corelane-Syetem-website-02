export interface TechItem {
  name: string
  category: string
}

export const techCategories = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Mobile',
    items: ['React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'Django', 'FastAPI', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
  },
  {
    category: 'Data',
    items: ['PostgreSQL', 'MongoDB', 'Snowflake', 'BigQuery', 'dbt', 'Apache Airflow', 'Power BI'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'],
  },
]

export interface WhyItem {
  title: string
  description: string
}

export const whyItems: WhyItem[] = [
  {
    title: 'We solve business problems, not just build features',
    description:
      'Every project starts with understanding your actual business challenge. We design technology solutions around your goals, not the other way around.',
  },
  {
    title: 'Full-stack capability under one roof',
    description:
      'From UI design and frontend to cloud infrastructure and data engineering — you have access to the full spectrum of technology skills without managing multiple vendors.',
  },
  {
    title: 'International standards, accessible rates',
    description:
      'We deliver software to the quality standards expected by UK, US, and UAE clients — with the cost efficiency of a well-run engineering team in Pakistan.',
  },
  {
    title: 'Clear communication and structured delivery',
    description:
      'No ambiguity. Every project has a defined scope, regular updates, a dedicated point of contact, and structured delivery milestones.',
  },
  {
    title: 'Long-term technology partnership',
    description:
      'We aim to be your ongoing technology partner — not a one-time vendor. We build with maintainability and scalability in mind, so your investment compounds over time.',
  },
]
