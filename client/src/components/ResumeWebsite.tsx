import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";
import { ContactForm } from "@/components/ui/contact-form";
import { Timeline } from "@/components/ui/timeline";

const professionalSummary = `Experienced finance professional with over a decade of expertise in financial management, strategic planning, and corporate governance. Demonstrated success in budgeting, forecasting, financial modeling, and compliance controls (GAAP, IFRS). Adept at driving cost reduction initiatives, re-engineering business processes, and performing complex trend analysis to optimize financial performance. Skilled in cross-functional collaboration and long-term strategic decision-making to foster growth and profitability.`;

const experiences = [
  {
    role: "Strategic Finance Lead",
    company: "Intel Corporation",
    duration: "Dec 2021 – Nov 2024",
    description: `\n- Established a portfolio management process to optimize technology investments, minimize risks, and enhance decision-making.\n- Collaborate with operations and finance teams to size investment opportunities, identify cost-saving measures, and develop long-term forecasts.\n- Lead financial planning efforts, including OpEx forecasting, what-if analyses, and roadmap scenario modeling for manufacturing processes.\n- Drive commodity forecasting for Intel's global Fab network, providing data-driven insights for cost structure improvements.\n- Partner with cross-functional teams to execute strategic growth initiatives, focusing on affordability and manufacturing strategies.\n    `
  },
  {
    role: "Finance and Contract Manager",
    company: "VOA, Oregon",
    duration: "April 2018 – Dec 2021",
    description: `\n- Managed the annual operating budget process and tracked performance against budgets and forecasts to identify trends and variances.\n- Developed and implemented financial models to support strategic decision-making and improve operational efficiency.\n- Negotiated contracts, resulting in streamlined processes and improved financial terms.\n- Automated financial reporting, enhancing accuracy and reducing reporting time by 20%.\n- Acted as a finance partner, providing actionable insights to stakeholders across the organization.\n    `
  },
  {
    role: "Planned Sabbatical",
    company: "Personal / Self",
    duration: "2016 – 2018",
    description: `\n- Took a professional sabbatical to raise a family and remained engaged in continuous learning through courses at Wharton, NYU Stern, and ISB.\n- Wrote grant proposals to support non-profits (Minds Matter), contributing to successful fundraising efforts.\n    `
  },
  {
    role: "Lead, Finance and Accounts",
    company: "Sony India Software Center",
    duration: "Dec 2012 – Sep 2015",
    description: `\n- Managed financial reporting, budgeting, and cash flow projections for multiple business units.\n- Conducted business reviews with senior management, including revenue forecasting, cost tracking, and trend analysis.\n- Ensured SEZ compliance and reduced overall operating costs by 15% through effective budgeting and planning.\n- Collaborated with accounting teams to close financial books by day 2 of each month, maintaining high data integrity.\n    `
  },
  {
    role: "Financial Controller",
    company: "KPIT Cummins Infosystems Ltd",
    duration: "Jan 2012 – Dec 2012",
    description: `\n- Led financial activities, including capital budgeting, risk management, and vendor contract negotiations, ensuring projects stayed on time and within budget.\n- Reduced semiconductor business unit costs by 15% through optimization and strategic planning.\n- Partnered with senior management for revenue forecasting, variance analysis, and cost control initiatives.\n    `
  },
  {
    role: "Senior Financial Analyst, Corporate Finance & Forex Treasury",
    company: "Tech Mahindra Ltd",
    duration: "July 2007 – Jan 2012",
    description: `\n- Developed KPIs and provided financial analysis across 200+ projects, leading to a 20% reduction in total project costs.\n- Consolidated financial data from multiple sources to benchmark performance against competitors.\n- Managed forex transactions, including hedging and fund transfers, with detailed MTM reporting.\n- Collaborated with project managers to design reports improving project financial visibility and control.\n    `
  }
];

const skills = [
  { name: "Financial Reporting & Statements (GAAP, IFRS)", level: "Intermediate" },
  { name: "Budgeting, Forecasting & Long-Range Planning", level: "Expert" },
  { name: "Cost Management & ROI analysis", level: "Expert" },
  { name: "Capital Budgeting & Corporate Restructuring", level: "Expert" },
  { name: "Financial Modeling & Scenario Analysis", level: "Expert" },
  { name: "Key Performance Metrics & Dashboard Reporting", level: "Expert" },
  { name: "Contract Negotiation & Vendor Management", level: "Intermediate" },
  { name: "Microsoft Office Suite (Advanced Excel, Power BI, Word, PowerPoint)", level: "Expert" },
  { name: "SAP Finance, Hyperion, PeopleSoft, Sage Intacct, Oracle, SQL", level: "Intermediate" },
];

const education = [
  {
    degree: "M.B.A. in Finance & Systems",
    institution: "PUMBA (Department of Management Sciences, Pune)",
  },
  {
    degree: "B.E. in Production Engineering",
    institution: "Sinhgad College of Engineering, Pune",
  }
];

export default function ResumeWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-2xl"
        >
          Meet Me
        </motion.div>
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-x-4"
        >
          <a href="#about" className="hover:text-gray-600 transition-colors">About</a>
          <a href="#experience" className="hover:text-gray-600 transition-colors">Experience</a>
          <a href="#skills" className="hover:text-gray-600 transition-colors">Skills</a>
          <a href="#education" className="hover:text-gray-600 transition-colors">Education</a>
          <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
        </motion.nav>
      </header>

      <section id="about" className="py-16">
        <motion.div
          className="container mx-auto px-6 flex items-center shadow rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full md:w-1/2 text-left pr-4">
            <motion.h1
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Haripriya Tanuku Venkata
            </motion.h1>
            <motion.p
              className="max-w-xl text-lg text-gray-700"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {professionalSummary}
            </motion.p>
          </div>
          <div className="hidden md:block md:w-1/2">
            <motion.div
              className="relative w-full h-[400px] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Skeleton loader */}
              <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl" />

              <motion.img
                src="/headshot.jpeg"
                alt="Professional Headshot"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                onLoad={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.opacity = '1';
                }}
                style={{ opacity: 0 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="experience" className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center mb-10"
          >
            Work Experience
          </motion.h2>
          <Timeline items={experiences} />
        </div>
      </section>

      <section id="skills" className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center mb-10"
          >
            Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <Card className="rounded-2xl shadow hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-medium">{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {skill.level && (
                      <p className="text-sm text-gray-600">Level: {skill.level}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center mb-10"
          >
            Education
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <p className="text-gray-700 font-semibold">{edu.institution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="additional-info" className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center mb-10"
          >
            Additional Information
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold">Power MBA</h3>
              <p className="text-gray-700 font-semibold">The Power Business School</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold">Generative AI and Data Analytics</h3>
              <p className="text-gray-700 font-semibold">LinkedIn Learning</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center mb-10"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      <footer className="bg-white border-t py-6 mt-auto">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Haripriya Tanuku Venkata. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 flex items-center gap-1 hover:underline"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}