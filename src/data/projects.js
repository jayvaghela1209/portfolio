export const projects = [
  {
    id: 'aws-s3-cloudfront',
    name: 'AWS S3 + CloudFront Monitoring',
    subtitle: 'Highly Available Static Site with Cloud Observability',
    status: 'complete',
    description:
      'Designed and deployed a highly available static website architecture on S3 and CloudFront, then wrapped it in real observability: metrics, alarms, and event-driven notifications.',
    highlights: [
      'Low-latency, globally distributed delivery via S3 + CloudFront',
      'CloudWatch metrics and alarms on CloudFront RequestCount for proactive anomaly detection',
      'Event-driven email alerting through Amazon SNS',
      'IAM least-privilege policies for secure, auditable resource management',
    ],
    tags: ['AWS', 'S3', 'CloudFront', 'CloudWatch', 'SNS', 'IAM'],
    accent: 'amber',
  },
  {
    id: 'eks-infra',
    name: 'EKS Cluster & CI/CD Automation',
    subtitle: 'Kubernetes Infrastructure, Provisioning, and Delivery Pipelines',
    status: 'active',
    description:
      'Hands-on cloud infrastructure work: standing up and operating an AWS EKS cluster, automating provisioning, and building the delivery pipelines that ship changes into it.',
    highlights: [
      'EKS cluster provisioning and lifecycle management via eksctl and kubectl (Auto Mode)',
      'Infrastructure as Code with Terraform for repeatable, version-controlled environments',
      'CI/CD pipelines with Jenkins and GitHub Actions feeding containerized Docker deployments',
      'Diagnosed and resolved ALB 503 errors and S3 bucket policy issues in a live environment',
    ],
    tags: ['AWS', 'Kubernetes', 'Terraform', 'Jenkins', 'Docker', 'GitHub'],
    accent: 'violet',
  },
]

export const skillGroups = [
  {
    label: 'cloud_and_devops',
    title: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions', 'Shell Scripting', 'Linux'],
  },
  {
    label: 'backend',
    title: 'Backend & Data',
    items: ['Python', 'Flask', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Supabase', 'REST APIs'],
  },
  {
    label: 'frontend',
    title: 'Frontend',
    items: ['React', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    label: 'monitoring_and_tools',
    title: 'Monitoring & Tools',
    items: ['CloudWatch', 'Grafana', 'Git', 'IAM', 'CI/CD'],
  },
]

export const certifications = [
  {
    name: 'DevOps on AWS: Project Management',
    issuer: 'Coursera',
    status: 'completed',
  },
  {
    name: 'AWS Cloud Practitioner Essentials',
    issuer: 'AWS Skill Builder',
    status: 'completed',
  },
  {
    name: 'Python Crash Course',
    issuer: 'Coursera',
    status: 'completed',
  },
  {
    name: 'Automation and Scripting with Python',
    issuer: 'Coursera',
    status: 'in-progress',
  },
  {
    name: 'DevOps and AI on AWS: CI/CD for Generative AI Applications',
    issuer: 'Coursera',
    status: 'in-progress',
  },
]
