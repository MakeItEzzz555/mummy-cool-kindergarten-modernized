import { CheckCircle, Users, BookOpen, Heart, Utensils, Shield, ArrowRight, Phone, Mail } from "lucide-react";

/**
 * Design Philosophy: Warm Minimalism with Playful Accents
 * - Hero section with asymmetric layout (image right, text left)
 * - Alternating text-image sections for visual interest
 * - Soft rounded corners and subtle shadows throughout
 * - Warm color palette: sage green, peachy-orange, muted gold
 * - Smooth animations and transitions on scroll
 */

export default function Home() {
  const facilities = [
    {
      icon: BookOpen,
      title: "Modern Classrooms",
      description: "Bright, naturally-lit spaces with interactive boards and age-appropriate learning materials",
    },
    {
      icon: Heart,
      title: "Creative Activities",
      description: "Arts, music, dance, and theater programs led by specialized instructors",
    },
    {
      icon: Users,
      title: "Expert Staff",
      description: "Experienced educators with credentials in special education and early childhood development",
    },
    {
      icon: Utensils,
      title: "Healthy Meals",
      description: "Daily homemade meals prepared by our nutritionist following balanced diet guidelines",
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Certified playground equipment, 24-hour insurance coverage, and rigorous safety protocols",
    },
    {
      icon: BookOpen,
      title: "Outdoor Space",
      description: "200 sq.m. of green space for outdoor play, exploration, and nature-based learning",
    },
  ];

  const highlights = [
    "Experienced teaching staff with specialized training",
    "Modern, well-equipped learning spaces",
    "Interactive technology and educational resources",
    "Nutritionist-approved meal programs",
    "Certified safe playground facilities",
    "Individual attention to each child's needs",
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="fade-in order-2 md:order-1">
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-semibold text-primary">Welcome to Quality Education</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Where Children Play, Learn, and Grow Together
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Mummy Cool Kindergarten provides premium early childhood education in a nurturing environment designed to foster creativity, confidence, and curiosity in every child.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Enroll Your Child
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 md:order-2 fade-in">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663386180853/EPMhkrqH6jHJW2fZh5xGhS/hero-kindergarten-hQqy2zcjiuTGKYuam3wxSC.webp"
                  alt="Children learning and playing at Mummy Cool Kindergarten"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="slide-in-left">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663386180853/EPMhkrqH6jHJW2fZh5xGhS/classroom-learning-iAvUpW4U8pwpcoacZkScPe.webp"
                  alt="Interactive learning classroom"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                About Mummy Cool Kindergarten
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded on the philosophy that proper education begins in childhood, our kindergarten is dedicated to fostering joy, learning, and growth. Our director, Marina Andreou, brings over 9 years of early childhood education experience and specialized training in special education.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We believe in creative education and individualized attention. Our team includes certified kindergarten teachers, English specialists, dance instructors, theater educators, nutritionists, and speech therapists—all working together to support each child's unique development.
              </p>

              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Facilities & Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide a comprehensive learning environment with modern amenities designed for optimal child development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/30 card-hover"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{facility.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{facility.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Outdoor Playground Section */}
      <section className="py-20 bg-white border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Safe & Certified Playground
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our 200 sq.m. outdoor space features certified, age-appropriate play equipment designed with safety as the top priority. Children enjoy supervised outdoor activities that promote physical development, social skills, and connection with nature.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  </div>
                  <span className="text-foreground">Certified safety equipment and regular inspections</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  </div>
                  <span className="text-foreground">Supervised outdoor play and nature exploration</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  </div>
                  <span className="text-foreground">Green space for physical development and outdoor learning</span>
                </li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="slide-in-right">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663386180853/EPMhkrqH6jHJW2fZh5xGhS/facilities-outdoor-aHEDehQmLg5wQV3nKJxMKr.webp"
                  alt="Safe outdoor playground"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Section */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="slide-in-left order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663386180853/EPMhkrqH6jHJW2fZh5xGhS/meal-time-heiLrduePp8jJGz35FjSnf.webp"
                  alt="Healthy meal time"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="slide-in-right order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Nutritious Daily Meals
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We believe healthy nutrition is fundamental to child development. All meals are prepared fresh daily in our kitchen using the finest ingredients, following our certified nutritionist's guidelines.
              </p>
              <div className="bg-primary/5 rounded-xl p-6 mb-6 border border-primary/20">
                <h3 className="font-semibold text-foreground mb-4">Daily Menu Includes:</h3>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>✓ Healthy breakfast and mid-morning snack</li>
                  <li>✓ Balanced lunch with fresh vegetables and protein</li>
                  <li>✓ Afternoon snack with fruits and dairy</li>
                  <li>✓ Fresh water available throughout the day</li>
                  <li>✓ No added sugars or processed foods</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Activities Section */}
      <section id="programs" className="py-20 bg-white border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Creative Learning Programs
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Beyond traditional academics, we offer specialized programs that nurture creativity, expression, and confidence. Our expert instructors guide children through arts, music, dance, and theater.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground mb-1">Arts & Crafts</h4>
                  <p className="text-sm text-muted-foreground">Painting, drawing, and creative projects</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold text-foreground mb-1">Music & Rhythm</h4>
                  <p className="text-sm text-muted-foreground">Instruments, singing, and musical exploration</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-foreground mb-1">Dance & Movement</h4>
                  <p className="text-sm text-muted-foreground">Physical expression and coordination development</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground mb-1">Theater & Drama</h4>
                  <p className="text-sm text-muted-foreground">Storytelling, role-play, and performance</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="slide-in-right">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663386180853/EPMhkrqH6jHJW2fZh5xGhS/creative-activities-NCEymhxHn6cvJizdZYkcqe.webp"
                  alt="Creative activities and learning"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Hours & Info */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Operating Hours</h3>
              <div className="space-y-3 text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground">Monday - Friday</p>
                  <p className="text-sm">6:45 AM - 5:30 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">School Year</p>
                  <p className="text-sm">September 1 - July 31</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">What to Bring</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Water bottle</li>
                <li>✓ Change of clothes</li>
                <li>✓ Small towel (for PE & dance)</li>
                <li>✓ Comfort items (optional)</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">We Provide</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Breakfast & snacks</li>
                <li>✓ Lunch & afternoon snack</li>
                <li>✓ All learning materials</li>
                <li>✓ Toys & equipment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Give Your Child the Best Start?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Join our community of families who trust Mummy Cool Kindergarten for quality early childhood education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+35725252444"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us: +357 2525 2444
            </a>
            <a
              href="mailto:mummy-cool@live.com"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
