/**
 * =======================================================================
 * PORTFOLIO CONFIGURATION - SEGUN OFE
 * =======================================================================
 * Easily customize your personal details, links, media, projects, 
 * skills, and certifications below.
 */

// Image assets (generated for production-grade reliability)
import heroBgImage from '@/src/assets/images/hero_cloud_mesh_1791333998674.jpg';
import avatarImage from '@/src/assets/images/segun_ofe_avatar_1791334067023.jpg';
import k8sProjectImage from '@/src/assets/images/project_multicloud_k8s_1791334010524.jpg';
import landingZoneImage from '@/src/assets/images/project_landing_zone_1791334020375.jpg';
import aksProjectImage from '@/src/assets/images/project_observability_1791334031017.jpg';
import gitopsProjectImage from '@/src/assets/images/project_gitops_cicd_1791334137630.jpg';
import aiCloudOpsImage from '@/src/assets/images/project_agentic_cloudops_1791334040937.jpg';
import otelMeshImage from '@/src/assets/images/project_opentelemetry_mesh_1791334146851.jpg';

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  architectureSummary: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  image: string;
  category: 'cloud' | 'kubernetes' | 'iac' | 'devops' | 'ai';
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: 'Google Cloud' | 'Amazon Web Services' | 'HashiCorp';
  level: string;
  badgeColor: string;
  verifyText: string;
}

export interface WhatIDoItem {
  title: string;
  subtitle: string;
  description: string;
  iconName: 'cloud' | 'code' | 'cpu' | 'activity';
  technologies: string[];
}

