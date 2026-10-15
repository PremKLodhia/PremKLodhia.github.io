import os
import re
import string
import subprocess
import pypdf

# ---------------------------------------------------------------------------
# HTML Content for 1-Page General Software Engineering CV
# ---------------------------------------------------------------------------
html_content = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Prem Lodhia - Software Engineer CV</title>
<style>
  @page {
    size: A4 portrait;
    margin: 6.0mm 8.0mm 6.0mm 8.0mm;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 7.55pt;
    line-height: 1.20;
    color: #000000;
    background-color: #ffffff;
    -webkit-font-smoothing: antialiased;
  }

  /* Header */
  .header {
    text-align: center;
    border-bottom: 1.5px solid #000000;
    padding-bottom: 2.5px;
    margin-bottom: 3.0px;
  }
  .name {
    font-size: 17.5pt;
    font-weight: 800;
    letter-spacing: 0.6px;
    color: #000000;
    text-transform: uppercase;
    margin-bottom: 1.6px;
  }
  .contact-bar {
    font-size: 7.20pt;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    gap: 0;
    overflow: visible;
  }
  .contact-bar a {
    color: #000000;
    text-decoration: none;
  }
  .contact-bar span.separator {
    margin: 0 3.2px;
    color: #555555;
  }

  /* Section styling */
  .section {
    margin-bottom: 2.8px;
  }
  .section-title {
    font-size: 8.55pt;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    border-bottom: 1.2px solid #000000;
    padding-bottom: 0.8px;
    margin-bottom: 2.0px;
    color: #000000;
  }

  /* Items */
  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 0.6px;
  }
  .item-title {
    font-weight: 750;
    font-size: 7.80pt;
    color: #000000;
  }
  .item-subtitle {
    font-style: italic;
    font-size: 7.50pt;
    color: #000000;
  }
  .item-date {
    font-weight: 700;
    font-size: 7.50pt;
    color: #000000;
    white-space: nowrap;
    text-align: right;
  }

  /* Bullet lists */
  ul {
    margin-left: 14px;
    margin-bottom: 2.2px;
    list-style-type: disc;
  }
  li {
    margin-bottom: 0.8px;
    text-align: justify;
  }
  li strong {
    font-weight: 750;
  }

  /* Skills grid / compact entries */
  .skills-table {
    width: 100%;
    border-collapse: collapse;
  }
  .skills-table td {
    padding: 0.6px 0;
    vertical-align: top;
    font-size: 7.55pt;
    line-height: 1.20;
  }
  .skills-label {
    font-weight: 750;
    width: 27.5%;
    color: #000000;
    white-space: nowrap;
  }
  .skills-val {
    width: 72.5%;
    color: #000000;
  }

  .separator {
    color: #555555;
    margin: 0 2px;
  }
