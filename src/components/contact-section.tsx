import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Mail, MapPin, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert("Message sent! (This is a demo)");
    form.reset();
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gold-900/10 to-background pointer-events-none" />

      <div className="container px-4 mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center py-16"
        >
          <h2 className="text-3xl md:text-5xl z-30 font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-amber-500 drop-shadow-lg">
            About the Artist
          </h2>
          <p className="text-lg text-white drop-shadow-md">
            For bookings, collaborations, or just to say hello
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-gold-500/20 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-gold-300" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-white drop-shadow-sm">
                    Email
                  </h3>
                  <p className="text-white/90">contact@artistname.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gold-500/20 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-gold-300" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-white drop-shadow-sm">
                    Phone
                  </h3>
                  <p className="text-white/90">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gold-500/20 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-gold-300" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-white drop-shadow-sm">
                    Management
                  </h3>
                  <p className="text-white/90">
                    Creative Artists Agency
                    <br />
                    Los Angeles, CA
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-black/40 backdrop-blur-sm border border-gold-500/30 rounded-lg p-6 shadow-xl">
              {/* https://web3forms.com/platforms/react-contact-form */}
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            {...field}
                            className="bg-white/10 border-gold-500/30 focus-visible:ring-gold-500 text-white placeholder:text-white/50"
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your email"
                            {...field}
                            className="bg-white/10 border-gold-500/30 focus-visible:ring-gold-500 text-white placeholder:text-white/50"
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your message"
                            {...field}
                            className="bg-white/10 border-gold-500/30 focus-visible:ring-gold-500 text-white placeholder:text-white/50 min-h-[120px]"
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-amber-500 hover:from-green-600 hover:to-gold-600 text-white font-medium text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
