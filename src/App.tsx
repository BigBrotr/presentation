import { useState, useEffect, useCallback } from 'react'
import './App.css'

function App() {
  const [current, setCurrent] = useState(0)
  const total = 13

  const next = useCallback(() => setCurrent(p => (p + 1) % total), [total])
  const prev = useCallback(() => setCurrent(p => (p - 1 + total) % total), [total])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (['ArrowRight', 'ArrowDown', ' ', 'PageDown'].includes(e.key)) { e.preventDefault(); next() }
      if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) { e.preventDefault(); prev() }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [next, prev])

  const renderSlide = () => {
    switch(current) {
      case 0: // Title
        return (
          <div className="slide center">
            <h1>BigBrotr</h1>
            <p className="subtitle">Infrastructure for Nostr Intelligence</p>
            <div className="tags">
              <span className="tag">Open Source</span>
              <span className="tag">MIT License</span>
              <span className="tag">Python + PostgreSQL</span>
            </div>
          </div>
        )
      case 1: // Question
        return (
          <div className="slide center">
            <p className="question">"How do you get a global view<br/>of a distributed network?"</p>
          </div>
        )
      case 2: // Challenge
        return (
          <div className="slide">
            <h2>The Challenge</h2>
            <ul>
              <li>Events scattered across <span className="highlight">hundreds of independent relays</span></li>
              <li>Each relay is <span className="highlight">ephemeral</span> - can disappear anytime</li>
              <li>No single entity sees the <span className="highlight">whole picture</span></li>
              <li>Unreplicated events are <span className="highlight">lost forever</span></li>
            </ul>
          </div>
        )
      case 3: // What is BigBrotr
        return (
          <div className="slide">
            <h2>What is BigBrotr?</h2>
            <div className="grid-2">
              <div>
                <h3>Core Infrastructure</h3>
                <ul>
                  <li>A <span className="highlight">network observatory</span></li>
                  <li>A <span className="highlight">time machine</span> for Nostr</li>
                  <li>A <span className="highlight">research platform</span></li>
                  <li>A <span className="highlight">testbench</span> for developers</li>
                </ul>
              </div>
              <div>
                <h3>Extensible To...</h3>
                <ul>
                  <li>Run a <span className="highlight">Relay</span> on top</li>
                  <li>Build a <span className="highlight">Trust Authority</span> (NIP-85)</li>
                  <li>Deploy <span className="highlight">DVMs</span></li>
                  <li>Expose <span className="highlight">APIs</span></li>
                </ul>
              </div>
            </div>
          </div>
        )
      case 4: // Architecture
        return (
          <div className="slide">
            <h2>Customizable Layer Architecture</h2>
            <h3>Define your own implementation</h3>
            <div className="layer-stack">
              <div className="layer">
                <div className="layer-title">YOUR IMPLEMENTATION</div>
                <div className="layer-content">
                  <span className="layer-item core">bigbrotr</span>
                  <span className="layer-item core">lilbrotr</span>
                  <span className="layer-item extensible">+ yourbrotr</span>
                </div>
                <p style={{marginTop: '10px', fontSize: '0.9rem', color: '#888'}}>
                  Define: which fields to store, which relays to sync, custom filters
                </p>
              </div>
              <div className="layer">
                <div className="layer-title">SERVICES (Extensible)</div>
                <div className="layer-content">
                  <span className="layer-item core">Seeder</span>
                  <span className="layer-item core">Finder</span>
                  <span className="layer-item core">Validator</span>
                  <span className="layer-item core">Monitor</span>
                  <span className="layer-item core">Synchronizer</span>
                  <span className="layer-item extensible">+ API</span>
                  <span className="layer-item extensible">+ DVM</span>
                  <span className="layer-item extensible">+ Relay</span>
                  <span className="layer-item extensible">+ Trust Authority</span>
                </div>
              </div>
              <div className="layer">
                <div className="layer-title">CORE</div>
                <div className="layer-content">
                  <span className="layer-item core">Pool</span>
                  <span className="layer-item core">Brotr</span>
                  <span className="layer-item core">BaseService</span>
                  <span className="layer-item core">Logger</span>
                </div>
              </div>
            </div>
          </div>
        )
      case 5: // Pipeline
        return (
          <div className="slide">
            <h2>Independent Services</h2>
            <h3>All services run independently, connected through the database</h3>
            <div className="services-flow">
              <div className="services-column">
                <div className="service-card discovery">
                  <div className="service-name">Seeder</div>
                  <div className="service-file">seeder.py</div>
                  <div className="service-desc">Load relay URLs from seed files</div>
                </div>
                <div className="service-card discovery">
                  <div className="service-name">Finder</div>
                  <div className="service-file">finder.py</div>
                  <div className="service-desc">Discover from APIs & NIP-65</div>
                </div>
                <div className="services-label">Discovery</div>
              </div>
              <div className="services-arrows">
                <span>→</span>
                <span className="arrow-label">candidates</span>
              </div>
              <div className="services-column">
                <div className="service-card validation">
                  <div className="service-name">Validator</div>
                  <div className="service-file">validator.py</div>
                  <div className="service-desc">Test WebSocket + Tor connectivity</div>
                </div>
                <div className="services-label">Validation</div>
              </div>
              <div className="services-arrows">
                <span>→</span>
                <span className="arrow-label">valid relays</span>
              </div>
              <div className="services-column">
                <div className="service-card operation">
                  <div className="service-name">Monitor</div>
                  <div className="service-file">monitor.py</div>
                  <div className="service-desc">NIP-11 & NIP-66 health data</div>
                </div>
                <div className="service-card operation">
                  <div className="service-name">Synchronizer</div>
                  <div className="service-file">synchronizer.py</div>
                  <div className="service-desc">Multi-process event sync</div>
                </div>
                <div className="services-label">Operation</div>
              </div>
            </div>
          </div>
        )
      case 6: // Data Model - Database Schema
        return (
          <div className="slide">
            <h2>Database Schema</h2>
            <div className="db-schema-horizontal">
              <div className="db-table">
                <div className="db-table-header">events</div>
                <div className="db-table-body">
                  <div className="db-column pk">id <span>BYTEA PK</span></div>
                  <div className="db-column">pubkey <span>BYTEA</span></div>
                  <div className="db-column">created_at <span>BIGINT</span></div>
                  <div className="db-column">kind <span>INTEGER</span></div>
                  <div className="db-column">tags <span>JSONB</span></div>
                  <div className="db-column computed">tagvalues <span>TEXT[] GIN</span></div>
                  <div className="db-column">content <span>TEXT</span></div>
                  <div className="db-column">sig <span>BYTEA</span></div>
                </div>
              </div>

              <div className="db-table junction">
                <div className="db-table-header">events_relays</div>
                <div className="db-table-body">
                  <div className="db-column fk">event_id <span>BYTEA FK</span></div>
                  <div className="db-column fk">relay_url <span>TEXT FK</span></div>
                  <div className="db-column">seen_at <span>BIGINT</span></div>
                </div>
              </div>

              <div className="db-table">
                <div className="db-table-header">relays</div>
                <div className="db-table-body">
                  <div className="db-column pk">url <span>TEXT PK</span></div>
                  <div className="db-column">network <span>TEXT</span></div>
                  <div className="db-column">discovered_at <span>BIGINT</span></div>
                </div>
              </div>

              <div className="db-table junction">
                <div className="db-table-header">relay_metadata</div>
                <div className="db-table-body">
                  <div className="db-column fk">relay_url <span>TEXT FK</span></div>
                  <div className="db-column">generated_at <span>BIGINT</span></div>
                  <div className="db-column">type <span>TEXT</span></div>
                  <div className="db-column fk">metadata_id <span>BYTEA FK</span></div>
                </div>
              </div>

              <div className="db-table">
                <div className="db-table-header">metadata</div>
                <div className="db-table-body">
                  <div className="db-column pk">id <span>BYTEA PK</span></div>
                  <div className="db-column">data <span>JSONB</span></div>
                </div>
                <div className="db-table-note">Content-addressed</div>
              </div>

              <div className="db-table">
                <div className="db-table-header">service_data</div>
                <div className="db-table-body">
                  <div className="db-column pk">service_name <span>TEXT PK</span></div>
                  <div className="db-column pk">data_type <span>TEXT PK</span></div>
                  <div className="db-column pk">data_key <span>TEXT PK</span></div>
                  <div className="db-column">data <span>JSONB</span></div>
                  <div className="db-column">updated_at <span>BIGINT</span></div>
                </div>
              </div>
            </div>

            <div className="db-schema-legend">
              <span className="legend-item"><span className="legend-pk"></span> Primary Key</span>
              <span className="legend-item"><span className="legend-fk"></span> Foreign Key</span>
              <span className="legend-item"><span className="legend-computed"></span> Computed</span>
            </div>
          </div>
        )
      case 7: // Use Cases
        return (
          <div className="slide">
            <h2>Use Cases</h2>
            <div className="use-case-grid">
              <div className="use-case">
                <div className="use-case-icon">🕸️</div>
                <h4>Web of Trust</h4>
                <p>Follow graphs, relay preferences, trust signals</p>
              </div>
              <div className="use-case">
                <div className="use-case-icon">📡</div>
                <h4>Network Analysis</h4>
                <p>Propagation, clustering, replication</p>
              </div>
              <div className="use-case">
                <div className="use-case-icon">🔬</div>
                <h4>Protocol Research</h4>
                <p>NIP adoption, kind distribution, tag patterns</p>
              </div>
              <div className="use-case">
                <div className="use-case-icon">🧪</div>
                <h4>Testbench</h4>
                <p>Simulate failures, inject events, replay history</p>
              </div>
              <div className="use-case">
                <div className="use-case-icon">📁</div>
                <h4>Archival</h4>
                <p>Complete history, tamper-evident, queryable</p>
              </div>
              <div className="use-case">
                <div className="use-case-icon">🛡️</div>
                <h4>Trust Authority</h4>
                <p>NIP-85 assertions, global trust rankings</p>
              </div>
            </div>
          </div>
        )
      case 8: // WoT
        return (
          <div className="slide">
            <h2>Web of Trust Infrastructure</h2>
            <h3>BigBrotr stores the signals, you define trust</h3>
            <div className="grid-2 wot-section">
              <div>
                <ul>
                  <li><span className="highlight">Kind 3</span> → Follow graph edges</li>
                  <li><span className="highlight">Kind 10002</span> → Relay preferences</li>
                  <li><span className="highlight">Kind 7</span> → Endorsements</li>
                  <li><span className="highlight">Kind 9735</span> → Economic signals (zaps)</li>
                  <li><span className="highlight">Kind 1985</span> → Labels (NIP-32)</li>
                </ul>
              </div>
              <div className="wot-diagram">
                <div className="wot-circle wot-you">
                  <strong>You</strong>
                  <small>d=0</small>
                </div>
                <div className="wot-arrow">→</div>
                <div className="wot-circle wot-d1">
                  <strong>Follows</strong>
                  <small>d=1</small>
                </div>
                <div className="wot-arrow">→</div>
                <div className="wot-circle wot-d2">
                  <strong>FoF</strong>
                  <small>d=2</small>
                </div>
              </div>
            </div>
          </div>
        )
      case 9: // Network Analysis
        return (
          <div className="slide">
            <h2>Network Analysis</h2>
            <div className="grid-2">
              <div className="box">
                <h3>Event Propagation</h3>
                <ul>
                  <li>Track seen_at per relay</li>
                  <li>Measure spread velocity</li>
                  <li>Identify bottlenecks</li>
                </ul>
              </div>
              <div className="box">
                <h3>Relay Clustering</h3>
                <ul>
                  <li>Co-occurrence analysis</li>
                  <li>Content similarity</li>
                  <li>Mirror detection</li>
                </ul>
              </div>
              <div className="box">
                <h3>Geographic Distribution</h3>
                <ul>
                  <li>NIP-66 geolocation</li>
                  <li>Latency mapping</li>
                  <li>Network topology</li>
                </ul>
              </div>
              <div className="box">
                <h3>Replication Factor</h3>
                <ul>
                  <li>Events per relay count</li>
                  <li>Censorship risk scoring</li>
                  <li>Distribution health</li>
                </ul>
              </div>
            </div>
          </div>
        )
      case 10: // Simulation & Attack Testing
        return (
          <div className="slide">
            <h2>Network Simulation & Attack Testing</h2>
            <h3>Real data, controlled experiments</h3>
            <div className="attack-sim">
              <div className="attack-scenario">
                <h4>🔴 Sybil Attack Simulation</h4>
                <div className="attack-visual">
                  <div className="node-good">👤</div>
                  <div className="node-good">👤</div>
                  <div className="node-good">👤</div>
                  <span className="attack-arrow">←</span>
                  <div className="node-bad">🤖</div>
                  <div className="node-bad">🤖</div>
                  <div className="node-bad">🤖</div>
                </div>
                <ul style={{fontSize: '0.95rem'}}>
                  <li>Inject fake social graph</li>
                  <li>Test WoT algorithm resilience</li>
                  <li>Measure global trust rank impact</li>
                </ul>
              </div>
              <div className="attack-scenario">
                <h4>🔴 Relay Infiltration</h4>
                <div className="attack-visual">
                  <div className="node-relay">R1</div>
                  <div className="node-relay">R2</div>
                  <div className="node-relay" style={{background: '#ff6b6b'}}>R3</div>
                  <div className="node-relay">R4</div>
                </div>
                <ul style={{fontSize: '0.95rem'}}>
                  <li>Malicious relay behavior</li>
                  <li>Event censorship detection</li>
                  <li>Replication vulnerability</li>
                </ul>
              </div>
            </div>
          </div>
        )
      case 11: // Takeaways
        return (
          <div className="slide">
            <h2>Key Takeaways</h2>
            <ul className="big-list">
              <li>BigBrotr is <span className="highlight">infrastructure</span>, extensible to relay/API/DVM/Trust Authority</li>
              <li><span className="highlight">Customizable</span> - define your implementation, fields, filters</li>
              <li><span className="highlight">WoT-ready</span> - stores signals for NIP-85 trust assertions</li>
              <li><span className="highlight">Attack simulation</span> - test algorithm resilience</li>
              <li><span className="highlight">5 core services</span> - Seeder, Finder, Validator, Monitor, Synchronizer</li>
            </ul>
          </div>
        )
      case 12: // Final
        return (
          <div className="slide center">
            <h1>BigBrotr</h1>
            <p className="subtitle">github.com/bigbrotr/bigbrotr</p>
            <div className="tags">
              <span className="tag">Python 3.9+</span>
              <span className="tag">PostgreSQL 16+</span>
              <span className="tag">Docker Ready</span>
              <span className="tag">MIT License</span>
            </div>
            <p className="final-cta">What would <strong>you</strong> build with complete network visibility?</p>
          </div>
        )
      default:
        return <div className="slide"><h2>Slide {current + 1}</h2></div>
    }
  }

  return (
    <div className="presentation">
      {renderSlide()}
      <div className="slide-number">{current + 1} / {total}</div>
      <div className="controls">
        <button onClick={prev}>← Prev</button>
        <button onClick={next}>Next →</button>
      </div>
    </div>
  )
}

export default App