export const PORTFOLIO_DATA = {
  // Brand & Identity
  brand: {
    name: 'Segun Ofe',
    initials: 'SO',
    primaryHeadline: 'Cloud & Infrastructure Engineer',
    secondaryHeadline: 'Cloud Architecture • DevOps • Automation • Infrastructure as Code',
    shortIntro: 'I design and automate scalable, secure cloud infrastructure across AWS, Azure, and Google Cloud.',
    heroStatement: 'Building reliable cloud infrastructure, automation, and modern platforms.',
    avatarUrl: avatarImage,
    heroBackground: heroBgImage,
  },

  // Social & Professional Links
  links: {
    github: 'https://github.com/segunofe/',
    linkedin: 'https://www.linkedin.com/in/segunofe/',
    // Configurable resume download URL - points to /resume.pdf
    resumeUrl: '/resume.pdf',
    // Introductory YouTube video
    videoUrl: 'https://youtu.be/zck2TjZDhNE?is=NyPBZAisdP2NK6cT',
    videoEmbedId: 'zck2TjZDhNE',
    videoSubtitle: 'Cloud infrastructure, DevOps, automation, and AI engineering.',
  },

  // Navigation Links
  navItems: [
    { label: 'Home', href: '#hero' },
    { label: 'Meet Segun', href: '#meet' },
    { label: 'What I Do', href: '#what-i-do' },
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Approach', href: '#approach' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ],

  // What I Do (Exactly 4 cards requested)
  whatIDo: [
    {
      title: 'Cloud Architecture',
      subtitle: 'AWS • Azure • Google Cloud',
      description: 'Designing fault-tolerant, secure, and cost-optimized multi-cloud foundations.',
      iconName: 'cloud',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Multi-Cloud'],
    },
    {
      title: 'Infrastructure as Code',
      subtitle: 'Terraform • Automation',
      description: 'Provisioning declarative, auditable, and immutable cloud infrastructure across environments.',
      iconName: 'code',
      technologies: ['Terraform', 'Ansible', 'IaC Modules', 'Policy as Code'],
    },
    {
      title: 'DevOps & Platform Engineering',
      subtitle: 'Kubernetes • Docker • CI/CD • GitOps',
      description: 'Streamlining delivery through container orchestration and automated GitOps pipelines.',
      iconName: 'cpu',
      technologies: ['Kubernetes', 'Docker', 'GitHub Actions', 'Argo CD'],
    },
    {
      title: 'Observability & Reliability',
      subtitle: 'Prometheus • Grafana • Datadog • OpenTelemetry',
      description: 'Implementing full-stack metrics, distributed tracing, and automated incident alerting.',
      iconName: 'activity',
      technologies: ['Prometheus', 'Grafana', 'Datadog', 'OpenTelemetry'],
    },
  ] as WhatIDoItem[],

  // Cloud & Technology Categories
  technologyCategories: [
    {
      category: 'Cloud',
      description: 'Multi-cloud design, virtual networking, and managed compute',
      items: [
        { name: 'AWS', level: 'Core', highlight: 'EKS, VPC, IAM, Transit Gateway, S3' },
        { name: 'Azure', level: 'Core', highlight: 'AKS, VNet, App Services, Entra ID' },
        { name: 'Google Cloud', level: 'Core', highlight: 'GKE, Cloud Run, VPC, IAM' },
      ],
    },
    {
      category: 'Infrastructure',
      description: 'Declarative configuration, state management, and orchestration',
      items: [
        { name: 'Terraform', level: 'Core', highlight: 'Modular IaC, Remote Backends, Drift Control' },
        { name: 'Ansible', level: 'Core', highlight: 'Configuration Management, OS Hardening' },
        { name: 'Docker', level: 'Core', highlight: 'Multi-stage builds, Container Hardening' },
        { name: 'Kubernetes', level: 'Core', highlight: 'Cluster Operations, Ingress, RBAC, CNI' },
        { name: 'Helm', level: 'Core', highlight: 'Declarative Chart Packaging & Releases' },
      ],
    },
    {
      category: 'DevOps',
      description: 'Automated continuous delivery, GitOps, and pipeline security',
      items: [
        { name: 'CI/CD', level: 'Core', highlight: 'Automated Testing, Build & Zero-Downtime Deploy' },
        { name: 'GitHub Actions', level: 'Core', highlight: 'Reusable Workflows, OIDC Auth, Security Scans' },
        { name: 'GitOps', level: 'Core', highlight: 'Declarative State Sync, PR Automation' },
        { name: 'Argo CD', level: 'Core', highlight: 'Kubernetes Continuous Delivery & Sync' },
      ],
    },
    {
      category: 'Observability',
      description: 'Deep distributed telemetry, SLO tracking, and metrics visualization',
      items: [
        { name: 'Prometheus', level: 'Core', highlight: 'Metrics Scraping, Alertmanager Rules' },
        { name: 'Grafana', level: 'Core', highlight: 'Executive & Cluster Health Dashboards' },
        { name: 'Datadog', level: 'Core', highlight: 'Unified APM, Infrastructure & Log Monitoring' },
        { name: 'OpenTelemetry', level: 'Core', highlight: 'Distributed Tracing & Collector Pipelines' },
      ],
    },
    {
      category: 'AI / Cloud',
      description: 'Intelligent CloudOps automation and generative AI integration',
      items: [
        { name: 'Amazon Bedrock', level: 'Advanced', highlight: 'Foundation Model Orchestration' },
        { name: 'AgentCore', level: 'Advanced', highlight: 'Autonomous Ops & Tool Calling' },
        { name: 'Google AI Studio', level: 'Advanced', highlight: 'Rapid Prototyping & Gemini APIs' },
        { name: 'AI Agents', level: 'Advanced', highlight: 'Automated Diagnostic & Remediation Workflows' },
      ],
    },
  ],

  // Selected Work (5-6 Strongest Projects)
  projects: [
    {
      id: 'multicloud-k8s',
      title: 'Multi-Cloud Kubernetes Platform',
      shortDescription: 'Production-ready EKS and GKE cluster infrastructure provisioned with Terraform and synchronized via Argo CD GitOps.',
      architectureSummary: 'Automated dual-cloud container orchestration platform leveraging Terraform modules for AWS EKS and Google Cloud GKE. Features centralized ingress controllers, cert-manager automated TLS, Calico network security policies, and Argo CD GitOps repository synchronization with zero-downtime rolling upgrades.',
      technologies: ['AWS', 'Google Cloud', 'Terraform', 'Kubernetes', 'Argo CD'],
      githubUrl: 'https://github.com/segunofe/multi-cloud-k8s-platform',
      demoUrl: 'https://github.com/segunofe/multi-cloud-k8s-platform#architecture-walkthrough',
      image: k8sProjectImage,
      category: 'kubernetes',
    },
    {
      id: 'aws-landing-zone',
      title: 'Enterprise AWS Landing Zone & IaC',
      shortDescription: 'Secure multi-account AWS architecture with automated VPC peering, Transit Gateway, and baseline IAM security policies.',
      architectureSummary: 'Modular Terraform framework implementing AWS Well-Architected Framework principles. Automates hub-and-spoke networking with AWS Transit Gateway, centralized egress inspection, AWS Organizations SCPs, and automated OIDC authentication eliminating hardcoded static access keys.',
      technologies: ['AWS', 'Terraform', 'Transit Gateway', 'IAM', 'GitHub Actions'],
      githubUrl: 'https://github.com/segunofe/terraform-aws-enterprise-landing-zone',
      demoUrl: 'https://github.com/segunofe/terraform-aws-enterprise-landing-zone#network-topology',
      image: landingZoneImage,
      category: 'iac',
    },
    {
      id: 'azure-aks-observability',
      title: 'Azure AKS Microservices & Observability',
      shortDescription: 'Containerized microservices mesh on Azure Kubernetes Service with end-to-end distributed tracing and Grafana dashboards.',
      architectureSummary: 'Full-stack platform on Azure Kubernetes Service (AKS) incorporating NGINX Ingress, Azure Key Vault Secrets Store CSI Driver, Prometheus metric scrapers, and unified Grafana visual dashboards displaying cluster memory, pod CPU throttles, and request latency percentiles.',
      technologies: ['Azure', 'AKS', 'Docker', 'Prometheus', 'Grafana'],
      githubUrl: 'https://github.com/segunofe/azure-aks-microservices-observability',
      demoUrl: 'https://github.com/segunofe/azure-aks-microservices-observability#telemetry-dashboards',
      image: aksProjectImage,
      category: 'cloud',
    },
    {
      id: 'gitops-cicd-pipeline',
      title: 'Enterprise GitOps CI/CD Automation Engine',
      shortDescription: 'Automated end-to-end delivery pipeline utilizing GitHub Actions, Docker layer caching, and Helm deployment charts.',
      architectureSummary: 'Modern CI/CD automation pipeline configured with security gates, automated unit and lint checks, Trivy container vulnerability scanning, semantic versioning, and automated Helm release generation. Utilizes GitHub OIDC federation with cloud providers for keyless deployments.',
      technologies: ['GitHub Actions', 'Docker', 'Helm', 'CI/CD', 'GitOps'],
      githubUrl: 'https://github.com/segunofe/gitops-cicd-automation-engine',
      demoUrl: 'https://github.com/segunofe/gitops-cicd-automation-engine#pipeline-flow',
      image: gitopsProjectImage,
      category: 'devops',
    },
    {
      id: 'bedrock-ai-cloudops',
      title: 'Autonomous AI CloudOps & Incident Agent',
      shortDescription: 'Intelligent diagnostic agent using Amazon Bedrock and AgentCore to analyze Kubernetes logs and automate remediation workflows.',
      architectureSummary: 'Event-driven CloudOps assistant that connects to CloudWatch and Prometheus alerts, invokes foundation models on Amazon Bedrock to diagnose root causes (OOMKilled pods, CrashLoopBackOff, disk pressure), and suggests validated Terraform patches and kubectl commands.',
      technologies: ['Amazon Bedrock', 'AgentCore', 'AWS', 'Python', 'AI Agents'],
      githubUrl: 'https://github.com/segunofe/bedrock-agentic-cloud-ops',
      demoUrl: 'https://github.com/segunofe/bedrock-agentic-cloud-ops#agent-workflow',
      image: aiCloudOpsImage,
      category: 'ai',
    },
    {
      id: 'opentelemetry-telemetry-mesh',
      title: 'Multi-Cloud Observability & OpenTelemetry Mesh',
      shortDescription: 'Unified metrics, distributed tracing, and structured logging pipeline across hybrid cloud environments.',
      architectureSummary: 'Standardized telemetry architecture deploying the OpenTelemetry Collector across AWS and Google Cloud workloads. Ingests trace spans and logs, enriches them with cloud resource metadata, and routes telemetry seamlessly into Datadog and self-hosted Grafana stacks.',
      technologies: ['OpenTelemetry', 'Datadog', 'Prometheus', 'Kubernetes', 'Grafana'],
      githubUrl: 'https://github.com/segunofe/cloud-observability-telemetry-mesh',
      demoUrl: 'https://github.com/segunofe/cloud-observability-telemetry-mesh#trace-architecture',
      image: otelMeshImage,
      category: 'devops',
    },
  ] as ProjectItem[],

  // Architecture / Engineering Approach (Visual Workflow)
  engineeringWorkflow: [
    {
      step: '01',
      title: 'Business Requirements',
      shortSummary: 'Translating availability, compliance, and traffic requirements into architectural objectives.',
      icon: 'target',
    },
    {
      step: '02',
      title: 'Cloud Architecture',
      shortSummary: 'Architecting resilient multi-region, zero-trust cloud topologies across AWS, Azure, or GCP.',
      icon: 'cloud',
    },
    {
      step: '03',
      title: 'Infrastructure as Code',
      shortSummary: 'Codifying all resources with modular Terraform and enforcing policy as code.',
      icon: 'file-code',
    },
    {
      step: '04',
      title: 'Automation & CI/CD',
      shortSummary: 'Building keyless, fast deployment pipelines with security and vulnerability scanning.',
      icon: 'git-merge',
    },
    {
      step: '05',
      title: 'Containers & Kubernetes',
      shortSummary: 'Packaging services into secure containers and deploying to orchestrated Kubernetes clusters.',
      icon: 'box',
    },
    {
      step: '06',
      title: 'Observability',
      shortSummary: 'Instrumenting distributed metrics, structured logging, and proactive alerting.',
      icon: 'activity',
    },
    {
      step: '07',
      title: 'Reliable Cloud Platform',
      shortSummary: 'Delivering resilient, automated, and observable production-grade infrastructure.',
      icon: 'shield-check',
    },
  ],

  // Certifications
  certifications: [
    {
      id: 'gcp-pca',
      name: 'Google Cloud Professional Cloud Architect',
      issuer: 'Google Cloud',
      level: 'Professional',
      badgeColor: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
      verifyText: 'Credential Verified',
    },
    {
      id: 'aws-saa',
      name: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      level: 'Associate',
      badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
      verifyText: 'Credential Verified',
    },
    {
      id: 'gcp-ace',
      name: 'Google Cloud Associate Cloud Engineer',
      issuer: 'Google Cloud',
      level: 'Associate',
      badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10',
      verifyText: 'Credential Verified',
    },
    {
      id: 'hashicorp-terraform',
      name: 'HashiCorp Certified: Terraform Associate',
      issuer: 'HashiCorp',
      level: 'Associate',
      badgeColor: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
      verifyText: 'Credential Verified',
    },
  ] as CertificationItem[],
};
