import React, { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, FileText } from 'lucide-react';

interface SlideProps {
  children?: React.ReactNode;
  title: string;
  number: number;
  total: number;
  speakerNotes?: React.ReactNode;
}

const Slide = ({ children, title, number, total, speakerNotes }: SlideProps) => {
  const [showNotes, setShowNotes] = useState(false);

  return (
    <div className="h-full flex bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="flex-1 flex flex-col p-4 md:p-6 lg:p-8">
        <div className="flex justify-between items-center mb-3 flex-shrink-0">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-400">{title}</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowNotes(!showNotes)}
              className="p-2 rounded-lg bg-slate-700/80 hover:bg-slate-600/80 transition-all btn-enhanced"
              title="Toggle speaker notes"
            >
              <FileText size={18} />
            </button>
            <span className="text-slate-400 text-sm">{number}/{total}</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center overflow-y-auto min-h-0">
          {children}
        </div>
      </div>

      {showNotes && speakerNotes && (
        <div className="w-80 bg-slate-950/95 backdrop-blur-sm border-l border-slate-600 p-4 overflow-y-auto flex flex-col max-h-full">
          <h3 className="text-xl font-bold text-yellow-400 mb-4 text-enhanced flex-shrink-0">Speaker Notes</h3>
          <div className="text-sm text-slate-200 space-y-3 leading-relaxed text-enhanced-sm overflow-y-auto flex-1">
            {speakerNotes}
          </div>
        </div>
      )}
    </div>
  );
};

const slides = [
  {
    title: "BigBrotr",
    speakerNotes: (
      <>
        <p>Good morning. I'm presenting BigBrotr, a measurement infrastructure for the Nostr decentralized network. We're an OpenSats grantee, and everything is open source under MIT license with public datasets coming under the Open Database License.</p>
      </>
    ),
    content: (
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient text-enhanced">
          BigBrotr
        </h1>
        <p className="text-2xl text-high-contrast max-w-4xl mx-auto text-enhanced leading-relaxed">
          Empirical Measurement Infrastructure for the Nostr Decentralized Network
        </p>
        <div className="mt-10 space-y-4 text-lg">
          <p className="text-high-contrast"><strong className="text-blue-400 text-2xl">Vincenzo Imperati</strong></p>
          <p className="text-slate-300 text-lg">Sapienza University of Rome</p>
        </div>
        <div className="mt-8 inline-block px-8 py-4 bg-blue-500/20 rounded-xl border border-blue-400/40 card-enhanced">
          <p className="text-blue-300 text-xl font-semibold">OpenSats Grantee | Open Source (MIT)</p>
        </div>
      </div>
    )
  },
  {
    title: "What is Nostr?",
    speakerNotes: (
      <>
        <p>Nostr—Notes and Other Stuff Transmitted by Relays—uses Bitcoin's secp256k1 cryptography. Users are their keys with no registration or central servers. Everything is a signed JSON object: posts, likes, follows. Relays are simple servers that store and forward events without coordinating with each other. This creates a censorship-resistant, permissionless network with native Lightning integration.</p>
      </>
    ),
    content: (
      <div className="space-y-5">
        <p className="text-2xl text-high-contrast italic text-center text-enhanced">
          Notes and Other Stuff Transmitted by Relays
        </p>

        <div className="grid grid-cols-3 gap-5">
          <div className="bg-gradient-to-br from-blue-500/25 to-blue-600/15 p-5 rounded-xl border border-blue-400/40 hover:border-blue-400/70 transition-all card-enhanced">
            <h3 className="text-xl font-bold mb-3 text-blue-400 text-enhanced">Cryptographic Identity</h3>
            <p className="text-high-contrast text-base text-enhanced-sm leading-relaxed">Users identified by secp256k1 public keys. No central registration or accounts.</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/25 to-purple-600/15 p-5 rounded-xl border border-purple-400/40 hover:border-purple-400/70 transition-all card-enhanced">
            <h3 className="text-xl font-bold mb-3 text-purple-400 text-enhanced">Event Structure</h3>
            <p className="text-high-contrast text-base text-enhanced-sm leading-relaxed">Signed JSON objects with kinds, tags, content, and cryptographic signatures.</p>
          </div>

          <div className="bg-gradient-to-br from-green-500/25 to-green-600/15 p-5 rounded-xl border border-green-400/40 hover:border-green-400/70 transition-all card-enhanced">
            <h3 className="text-xl font-bold mb-3 text-green-400 text-enhanced">Stateless Relays</h3>
            <p className="text-high-contrast text-base text-enhanced-sm leading-relaxed">WebSocket servers store and forward events independently—no coordination required.</p>
          </div>
        </div>

        <div className="bg-slate-800/60 p-5 rounded-xl card-enhanced">
          <h4 className="text-xl font-bold mb-4 text-yellow-400 text-enhanced text-center">Why It Matters</h4>
          <ul className="grid grid-cols-2 gap-4 text-base text-high-contrast list-enhanced text-enhanced-sm">
            <li><strong className="text-yellow-400">Censorship resistant:</strong> No single point of control</li>
            <li><strong className="text-yellow-400">Permissionless:</strong> Anyone can run a relay or client</li>
            <li><strong className="text-yellow-400">Simple:</strong> No blockchain, DHT, or consensus</li>
            <li><strong className="text-yellow-400">Bitcoin-native:</strong> Lightning Network integration for payments</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "Protocol Comparison",
    speakerNotes: (
      <>
        <p>Unlike Mastodon's federated servers or Bluesky's structured Personal Data Servers, Nostr has minimal coordination and maximum user sovereignty. You're not tied to any server, and content lives across multiple relays. This simplicity makes it ideal for studying decentralization.</p>
      </>
    ),
    content: (
      <div className="space-y-5">
        <div className="grid grid-cols-3 gap-5">
          <div className="bg-slate-800/40 p-5 rounded-xl border-t-4 border-blue-400 card-enhanced depth-enhanced">
            <div className="font-bold text-blue-400 text-xl mb-4 text-enhanced text-depth">Nostr</div>
            <div className="space-y-3 text-base text-high-contrast text-enhanced-sm">
              <div><strong className="text-blue-300">Architecture:</strong> Stateless relays</div>
              <div><strong className="text-blue-300">Coordination:</strong> None required</div>
              <div><strong className="text-blue-300">Identity:</strong> Cryptographic keys</div>
              <div><strong className="text-blue-300">Migration:</strong> Seamless</div>
              <div><strong className="text-blue-300">Complexity:</strong> Minimal</div>
            </div>
          </div>

          <div className="bg-slate-800/40 p-5 rounded-xl border-t-4 border-purple-400 card-enhanced depth-enhanced">
            <div className="font-bold text-purple-400 text-xl mb-4 text-enhanced text-depth">Mastodon</div>
            <div className="space-y-3 text-base text-high-contrast text-enhanced-sm">
              <div><strong className="text-purple-300">Architecture:</strong> Federated servers</div>
              <div><strong className="text-purple-300">Coordination:</strong> Inter-server protocol</div>
              <div><strong className="text-purple-300">Identity:</strong> Server-bound</div>
              <div><strong className="text-purple-300">Migration:</strong> Complex export/import</div>
              <div><strong className="text-purple-300">Complexity:</strong> Moderate</div>
            </div>
          </div>

          <div className="bg-slate-800/40 p-5 rounded-xl border-t-4 border-green-400 card-enhanced depth-enhanced">
            <div className="font-bold text-green-400 text-xl mb-4 text-enhanced text-depth">Bluesky</div>
            <div className="space-y-3 text-base text-high-contrast text-enhanced-sm">
              <div><strong className="text-green-300">Architecture:</strong> Personal Data Servers</div>
              <div><strong className="text-green-300">Coordination:</strong> Structured schemas (Lexicon)</div>
              <div><strong className="text-green-300">Identity:</strong> Portable DIDs</div>
              <div><strong className="text-green-300">Migration:</strong> Supported</div>
              <div><strong className="text-green-300">Complexity:</strong> High</div>
            </div>
          </div>
        </div>

        <div className="bg-blue-500/15 border-glow rounded-xl p-5 depth-enhanced-lg">
          <h4 className="text-xl font-bold mb-3 text-blue-400 text-enhanced text-depth-strong">Nostr's Unique Position</h4>
          <p className="text-high-contrast text-lg text-enhanced leading-relaxed">
            Minimal coordination + Maximum user sovereignty + Native multi-relay redundancy =
            <span className="text-blue-400 font-bold text-xl"> Ideal research subject for studying decentralization</span>
          </p>
        </div>
      </div>
    )
  },
  {
    title: "The Challenge",
    speakerNotes: (
      <>
        <p>Decentralization eliminates central control but also central visibility. We can't answer basic questions: Which relays are reliable? How does information propagate? What's the real redundancy? Existing tools like Nostr.watch only provide 15-minute snapshots of ~700 relays. We've found 8,865. Without data, we're flying blind.</p>
      </>
    ),
    content: (
      <div className="space-y-5">
        <div className="bg-slate-800/60 p-6 rounded-xl border-l-4 border-red-400 card-enhanced">
          <h3 className="text-2xl font-bold mb-3 text-red-400 text-enhanced">The Observability Paradox</h3>
          <p className="text-xl text-high-contrast text-enhanced leading-relaxed">
            Decentralized networks eliminate central authority — but also eliminate central visibility
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="bg-slate-800/40 p-5 rounded-xl border-l-4 border-blue-400 card-enhanced">
            <h4 className="text-xl font-bold mb-4 text-blue-400 text-enhanced">Critical Questions</h4>
            <ul className="space-y-3 text-base text-high-contrast list-enhanced text-enhanced-sm">
              <li>Which relays are actually reliable?</li>
              <li>How do events propagate across the network?</li>
              <li>What is the real redundancy level?</li>
              <li>How do users actually behave?</li>
            </ul>
          </div>

          <div className="bg-slate-800/40 p-5 rounded-xl border-l-4 border-purple-400 card-enhanced">
            <h4 className="text-xl font-bold mb-4 text-purple-400 text-enhanced">Current Limitations</h4>
            <ul className="space-y-3 text-base text-high-contrast list-enhanced text-enhanced-sm">
              <li>Periodic snapshots only (15min intervals)</li>
              <li>No public datasets for research</li>
              <li>Limited relay coverage (~700)</li>
              <li>No systematic Tor support</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "The Solution: Open Network Observatory",
    speakerNotes: (
      <>
        <p>BigBrotr provides continuous 24/7 monitoring with 99%+ uptime. We've discovered 8,865 relays (80% clearnet, 20% Tor), collected 208.5 million events from 19.7 million users, and recorded 976.4 million relay-event associations tracking temporal provenance—when and where each event appeared.</p>
        <p>Our database exceeds 1.26 TB total with ~500 GB of data and ~233 GB of indexes. This is continuous monitoring, not snapshots.</p>
      </>
    ),
    content: (
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-5">
          <div className="space-y-4">
            <div className="bg-blue-500/25 p-4 rounded-xl border-l-4 border-blue-400 card-enhanced depth-enhanced gradient-enhanced-blue">
              <div className="text-4xl font-bold text-blue-400 mb-2 text-depth-strong">8,865</div>
              <div className="text-high-contrast text-base text-enhanced">Total Relays Discovered</div>
              <div className="text-slate-400 text-sm mt-1 text-enhanced-sm">12× more than existing tools</div>
            </div>
            <div className="bg-purple-500/25 p-4 rounded-xl border-l-4 border-purple-400 card-enhanced depth-enhanced gradient-enhanced-purple">
              <div className="text-4xl font-bold text-purple-400 mb-2 text-depth-strong">208.5M</div>
              <div className="text-high-contrast text-base text-enhanced">Unique Events Archived</div>
              <div className="text-slate-400 text-sm mt-1 text-enhanced-sm">219.51 GB of event data</div>
            </div>
            <div className="bg-green-500/25 p-4 rounded-xl border-l-4 border-green-400 card-enhanced depth-enhanced gradient-enhanced-green">
              <div className="text-4xl font-bold text-green-400 mb-2 text-depth-strong">19.7M</div>
              <div className="text-high-contrast text-base text-enhanced">Unique Users Observed</div>
              <div className="text-slate-400 text-sm mt-1 text-enhanced-sm">Complete behavior tracking</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-800/60 p-4 rounded-xl border-l-4 border-yellow-400 card-enhanced depth-enhanced">
              <h4 className="font-bold text-yellow-400 mb-2 text-lg flex items-center text-enhanced">
                <span className="mr-2 text-xl">✓</span> Continuous Monitoring
              </h4>
              <p className="text-high-contrast text-sm text-enhanced-sm">24/7 operation with 99%+ uptime—not periodic snapshots</p>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border-l-4 border-yellow-400 card-enhanced depth-enhanced">
              <h4 className="font-bold text-yellow-400 mb-2 text-lg flex items-center text-enhanced">
                <span className="mr-2 text-xl">✓</span> Complete Coverage
              </h4>
              <p className="text-high-contrast text-sm text-enhanced-sm">Clearnet (80%) + Tor (20%)—systematic darknet monitoring</p>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border-l-4 border-yellow-400 card-enhanced depth-enhanced">
              <h4 className="font-bold text-yellow-400 mb-2 text-lg flex items-center text-enhanced">
                <span className="mr-2 text-xl">✓</span> Temporal Provenance
              </h4>
              <p className="text-high-contrast text-sm text-enhanced-sm">976.4M event-relay associations with timestamps (280.86 GB)</p>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border-l-4 border-yellow-400 card-enhanced depth-enhanced">
              <h4 className="font-bold text-yellow-400 mb-2 text-lg flex items-center text-enhanced">
                <span className="mr-2 text-xl">✓</span> Open Science
              </h4>
              <p className="text-high-contrast text-sm text-enhanced-sm">MIT code + ODbL datasets | Total: ~1.26 TB</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "System Architecture",
    speakerNotes: (
      <>
        <p>Our PostgreSQL database exceeds 1.26TB total (~500 GB data + ~233 GB indexes). The events table holds 208.5 million events (179 GB data + 40.5 GB indexes). The events-relays junction table is larger at 280.86 GB—that's our temporal provenance tracking with 976.4M associations. The primary key index alone is 144 GB.</p>
      </>
    ),
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-5 gap-3">
          <div className="bg-blue-500/25 p-3 rounded-xl text-center border-glow depth-enhanced">
            <div className="font-bold text-blue-400 mb-1 text-base text-enhanced">Initializer</div>
            <div className="text-sm text-high-contrast text-enhanced-sm">Bootstrap relays</div>
          </div>
          <div className="bg-purple-500/25 p-3 rounded-xl text-center border-glow-purple depth-enhanced">
            <div className="font-bold text-purple-400 mb-1 text-base text-enhanced">Finder</div>
            <div className="text-sm text-high-contrast text-enhanced-sm">Discover relays</div>
          </div>
          <div className="bg-green-500/25 p-3 rounded-xl text-center border-glow-green depth-enhanced">
            <div className="font-bold text-green-400 mb-1 text-base text-enhanced">Monitor</div>
            <div className="text-sm text-high-contrast text-enhanced-sm">Health checks</div>
          </div>
          <div className="bg-yellow-500/25 p-3 rounded-xl text-center border-glow depth-enhanced">
            <div className="font-bold text-yellow-400 mb-1 text-base text-enhanced">Synchronizer</div>
            <div className="text-sm text-high-contrast text-enhanced-sm">Event collection</div>
          </div>
          <div className="bg-red-500/25 p-3 rounded-xl text-center border-glow depth-enhanced">
            <div className="font-bold text-red-400 mb-1 text-base text-enhanced">Tor Proxy</div>
            <div className="text-sm text-high-contrast text-enhanced-sm">.onion access</div>
          </div>
        </div>

        <div className="bg-slate-800/60 p-5 rounded-xl border border-slate-600 card-enhanced">
          <h4 className="text-xl font-bold mb-4 text-blue-400 text-center text-enhanced text-depth-strong">PostgreSQL Database (~1.26 TB)</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/60 p-4 rounded-xl border-l-4 border-blue-400 card-enhanced depth-enhanced">
              <div className="font-bold text-slate-200 mb-2 text-base text-enhanced">Events Table (219.51 GB)</div>
              <div className="text-slate-300 text-sm text-enhanced-sm">208.5M events | 179 GB data + 40.5 GB indexes</div>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border-l-4 border-purple-400 card-enhanced depth-enhanced">
              <div className="font-bold text-slate-200 mb-2 text-base text-enhanced">Events-Relays (280.86 GB)</div>
              <div className="text-slate-300 text-sm text-enhanced-sm">976.4M associations | 89 GB data + 192 GB indexes</div>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border-l-4 border-green-400 card-enhanced depth-enhanced">
              <div className="font-bold text-slate-200 mb-2 text-base text-enhanced">Relays Table (~0.01 GB)</div>
              <div className="text-slate-300 text-sm text-enhanced-sm">8,865 relays (clearnet + tor)</div>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border-l-4 border-yellow-400 card-enhanced depth-enhanced">
              <div className="font-bold text-slate-200 mb-2 text-base text-enhanced">Relay Metadata (0.05 GB)</div>
              <div className="text-slate-300 text-sm text-enhanced-sm">74,274 NIP-11 snapshots over time</div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Data Collection Process",
    speakerNotes: (
      <>
        <p>For each relay, we check WebSocket connectivity, measure latency, assess read/write capabilities, collect NIP-11 metadata, and track uptime. Event collection uses adaptive time-based pagination with secp256k1 signature verification. We record temporal provenance and synchronize thousands of relays in parallel with 99%+ uptime.</p>
      </>
    ),
    content: (
      <div className="space-y-4">
        <div className="bg-slate-800/60 p-5 rounded-xl border-glow card-enhanced depth-enhanced-lg">
          <h3 className="text-xl font-bold mb-4 text-blue-400 text-enhanced text-depth-strong">Discovery Pipeline</h3>
          <div className="flex items-center justify-between text-base">
            <div className="text-center flex-1">
              <div className="bg-blue-500/35 p-3 rounded-xl mb-2 border-glow depth-enhanced">NIP-65 Events</div>
              <div className="text-slate-300 text-sm text-enhanced-sm">User relay lists</div>
            </div>
            <div className="text-2xl text-slate-500 px-4">→</div>
            <div className="text-center flex-1">
              <div className="bg-purple-500/35 p-3 rounded-xl mb-2 border-glow-purple depth-enhanced">Public Registries</div>
              <div className="text-slate-300 text-sm text-enhanced-sm">Community lists</div>
            </div>
            <div className="text-2xl text-slate-500 px-4">→</div>
            <div className="text-center flex-1">
              <div className="bg-green-500/35 p-3 rounded-xl mb-2 border-glow-green depth-enhanced">NIP-11 Metadata</div>
              <div className="text-slate-300 text-sm text-enhanced-sm">Capability cross-references</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="bg-slate-800/50 p-5 rounded-xl border-l-4 border-yellow-400 card-enhanced depth-enhanced">
            <h4 className="text-xl font-bold mb-4 text-yellow-400 text-enhanced text-depth">Health Monitoring</h4>
            <ul className="space-y-2 text-base text-high-contrast list-enhanced text-enhanced-sm">
              <li>WebSocket connectivity tests</li>
              <li>Round-trip time (RTT) measurements</li>
              <li>Read/Write capability assessment</li>
              <li>NIP-11 metadata collection</li>
              <li>Uptime tracking over time</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 p-5 rounded-xl border-l-4 border-orange-400 card-enhanced depth-enhanced">
            <h4 className="text-xl font-bold mb-4 text-orange-400 text-enhanced text-depth">Event Collection</h4>
            <ul className="space-y-2 text-base text-high-contrast list-enhanced text-enhanced-sm">
              <li>Adaptive time-based pagination</li>
              <li>Cryptographic signature validation (secp256k1)</li>
              <li>Temporal provenance tracking</li>
              <li>Parallel multi-relay synchronization</li>
              <li>Deduplication across relays</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Dataset Overview",
    speakerNotes: (
      <>
        <p>We've discovered 8,865 total relays. Of those with metadata, 80% are clearnet and 20% are Tor. We have 208.5 million unique events from 19.7 million users, with 976.4 million relay-event associations. The content field averages 357 bytes, tags field averages 290 bytes per event.</p>
      </>
    ),
    content: (
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-gradient-to-br from-blue-500/25 to-blue-600/15 p-5 rounded-xl border-glow card-enhanced depth-enhanced">
            <h4 className="text-xl font-bold mb-4 text-blue-400 text-enhanced text-depth">Network Scale</h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex justify-between items-center p-3 bg-slate-800/60 rounded-xl card-enhanced">
                <span className="text-base text-enhanced">Total relays discovered:</span>
                <span className="font-bold text-xl text-blue-400 text-depth-strong">8,865</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-800/60 rounded-xl card-enhanced">
                <span className="text-base text-enhanced">With NIP-11 metadata:</span>
                <span className="font-bold text-xl text-purple-400 text-depth-strong">1,247 (14%)</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-800/60 rounded-xl card-enhanced">
                <span className="text-base text-enhanced">Metadata snapshots:</span>
                <span className="font-bold text-xl text-green-400 text-depth-strong">74,274</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-800/60 rounded-xl card-enhanced border-t border-slate-600">
                <span className="text-base text-enhanced">Clearnet / Tor split:</span>
                <span className="font-bold text-xl text-yellow-400 text-depth-strong">80% / 20%</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/25 to-purple-600/15 p-5 rounded-xl border-glow-purple card-enhanced depth-enhanced">
            <h4 className="text-xl font-bold mb-4 text-purple-400 text-enhanced text-depth">Content Archive</h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex justify-between items-center p-3 bg-slate-800/60 rounded-xl card-enhanced">
                <span className="text-base text-enhanced">Unique events:</span>
                <span className="font-bold text-xl text-purple-400 text-depth-strong">208.5M</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-800/60 rounded-xl card-enhanced">
                <span className="text-base text-enhanced">Unique users:</span>
                <span className="font-bold text-xl text-blue-400 text-depth-strong">19.7M</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-800/60 rounded-xl card-enhanced">
                <span className="text-base text-enhanced">Event-relay associations:</span>
                <span className="font-bold text-xl text-green-400 text-depth-strong">976.4M</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-800/60 rounded-xl card-enhanced border-t border-slate-600">
                <span className="text-base text-enhanced">Avg content/tags size:</span>
                <span className="font-bold text-xl text-yellow-400 text-depth-strong">357 / 290 B</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Event Type Distribution",
    speakerNotes: (
      <>
        <p>Kind 1 (short posts) represents 38.96% with 67.3 million events from 3.4M users. Kind 7 (reactions/likes) is 18.89% with 32.6 million events from 218K users. Kind 4 (encrypted DMs) is 5.63% with 9.7 million messages. User metadata (kind 0) has 8.2M events from 7.4M users, and follows (kind 3) has 7.8M events from 7.3M users. Zaps represent 2.81% with 4.9M events.</p>
        <p>77.6% of all pubkeys have published at least one of kinds 0, 1, 3, 6, or 7. But only 17.98% actively post/repost/react.</p>
      </>
    ),
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="bg-slate-800/60 p-4 rounded-xl card-enhanced depth-enhanced ">
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-300 text-lg text-enhanced">Short Text Notes (kind 1)</span>
                <span className="font-bold text-blue-400 text-2xl text-depth-strong">38.96%</span>
              </div>
              <div className="text-base text-slate-400 text-enhanced-sm">67.3M events | 3.4M unique users</div>
            </div>

            <div className="bg-slate-800/60 p-4 rounded-xl card-enhanced depth-enhanced ">
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-300 text-lg text-enhanced">Reactions (kind 7)</span>
                <span className="font-bold text-purple-400 text-2xl text-depth-strong">18.89%</span>
              </div>
              <div className="text-base text-slate-400 text-enhanced-sm">32.6M events | 218K unique users</div>
            </div>

            <div className="bg-slate-800/60 p-4 rounded-xl card-enhanced depth-enhanced ">
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-300 text-lg text-enhanced">Encrypted DMs (kind 4)</span>
                <span className="font-bold text-green-400 text-2xl text-depth-strong">5.63%</span>
              </div>
              <div className="text-base text-slate-400 text-enhanced-sm">9.7M events | 449K unique users</div>
            </div>

            <div className="bg-slate-800/60 p-4 rounded-xl card-enhanced depth-enhanced ">
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-300 text-lg text-enhanced">User Metadata (kind 0)</span>
                <span className="font-bold text-yellow-400 text-2xl text-depth-strong">4.73%</span>
              </div>
              <div className="text-base text-slate-400 text-enhanced-sm">8.2M events | 7.4M unique users</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-slate-800/60 p-4 rounded-xl card-enhanced depth-enhanced ">
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-300 text-lg text-enhanced">Follows (kind 3)</span>
                <span className="font-bold text-red-400 text-2xl text-depth-strong">4.54%</span>
              </div>
              <div className="text-base text-slate-400 text-enhanced-sm">7.8M events | 7.3M unique users</div>
            </div>

            <div className="bg-slate-800/60 p-4 rounded-xl card-enhanced depth-enhanced ">
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-300 text-lg text-enhanced">Repost (kind 6)</span>
                <span className="font-bold text-orange-400 text-2xl text-depth-strong">4.40%</span>
              </div>
              <div className="text-base text-slate-400 text-enhanced-sm">7.6M events | 100K unique users</div>
            </div>

            <div className="bg-slate-800/60 p-4 rounded-xl card-enhanced depth-enhanced ">
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-300 text-lg text-enhanced">Zaps - Lightning (kind 9735)</span>
                <span className="font-bold text-cyan-400 text-2xl text-depth-strong">2.81%</span>
              </div>
              <div className="text-base text-slate-400 text-enhanced-sm">4.9M events</div>
            </div>

            <div className="bg-slate-800/60 p-4 rounded-xl card-enhanced depth-enhanced ">
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-300 text-lg text-enhanced">Relay List (kind 10002)</span>
                <span className="font-bold text-pink-400 text-2xl text-depth-strong">1.88%</span>
              </div>
              <div className="text-base text-slate-400 text-enhanced-sm">3.2M events | 1.9M unique users</div>
            </div>
          </div>
        </div>

        <div className="bg-blue-500/15 border-glow rounded-xl p-4 card-enhanced">
          <div className="grid grid-cols-2 gap-4 text-high-contrast text-base text-enhanced-sm">
            <div><strong className="text-blue-400">77.6%</strong> of pubkeys have kind 0, 1, 3, 6, or 7</div>
            <div>Only <strong className="text-purple-400">17.98%</strong> actively post/repost/react</div>
            <div><strong className="text-green-400">Top 1%</strong> generate 44% of text notes</div>
            <div><strong className="text-yellow-400">Top 1%</strong> generate 23% of reactions</div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Event Distribution Over Time",
    speakerNotes: (
      <>
        <p>This heatmap shows the monthly distribution of event proportions for each NOSTR event type from December 2022 to July 2025. Kind 1 (posts) is consistently dominant with proportions between 0.30-0.70. Kind 7 (reactions) is second most frequent. We observed kind 4 (DMs) spike to 24% in November 2023, and kind 3 (contacts) spike to 52% in June 2024. New types like kind 10002 (Relay List Metadata) emerged in 2024, growing to 9% by mid-2025.</p>
      </>
    ),
    content: (
      <div className="space-y-6">
        <div className="bg-slate-800/60 p-6 rounded-xl card-enhanced">
          <h4 className="text-2xl font-bold mb-4 text-blue-400 text-enhanced text-center">Monthly Proportion of Events by Kind</h4>
          <div className="flex justify-center">
            <img
              src="/images/events-proportion-by-kind-heatmap.png"
              alt="Events by Kind Heatmap"
              className="max-h-80 rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-slate-800/40 p-4 rounded-xl border-l-4 border-blue-400 card-enhanced">
            <h5 className="font-bold text-blue-400 mb-2 text-enhanced">Kind 1 (Posts)</h5>
            <p className="text-slate-300 text-sm text-enhanced-sm">Consistently 30-70% of activity</p>
          </div>
          <div className="bg-slate-800/40 p-4 rounded-xl border-l-4 border-purple-400 card-enhanced">
            <h5 className="font-bold text-purple-400 mb-2 text-enhanced">Kind 3 Spike</h5>
            <p className="text-slate-300 text-sm text-enhanced-sm">52% in June 2024 (follows)</p>
          </div>
          <div className="bg-slate-800/40 p-4 rounded-xl border-l-4 border-green-400 card-enhanced">
            <h5 className="font-bold text-green-400 mb-2 text-enhanced">Kind 10002</h5>
            <p className="text-slate-300 text-sm text-enhanced-sm">Emerged 2024, now 9% share</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Daily & Monthly Active Users",
    speakerNotes: (
      <>
        <p>This chart shows user activity evolution on a logarithmic scale. Daily active users oscillate between 10³ and 10⁵. Monthly active users consistently stay above 10⁵. We see initial exponential growth from December 2022 to March 2023 during NOSTR's initial hype, followed by stabilization in 2023 with DAU around 10-50k. A significant spike occurred in June 2024 with DAU exceeding 10⁶. In 2025, we see sustained growth with DAU consistently reaching 10⁵.</p>
      </>
    ),
    content: (
      <div className="space-y-6">
        <div className="bg-slate-800/60 p-6 rounded-xl card-enhanced">
          <h4 className="text-2xl font-bold mb-4 text-blue-400 text-enhanced text-center">Daily and Monthly Active Users (Log Scale)</h4>
          <div className="flex justify-center">
            <img
              src="/images/daily-monthly-active-users.png"
              alt="Daily and Monthly Active Users"
              className="max-h-80 rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="bg-blue-500/20 p-4 rounded-xl text-center card-enhanced">
            <div className="text-3xl font-bold text-blue-400">Dec '22</div>
            <div className="text-slate-300 text-sm">Initial hype begins</div>
          </div>
          <div className="bg-purple-500/20 p-4 rounded-xl text-center card-enhanced">
            <div className="text-3xl font-bold text-purple-400">2023</div>
            <div className="text-slate-300 text-sm">DAU: 10-50K</div>
          </div>
          <div className="bg-green-500/20 p-4 rounded-xl text-center card-enhanced">
            <div className="text-3xl font-bold text-green-400">Jun '24</div>
            <div className="text-slate-300 text-sm">DAU spike &gt; 10⁶</div>
          </div>
          <div className="bg-yellow-500/20 p-4 rounded-xl text-center card-enhanced">
            <div className="text-3xl font-bold text-yellow-400">2025</div>
            <div className="text-slate-300 text-sm">Sustained growth</div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "User Behavior Patterns",
    speakerNotes: (
      <>
        <p>~80% of pubkeys have a lifespan less than 1 second, meaning single activity. Stable users with lifespan over 30 days generate 70-90% of monthly events. Ephemeral accounts spiked to 56-57% during spam waves in June and November 2024. The 1-30 days category peaked at 48% in February 2023, indicating many early adopters who didn't stay.</p>
      </>
    ),
    content: (
      <div className="space-y-6">
        <div className="bg-slate-800/60 p-6 rounded-xl card-enhanced">
          <h4 className="text-2xl font-bold mb-4 text-blue-400 text-enhanced text-center">Event Distribution by Pubkey Lifespan</h4>
          <div className="flex justify-center">
            <img
              src="/images/events-by-pubkey-lifespan-heatmap.png"
              alt="Events by Pubkey Lifespan Heatmap"
              className="max-h-72 rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-red-500/20 p-5 rounded-xl border-l-4 border-red-400 card-enhanced">
            <h5 className="font-bold text-red-400 mb-3 text-xl text-enhanced">&lt; 1 Day</h5>
            <p className="text-slate-300 text-enhanced-sm">Ephemeral accounts, bots</p>
            <p className="text-slate-400 text-sm mt-2">Spiked to 56-57% during spam waves</p>
          </div>
          <div className="bg-yellow-500/20 p-5 rounded-xl border-l-4 border-yellow-400 card-enhanced">
            <h5 className="font-bold text-yellow-400 mb-3 text-xl text-enhanced">1-30 Days</h5>
            <p className="text-slate-300 text-enhanced-sm">Temporary users</p>
            <p className="text-slate-400 text-sm mt-2">Peaked 48% in Feb 2023</p>
          </div>
          <div className="bg-green-500/20 p-5 rounded-xl border-l-4 border-green-400 card-enhanced">
            <h5 className="font-bold text-green-400 mb-3 text-xl text-enhanced">&gt; 30 Days</h5>
            <p className="text-slate-300 text-enhanced-sm">Stable, persistent users</p>
            <p className="text-slate-400 text-sm mt-2">Generate 70-90% of events</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Cumulative Growth Analysis",
    speakerNotes: (
      <>
        <p>This combined chart shows pubkey growth preceding event growth—new users initially explore before becoming active. Spikes in ephemeral accounts indicate spam or bot waves. Predominant stable users in 2025 indicate a more mature network. Growth visibly accelerates from late 2024, suggesting increasing adoption.</p>
      </>
    ),
    content: (
      <div className="space-y-6">
        <div className="bg-slate-800/60 p-6 rounded-xl card-enhanced">
          <h4 className="text-2xl font-bold mb-4 text-blue-400 text-enhanced text-center">Cumulative Events and Pubkeys by Lifespan</h4>
          <div className="flex justify-center">
            <img
              src="/images/cumulative-events-pubkeys-by-lifespan.png"
              alt="Cumulative Events and Pubkeys by Lifespan"
              className="max-h-80 rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-500/15 p-5 rounded-xl border-glow card-enhanced">
            <h5 className="font-bold text-blue-400 mb-3 text-xl text-enhanced">User Acquisition Pattern</h5>
            <p className="text-slate-300 text-enhanced-sm">Pubkey growth (green CDF) precedes event growth (blue CDF)—users explore before becoming active</p>
          </div>
          <div className="bg-green-500/15 p-5 rounded-xl border-glow-green card-enhanced">
            <h5 className="font-bold text-green-400 mb-3 text-xl text-enhanced">Network Maturity</h5>
            <p className="text-slate-300 text-enhanced-sm">2025 shows predominantly stable users (green bars) indicating a mature, established network</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Pubkey Distribution by Activity",
    speakerNotes: (
      <>
        <p>This Venn diagram reveals that most NOSTR accounts are incomplete profiles or passive observers. 5.0M pubkeys have only metadata (kind 0) without follows or activity. 5.5M have only follows (kind 3) without metadata or activity. 2.3M are active without metadata or follows. Only 548K pubkeys (~3.6% of active users) have all three: metadata, follows, AND activity.</p>
      </>
    ),
    content: (
      <div className="space-y-6">
        <div className="bg-slate-800/60 p-6 rounded-xl card-enhanced">
          <h4 className="text-2xl font-bold mb-4 text-blue-400 text-enhanced text-center">Pubkey Distribution by Event Kind</h4>
          <div className="flex justify-center">
            <img
              src="/images/venn-diagram-pubkeys-by-kind.png"
              alt="Venn Diagram of Pubkeys by Kind"
              className="max-h-72 rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="bg-red-500/20 p-4 rounded-xl text-center card-enhanced">
            <div className="text-2xl font-bold text-red-400">5.0M</div>
            <div className="text-slate-300 text-sm">Metadata only</div>
          </div>
          <div className="bg-green-500/20 p-4 rounded-xl text-center card-enhanced">
            <div className="text-2xl font-bold text-green-400">5.5M</div>
            <div className="text-slate-300 text-sm">Follows only</div>
          </div>
          <div className="bg-blue-500/20 p-4 rounded-xl text-center card-enhanced">
            <div className="text-2xl font-bold text-blue-400">2.3M</div>
            <div className="text-slate-300 text-sm">Active only</div>
          </div>
          <div className="bg-purple-500/20 p-4 rounded-xl text-center card-enhanced">
            <div className="text-2xl font-bold text-purple-400">548K</div>
            <div className="text-slate-300 text-sm">Complete profiles</div>
          </div>
        </div>

        <div className="bg-yellow-500/15 border-glow rounded-xl p-4 card-enhanced">
          <p className="text-high-contrast text-lg text-center text-enhanced">
            Only <strong className="text-yellow-400">3.6%</strong> of active users have complete profiles (metadata + follows + activity)
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Power Law Distribution",
    speakerNotes: (
      <>
        <p>~75% of pubkeys have published only 1 event. ~90% have fewer than 10 events. ~99% have fewer than 1,000 events. The top 1% of users with 1,000+ events generate the vast majority of content. Some power users have over 10⁶ events, indicating heavy automation or bot activity. This extreme power-law distribution is typical of social networks.</p>
      </>
    ),
    content: (
      <div className="space-y-6">
        <div className="bg-slate-800/60 p-6 rounded-xl card-enhanced">
          <h4 className="text-2xl font-bold mb-4 text-blue-400 text-enhanced text-center">CDF of Events per Pubkey</h4>
          <div className="flex justify-center">
            <img
              src="/images/cdf-events-per-pubkey.png"
              alt="CDF of Events per Pubkey"
              className="max-h-72 rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="bg-slate-800/40 p-4 rounded-xl text-center border-l-4 border-blue-400 card-enhanced">
            <div className="text-3xl font-bold text-blue-400">~75%</div>
            <div className="text-slate-300 text-sm">1 event only</div>
          </div>
          <div className="bg-slate-800/40 p-4 rounded-xl text-center border-l-4 border-purple-400 card-enhanced">
            <div className="text-3xl font-bold text-purple-400">~90%</div>
            <div className="text-slate-300 text-sm">&lt; 10 events</div>
          </div>
          <div className="bg-slate-800/40 p-4 rounded-xl text-center border-l-4 border-green-400 card-enhanced">
            <div className="text-3xl font-bold text-green-400">~99%</div>
            <div className="text-slate-300 text-sm">&lt; 1,000 events</div>
          </div>
          <div className="bg-slate-800/40 p-4 rounded-xl text-center border-l-4 border-yellow-400 card-enhanced">
            <div className="text-3xl font-bold text-yellow-400">Top 1%</div>
            <div className="text-slate-300 text-sm">&gt; 1,000 events</div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "User Clustering Analysis",
    speakerNotes: (
      <>
        <p>We identified 10 distinct user behavioral clusters using K-means clustering based on event count, lifespan, posting intervals, follower/following counts, and number of read/write relays used. Clusters 0, 1, 8 are high-activity users with long lifespans (~1 year). Clusters 2, 3 are short-lived accounts (bots or abandoned). Cluster 4 contains power users with extremely high event counts. Clusters 5, 6, 9 are recent joiners with moderate activity. Cluster 7 represents early adopters from 2022-2023.</p>
      </>
    ),
    content: (
      <div className="space-y-6">
        <h4 className="text-2xl font-bold text-blue-400 text-enhanced text-center">K-Means Clustering (k=10) - Behavioral Profiles</h4>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-500/20 p-5 rounded-xl border-l-4 border-green-400 card-enhanced">
            <h5 className="font-bold text-green-400 mb-3 text-xl text-enhanced">High-Activity Users</h5>
            <p className="text-slate-300 text-sm mb-2">Clusters 0, 1, 8</p>
            <ul className="text-slate-400 text-sm space-y-1">
              <li>• Long lifespans (~1 year)</li>
              <li>• Many events (10³-10⁶)</li>
              <li>• High follower counts</li>
            </ul>
          </div>

          <div className="bg-red-500/20 p-5 rounded-xl border-l-4 border-red-400 card-enhanced">
            <h5 className="font-bold text-red-400 mb-3 text-xl text-enhanced">Bots / Abandoned</h5>
            <p className="text-slate-300 text-sm mb-2">Clusters 2, 3</p>
            <ul className="text-slate-400 text-sm space-y-1">
              <li>• Short-lived accounts</li>
              <li>• Minimal activity</li>
              <li>• Potential spam sources</li>
            </ul>
          </div>

          <div className="bg-purple-500/20 p-5 rounded-xl border-l-4 border-purple-400 card-enhanced">
            <h5 className="font-bold text-purple-400 mb-3 text-xl text-enhanced">Power Users</h5>
            <p className="text-slate-300 text-sm mb-2">Cluster 4</p>
            <ul className="text-slate-400 text-sm space-y-1">
              <li>• Extremely high event counts (10⁵-10⁶)</li>
              <li>• Active since 2023</li>
              <li>• Heavy automation likely</li>
            </ul>
          </div>

          <div className="bg-blue-500/20 p-5 rounded-xl border-l-4 border-blue-400 card-enhanced">
            <h5 className="font-bold text-blue-400 mb-3 text-xl text-enhanced">Recent Joiners</h5>
            <p className="text-slate-300 text-sm mb-2">Clusters 5, 6, 9</p>
            <ul className="text-slate-400 text-sm space-y-1">
              <li>• Joined 2024-2025</li>
              <li>• Moderate activity</li>
              <li>• Short lifespans</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-500/20 p-4 rounded-xl border-l-4 border-yellow-400 card-enhanced">
          <h5 className="font-bold text-yellow-400 mb-2 text-lg text-enhanced">Early Adopters (Cluster 7)</h5>
          <p className="text-slate-300 text-sm">Users from 2022-2023 with moderate but consistent activity—the backbone of the network</p>
        </div>
      </div>
    )
  },
  {
    title: "Relay Performance",
    speakerNotes: (
      <>
        <p>Of 1,247 relays with metadata, connection success is 98.7% overall (98.5% clearnet, 99.6% Tor). NIP-11 metadata is available for 93% overall. Readable relays: 78.8% overall (73.8% clearnet, 98.8% Tor). Writable relays: 39.7% overall (44.5% clearnet, only 20.5% Tor). This asymmetry is deliberate—Tor relays prioritize read access while restricting writes for anti-abuse.</p>
      </>
    ),
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-slate-800/60 p-8 rounded-xl card-enhanced depth-enhanced ">
            <h4 className="text-2xl font-bold mb-6 text-blue-400 text-enhanced text-depth">Capability Distribution</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-high-contrast mb-2 text-lg text-enhanced">
                  <span>Connection success</span>
                  <span className="font-bold text-2xl text-green-400 text-depth-strong">98.7%</span>
                </div>
                <div className="text-sm text-slate-400 text-enhanced-sm">Clearnet: 98.5% | Tor: 99.6%</div>
              </div>
              <div>
                <div className="flex justify-between text-high-contrast mb-2 text-lg text-enhanced">
                  <span>NIP-11 available</span>
                  <span className="font-bold text-2xl text-blue-400 text-depth-strong">93.0%</span>
                </div>
                <div className="text-sm text-slate-400 text-enhanced-sm">Clearnet: 91.4% | Tor: 99.6%</div>
              </div>
              <div>
                <div className="flex justify-between text-high-contrast mb-2 text-lg text-enhanced">
                  <span>Readable relays</span>
                  <span className="font-bold text-2xl text-purple-400 text-depth-strong">78.8%</span>
                </div>
                <div className="text-sm text-slate-400 text-enhanced-sm">Clearnet: 73.8% | Tor: 98.8%</div>
              </div>
              <div>
                <div className="flex justify-between text-high-contrast mb-2 text-lg text-enhanced">
                  <span>Writable relays</span>
                  <span className="font-bold text-2xl text-yellow-400 text-depth-strong">39.7%</span>
                </div>
                <div className="text-sm text-slate-400 text-enhanced-sm">Clearnet: 44.5% | Tor: 20.5%</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-8 rounded-xl card-enhanced depth-enhanced ">
            <h4 className="text-2xl font-bold mb-6 text-purple-400 text-enhanced text-depth">Latency (RTT Median)</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-high-contrast mb-2 text-lg text-enhanced">
                  <span>Connection (open)</span>
                  <span className="font-bold text-2xl text-blue-400 text-depth-strong">350ms / 870ms</span>
                </div>
                <div className="text-sm text-slate-400 text-enhanced-sm">Clearnet / Tor (+157% overhead)</div>
              </div>
              <div>
                <div className="flex justify-between text-high-contrast mb-2 text-lg text-enhanced">
                  <span>Read operations</span>
                  <span className="font-bold text-2xl text-green-400 text-depth-strong">250ms / 550ms</span>
                </div>
                <div className="text-sm text-slate-400 text-enhanced-sm">+127% Tor overhead</div>
              </div>
              <div>
                <div className="flex justify-between text-high-contrast mb-2 text-lg text-enhanced">
                  <span>Write operations</span>
                  <span className="font-bold text-2xl text-yellow-400 text-depth-strong">150ms / 520ms</span>
                </div>
                <div className="text-sm text-slate-400 text-enhanced-sm">+246% Tor overhead</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-500/15 border-glow rounded-xl p-4 card-enhanced depth-enhanced-lg">
          <h4 className="text-2xl font-bold mb-4 text-yellow-400 text-enhanced text-depth-strong">Key Finding</h4>
          <p className="text-high-contrast text-xl text-enhanced leading-relaxed">
            Tor relays show deliberate asymmetry: 98.8% readable vs 20.5% writable, prioritizing
            content distribution over write access for resource management and anti-abuse.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "RTT Comparison: Clearnet vs Tor",
    speakerNotes: (
      <>
        <p>Tor adds significant latency due to onion routing (3+ hops). Write operations suffer the most at +246%, making Tor relays less suitable for real-time posting. Read operations have the smallest overhead at +127%, making Tor viable for content consumption. Despite higher latency, Tor relays offer privacy benefits for users in restrictive environments.</p>
      </>
    ),
    content: (
      <div className="space-y-6">
        <div className="bg-slate-800/60 p-6 rounded-xl card-enhanced">
          <h4 className="text-2xl font-bold mb-4 text-blue-400 text-enhanced text-center">Round Trip Time Comparison</h4>
          <div className="flex justify-center">
            <img
              src="/images/rtt-comparison-clearnet-tor.png"
              alt="RTT Comparison Clearnet vs Tor"
              className="max-h-72 rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-500/20 p-5 rounded-xl text-center card-enhanced">
            <div className="text-lg font-bold text-blue-400 mb-2">Open Connection</div>
            <div className="text-slate-300">~340ms vs ~870ms</div>
            <div className="text-2xl font-bold text-red-400 mt-2">+157%</div>
          </div>
          <div className="bg-orange-500/20 p-5 rounded-xl text-center card-enhanced">
            <div className="text-lg font-bold text-orange-400 mb-2">Read Operation</div>
            <div className="text-slate-300">~230ms vs ~520ms</div>
            <div className="text-2xl font-bold text-yellow-400 mt-2">+127%</div>
          </div>
          <div className="bg-green-500/20 p-5 rounded-xl text-center card-enhanced">
            <div className="text-lg font-bold text-green-400 mb-2">Write Operation</div>
            <div className="text-slate-300">~120ms vs ~420ms</div>
            <div className="text-2xl font-bold text-red-400 mt-2">+246%</div>
          </div>
        </div>

        <div className="bg-purple-500/15 border-glow-purple rounded-xl p-4 card-enhanced">
          <p className="text-high-contrast text-lg text-center text-enhanced">
            Tor is viable for <strong className="text-green-400">content consumption</strong> but challenging for <strong className="text-red-400">real-time posting</strong>
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Relay Coverage Analysis",
    speakerNotes: (
      <>
        <p>Top 20 relays cover ~63% of events and ~48% of pubkeys. Top 100 relays reach ~95% coverage for both. Full coverage requires ~600+ relays. 42% of events appear on only 1 relay, and ~60% of pubkeys use only 1 relay. Long-lived users achieve faster coverage across relays than ephemeral accounts. Removing top 200 relays still leaves ~10% of events accessible elsewhere.</p>
      </>
    ),
    content: (
      <div className="space-y-6">
        <div className="bg-slate-800/60 p-6 rounded-xl card-enhanced">
          <h4 className="text-2xl font-bold mb-4 text-blue-400 text-enhanced text-center">Relay Coverage by Top N Relays</h4>
          <div className="flex justify-center">
            <img
              src="/images/relay-coverage-by-top-n.png"
              alt="Relay Coverage by Top N Relays"
              className="max-h-72 rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-500/20 p-5 rounded-xl text-center card-enhanced">
            <div className="text-3xl font-bold text-blue-400">Top 20</div>
            <div className="text-slate-300">63% events | 48% pubkeys</div>
          </div>
          <div className="bg-purple-500/20 p-5 rounded-xl text-center card-enhanced">
            <div className="text-3xl font-bold text-purple-400">Top 100</div>
            <div className="text-slate-300">~95% coverage</div>
          </div>
          <div className="bg-green-500/20 p-5 rounded-xl text-center card-enhanced">
            <div className="text-3xl font-bold text-green-400">600+</div>
            <div className="text-slate-300">Full coverage</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-red-500/15 border-l-4 border-red-400 p-4 rounded-xl card-enhanced">
            <p className="text-slate-300"><strong className="text-red-400">42%</strong> of events appear on only 1 relay</p>
          </div>
          <div className="bg-yellow-500/15 border-l-4 border-yellow-400 p-4 rounded-xl card-enhanced">
            <p className="text-slate-300"><strong className="text-yellow-400">~60%</strong> of pubkeys use only 1 relay</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Top Relays",
    speakerNotes: (
      <>
        <p>By event count: relay.nostr.band leads with 45M events, followed by a.nos.lol with 19.5M and nos.lol with 12.6M. By unique pubkeys: directory.yabu.me has 7.5M pubkeys, relay.nos.social has 6.6M, and nostr.oxtr.dev has 4.4M. Tor hidden services like oxtrdevav64z64yb7x.onion mirror the same data as their clearnet counterparts like nostr.oxtr.dev.</p>
      </>
    ),
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-slate-800/60 p-6 rounded-xl card-enhanced">
            <h4 className="text-xl font-bold mb-4 text-blue-400 text-enhanced">Top Relays by Event Count</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-slate-900/60 rounded-lg">
                <span className="text-slate-300 text-sm">relay.nostr.band</span>
                <span className="font-bold text-blue-400">45M</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-900/60 rounded-lg">
                <span className="text-slate-300 text-sm">a.nos.lol</span>
                <span className="font-bold text-purple-400">19.5M</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-900/60 rounded-lg">
                <span className="text-slate-300 text-sm">nos.lol</span>
                <span className="font-bold text-green-400">12.6M</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-6 rounded-xl card-enhanced">
            <h4 className="text-xl font-bold mb-4 text-purple-400 text-enhanced">Top Relays by Unique Pubkeys</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-slate-900/60 rounded-lg">
                <span className="text-slate-300 text-sm">directory.yabu.me</span>
                <span className="font-bold text-blue-400">7.5M</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-900/60 rounded-lg">
                <span className="text-slate-300 text-sm">relay.nos.social</span>
                <span className="font-bold text-purple-400">6.6M</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-900/60 rounded-lg">
                <span className="text-slate-300 text-sm">nostr.oxtr.dev</span>
                <span className="font-bold text-green-400">4.4M</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-purple-500/15 border-glow-purple p-5 rounded-xl card-enhanced">
          <h4 className="text-xl font-bold mb-3 text-purple-400 text-enhanced">Tor Hidden Services</h4>
          <p className="text-slate-300 text-sm mb-3">Mirror same data as clearnet counterparts:</p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-slate-900/60 p-3 rounded-lg">
              <span className="text-purple-400">oxtrdevav64z64yb7x...onion</span>
              <span className="text-slate-400"> → nostr.oxtr.dev (8.8M events)</span>
            </div>
            <div className="bg-slate-900/60 p-3 rounded-lg">
              <span className="text-purple-400">sovbitm2enxfr5ot6q...onion</span>
              <span className="text-slate-400"> → freelay.sovbit.host (7.4M events)</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Relay Restrictions & Policies",
    speakerNotes: (
      <>
        <p>52.8% of relays require payment to write (45.1% clearnet, 83.6% Tor). 40.3% have restricted writes (30.6% clearnet, 79.2% Tor). Tor relays are predominantly read-only—73% versus only 7% for clearnet. This reflects economic sustainability needs and anti-abuse measures.</p>
      </>
    ),
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-slate-800/60 p-6 rounded-xl card-enhanced">
            <h4 className="text-xl font-bold mb-4 text-blue-400 text-enhanced">Access Policies</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-high-contrast mb-2 text-lg text-enhanced">
                  <span>Payment required</span>
                  <span className="font-bold text-xl text-blue-400">52.8%</span>
                </div>
                <div className="text-sm text-slate-400">Clearnet: 45.1% | Tor: 83.6%</div>
              </div>
              <div>
                <div className="flex justify-between text-high-contrast mb-2 text-lg text-enhanced">
                  <span>Restricted writes</span>
                  <span className="font-bold text-xl text-purple-400">40.3%</span>
                </div>
                <div className="text-sm text-slate-400">Clearnet: 30.6% | Tor: 79.2%</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/60 p-6 rounded-xl card-enhanced">
            <h4 className="text-xl font-bold mb-4 text-purple-400 text-enhanced">Read-Only Distribution</h4>
            <div className="flex items-center justify-around h-32">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400">7%</div>
                <div className="text-slate-300 text-sm">Clearnet</div>
              </div>
              <div className="text-3xl text-slate-500">vs</div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400">73%</div>
                <div className="text-slate-300 text-sm">Tor</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-500/15 border-glow rounded-xl p-5 card-enhanced">
          <h4 className="text-xl font-bold mb-3 text-yellow-400 text-enhanced">Economic Models</h4>
          <p className="text-slate-300 text-enhanced-sm">
            High payment requirements (52.8%, especially 83.6% on Tor) indicate relay operators seeking sustainability through direct monetization, particularly where user identification isn't possible.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Related Work",
    speakerNotes: (
      <>
        <p>Wei and Tyson (CoNEXT 2025) conducted a 6-month snapshot study finding 712 relays and 17.8 million posts, with no Tor coverage. BigBrotr extends this with continuous monitoring, 12x more relays, systematic Tor coverage, and temporal provenance tracking.</p>
        <p>Kimura et al. (EuroS&P 2025) focus on security vulnerabilities—complementary to our network behavior monitoring.</p>
        <p>Compared to Nostr.watch (700 relays, 15-min snapshots), BigBrotr offers the first comprehensive, continuous, open observatory enabling reproducible research.</p>
      </>
    ),
    content: (
      <div className="space-y-4">
        <div className="bg-slate-800/60 p-4 rounded-xl card-enhanced depth-enhanced ">
          <h4 className="text-2xl font-bold mb-2 text-blue-400 text-enhanced text-depth">Wei & Tyson (CoNEXT 2025)</h4>
          <div className="grid grid-cols-2 gap-8 text-base">
            <div>
              <div className="font-bold text-slate-300 mb-4 text-lg text-enhanced">Their Work:</div>
              <ul className="text-slate-400 space-y-2 text-enhanced-sm">
                <li>6-month snapshot (2023)</li>
                <li>712 relays, 17.8M posts</li>
                <li>20% downtime &gt;40%</li>
                <li>No Tor coverage</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-slate-300 mb-4 text-lg text-enhanced">Our Extension:</div>
              <ul className="text-slate-400 space-y-2 text-enhanced-sm">
                <li>Continuous monitoring</li>
                <li>8,865 relays (12× increase)</li>
                <li>Systematic Tor (20%)</li>
                <li>Temporal provenance</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-800/60 p-4 rounded-xl card-enhanced depth-enhanced ">
            <h4 className="text-2xl font-bold mb-2 text-purple-400 text-enhanced text-depth">Kimura et al. (EuroS&P 2025)</h4>
            <p className="text-slate-300 text-lg mb-3 text-enhanced">Security analysis: implementation vulnerabilities</p>
            <p className="text-slate-400 text-base text-enhanced-sm">
              Our contribution: Monitor real-world exploitation patterns
            </p>
          </div>

          <div className="bg-slate-800/60 p-4 rounded-xl card-enhanced depth-enhanced ">
            <h4 className="text-2xl font-bold mb-2 text-green-400 text-enhanced text-depth">Existing Tools</h4>
            <div className="text-slate-300 text-base space-y-3 text-enhanced-sm">
              <div><strong>Nostr.watch:</strong> 15min snapshots, ~700 relays</div>
              <div><strong>NIP-66:</strong> Proposed standard</div>
              <div><strong className="text-green-400">BigBrotr:</strong> Continuous, 8,865 relays, open data</div>
            </div>
          </div>
        </div>

        <div className="bg-blue-500/15 border-glow rounded-xl p-4 card-enhanced depth-enhanced-lg">
          <p className="text-high-contrast text-xl text-enhanced leading-relaxed">
            First comprehensive, continuous, open observatory enabling reproducible research on
            decentralized social protocols at scale.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Open Science Commitment",
    speakerNotes: (
      <>
        <p>Open source (MIT license): Complete system architecture on GitHub, Python library on PyPI, Docker deployment, full documentation.</p>
        <p>Open data (ODbL): Monthly event snapshots, hourly relay health metrics, daily network topology, quarterly social graphs—all properly anonymized.</p>
      </>
    ),
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-500/25 to-blue-600/15 p-4 rounded-xl border-glow card-enhanced depth-enhanced ">
            <h4 className="text-2xl font-bold mb-6 text-blue-400 text-enhanced text-depth">Open Source (MIT)</h4>
            <ul className="space-y-3 text-slate-300 text-lg text-enhanced-sm">
              <li>✓ Complete system architecture</li>
              <li>✓ Production Python library (PyPI)</li>
              <li>✓ Docker deployment</li>
              <li>✓ Documentation & guides</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-500/25 to-purple-600/15 p-4 rounded-xl border-glow-purple card-enhanced depth-enhanced ">
            <h4 className="text-2xl font-bold mb-6 text-purple-400 text-enhanced text-depth">Open Data (ODbL)</h4>
            <ul className="space-y-3 text-slate-300 text-lg text-enhanced-sm">
              <li>✓ Monthly event snapshots</li>
              <li>✓ Hourly relay health metrics</li>
              <li>✓ Daily network topology</li>
              <li>✓ Quarterly social graphs</li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-800/60 p-4 rounded-xl card-enhanced depth-enhanced ">
          <h4 className="text-2xl font-bold mb-4 text-green-400 text-enhanced text-depth">Research Enablement</h4>
          <div className="grid grid-cols-3 gap-4 text-slate-300">
            <div className="text-center p-4 bg-slate-900/60 rounded-xl card-enhanced depth-enhanced">
              <div className="font-bold text-green-400 text-xl text-enhanced mb-2">Network Science</div>
              <div className="text-base text-slate-400 text-enhanced-sm">Topology, centrality, resilience</div>
            </div>
            <div className="text-center p-4 bg-slate-900/60 rounded-xl card-enhanced depth-enhanced">
              <div className="font-bold text-blue-400 text-xl text-enhanced mb-2">Social Computing</div>
              <div className="text-base text-slate-400 text-enhanced-sm">User behavior, communities</div>
            </div>
            <div className="text-center p-4 bg-slate-900/60 rounded-xl card-enhanced depth-enhanced">
              <div className="font-bold text-purple-400 text-xl text-enhanced mb-2">Security</div>
              <div className="text-base text-slate-400 text-enhanced-sm">Attack patterns, compliance</div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-500/15 border-glow rounded-xl p-4 card-enhanced depth-enhanced-lg">
          <p className="text-high-contrast text-xl text-center text-enhanced leading-relaxed">
            <strong className="text-yellow-400 text-2xl text-depth-strong">First longitudinal dataset</strong> for decentralized
            protocol analysis — enabling cross-disciplinary reproducible research
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Ethical Considerations",
    speakerNotes: (
      <>
        <p>We collect only public data that users broadcast to relays. No private content, no de-anonymization attempts. All events are cryptographically verified and archived unmodified. We implement rate limiting (1 req/sec default), respect relay rejections with exponential backoff, and remove PII from datasets.</p>
        <p>For Tor specifically: we support privacy infrastructure, make zero de-anonymization attempts, and aim to improve operations through empirical data.</p>
      </>
    ),
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-800/60 p-8 rounded-xl card-enhanced depth-enhanced ">
            <h4 className="text-2xl font-bold mb-6 text-blue-400 text-enhanced text-depth">Data Collection Ethics</h4>
            <ul className="space-y-3 text-slate-300 text-base text-enhanced-sm">
              <li>✓ <strong className="text-blue-300">Public data only:</strong> Intentionally broadcast events</li>
              <li>✓ <strong className="text-blue-300">Cryptographic verification:</strong> All signatures validated</li>
              <li>✓ <strong className="text-blue-300">No modification:</strong> Archive without editorial filtering</li>
              <li>✓ <strong className="text-blue-300">Transparent methods:</strong> Documented & reproducible</li>
              <li>✓ <strong className="text-blue-300">Anonymization:</strong> PII removed in public releases</li>
            </ul>
          </div>

          <div className="bg-slate-800/60 p-8 rounded-xl card-enhanced depth-enhanced ">
            <h4 className="text-2xl font-bold mb-6 text-green-400 text-enhanced text-depth">Operator Respect</h4>
            <ul className="space-y-3 text-slate-300 text-base text-enhanced-sm">
              <li>✓ <strong className="text-green-300">Rate limiting:</strong> 1 req/sec default</li>
              <li>✓ <strong className="text-green-300">Connection pooling:</strong> Minimize overhead</li>
              <li>✓ <strong className="text-green-300">Honor rejections:</strong> Exponential backoff</li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-500/15 border-glow-purple rounded-xl p-8 card-enhanced depth-enhanced-lg">
          <h4 className="text-2xl font-bold mb-6 text-purple-400 text-enhanced text-depth-strong">Tor Network Privacy</h4>
          <ul className="space-y-3 text-high-contrast text-lg text-enhanced-sm">
            <li><strong className="text-purple-300">No de-anonymization attempts</strong> on Tor users</li>
            <li>Performance analysis helps improve Tor operations</li>
            <li>Validates censorship resistance empirically</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "Summary",
    speakerNotes: (
      <>
        <p>BigBrotr provides unprecedented scale: 8,865 relays, 208.5M events, 19.7M users, and ~1.26 TB of data with temporal provenance tracking. We're committed to open science with MIT-licensed code and ODbL datasets.</p>
        <p>Key findings: ~75% of pubkeys publish only 1 event. Top 1% generate 44% of text content. Top 20 relays cover 63% of events. Tor represents 20% of network with 2-3x latency overhead but high read availability (98.8%).</p>
        <p>Vision: Transparent, Measurable, Auditable Networks. Applying "don't trust, verify" to communication infrastructure.</p>
      </>
    ),
    content: (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-blue-500/25 to-purple-500/25 p-8 rounded-xl border-glow card-enhanced depth-enhanced-lg">
          <h3 className="text-3xl font-bold mb-6 text-blue-400 text-enhanced text-depth-strong">BigBrotr's Contributions</h3>
          <div className="grid grid-cols-2 gap-6 text-slate-300 text-lg text-enhanced-sm">
            <div>• First complete observatory with temporal depth</div>
            <div>• Unprecedented scale: 8,865 relays, 208.5M events</div>
            <div>• Open science: MIT infrastructure + ODbL data</div>
            <div>• ~1.26 TB of data with 976.4M provenance records</div>
          </div>
        </div>

        <div className="bg-slate-800/60 p-8 rounded-xl card-enhanced depth-enhanced ">
          <h3 className="text-3xl font-bold mb-6 text-purple-400 text-enhanced text-depth">Key Insights</h3>
          <div className="grid grid-cols-2 gap-6 text-slate-300 text-base text-enhanced-sm">
            <div>
              <strong className="text-green-400 text-lg">Power Law:</strong> ~75% pubkeys have 1 event
            </div>
            <div>
              <strong className="text-yellow-400 text-lg">Concentration:</strong> Top 20 relays = 63% events
            </div>
            <div>
              <strong className="text-blue-400 text-lg">Tor integration:</strong> 20% network, 98.8% readable
            </div>
            <div>
              <strong className="text-purple-400 text-lg">User Clusters:</strong> 10 distinct behavioral groups
            </div>
          </div>
        </div>

        <div className="bg-yellow-500/15 border-glow rounded-xl p-6 card-enhanced text-center">
          <p className="text-2xl font-bold text-yellow-400 text-enhanced">
            "Don't trust, verify" — applied to communication infrastructure
          </p>
        </div>
      </div>
    )
  }
];

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => prev < slides.length - 1 ? prev + 1 : prev);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => prev > 0 ? prev - 1 : prev);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlide(slides.length - 1);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        // Could add fullscreen toggle here
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="w-full h-screen flex flex-col bg-slate-900">
      <div className="flex-1 overflow-hidden">
        <Slide
          title={slides[currentSlide].title}
          number={currentSlide + 1}
          total={slides.length}
          speakerNotes={slides[currentSlide].speakerNotes}
        >
          {slides[currentSlide].content}
        </Slide>
      </div>

      <div className="bg-slate-800/90 backdrop-blur-sm px-4 py-2 flex items-center justify-between border-t border-slate-600 flex-shrink-0">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500/90 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-all font-medium text-sm btn-enhanced"
        >
          <ChevronLeft size={16} />
          Prev
        </button>

        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 overflow-x-auto max-w-xl">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentSlide
                  ? 'bg-blue-400 scale-125 shadow-md shadow-blue-400/50'
                  : 'bg-slate-600 hover:bg-slate-500 hover:scale-110'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500/90 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-all font-medium text-sm btn-enhanced"
        >
          Next
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Presentation;
