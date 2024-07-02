import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const Index = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/ufo-hero.jpg')" }}>
        <div className="text-center text-white space-y-4">
          <h1 className="text-5xl font-bold">Discover the Mysteries of UFOs</h1>
          <p className="text-xl">Join us on a journey to uncover the truth about extraterrestrial life</p>
          <Button variant="primary" size="lg">Learn More</Button>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto text-center space-y-4">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="text-lg">We are dedicated to exploring and uncovering the mysteries surrounding UFOs and extraterrestrial life.</p>
        <img src="/images/ufo-about.jpg" alt="About UFO" className="mx-auto rounded-lg shadow-lg" />
      </section>

      {/* Features Section */}
      <section className="container mx-auto text-center space-y-4">
        <h2 className="text-3xl font-bold">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Latest Sightings</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Stay updated with the latest UFO sightings from around the world.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Expert Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Read in-depth analyses from experts in the field of ufology.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Community Forums</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Join discussions with other UFO enthusiasts and share your experiences.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto text-center space-y-4">
        <h2 className="text-3xl font-bold">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent>
              <p>"I saw a UFO last summer and this site helped me understand what I witnessed!"</p>
              <p className="mt-4 font-bold">- Jane Doe</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p>"The expert analyses are top-notch. Highly recommend for anyone interested in UFOs."</p>
              <p className="mt-4 font-bold">- John Smith</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto text-center space-y-4">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input placeholder="Name" {...register("name")} />
          </div>
          <div>
            <Input type="email" placeholder="Email" {...register("email")} />
          </div>
          <div>
            <Textarea placeholder="Message" {...register("message")} />
          </div>
          <Button type="submit" variant="primary">Send Message</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center space-y-4">
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;