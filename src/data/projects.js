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
    status: 'complete',
    description:
      'Hands-on cloud infrastructure work: standing up and operating an AWS EKS cluster, automating provisioning, and building the delivery pipelines that ship changes into it.',
    highlights: [
      'EKS cluster provisioning and lifecycle management via eksctl and kubectl (Auto Mode)',
      'CI/CD pipelines with Jenkins and GitHub Actions feeding containerized Docker deployments',
      'Diagnosed and resolved ALB 503 errors and S3 bucket policy issues in a live environment',
      'Containerized application deployment with version control and automated delivery workflows',
    ],
    tags: ['AWS', 'Kubernetes', 'Jenkins', 'Docker', 'GitHub', 'AWS CLI'],
    accent: 'amber',
  },
  {
    id: 'helpinghands',
    name: 'HelpingHands',
    subtitle: 'Full-Stack Volunteering Platform with Kubernetes Deployment',
    status: 'complete',
    description:
      'Developed and deployed a full-stack volunteering platform using React.js, FastAPI, and PostgreSQL. Containerized services, built CI/CD pipelines, and deployed on Kubernetes with AWS RDS backend.',
    highlights: [
      'Developed and deployed a full-stack volunteering platform using React.js, FastAPI, and PostgreSQL',
      'Dockerized frontend and backend services, built Docker images, and pushed images to Docker Hub for deployment',
      'Deployed containerized applications on Kubernetes using Deployments and Services, with the backend connected to AWS RDS PostgreSQL',
      'Built and maintained a Jenkins CI/CD pipeline to automate Docker image builds, registry pushes, and Kubernetes deployments',
      'Configured application environment variables and Kubernetes Secrets for secure runtime configuration',
      'Used GitHub for version control and managed application source code and deployment configurations',
      'Configured AWS infrastructure and Amazon EKS to support scalable Kubernetes-based application deployment',
    ],
    tags: ['React.js', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS RDS', 'Jenkins', 'Git'],
    accent: 'amber',
  },
]

export const skillGroups = [
  {
    label: 'cloud_and_devops',
    title: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Git', 'GitHub', 'Linux', 'Shell Scripting', 'Nginx', 'Helm (Basic)'],
  },
  {
    label: 'backend',
    title: 'Backend & Data',
    items: ['Python', 'FastAPI', 'Flask', 'Jinja', 'SQLAlchemy', 'PostgreSQL'],
  },
  {
    label: 'frontend',
    title: 'Frontend',
    items: ['React', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    label: 'monitoring_and_tools',
    title: 'Monitoring & Tools',
    items: ['Prometheus', 'Grafana', 'CI/CD', 'Cloud Monitoring', 'Infrastructure Automation', 'Troubleshooting'],
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
