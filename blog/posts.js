/**
 * Central Blog Posts Database
 *
 * Each post follows this schema:
 * - title: String
 * - slug: String (URL parameter identifier, e.g., 'securing-rag-architectures')
 * - date: String
 * - category: String
 * - tags: Array of Strings
 * - coverImage: String (URL to a high-quality Unsplash image)
 * - excerpt: String
 * - readingTime: String
 * - content: String (Markdown formatted body text)
 */

const blogPosts = [
  {
    title: "BlueTrace Lab: Building a Splunk + Suricata Threat Detection Pipeline",
    slug: "bluetrace-lab-splunk-suricata",
    date: "May 26, 2026",
    category: "Projects",
    tags: ["Splunk", "Suricata", "Detection Engineering", "Docker"],
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    excerpt: "A hands-on lab walkthrough for BlueTrace: deploying Suricata IDS, ingesting network alerts into Splunk, and building detection dashboards for real security telemetry.",
    readingTime: "7 min read",
    content: `# BlueTrace Lab: Building a Splunk + Suricata Threat Detection Pipeline

This lab documents the BlueTrace environment I built to simulate network threats and validate detection coverage.

## Architecture

BlueTrace uses Docker containers to connect **Suricata IDS**, **Filebeat**, and **Splunk Enterprise**. The workflow is:

- Suricata captures packets and writes alerts
- Filebeat forwards structured JSON to Splunk
- Splunk dashboards display alerts, suspicious IPs, and event timelines

## Key detections

I tuned three practical detections for the lab:

- SSH brute force from repeated login failures
- DNS tunneling via unusual TXT requests
- SMB login failures from unknown source IPs

## Outcome

BlueTrace proved the importance of both telemetry quality and signature tuning. The lab is now a reusable detection engineering exercise for Splunk hunt teams.
`
  },
  {
    title: "VulnShop Lab: OWASP Practice Target and Secure App Lessons",
    slug: "vulnshop-lab-owasp-practice-target",
    date: "May 24, 2026",
    category: "Projects",
    tags: ["OWASP", "Node.js", "AppSec", "PenTest"],
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    excerpt: "A project log for VulnShop, a Node.js practice target designed for OWASP Top 10 training and secure application hardening exercises.",
    readingTime: "6 min read",
    content: `# VulnShop Lab: OWASP Practice Target and Secure App Lessons

VulnShop is a Node.js practice target I built to explore common web vulnerabilities and then harden the application against them.

## Core areas covered

- insecure authentication flows
- SQL injection simulation
- cross-site scripting vectors
- session security and secure configuration

## Lessons

This lab is designed as both an attacker-facing practice target and a developer-facing hardening exercise. It reinforced the importance of building secure defaults rather than bolting on protections later.
`
  },

  {
    title: "Detecting Privilege Escalation in AWS CloudTrail Logs",
    slug: "aws-cloudtrail-privilege-escalation",
    date: "May 20, 2026",
    category: "Detection Engineering",
    tags: ["AWS", "Cloud Security", "CloudTrail", "Threat Hunting"],
    coverImage: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Discover how to analyze AWS CloudTrail logs to identify privilege escalation patterns, trace IAM policy alterations, and spot anomalous AssumeRole calls before they result in data exposure.",
    readingTime: "6 min read",
    content: `# Detecting Privilege Escalation in AWS CloudTrail Logs

Privilege escalation is a common adversary objective after initial access. This article walks through CloudTrail event patterns, suspicious IAM changes, and detection logic for escalation activity.

## Detection focus

- CreatePolicyVersion with setAsDefault true
- changes to IAM roles or policies by non-admin identities
- unusual AssumeRole usage from uncommon source IPs

## Best practice

Use structured log search and analytics to catch policy changes early, then combine that with identity risk scoring and alerting.
`
  },
  {
    title: "Securing Retrieval-Augmented Generation (RAG) Architectures",
    slug: "securing-rag-architectures",
    date: "May 15, 2026",
    category: "AI Security",
    tags: ["AI/ML", "RAG", "Prompt Injection", "Data Security"],
    coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    excerpt: "An in-depth guide on identifying vulnerabilities in LLM-powered RAG systems, mitigating prompt injection, and protecting retrieval pipelines.",
    readingTime: "8 min read",
    content: `# Securing Retrieval-Augmented Generation (RAG) Architectures

RAG systems combine vector search with LLMs to answer user queries. This article covers the security gaps that arise when externally sourced documents are mixed into model context.

## Key risks

- prompt injection via retrieved documents
- unauthorized data exposure through vector search results
- insufficient output filtering and guardrails

## Secure approach

- sanitize retrieved document text before context injection
- enforce metadata-based access controls on search results
- use strict prompt delimiters and output validation
`
  }
];