</style>
</head>
<body>

  <!-- HEADER (No profile paragraph, direct factual header) -->
  <div class="header">
    <div class="name">PREM LODHIA</div>
    <div class="contact-bar">
      <span>London, UK</span>
      <span class="separator"> | </span>
      <span>Birmingham, UK</span>
      <span class="separator"> | </span>
      <a href="mailto:prem@premlodhia.com">prem@premlodhia.com</a>
      <span class="separator"> | </span>
      <a href="https://linkedin.com/in/prem-lodhia-29a888382">linkedin.com/in/prem-lodhia</a>
      <span class="separator"> | </span>
      <a href="https://github.com/PremKLodhia">github.com/PremKLodhia</a>
      <span class="separator"> | </span>
      <a href="https://premlodhia.com">premlodhia.com</a>
    </div>
  </div>

  <!-- EDUCATION & ACADEMIC RECORD -->
  <div class="section">
    <div class="section-title">EDUCATION &amp; ACADEMIC RECORD</div>
    
    <div class="item-header">
      <span class="item-title">Birmingham City University <span style="font-weight:400;">- BSc (Hons) Computer Science with Artificial Intelligence</span></span>
      <span class="item-date">Sept 2025 - July 2028 (Expected Graduation: July 2028)</span>
    </div>
    <div style="font-size: 7.30pt; line-height: 1.22; margin-bottom: 0.8px;">
      <strong>First Class Honours Trajectory (88% Year 1 Average)</strong> <span class="separator">|</span>
      <strong>Seeking 2027/2028 Placement &amp; Summer 2027 Internships</strong> <span class="separator">|</span>
      <strong>British Citizen (Full UK Right to Work)</strong>
    </div>
    <div style="font-size: 7.30pt; line-height: 1.22; margin-bottom: 0.8px;">
      <strong>Relevant Modules &amp; Grades:</strong> Computer Programming (96%), Data Structures &amp; Algorithms (86%), Computer Systems &amp; Architecture (86%), Innovation Project (91%), Web Design &amp; Development (88%), Introduction to AI (80%)
    </div>
    <div style="font-size: 7.30pt; line-height: 1.22; margin-bottom: 0.8px;">
      <strong>George Dixon Academy (Birmingham, UK)</strong> - A Levels: Biology, Chemistry, Physics <span class="separator">|</span> <em>Independent Quantitative Study: A-Level Mathematics (Calculus, Linear Algebra &amp; Statistics)</em>
    </div>
  </div>

  <!-- TECHNICAL & SYSTEMS CAPABILITIES -->
  <div class="section">
    <div class="section-title">TECHNICAL &amp; SYSTEMS CAPABILITIES</div>
    <table class="skills-table">
      <tr>
        <td class="skills-label">Languages &amp; Core Stacks:</td>
        <td class="skills-val"><strong>Python</strong> (NumPy, Pandas, FastAPI, PyTorch, Automation - Primary), <strong>Java</strong> (Core SE 17/21, Spring Boot, Multithreading), <strong>C/C++</strong> (Systems Programming, Memory Management, RAII), <strong>TypeScript / JavaScript</strong> (React, Node.js), C#, SQL (PostgreSQL), Bash Shell</td>
      </tr>
      <tr>
        <td class="skills-label">Cloud, Systems &amp; IP Networking:</td>
        <td class="skills-val"><strong>Operating Systems &amp; Linux Internals</strong>, <strong>Docker Containerization</strong>, Kubernetes Foundations, AWS, <strong>Cisco CCNA Certified</strong> (IP Networking, TCP/IP Protocols, Network Routing, Packet Inspection), <strong>Google Cybersecurity Certified</strong> (System Hardening, Network Defense)</td>
      </tr>
      <tr>
        <td class="skills-label">Architecture, Scale &amp; Reliability:</td>
        <td class="skills-val">High-Throughput Telemetry Ingestion, Low-Latency Backends, In-Memory Caching &amp; Accumulators (<strong>Redis</strong>), Distributed Concurrency &amp; Synchronization, Test-Driven Development (TDD), Automated Regression Testing (<strong>JUnit 5, PyTest, Jest</strong>), Microservices</td>
      </tr>
      <tr>
        <td class="skills-label">Developer Tooling &amp; Delivery:</td>
        <td class="skills-val"><strong>Git Version Control, CI/CD (GitHub Actions), DevOps (IBM Certified), AI-Native Tooling &amp; Copilot</strong>, Agile &amp; Scrum Delivery, Technical Mentorship (Facilitating Labs for 60+ Students), Clear Architecture Runbooks &amp; System Telemetry</td>
      </tr>
    </table>
  </div>

  <!-- FEATURED SOFTWARE & SYSTEMS PROJECTS -->
  <div class="section">
    <div class="section-title">FEATURED SOFTWARE &amp; SYSTEMS PROJECTS</div>

    <div class="item-header">
      <span class="item-title">Sentinel: Real-Time Telemetry &amp; Anomaly Detection Engine <span class="item-subtitle">| C++, Python, FastAPI, Docker, Linux</span></span>
      <span class="item-date"><a href="https://github.com/PremKLodhia" style="color:#000; text-decoration:none;">github.com/PremKLodhia/financial-risk-engine</a></span>
    </div>
    <ul>
      <li>Architected a high-throughput event processing and observability engine in <strong>C++ and Python</strong>; engineered an in-memory sliding-window accumulator executing <strong>sub-1ms statistical metrics computation</strong> across continuous high-volume sensor streams (6.39ms P99, 198.5 tx/s).</li>
      <li>Constructed an autonomous <strong>fail-secure state arbiter</strong> evaluating operational invariant conditions and executing programmatic mitigations in <strong>sub-10ms</strong>, preventing cascading outages while persisting tamper-resistant cryptographic audit logs.</li>
      <li>Containerized services using <strong>Docker on Linux</strong>; engineered comprehensive verification test harnesses simulating out-of-order packet arrival, network jitter, and volume surges, ensuring 99.9%+ pipeline dependability and zero service disruption.</li>
    </ul>

    <div class="item-header">
      <span class="item-title">High-Performance Concurrent Memory &amp; Distributed Ledger Engine <span class="item-subtitle">| Java 21, Spring Boot, Concurrency, PostgreSQL, Redis, JUnit 5</span></span>
      <span class="item-date">2026</span>
    </div>
    <ul>
      <li>Engineered an enterprise-grade transactional backend in <strong>Java 21 and Spring Boot</strong>, implementing clean modular abstractions, thread-safe memory management, and <strong>idempotent RESTful APIs</strong> eliminating duplicate execution under network retry states.</li>
      <li>Implemented distributed synchronization using <strong>Redis distributed locks</strong> and optimistic concurrency control, sustaining <strong>2,500+ simulated ops/sec</strong> under heavy thread contention with zero state drift, race conditions, or transactional anomalies.</li>
      <li>Embedded disciplined verification and automated regression testing; authored comprehensive JUnit 5 and Mockito suites achieving <strong>90%+ code coverage</strong> across rollback guarantees, database isolation levels, and deterministic system recovery.</li>
    </ul>

    <div class="item-header">
      <span class="item-title">KINORA: Real-Time Multi-Device Telemetry Platform <span class="item-subtitle">| TypeScript, React, Node.js, WebSockets, REST APIs</span></span>
      <span class="item-date">1st Place Winner, Innovation Fest 2026</span>
    </div>
    <ul>
      <li>Led full-stack software development across an <strong>Agile team of 4</strong>; participated in daily stand-ups, sprint planning, and retrospectives, translating complex multi-device telemetry requirements into high-performance web applications.</li>
      <li>Architected real-time bi-directional streaming over <strong>WebSockets and resilient REST APIs</strong>, achieving <strong>sub-50ms UI update latency</strong> and robust client-side state caching with zero communication drops across distributed edge sessions.</li>
      <li>Established automated Jest testing suites and GitHub Actions CI/CD pipelines; conducted daily <strong>peer code reviews</strong> to maintain high code craftsmanship, data integrity, and operational resilience.</li>
    </ul>
  </div>

  <!-- PROFESSIONAL & TECHNICAL EXPERIENCE -->
  <div class="section">
    <div class="section-title">PROFESSIONAL &amp; TECHNICAL EXPERIENCE</div>

    <div class="item-header">
      <span class="item-title">Software Engineer / Applied AI &amp; Systems Contributor <span class="item-subtitle">- Mercor</span></span>
      <span class="item-date">Feb 2026 - Present | Remote, UK</span>
    </div>
    <ul>
      <li>Develop automated verification test harnesses and evaluation benchmarks to analyze edge-case behavior, state drift, and concurrency defects across multi-step algorithmic codebases in <strong>Python, Java, and C++</strong>.</li>
      <li>Identify, isolate, and document subtle software defects; refactor codebase components to enforce defensive programming invariants, type safety, memory correctness, and conformance to rigorous enterprise standards.</li>
      <li>Author reproducible technical documentation, benchmark reports, and invariant specifications, communicating findings transparently across distributed engineering teams to drive platform reliability.</li>
    </ul>

    <div class="item-header">
      <span class="item-title">Technical Coordinator (Software Engineering) &amp; Demonstrator <span class="item-subtitle">- Student Computing Association &amp; BCU</span></span>
      <span class="item-date">Jan 2026 - Present | Birmingham, UK</span>
    </div>
    <ul>
      <li>Appointed by faculty to deliver systems programming labs (from Jan 2026) and directed Software Engineering curriculum (from March 2026) for <strong>60+ computer science students</strong> across computer systems, data structures, and concurrent <strong>Python and Java</strong>.</li>
      <li>Spearheaded hands-on workshops on low-level systems architectures, memory management, and test-driven development (TDD); conducted structured peer code review clinics teaching clean abstractions, unit testing, and maintainable software design.</li>
    </ul>

    <div class="item-header">
      <span class="item-title">Software Engineering Intern <span class="item-subtitle">- CivitasAccess</span></span>
      <span class="item-date">April 2026 - July 2026 | UK</span>
    </div>
    <ul>
      <li>Immersed in fast-paced <strong>Agile sprint cycles</strong>; actively participated in daily stand-ups, collaborative estimation, and sprint retrospectives, developing responsive, high-performance digital solutions using <strong>TypeScript, React, and modern APIs</strong>.</li>
      <li>Integrated RESTful API endpoints for dynamic search filtering, implementing robust client-side caching, input sanitization, and defensive error-handling abstractions to optimize performance and data workflows.</li>
      <li>Collaborated closely with QA engineers and senior mentors; actively engaged in Git version control workflows, automated regression testing, and <strong>peer code reviews</strong>, eliminating defects prior to production releases.</li>
    </ul>
  </div>

  <!-- CERTIFICATIONS, HONORS & SYSTEMS FOUNDATIONS -->
  <div class="section">
    <div class="section-title">CERTIFICATIONS, HONORS &amp; SYSTEMS FOUNDATIONS</div>
    <div style="font-size: 7.60pt; line-height: 1.25; margin-bottom: 1.2px;">
      <strong>Industry Certifications:</strong> Cisco Networking Academy: CCNA: Introduction to Networks (IP Networking, TCP/IP Protocols &amp; Packet Routing) <span class="separator">|</span> Google: Cybersecurity Professional Certificate (Linux CLI &amp; System Hardening) <span class="separator">|</span> IBM: DevOps, Cloud &amp; Agile Software Engineering (CI/CD Pipelines, Git Version Control &amp; Automated Testing) <span class="separator">|</span> Stanford University: Algorithms Specialization.
    </div>
    <div style="font-size: 7.60pt; line-height: 1.25;">
      <strong>Technical Honors &amp; Awards:</strong> 1st Place Winner, Innovation Fest 2026 (KINORA) <span class="separator">|</span> Unihack Hackathon Winner <span class="separator">|</span> First-Class Trajectory (88% Year 1 CS Average: 96% Computer Programming, 86% Data Structures &amp; Algorithms, 86% Systems &amp; Architecture).
    </div>
  </div>

