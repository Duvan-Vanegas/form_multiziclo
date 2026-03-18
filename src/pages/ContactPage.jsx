import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles } from 'lucide-react';
import Card from '../components/Card';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error when typing
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  if (isSuccess) {
    return (
      <Card className="max-w-md w-full mx-auto p-12 text-center transform transition-all animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-zinc-900 mb-3 tracking-tight">Message Sent!</h2>
        <p className="text-zinc-500 mb-8 leading-relaxed">
          Thank you for reaching out. We've received your message and will get back to you shortly.
        </p>
        <Button 
          variant="outline" 
          onClick={() => {
            setIsSuccess(false);
            setFormData({ name: '', email: '', message: '' });
          }}
          className="w-full"
        >
          Send another message
        </Button>
      </Card>
    );
  }

  return (
    <Card className="max-w-xl w-full mx-auto p-8 sm:p-10">
      <div className="mb-10 text-center">
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-zinc-100 text-zinc-800 text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4 mr-2" />
          Get in touch
        </div>
        <h1 className="text-4xl font-extrabold text-zinc-900 tracking-tight mb-3">
          Contact Us
        </h1>
        <p className="text-zinc-500 text-lg">
          We'd love to hear from you. Please fill out the form below.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          id="name"
          label="Full Name"
          placeholder="Jane Doe"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          disabled={isSubmitting}
        />

        <Input
          id="email"
          label="Email Address"
          type="email"
          placeholder="jane@example.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          disabled={isSubmitting}
        />

        <TextArea
          id="message"
          label="Your Message"
          placeholder="How can we help you today?"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          disabled={isSubmitting}
        />

        <div className="pt-4">
          <Button
            type="submit"
            size="lg"
            className="w-full h-14 text-lg shadow-xl shadow-zinc-900/20"
            isLoading={isSubmitting}
          >
            {isSubmitting ? 'Sending Message...' : (
              <>
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default ContactPage;
