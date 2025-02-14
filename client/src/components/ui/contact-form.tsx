import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await emailjs.send(
        "YOUR_SERVICE_ID", // You'll need to replace these with your actual EmailJS credentials
        "YOUR_TEMPLATE_ID",
        {
          from_name: data.name,
          reply_to: data.email,
          message: data.message,
        },
        "YOUR_PUBLIC_KEY"
      );

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="name">
          Name
        </label>
        <Input
          id="name"
          {...form.register("name")}
          className={form.formState.errors.name ? "border-red-500" : ""}
        />
        {form.formState.errors.name && (
          <p className="mt-1 text-sm text-red-500">{form.formState.errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="email">
          Email
        </label>
        <Input
          id="email"
          type="email"
          {...form.register("email")}
          className={form.formState.errors.email ? "border-red-500" : ""}
        />
        {form.formState.errors.email && (
          <p className="mt-1 text-sm text-red-500">{form.formState.errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="message">
          Message
        </label>
        <Textarea
          id="message"
          rows={4}
          {...form.register("message")}
          className={form.formState.errors.message ? "border-red-500" : ""}
        />
        {form.formState.errors.message && (
          <p className="mt-1 text-sm text-red-500">{form.formState.errors.message.message}</p>
        )}
      </div>

      <Button 
        type="submit" 
        disabled={form.formState.isSubmitting}
        className="flex items-center gap-2"
      >
        <Mail className="w-4 h-4" />
        {form.formState.isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
