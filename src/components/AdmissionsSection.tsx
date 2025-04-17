
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Clock, FileText, DollarSign, HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const AdmissionsSection = () => {
  const admissionSteps = [
    { 
      title: "Application Submission", 
      description: "Complete the online application form and submit all required documents.",
      icon: <FileText className="h-6 w-6" />
    },
    { 
      title: "Entrance Examination", 
      description: "Students take a standardized entrance exam to assess their academic readiness.",
      icon: <Clock className="h-6 w-6" />
    },
    { 
      title: "Interview Process", 
      description: "Shortlisted candidates and their parents attend an interview with school officials.",
      icon: <CheckCircle className="h-6 w-6" />
    },
    { 
      title: "Admission Decision", 
      description: "Final selection is made based on examination results, interview, and available spaces.",
      icon: <Calendar className="h-6 w-6" />
    },
  ];

  const faqs = [
    {
      question: "What are the admission requirements for Form 1?",
      answer: "For Form 1 admission, students must have completed their KCPE with a minimum score of 350 marks. They also need to submit their KCPE result slip, two recommendation letters from their primary school, birth certificate, and passport photos. All candidates must take our entrance examination and attend an interview with a parent or guardian."
    },
    {
      question: "Do you accept transfer students to other Forms?",
      answer: "Yes, we accept transfer students to Forms 2 and 3 on a case-by-case basis, depending on available spaces and the student's academic performance. Transfer students must provide their current school transcript, recommendation letters, and take our placement test. We do not typically accept transfers into Form 4."
    },
    {
      question: "What is the school's fee structure?",
      answer: "Our annual fees range from KSh 65,000 to KSh 85,000 per term, depending on the Form level and whether the student is a boarder or day scholar. This covers tuition, development fund, caution money, and activity fees. Additional costs may apply for specialized programs and materials. Detailed fee structures are provided upon request."
    },
    {
      question: "Are scholarships or financial aid available?",
      answer: "We offer a limited number of merit-based scholarships to academically gifted students and need-based financial aid to deserving cases. Applications for financial assistance must be submitted along with the admission application and include supporting documentation of financial need. Our scholarship committee reviews all applications and makes decisions based on merit and available funds."
    },
    {
      question: "What is the teacher-to-student ratio in classrooms?",
      answer: "We maintain a low teacher-to-student ratio of 1:25 to ensure personalized attention and effective learning. Our specialized programs may have even smaller class sizes to facilitate more intensive instruction and interaction."
    },
  ];

  return (
    <section id="admissions" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Admissions</h2>
          <div className="w-20 h-1 bg-kenya-accent mx-auto mt-4 mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Join our community of learners and embark on a journey of academic excellence and personal growth.
            We're looking for motivated students who will contribute to our diverse and dynamic environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Admission Process</h3>
            <p className="mb-8 text-muted-foreground">
              Our admission process is designed to identify students who will thrive in our rigorous academic 
              environment and contribute positively to our school community. Here's what to expect:
            </p>
            
            <div className="space-y-6">
              {admissionSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-kenya-green/10 flex items-center justify-center mr-4">
                    <div className="text-kenya-green">
                      {step.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Step {index + 1}: {step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10">
              <h4 className="text-lg font-semibold mb-3">Key Dates for 2024-2025 Admissions</h4>
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex justify-between py-2 border-b border-border">
                  <span>Application Opens</span>
                  <span className="font-medium">September 1, 2024</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span>Application Deadline</span>
                  <span className="font-medium">December 15, 2024</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span>Entrance Examinations</span>
                  <span className="font-medium">January 10-11, 2025</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span>Interviews</span>
                  <span className="font-medium">January 20-24, 2025</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Admission Decision</span>
                  <span className="font-medium">February 10, 2025</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Apply Now</h3>
              <p className="mb-6 text-muted-foreground">
                Take the first step towards joining our community. Fill out the preliminary application form,
                and our admissions team will guide you through the rest of the process.
              </p>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-kenya-green"
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-kenya-green"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-kenya-green"
                    placeholder="Email Address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-kenya-green"
                    placeholder="Phone Number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Applying for Form</label>
                  <select className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-kenya-green">
                    <option value="">Select Form</option>
                    <option value="form1">Form 1</option>
                    <option value="form2">Form 2</option>
                    <option value="form3">Form 3</option>
                    <option value="form4">Form 4</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Message (Optional)</label>
                  <textarea 
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-kenya-green"
                    rows={3}
                    placeholder="Additional information or questions"
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full bg-kenya-green hover:bg-kenya-green/90">
                  Submit Application
                </Button>
              </form>
              
              <div className="mt-6 text-center text-sm text-muted-foreground">
                <p>For inquiries, contact our admissions office:</p>
                <p className="font-medium mt-1">admissions@nyotaschool.ac.ke | +254 712 345 678</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Tuition & Financial Aid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Tuition & Financial Aid</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-kenya-red/10 rounded-full mr-3">
                  <DollarSign className="h-6 w-6 text-kenya-red" />
                </div>
                <h4 className="text-xl font-semibold">Fee Structure</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-border">
                  <span>Form 1 (Day Scholar)</span>
                  <span className="font-medium">KSh 65,000 per term</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span>Form 1 (Boarder)</span>
                  <span className="font-medium">KSh 85,000 per term</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span>Forms 2-3 (Day Scholar)</span>
                  <span className="font-medium">KSh 70,000 per term</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span>Forms 2-3 (Boarder)</span>
                  <span className="font-medium">KSh 90,000 per term</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span>Form 4 (Day Scholar)</span>
                  <span className="font-medium">KSh 75,000 per term</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Form 4 (Boarder)</span>
                  <span className="font-medium">KSh 95,000 per term</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                * Fees include tuition, development fund, caution money, and activity fees. 
                Additional costs may apply for specialized programs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-kenya-green/10 rounded-full mr-3">
                  <HelpCircle className="h-6 w-6 text-kenya-green" />
                </div>
                <h4 className="text-xl font-semibold">Scholarships & Financial Aid</h4>
              </div>
              <p className="mb-4 text-muted-foreground">
                We believe that financial circumstances should not be a barrier to quality education. 
                Nyota Secondary School offers several financial aid options:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-kenya-green rounded-full mr-2 mt-2"></span>
                  <span><strong>Academic Merit Scholarships:</strong> For top-performing students based on entrance exam results and previous academic records.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-kenya-green rounded-full mr-2 mt-2"></span>
                  <span><strong>Need-Based Financial Aid:</strong> For families demonstrating financial need, covering up to 50% of tuition costs.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-kenya-green rounded-full mr-2 mt-2"></span>
                  <span><strong>Talent Scholarships:</strong> For exceptional abilities in sports, music, art, or other extracurricular areas.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-kenya-green rounded-full mr-2 mt-2"></span>
                  <span><strong>Payment Plans:</strong> Flexible payment options available for all families.</span>
                </li>
              </ul>
              <Button className="mt-6 bg-kenya-accent hover:bg-kenya-accent/90">
                Learn More About Financial Aid
              </Button>
            </div>
          </div>
        </motion.div>
        
        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Can't find the answer to your question? Contact our admissions office directly.
            </p>
            <Button className="bg-kenya-red hover:bg-kenya-red/90">
              Contact Admissions
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
