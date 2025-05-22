
import React, { useState } from "react";
import NewspaperLayout from "@/components/NewspaperLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to a server
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully! I'll get back to you soon.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <NewspaperLayout title="THE PORTFOLIO TIMES" date="May 22, 2025">
      <div className="space-y-6">
        <div className="newspaper-column">
          <p className="font-italic mb-4">
            Thank you for exploring my portfolio newspaper! If you'd like to discuss
            potential opportunities, collaborations, or simply want to connect, please
            use the contact form below or reach out through any of the provided channels.
          </p>
          
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision.
          </p>
        </div>

        <div className="newspaper-divider"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-4 bg-gradient-to-br from-paper to-paper-blue/30 border border-paper-fold col-span-2">
            <h3 className="newspaper-subheadline mb-4">GET IN TOUCH</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-paper-aged/50 border-paper-fold focus:border-newspaper-accent3"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-paper-aged/50 border-paper-fold focus:border-newspaper-accent3"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input 
                  id="subject"
                  name="subject"
                  placeholder="What is this regarding?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-paper-aged/50 border-paper-fold focus:border-newspaper-accent3"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-paper-aged/50 border-paper-fold focus:border-newspaper-accent3"
                />
              </div>
              
              <Button 
                type="submit"
                className="bg-newspaper-accent3 text-white hover:bg-newspaper-accent1"
              >
                Send Message
              </Button>
            </form>
          </Card>
          
          <div className="space-y-4">
            <Card className="p-4 bg-gradient-to-br from-paper to-paper-yellow/30 border border-paper-fold contact-card">
              <h4 className="font-bold text-newspaper-accent1 mb-3">Contact Information</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Email:</strong><br />contact@example.com</p>
                <p><strong>Phone:</strong><br />(123) 456-7890</p>
                <p><strong>Location:</strong><br />New York, NY</p>
              </div>
            </Card>
            
            <Card className="p-4 bg-gradient-to-br from-paper to-paper-pink/30 border border-paper-fold contact-card">
              <h4 className="font-bold text-newspaper-accent1 mb-3">Social Media</h4>
              <div className="space-y-2 text-sm">
                <p><strong>LinkedIn:</strong><br />linkedin.com/username</p>
                <p><strong>GitHub:</strong><br />github.com/username</p>
                <p><strong>Twitter:</strong><br />@username</p>
              </div>
            </Card>
          </div>
        </div>
        
        <div className="newspaper-divider"></div>
        
        <div className="newspaper-quote">
          <p className="text-sm">
            "I look forward to hearing from you and potentially working together on future endeavors."
          </p>
        </div>
      </div>
    </NewspaperLayout>
  );
};

export default Contact;
