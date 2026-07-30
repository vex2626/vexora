"use client";

import { motion } from "framer-motion";
import { products } from "../lib/data";
import SectionTitle from "./SectionTitle";
import InteractiveCard from "./InteractiveCard";
import "./Products.css";

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const panelLift = { hover: { y: -8, boxShadow: '0 40px 80px rgba(124,58,237,0.18)' } };

export default function Products() {
  const main = products[0];
  const others = products.slice(1);

  return (
    <motion.section
      id="products"
      className="relative px-6 py-24 sm:px-8 lg:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_center,rgba(191,18,238,0.06),transparent_58%)]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
          <SectionTitle
            title="Vexora Studio"
            text="Product systems with operational clarity — a futuristic software laboratory where every product feels startup-ready."
          />
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 items-start">
          {/* Main large product */}
          <motion.div className="lg:col-span-7 relative">
            <motion.div
              className="product-panel product-main overflow-hidden"
              whileHover="hover"
              variants={panelLift}
            >
              <div className="panel-badges">
                <span className="badge badge-live">Live</span>
                <span className="badge badge-enterprise">Enterprise Ready</span>
              </div>

              <div className="product-preview">
                <div className="preview-left">
                  <div className="preview-header">
                    <div className="dot-group">
                      <span /> <span /> <span />
                    </div>
                    <div className="title">{main.title}</div>
                    <a href="https://itassets.infinityfree.io/index.php" target="_blank" rel="noreferrer" className="preview-cta">Login</a>
                  </div>

                  <div className="preview-charts">
                    <svg viewBox="0 0 480 60" className="sparkline" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="g1" x1="0" x2="1">
                          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.95" />
                          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.6" />
                        </linearGradient>
                      </defs>
                      <path d="M0,40 C60,20 120,10 180,30 C240,50 300,20 360,35 C420,45 480,30 540,20" stroke="url(#g1)" strokeWidth="4" fill="none" strokeLinecap="round" />
                    </svg>

                    <div className="tiles">
                      <div className="tile">
                        <div className="tile-title">Devices</div>
                        <div className="tile-value">1,248</div>
                      </div>
                      <div className="tile">
                        <div className="tile-title">Online</div>
                        <div className="tile-value">1,042</div>
                      </div>
                      <div className="tile">
                        <div className="tile-title">Alerts</div>
                        <div className="tile-value">18</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="preview-right">
                  <div className="card small-panel">
                    <div className="small-title">Inventory</div>
                    <div className="small-content">Servers: 72 • Switches: 24</div>
                  </div>
                  <div className="card small-panel">
                    <div className="small-title">Workloads</div>
                    <div className="small-content">Healthy • 98%</div>
                  </div>
                </div>
              </div>

              <div className="ambient-particles">
                <span /> <span /> <span /> <span /> <span />
              </div>
            </motion.div>
          </motion.div>

          {/* Right column with smaller products */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {others.map((p, i) => (
              <motion.div key={p.title} className={`product-panel product-small group`} whileHover={{ y: -6 }}>
                <div className="panel-badges">
                  <span className={`badge ${i === 0 ? 'badge-soon' : 'badge-soon'}`}>Coming soon</span>
                </div>
                <div className="small-preview">
                  <div className="small-top">
                    <div className="small-title">{p.title}</div>
                    <div className="small-sub">{p.description}</div>
                  </div>
                  <div className="small-mock">
                    <div className="mock-row">
                      <div className="mock-box" />
                      <div className="mock-box" />
                      <div className="mock-box" />
                    </div>
                    <div className="mock-graph" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
