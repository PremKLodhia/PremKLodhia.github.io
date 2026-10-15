import os
import subprocess

html_templates = {
    "project-hospital": """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #0f141c;
    color: #e2e8f0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    padding: 24px;
    width: 800px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .window {
    background: #182232;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .titlebar {
    background: #111927;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
  .dots { display: flex; gap: 6px; margin-right: 14px; }
  .dot { width: 10px; height: 10px; border-radius: 50%; }
  .dot-red { background: #ff5f56; }
  .dot-yellow { background: #ffbd2e; }
  .dot-green { background: #27c93f; }
  .title { font-size: 12px; color: #94a3b8; font-weight: 500; }
  
  .content { padding: 16px 20px; flex: 1; display: flex; flex-direction: column; gap: 14px; }
  
  .stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
  .stat-card {
    background: #0e1726;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 8px;
    padding: 10px 12px;
  }
  .stat-lbl { font-size: 10px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600; }
  .stat-val { font-size: 17px; font-weight: 700; color: #f8fafc; margin-top: 3px; font-variant-numeric: tabular-nums; }
  .stat-sub { font-size: 10px; color: #10b981; margin-top: 2px; }

  .table-card {
    background: #0e1726;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 8px;
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .table-header-bar {
    padding: 10px 14px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .table-title { font-size: 12px; font-weight: 600; color: #cbd5e1; }
  .badge-live { background: rgba(16, 185, 129, 0.15); color: #34d399; font-size: 9px; padding: 2px 8px; border-radius: 99px; font-weight: 600; }

  table { width: 100%; border-collapse: collapse; font-size: 11px; text-align: left; }
  th { background: rgba(255,255,255,0.02); color: #64748b; font-weight: 600; padding: 8px 14px; border-bottom: 1px solid rgba(255,255,255,0.06); }
  td { padding: 9px 14px; border-bottom: 1px solid rgba(255,255,255,0.04); color: #cbd5e1; }
  tr:last-child td { border-bottom: none; }
  
  .badge { display: inline-block; padding: 2px 7px; border-radius: 4px; font-size: 9.5px; font-weight: 700; letter-spacing: 0.3px; }
  .badge-emergency { background: rgba(239, 68, 68, 0.2); color: #f87171; border: 1px solid rgba(239,68,68,0.4); }
  .badge-urgent { background: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid rgba(245,158,11,0.4); }
  .badge-stable { background: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid rgba(16,185,129,0.4); }
  .badge-routine { background: rgba(59, 130, 246, 0.2); color: #60a5fa; border: 1px solid rgba(59,130,246,0.4); }
</style>
</head>
<body>
  <div class="window">
    <div class="titlebar">
      <div class="dots"><div class="dot dot-red"></div><div class="dot dot-yellow"></div><div class="dot dot-green"></div></div>
      <div class="title">HMS Portal — Clinical Administration, Inpatient Triage &amp; Bed Capacity</div>
    </div>
    <div class="content">
      <div class="stats-row">
        <div class="stat-card">
          <div class="stat-lbl">Bed Occupancy</div>
          <div class="stat-val">142 / 160</div>
          <div class="stat-sub">88.7% Capacity (Normal)</div>
        </div>
        <div class="stat-card">
          <div class="stat-lbl">Triage Queue</div>
          <div class="stat-val">14 Waiting</div>
          <div class="stat-sub">Avg Wait: 9.2 mins</div>
        </div>
        <div class="stat-card">
          <div class="stat-lbl">Active Physicians</div>
          <div class="stat-val">18 On Duty</div>
          <div class="stat-sub">ER, ICU &amp; Surgical</div>
        </div>
        <div class="stat-card">
          <div class="stat-lbl">Pending Discharges</div>
          <div class="stat-val">9 Scheduled</div>
          <div class="stat-sub">Beds Available at 14:00</div>
        </div>
      </div>
      
      <div class="table-card">
        <div class="table-header-bar">
          <div class="table-title">Live Inpatient Triage &amp; Status Ledger</div>
          <div class="badge-live">● REAL-TIME SYNC</div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Ward / Room</th>
              <th>Clinical Condition</th>
              <th>Attending Physician</th>
              <th>Triage Priority</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>#P-8098</strong></td>
              <td>Trauma Bay 02</td>
              <td>Acute Coronary Syndrome</td>
              <td>Dr. Marcus Thorne</td>
              <td><span class="badge badge-emergency">EMERGENCY</span></td>
              <td><span style="color: #f87171;">ICU Transfer</span></td>
            </tr>
            <tr>
              <td><strong>#P-8092</strong></td>
              <td>Acute Care W-04</td>
              <td>Post-Op Knee Arthroplasty</td>
              <td>Dr. Sarah Jenkins</td>
              <td><span class="badge badge-urgent">URGENT</span></td>
              <td><span style="color: #fbbf24;">Monitoring</span></td>
            </tr>
            <tr>
              <td><strong>#P-8104</strong></td>
              <td>Cardiology 12B</td>
              <td>Arrhythmia Telemetry</td>
              <td>Dr. Claire Vance</td>
              <td><span class="badge badge-stable">STABLE</span></td>
              <td><span style="color: #34d399;">Medication Admin</span></td>
            </tr>
            <tr>
              <td><strong>#P-8111</strong></td>
              <td>General W-09</td>
              <td>Respiratory Assessment</td>
              <td>Dr. Eric Davies</td>
              <td><span class="badge badge-routine">ROUTINE</span></td>
              <td><span style="color: #60a5fa;">Pending X-Ray</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</body>
</html>""",

    "project-agent": """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #0d1117;
    color: #c9d1d9;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, monospace;
    padding: 24px;
    width: 800px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .window {
    background: #161b22;
    border: 1px solid #30363d;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0,0,0,0.6);
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .titlebar {
    background: #0d1117;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #30363d;
  }
  .dots { display: flex; gap: 6px; margin-right: 14px; }
  .dot { width: 10px; height: 10px; border-radius: 50%; }
  .dot-red { background: #ff5f56; }
  .dot-yellow { background: #ffbd2e; }
  .dot-green { background: #27c93f; }
  .title { font-size: 12px; color: #8b949e; font-family: sans-serif; font-weight: 500; }

  .split-pane { display: grid; grid-template-columns: 310px 1fr; flex: 1; overflow: hidden; }
  
  .pane-left {
    background: #0d1117;
    border-right: 1px solid #30363d;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-family: sans-serif;
  }
  .problem-badge { background: rgba(56, 139, 253, 0.15); color: #58a6ff; font-size: 10px; padding: 3px 8px; border-radius: 4px; font-weight: 600; width: fit-content; }
  .problem-title { font-size: 15px; font-weight: 700; color: #f0f6fc; }
  .problem-desc { font-size: 11px; line-height: 1.5; color: #8b949e; }
  .constraint { font-size: 10.5px; background: rgba(255,255,255,0.03); border: 1px solid #30363d; border-radius: 6px; padding: 8px 10px; color: #c9d1d9; }

  .telemetry-box {
    margin-top: auto;
    background: #161b22;
    border: 1px solid #30363d;
    border-radius: 6px;
    padding: 10px;
    font-size: 10.5px;
  }
  .telemetry-row { display: flex; justify-content: space-between; margin-bottom: 4px; }
  .telemetry-val { color: #3fb950; font-weight: 600; font-variant-numeric: tabular-nums; }

  .pane-right {
    background: #161b22;
    padding: 14px 18px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-family: "SF Mono", Consolas, "Liberation Mono", Menlo, monospace;
    font-size: 11px;
    line-height: 1.5;
  }
  .code-line { display: flex; gap: 14px; }
  .ln { color: #484f58; user-select: none; width: 20px; text-align: right; }
  .kw { color: #ff7b72; font-weight: 600; }
  .fn { color: #d2a8ff; }
  .cls { color: #ffa657; }
  .str { color: #a5d6ff; }
  .cmt { color: #8b949e; font-style: italic; }

  .test-terminal {
    margin-top: auto;
    background: #0d1117;
    border: 1px solid #30363d;
    border-radius: 6px;
    padding: 10px 14px;
    font-size: 10.5px;
  }
  .test-pass { color: #3fb950; font-weight: 600; }
</style>
</head>
<body>
  <div class="window">
    <div class="titlebar">
      <div class="dots"><div class="dot dot-red"></div><div class="dot dot-yellow"></div><div class="dot dot-green"></div></div>
      <div class="title">AI Technical Interview Simulation Engine — Dual-Pane Assessment IDE</div>
    </div>
    <div class="split-pane">
      <div class="pane-left">
        <div class="problem-badge">HARD &bull; ALGORITHMS</div>
        <div class="problem-title">Binary Tree Max Path Sum</div>
        <div class="problem-desc">
          Given the root of a binary tree, return the maximum path sum of any non-empty path. The path may turn at any node.
        </div>
        <div class="constraint">
          <strong>Constraints:</strong><br>
          &bull; Time: <code>O(N)</code> strictly single traversal<br>
          &bull; Space: <code>O(H)</code> recursive call stack
        </div>
        <div class="telemetry-box">
          <div style="font-weight: 600; color: #f0f6fc; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
            <span style="color: #3fb950;">●</span> AI Voice &amp; Evaluation Agent
          </div>
          <div class="telemetry-row"><span>Audio Streaming Latency:</span><span class="telemetry-val">142 ms</span></div>
          <div class="telemetry-row"><span>Algorithmic Invariants:</span><span class="telemetry-val">Verified</span></div>
          <div class="telemetry-row"><span>Code Space Complexity:</span><span class="telemetry-val">Optimal O(H)</span></div>
        </div>
      </div>
      <div class="pane-right">
        <div class="code-line"><span class="ln">1</span><span><span class="kw">class</span> <span class="cls">Solution</span>:</span></div>
        <div class="code-line"><span class="ln">2</span><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">def</span> <span class="fn">maxPathSum</span>(self, root: Optional[TreeNode]) -> <span class="cls">int</span>:</span></div>
        <div class="code-line"><span class="ln">3</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.max_sum = <span class="fn">float</span>(<span class="str">"-inf"</span>)</span></div>
        <div class="code-line"><span class="ln">4</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">def</span> <span class="fn">gain</span>(node):</span></div>
        <div class="code-line"><span class="ln">5</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">if not</span> node: <span class="kw">return</span> 0</span></div>
        <div class="code-line"><span class="ln">6</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cmt"># Non-negative subtree contribution</span></span></div>
        <div class="code-line"><span class="ln">7</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;left = <span class="fn">max</span>(gain(node.left), 0)</span></div>
        <div class="code-line"><span class="ln">8</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;right = <span class="fn">max</span>(gain(node.right), 0)</span></div>
        <div class="code-line"><span class="ln">9</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.max_sum = <span class="fn">max</span>(self.max_sum, node.val + left + right)</span></div>
        <div class="code-line"><span class="ln">10</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">return</span> node.val + <span class="fn">max</span>(left, right)</span></div>
        <div class="code-line"><span class="ln">11</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gain(root)</span></div>
        <div class="code-line"><span class="ln">12</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">return</span> self.max_sum</span></div>

        <div class="test-terminal">
          <div class="test-pass">✓ All 18 Test Cases Passed (Runtime: 4.8 ms, Memory: 18.2 MB)</div>
          <div style="color: #8b949e; font-size: 9.5px; margin-top: 3px;">[PASSED] Invariant check: Empty nodes &bull; Negative values &bull; Unbalanced subtrees &bull; Max recursion depth</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>""",

    "project-toolkit": """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #000000;
    color: #f1f5f9;
    font-family: "SF Mono", "Fira Code", Menlo, Consolas, monospace;
    padding: 24px;
    width: 800px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .window {
    background: #0a0e14;
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0,0,0,0.7);
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .titlebar {
    background: #121820;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  .dots { display: flex; gap: 6px; margin-right: 14px; }
  .dot { width: 10px; height: 10px; border-radius: 50%; }
  .dot-red { background: #ff5f56; }
  .dot-yellow { background: #ffbd2e; }
  .dot-green { background: #27c93f; }
  .title { font-size: 11.5px; color: #94a3b8; font-family: sans-serif; font-weight: 500; }

  .content {
    padding: 18px 22px;
    flex: 1;
    font-size: 11px;
    line-height: 1.55;
    color: #cbd5e1;
    overflow: hidden;
  }
  .prompt { color: #38bdf8; font-weight: 600; }
  .cmd { color: #f8fafc; font-weight: 600; }
  .section-h { color: #94a3b8; margin: 8px 0 4px 0; border-bottom: 1px dashed rgba(255,255,255,0.12); padding-bottom: 3px; font-weight: 600; }
  .ok { color: #34d399; font-weight: 600; }
  .val { color: #38bdf8; font-weight: 600; font-variant-numeric: tabular-nums; }
  .highlight { color: #fef08a; }
</style>
</head>
<body>
  <div class="window">
    <div class="titlebar">
      <div class="dots"><div class="dot dot-red"></div><div class="dot dot-yellow"></div><div class="dot dot-green"></div></div>
      <div class="title">prem@workstation: ~ &mdash; zsh (sysdiag CLI Telemetry &amp; Benchmark Engine)</div>
    </div>
    <div class="content">
      <div><span class="prompt">prem@workstation</span>:<span style="color:#a855f7;">~/sys-toolkit</span>$ <span class="cmd">./sysdiag --benchmark --audit-invariants --format=json</span></div>
      
      <div class="section-h">[1/4] HARDWARE TOPOLOGY &amp; SUBSYSTEM DISCOVERY</div>
      <div>[+] CPU Architecture : <span class="val">16 Cores / 32 Threads</span> @ 4.5 GHz base (x86_64, AVX-512 enabled)</div>
      <div>[+] Memory Bus Width : <span class="val">64 GB DDR5</span> Dual-Channel (Bandwidth: <span class="val">78.4 GB/s</span>, Paging: <span class="val">0.38 &mu;s</span>)</div>
      <div>[+] Storage Array    : <span class="val">2 TB NVMe PCIe 4.0</span> (Seq Read: <span class="val">6,850 MB/s</span>, Write: <span class="val">5,420 MB/s</span>)</div>
      <div>[+] Network Stack    : <span class="val">10 GbE enp7s0</span> (MTU: 9000 Jumbo, Zero Drops, Jitter: <span class="val">0.08 ms</span>)</div>

      <div class="section-h">[2/4] SYSTEM INVARIANT &amp; INTEGRITY AUDIT</div>
      <div>[<span class="ok">PASS</span>] Kernel Scheduler Preemption Latency .............. <span class="val">1.12 &mu;s</span> (Threshold: &lt;5&mu;s)</div>
      <div>[<span class="ok">PASS</span>] In-Memory Atomic Ring Buffer Mutex Contention .... <span class="val">0.00%</span> (Lock-free verified)</div>
      <div>[<span class="ok">PASS</span>] POSIX Socket Non-blocking Polling Invariant ...... <span class="val">142,000 evt/s</span> (Epoll edge-triggered)</div>
      <div>[<span class="ok">PASS</span>] Zero Unhandled Fault Flags in Ring 0 ............ <span class="ok">COMPLIANT</span> (Audit score: 100/100)</div>

      <div class="section-h">[3/4] TELEMETRY DISPATCH</div>
      <div>[<span class="ok">SUCCESS</span>] Structured JSON payload emitted to <code>/var/log/telemetry.json</code> (64 KB/s)</div>
      <div style="margin-top: 6px;"><span class="prompt">prem@workstation</span>:<span style="color:#a855f7;">~/sys-toolkit</span>$ <span class="highlight">_</span></div>
    </div>
  </div>
</body>
</html>""",

    "project-vault": """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #0b0f19;
    color: #e2e8f0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    padding: 24px;
    width: 800px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .window {
    background: #111827;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0,0,0,0.6);
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .titlebar {
    background: #0c121e;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
  .dots { display: flex; gap: 6px; margin-right: 14px; }
  .dot { width: 10px; height: 10px; border-radius: 50%; }
  .dot-red { background: #ff5f56; }
  .dot-yellow { background: #ffbd2e; }
  .dot-green { background: #27c93f; }
  .title { font-size: 12px; color: #94a3b8; font-weight: 500; }

  .content { padding: 16px 20px; flex: 1; display: flex; flex-direction: column; gap: 14px; }
  .stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
  .stat-card {
    background: #0b1120;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 8px;
    padding: 10px 12px;
  }
  .stat-lbl { font-size: 10px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600; }
  .stat-val { font-size: 16px; font-weight: 700; color: #f8fafc; margin-top: 3px; font-variant-numeric: tabular-nums; }
  .stat-sub { font-size: 10px; color: #10b981; margin-top: 2px; }

  .main-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; flex: 1; }
  .card {
    background: #0b1120;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 8px;
    padding: 12px 14px;
    display: flex;
    flex-direction: column;
  }
  .card-h { font-size: 12px; font-weight: 600; color: #cbd5e1; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center; }

  .log-item { font-family: monospace; font-size: 10.5px; margin-bottom: 7px; color: #94a3b8; line-height: 1.4; }
  .log-time { color: #64748b; margin-right: 6px; }
  .log-ok { color: #34d399; font-weight: 600; }

  .policy-row { display: flex; justify-content: space-between; align-items: center; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 11px; }
  .policy-row:last-child { border-bottom: none; }
  .policy-tag { font-family: monospace; color: #38bdf8; }
</style>
</head>
<body>
  <div class="window">
    <div class="titlebar">
      <div class="dots"><div class="dot dot-red"></div><div class="dot dot-yellow"></div><div class="dot dot-green"></div></div>
      <div class="title">Cloud Infrastructure, FinOps &amp; HashiCorp Vault Secrets Console (AWS eu-west-1)</div>
    </div>
    <div class="content">
      <div class="stats-row">
        <div class="stat-card">
          <div class="stat-lbl">AWS Cost Optimization</div>
          <div class="stat-val">&darr; 28.4% MoM</div>
          <div class="stat-sub">FinOps Invariants Enforced</div>
        </div>
        <div class="stat-card">
          <div class="stat-lbl">Dynamic Secrets</div>
          <div class="stat-val">142 Active Keys</div>
          <div class="stat-sub">HashiCorp Vault Managed</div>
        </div>
        <div class="stat-card">
          <div class="stat-lbl">IAM Least Privilege</div>
          <div class="stat-val">0 Overprivileged</div>
          <div class="stat-sub">Zero Wildcard Policies</div>
        </div>
        <div class="stat-card">
          <div class="stat-lbl">Cluster Health</div>
          <div class="stat-val">12 / 12 Nodes</div>
          <div class="stat-sub">Kubernetes 99.99% Uptime</div>
        </div>
      </div>

      <div class="main-grid">
        <div class="card">
          <div class="card-h"><span>Automated Secret Rotation Stream</span><span style="font-size:9px; color:#34d399;">● VAULT ACTIVE</span></div>
          <div class="log-item"><span class="log-time">10:48:12</span><span class="log-ok">[ROTATE]</span> postgres-cluster-creds &rarr; TTL 3600s</div>
          <div class="log-item"><span class="log-time">10:48:15</span><span class="log-ok">[ENFORCE]</span> IAM session duration capped to 60m</div>
          <div class="log-item"><span class="log-time">10:48:22</span><span class="log-ok">[AUDIT]</span> S3 Bucket Policy: Public access blocked</div>
          <div class="log-item"><span class="log-time">10:48:30</span><span class="log-ok">[REVOKE]</span> Expired ephemeral token: <code>vlt-8402f</code></div>
        </div>

        <div class="card">
          <div class="card-h"><span>Security &amp; Infrastructure Baselines</span><span style="font-size:9px; color:#38bdf8;">CIS BENCHMARK</span></div>
          <div class="policy-row"><span class="policy-tag">AWS KMS Encr-at-Rest</span><span style="color:#34d399; font-weight:600;">ENFORCED</span></div>
          <div class="policy-row"><span class="policy-tag">VPC Flow Logs Enabled</span><span style="color:#34d399; font-weight:600;">ACTIVE</span></div>
          <div class="policy-row"><span class="policy-tag">IMDSv2 Enforced</span><span style="color:#34d399; font-weight:600;">ALL EC2</span></div>
          <div class="policy-row"><span class="policy-tag">Multi-Region Backups</span><span style="color:#34d399; font-weight:600;">SYNCED</span></div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>""",

    "project-bridge": """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #0f172a;
    color: #f8fafc;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    padding: 24px;
    width: 800px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .window {
    background: #1e293b;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0,0,0,0.6);
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .titlebar {
    background: #0f172a;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
  .dots { display: flex; gap: 6px; margin-right: 14px; }
  .dot { width: 10px; height: 10px; border-radius: 50%; }
  .dot-red { background: #ff5f56; }
  .dot-yellow { background: #ffbd2e; }
  .dot-green { background: #27c93f; }
  .title { font-size: 12px; color: #94a3b8; font-weight: 500; }

  .content { padding: 18px 22px; flex: 1; display: flex; flex-direction: column; gap: 14px; }
  
  .search-bar {
    background: #0f172a;
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 8px;
    padding: 9px 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    color: #94a3b8;
  }
  .chips-filter { display: flex; gap: 8px; }
  .f-chip { background: rgba(59, 130, 246, 0.15); color: #60a5fa; font-size: 10px; padding: 3px 10px; border-radius: 99px; font-weight: 600; border: 1px solid rgba(59,130,246,0.3); }

  .events-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; flex: 1; }
  .event-card {
    background: #0f172a;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 8px;
    padding: 12px;
    display: flex;
    flex-direction: column;
  }
  .event-tag { font-size: 9px; font-weight: 700; color: #38bdf8; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
  .event-title { font-size: 13px; font-weight: 700; color: #f8fafc; line-height: 1.3; margin-bottom: 6px; }
  .event-meta { font-size: 11px; color: #94a3b8; margin-top: auto; display: flex; flex-direction: column; gap: 3px; }
  .event-loc { color: #cbd5e1; }
  .badge-attend { background: rgba(16, 185, 129, 0.15); color: #34d399; font-size: 9.5px; padding: 2px 6px; border-radius: 4px; font-weight: 600; width: fit-content; margin-top: 6px; }
</style>
</head>
<body>
  <div class="window">
    <div class="titlebar">
      <div class="dots"><div class="dot dot-red"></div><div class="dot dot-yellow"></div><div class="dot dot-green"></div></div>
      <div class="title">Bridge &mdash; Birmingham Local Community, Tech Meetups &amp; Workshop Index</div>
    </div>
    <div class="content">
      <div class="search-bar">
        <span>🔍 Search 450+ verified community meetups, tech workshops &amp; student sessions in Birmingham...</span>
        <div class="chips-filter">
          <span class="f-chip">Within 5 km</span>
          <span class="f-chip">Tech &amp; SWE</span>
          <span class="f-chip">Free Entry</span>
        </div>
      </div>

      <div class="events-grid">
        <div class="event-card">
          <div class="event-tag">TECHNICAL MEETUP</div>
          <div class="event-title">Midlands Distributed Systems &amp; Low-Latency Java</div>
          <div class="event-meta">
            <div class="event-loc">📍 Alpha Tower, Birmingham</div>
            <div>🗓️ Today &bull; 18:00 - 20:30</div>
            <div class="badge-attend">✓ 48 Attending</div>
          </div>
        </div>

        <div class="event-card">
          <div class="event-tag">HACKATHON</div>
          <div class="event-title">BCU Student Innovation &amp; SWE Hackathon 2026</div>
          <div class="event-meta">
            <div class="event-loc">📍 STEAMhouse Hub</div>
            <div>🗓️ Saturday &bull; 09:30 - 18:00</div>
            <div class="badge-attend">✓ 120 Attending (Full)</div>
          </div>
        </div>

        <div class="event-card">
          <div class="event-tag">WORKSHOP</div>
          <div class="event-title">Applied AI Invariants &amp; Concurrency Clinic</div>
          <div class="event-meta">
            <div class="event-loc">📍 Innovation Centre, B4</div>
            <div>🗓️ Thursday &bull; 17:30 - 19:30</div>
            <div class="badge-attend">✓ 34 Attending</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>"""
}

# Chrome or Edge path
chrome_exe = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
if not os.path.exists(chrome_exe):
    chrome_exe = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

assets_dir = r"C:\Users\shivs\Desktop\Projects & Development\prem-portfolio\assets"

for name, html in html_templates.items():
    tmp_html = os.path.join(assets_dir, f"tmp_{name}.html")
    with open(tmp_html, "w", encoding="utf-8") as f:
        f.write(html)
    
    png_out = os.path.join(assets_dir, f"{name}.png")
    # Take screenshot at 1600x1000 for 2x retina clarity
    subprocess.run([
        chrome_exe,
        "--headless=new",
        "--disable-gpu",
        "--window-size=800,500",
        "--force-device-scale-factor=2",
        f"--screenshot={png_out}",
        tmp_html
    ], check=True)
    
    print(f"Rendered PNG: {png_out}")
    os.remove(tmp_html)

print("All authentic engineering visuals rendered successfully!")