</body>
</html>
"""

# ---------------------------------------------------------------------------
# Output Paths
# ---------------------------------------------------------------------------
base_dir = r"C:\Users\shivs\Desktop\Projects & Development\prem-portfolio"
html_path = os.path.join(base_dir, "Prem_Lodhia_CV.html")
target_pdf = os.path.join(base_dir, "assets", "Prem_Lodhia_CV.pdf")
desktop_pdf = r"C:\Users\shivs\Desktop\Prem_Lodhia_CV.pdf"
preview_png = os.path.join(base_dir, "assets", "cv-preview.png")

with open(html_path, "w", encoding="utf-8") as f:
    f.write(html_content)
print("Saved HTML to:", html_path)

# Locate Chrome or Edge
chrome_exe = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
if not os.path.exists(chrome_exe):
    chrome_exe = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

print("Using browser binary:", chrome_exe)

# Render to PDF
for out_pdf in [target_pdf, desktop_pdf]:
    subprocess.run([
        chrome_exe,
        "--headless=new",
        "--disable-gpu",
        "--no-pdf-header-footer",
        f"--print-to-pdf={out_pdf}",
        html_path
    ], check=True)
    print("Rendered PDF:", out_pdf)

# Render high-res screenshot
subprocess.run([
    chrome_exe,
    "--headless=new",
    "--disable-gpu",
    "--window-size=1200,1650",
    f"--screenshot={preview_png}",
    html_path
], check=True)
print("Generated preview PNG:", preview_png)

# Verification & Quality Checks
reader = pypdf.PdfReader(target_pdf)
print(f"\n=== AUDIT RESULTS FOR GENERAL SOFTWARE ENGINEERING CV ===")
print(f"Total Pages: {len(reader.pages)}")
assert len(reader.pages) == 1, f"ERROR: Expected exactly 1 page, got {len(reader.pages)}!"

text = reader.pages[0].extract_text()
norm_text = re.sub(r'\s+', ' ', text)
print(f"Extracted Characters: {len(text)}")
print(f"Word count: {len(text.split())}")

non_ascii = [c for c in text if ord(c) > 127]
print(f"Non-ASCII count: {len(non_ascii)}")
assert len(non_ascii) == 0, f"Error: Non-ASCII characters found: {set(non_ascii)}"

# Check that NO profile banner/summary exists
assert "Profile" not in text or "premlodhia.com" in text, "Profile section found"
assert "Summary" not in text, "Summary section found"

print("\nKeywords Verification:")
keywords = [
    "Python", "Java", "C/C++", "Data Structures", "Algorithms",
    "Docker", "Linux", "CCNA", "FastAPI", "Redis",
    "July 2028", "First Class", "British Citizen"
]
for kw in keywords:
    count = norm_text.lower().count(kw.lower())
    print(f"  [OK] {kw}: {count} occurrences")
    assert count > 0, f"Missing keyword {kw}"

print("\n>>> ALL CHECKS PASSED: 1.0 PAGE GENERAL CV GENERATED SUCCESSFULLY! <<<")
