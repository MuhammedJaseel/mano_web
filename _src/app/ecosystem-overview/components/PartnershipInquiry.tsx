'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const PartnershipInquiry = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    partnershipType: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const partnershipTypes = [
    'Exchange Integration',
    'Wallet Integration',
    'DApp Development',
    'Infrastructure Provider',
    'Security Audit',
    'Marketing Partnership',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        partnershipType: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-deep-navy via-deep-authority to-secondary rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-64 h-64 bg-brand-primary rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-64 h-64 bg-brand-secondary rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 bg-brand-secondary/20 border border-brand-secondary/30 rounded-full px-6 py-2 mb-6">
                  <Icon name="HandRaisedIcon" size={20} variant="solid" className="text-brand-secondary" />
                  <span className="text-sm font-semibold text-brand-secondary">Partnership Inquiry</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary-foreground mb-4">
                  Build the Future Together
                </h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  Join our growing ecosystem of partners and integrations. Let&apos;s discuss how we can collaborate.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-trust-builder/10 border border-trust-builder/30 rounded-xl p-8 text-center">
                  <Icon name="CheckCircleIcon" size={64} variant="solid" className="text-trust-builder mx-auto mb-4" />
                  <h3 className="text-2xl font-headline font-bold text-primary-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-text-secondary">
                    We&apos;ve received your partnership inquiry. Our team will review your submission and get back to you within 2-3 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-primary-foreground mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-card/50 border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="contactName" className="block text-sm font-medium text-primary-foreground mb-2">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        required
                        value={formData.contactName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-card/50 border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-card/50 border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="partnershipType" className="block text-sm font-medium text-primary-foreground mb-2">
                        Partnership Type *
                      </label>
                      <select
                        id="partnershipType"
                        name="partnershipType"
                        required
                        value={formData.partnershipType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-card/50 border border-border/50 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select Type</option>
                        {partnershipTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-card/50 border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your partnership proposal and how you'd like to collaborate with CryptoVault EVM..."
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-4 bg-brand-primary hover:bg-cta-blue text-primary-foreground rounded-lg font-cta font-bold text-lg transition-all duration-300 shadow-cta-primary hover:shadow-cta-primary-hover flex items-center justify-center space-x-2"
                    >
                      <span>Submit Inquiry</span>
                      <Icon name="PaperAirplaneIcon" size={20} variant="solid" />
                    </button>
                    <p className="text-sm text-text-secondary">
                      We typically respond within 2-3 business days
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipInquiry;