import emailjs from '@emailjs/browser';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

export const isEmailJSConfigured = Boolean(serviceId && templateId && publicKey);

if (!isEmailJSConfigured && import.meta.env.DEV) {
  console.warn(
    'EmailJS credentials are not configured. Email notifications will be simulated in the developer console.'
  );
}

export interface ContactNotification {
  from_name: string;
  from_email: string;
  from_phone: string;
  company_name?: string;
  service_requested: string;
  message_content: string;
  [key: string]: string | undefined;
}

export const sendContactEmail = async (data: ContactNotification): Promise<{ success: boolean; message: string }> => {
  if (isEmailJSConfigured) {
    try {
      const templateParams = {
        to_name: 'Sakrix Admin',
        from_name: data.from_name,
        from_email: data.from_email,
        from_phone: data.from_phone,
        company_name: data.company_name || 'N/A',
        service_requested: data.service_requested,
        message: data.message_content,
      };

      const res = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      if (res.status === 200) {
        return { success: true, message: 'Notification sent successfully.' };
      }
      return { success: false, message: `EmailJS returned status code: ${res.status}` };
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      return { success: false, message: error?.text || 'EmailJS service failed.' };
    }
  } else {
    // Simulate email dispatch
    console.log('%c[EmailJS Simulation]', 'color: #2563EB; font-weight: bold; font-size: 12px;', {
      to: 'Sakrix Admin',
      sender: `${data.from_name} <${data.from_email}>`,
      phone: data.from_phone,
      company: data.company_name,
      service: data.service_requested,
      message: data.message_content,
      timestamp: new Date().toISOString()
    });
    return { success: true, message: 'Simulation email logged successfully.' };
  }
};
export const sendNewsletterEmail = async (email: string): Promise<{ success: boolean; message: string }> => {
  if (isEmailJSConfigured) {
    try {
      const templateParams = {
        to_name: 'Sakrix Admin',
        from_name: 'Newsletter Subscriber',
        from_email: email,
        service_requested: 'Newsletter Subscription',
        message: `New subscription request from: ${email}`,
      };

      const res = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      if (res.status === 200) {
        return { success: true, message: 'Newsletter alert sent.' };
      }
      return { success: false, message: `EmailJS returned status code: ${res.status}` };
    } catch (error: any) {
      console.error('EmailJS Newsletter Error:', error);
      return { success: false, message: error?.text || 'Newsletter alert failed.' };
    }
  } else {
    console.log('%c[EmailJS Simulation - Newsletter]', 'color: #3B82F6; font-weight: bold; font-size: 12px;', {
      subject: 'New Newsletter Subscription',
      subscriber: email,
      timestamp: new Date().toISOString()
    });
    return { success: true, message: 'Newsletter subscription logged in console.' };
  }
};
