
import { Phone, MapPin, Mail, Factory, Droplets, Leaf, Heart, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Factory className="h-8 w-8" />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">Mishra & Brothers Oil Mill</h1>
                <p className="text-amber-100">Premium Mustard Oil Extraction</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>+91-9058648342</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-amber-800 mb-6">
              Pure Mustard Oil
            </h2>
            <p className="text-xl md:text-2xl text-amber-700 mb-8">
              Traditional Cold-Pressed Excellence Since Generations
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full shadow-md">
                <Droplets className="h-5 w-5 text-amber-600" />
                <span className="text-amber-800 font-medium">100% Pure</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full shadow-md">
                <Leaf className="h-5 w-5 text-green-600" />
                <span className="text-amber-800 font-medium">Natural</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full shadow-md">
                <Heart className="h-5 w-5 text-red-600" />
                <span className="text-amber-800 font-medium">Healthy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Balaji Maharaj Section */}
      <section className="py-12 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            श्री बालाजी महाराज की कृपा से
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-4xl">🙏</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">भक्ति और समर्पण</h4>
              <p className="text-orange-100">हमारा व्यवसाय श्री बालाजी महाराज के आशीर्वाद से चलता है</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-4xl">🕉️</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">पवित्रता और गुणवत्ता</h4>
              <p className="text-orange-100">धार्मिक पवित्रता के साथ शुद्ध तेल का उत्पादन</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-4xl">🌺</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">सेवा और समर्पण</h4>
              <p className="text-orange-100">ग्राहकों की सेवा में पूर्ण समर्पण भाव</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-amber-800 mb-12">
            Our Premium Products
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow duration-300 border-amber-200">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Droplets className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-amber-800 mb-2">Cold-Pressed Mustard Oil</h4>
                <p className="text-amber-600">Pure, unrefined mustard oil extracted using traditional cold-press methods</p>
                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow duration-300 border-amber-200">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <Leaf className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-amber-800 mb-2">Organic Mustard Oil</h4>
                <p className="text-amber-600">Certified organic mustard oil from naturally grown mustard seeds</p>
                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow duration-300 border-amber-200">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-amber-800 mb-2">Premium Grade Oil</h4>
                <p className="text-amber-600">Highest quality mustard oil perfect for cooking and health benefits</p>
                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-br from-amber-100 to-orange-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-amber-800 mb-8 text-center">
              About Mishra & Brothers Oil Mill
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <p className="text-lg text-amber-700 mb-6 leading-relaxed">
                  With decades of experience in mustard oil extraction, Mishra & Brothers Oil Mill has been serving 
                  the community with the finest quality mustard oil. Our traditional cold-press extraction method 
                  ensures that all the natural nutrients and flavor are preserved.
                </p>
                <p className="text-lg text-amber-700 mb-8 leading-relaxed">
                  We believe in maintaining the highest standards of purity and quality, blessed by the divine 
                  grace of श्री बालाजी महाराज. Every drop of our oil carries the essence of tradition, 
                  purity, and devotion.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-800">25+</div>
                  <div className="text-amber-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-800">100%</div>
                  <div className="text-amber-600">Pure Oil</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-800">1000+</div>
                  <div className="text-amber-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-800">24/7</div>
                  <div className="text-amber-600">Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-amber-800 to-orange-800 text-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Contact Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-4 text-amber-300" />
                <h4 className="font-semibold mb-2">Phone</h4>
                <p className="text-amber-100">+91-9058648342</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 mx-auto mb-4 text-amber-300" />
                <h4 className="font-semibold mb-2">Address</h4>
                <p className="text-amber-100 text-sm">Shop No. 19, Chandanvan Market, Mathura, UP-281001</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Factory className="h-8 w-8 mx-auto mb-4 text-amber-300" />
                <h4 className="font-semibold mb-2">GST Number</h4>
                <p className="text-amber-100 text-sm">09BVQPM6333J1ZY</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-4 text-amber-300" />
                <h4 className="font-semibold mb-2">Business Hours</h4>
                <p className="text-amber-100 text-sm">Mon-Sat: 9AM-7PM<br />Sunday: 10AM-6PM</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-bold text-white">Mishra & Brothers Oil Mill</h4>
              <p className="text-sm">श्री बालाजी महाराज की कृपा से</p>
            </div>
            <div className="text-sm">
              <p>&copy; 2024 Mishra & Brothers Oil Mill. All rights reserved.</p>
              <p className="mt-1">Made with ❤️ in Mathura, UP</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
