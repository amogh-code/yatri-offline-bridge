
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, MapPin, Clock, Star, ChevronRight, Sparkles, Zap, Heart } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [autoNumber, setAutoNumber] = useState('');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [fareDetails, setFareDetails] = useState(null);
  const [pulseAnimation, setPulseAnimation] = useState(false);

  const handleVerifyAuto = () => {
    if (!autoNumber || !fromLocation || !toLocation) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      setPulseAnimation(true);
      setTimeout(() => setPulseAnimation(false), 1000);
      return;
    }

    setIsLoading(true);
    
    // Simulate API call for fare calculation and verification
    setTimeout(() => {
      const baseFare = 25;
      const distanceKm = Math.random() * 15 + 2; // Random distance between 2-17 km
      const farePerKm = 12;
      const totalFare = Math.round(baseFare + (distanceKm * farePerKm));
      
      setFareDetails({
        baseFare,
        distance: distanceKm.toFixed(1),
        farePerKm,
        totalFare,
        estimatedTime: Math.round(distanceKm * 3 + Math.random() * 10), // Rough time estimate
        driverName: "Ravi Kumar",
        rating: 4.6,
        verified: true
      });
      
      setShowResults(true);
      setIsLoading(false);
      
      toast({
        title: "🎉 Auto Verified Successfully!",
        description: `✨ Fair fare calculated: ₹${totalFare}`,
      });
    }, 2000);
  };

  const resetForm = () => {
    setAutoNumber('');
    setFromLocation('');
    setToLocation('');
    setShowResults(false);
    setFareDetails(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-100 p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-pink-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-40 left-16 w-20 h-20 bg-indigo-200 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-purple-300 rounded-full opacity-15 animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="h-8 w-8 text-purple-600 animate-spin" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Smart Ride Digitizer
            </h1>
            <Zap className="h-8 w-8 text-pink-600 animate-pulse" />
          </div>
          <p className="text-xl text-purple-700 max-w-2xl mx-auto animate-fade-in">
            🚗 Bridging the Offline Gap & Enhancing Trust ✨
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 animate-fade-in">
            <Heart className="h-4 w-4 text-pink-500 animate-pulse" />
            <span className="text-sm text-gray-600 font-medium">Made by Amogh Kris</span>
            <Heart className="h-4 w-4 text-pink-500 animate-pulse" />
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Explanation Panel */}
          <div className="lg:col-span-3 space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-l-4 border-l-purple-500 animate-fade-in shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-purple-900 flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 animate-bounce" />
                  🔥 How It Works
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex items-start gap-3 hover:bg-purple-50 p-2 rounded-lg transition-colors">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-xs font-bold animate-pulse">1</div>
                  <p>🚗 Enter the vehicle's registration number</p>
                </div>
                <div className="flex items-start gap-3 hover:bg-purple-50 p-2 rounded-lg transition-colors">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-xs font-bold animate-pulse">2</div>
                  <p>⚡ Get instant verification & fair fare calculation</p>
                </div>
                <div className="flex items-start gap-3 hover:bg-purple-50 p-2 rounded-lg transition-colors">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-xs font-bold animate-pulse">3</div>
                  <p>🛡️ Enjoy safe, tracked, and fair-priced rides</p>
                </div>
                <div className="flex items-start gap-3 hover:bg-purple-50 p-2 rounded-lg transition-colors">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-xs font-bold animate-pulse">4</div>
                  <p>📱 Seamless integration with any ride service</p>
                </div>
              </CardContent>
            </Card>
            
            <div className="hidden lg:flex justify-center">
              <ChevronRight className="h-8 w-8 text-purple-400 animate-pulse" />
            </div>
          </div>

          {/* Central Mobile Interface */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-sm">
              {/* Mobile Frame */}
              <div className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 border-8 border-gradient-to-r from-purple-400 to-pink-400 hover:shadow-3xl transition-all duration-500 ${pulseAnimation ? 'animate-pulse border-red-400' : ''}`}>
                
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-6 animate-fade-in">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center animate-pulse">
                      <Sparkles className="text-white h-4 w-4" />
                    </div>
                    <span className="font-semibold text-gray-800">Smart Ride</span>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-600 animate-pulse">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-ping"></div>
                    🟢 Live
                  </Badge>
                </div>

                {!showResults ? (
                  <>
                    {/* Digitize Offline Ride Section */}
                    <div className="space-y-4 mb-6 animate-scale-in">
                      <h3 className="font-semibold text-gray-800 text-lg flex items-center gap-2">
                        ✨ Digitize Offline Ride
                        <Zap className="h-4 w-4 text-yellow-500 animate-pulse" />
                      </h3>
                      
                      <div className="space-y-3">
                        <Input
                          placeholder="🚗 Vehicle Registration (e.g., KA01AB1234)"
                          value={autoNumber}
                          onChange={(e) => setAutoNumber(e.target.value.toUpperCase())}
                          className="bg-gray-50 hover:bg-purple-50 transition-colors border-purple-200 focus:border-purple-400"
                        />
                        
                        <div className="flex items-center gap-2 hover:scale-105 transition-transform">
                          <MapPin className="h-4 w-4 text-green-500 animate-bounce" />
                          <Input
                            placeholder="📍 From (Pickup Location)"
                            value={fromLocation}
                            onChange={(e) => setFromLocation(e.target.value)}
                            className="bg-gray-50 hover:bg-green-50 transition-colors border-green-200 focus:border-green-400"
                          />
                        </div>
                        
                        <div className="flex items-center gap-2 hover:scale-105 transition-transform">
                          <MapPin className="h-4 w-4 text-red-500 animate-bounce" />
                          <Input
                            placeholder="🎯 To (Drop Location)"
                            value={toLocation}
                            onChange={(e) => setToLocation(e.target.value)}
                            className="bg-gray-50 hover:bg-red-50 transition-colors border-red-200 focus:border-red-400"
                          />
                        </div>
                      </div>

                      <Button 
                        onClick={handleVerifyAuto}
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        {isLoading ? (
                          <div className="flex items-center gap-2">
                            <Sparkles className="h-4 w-4 animate-spin" />
                            '🔍 Verifying Magic...'
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Shield className="h-4 w-4" />
                            '⚡ Verify & Calculate Fare'
                          </div>
                        )}
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Results Section */}
                    <div className="space-y-4 mb-6 animate-fade-in">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                          🎉 Ride Details
                          <Star className="h-4 w-4 text-yellow-500 animate-spin" />
                        </h3>
                        <Button variant="ghost" size="sm" onClick={resetForm} className="hover:bg-purple-100 transition-colors">
                          🔄 New Ride
                        </Button>
                      </div>
                      
                      {fareDetails && (
                        <div className="space-y-3 animate-scale-in">
                          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg border border-green-200 hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center gap-2 mb-2">
                              <Shield className="h-4 w-4 text-green-600 animate-pulse" />
                              <span className="text-sm font-medium text-green-800">✅ Verified Driver</span>
                            </div>
                            <p className="text-sm text-gray-600 flex items-center gap-1">
                              👨‍✈️ {fareDetails.driverName}
                            </p>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 animate-pulse" />
                              <span className="text-xs text-gray-600">⭐ {fareDetails.rating}</span>
                            </div>
                          </div>
                          
                          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-3 rounded-lg border border-blue-200 hover:shadow-lg transition-all duration-300">
                            <h4 className="font-medium text-blue-900 mb-2 flex items-center gap-2">
                              💰 Fair Fare Breakdown
                              <Sparkles className="h-3 w-3 animate-spin" />
                            </h4>
                            <div className="space-y-1 text-sm">
                              <div className="flex justify-between hover:bg-blue-100 p-1 rounded transition-colors">
                                <span>🏁 Base Fare:</span>
                                <span>₹{fareDetails.baseFare}</span>
                              </div>
                              <div className="flex justify-between hover:bg-blue-100 p-1 rounded transition-colors">
                                <span>📏 Distance ({fareDetails.distance} km):</span>
                                <span>₹{Math.round(fareDetails.distance * fareDetails.farePerKm)}</span>
                              </div>
                              <hr />
                              <div className="flex justify-between font-semibold bg-gradient-to-r from-purple-100 to-pink-100 p-2 rounded">
                                <span>💎 Total:</span>
                                <span className="text-purple-600 animate-pulse">₹{fareDetails.totalFare}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                            <Clock className="h-4 w-4 animate-pulse" />
                            <span>⏱️ Estimated time: {fareDetails.estimatedTime} mins</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )}

              </div>
            </div>
          </div>

          {/* Right Benefits Panel */}
          <div className="lg:col-span-3 space-y-6">
            <div className="hidden lg:flex justify-center">
              <ChevronRight className="h-8 w-8 text-purple-400 animate-pulse rotate-180" />
            </div>
            
            <Card className="bg-white/80 backdrop-blur-sm border-l-4 border-l-green-500 animate-fade-in shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">
                  🌟 Benefits for All
                  <Heart className="h-4 w-4 text-pink-500 animate-pulse" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="hover:bg-green-50 p-2 rounded-lg transition-colors">
                  <h4 className="font-semibold text-purple-900 mb-2 flex items-center gap-1">
                    🚶‍♂️ For Riders:
                    <Sparkles className="h-3 w-3 animate-spin" />
                  </h4>
                  <ul className="space-y-1 text-gray-600">
                    <li className="hover:text-purple-600 transition-colors">• 💰 Fair, transparent pricing</li>
                    <li className="hover:text-purple-600 transition-colors">• 🛡️ Enhanced safety verification</li>
                    <li className="hover:text-purple-600 transition-colors">• 📱 Ride tracking & history</li>
                    <li className="hover:text-purple-600 transition-colors">• ✨ Seamless experience</li>
                  </ul>
                </div>
                
                <div className="hover:bg-blue-50 p-2 rounded-lg transition-colors">
                  <h4 className="font-semibold text-purple-900 mb-2 flex items-center gap-1">
                    👨‍✈️ For Drivers:
                    <Zap className="h-3 w-3 animate-pulse" />
                  </h4>
                  <ul className="space-y-1 text-gray-600">
                    <li className="hover:text-blue-600 transition-colors">• 📈 Increased earning opportunities</li>
                    <li className="hover:text-blue-600 transition-colors">• 🤝 Trust building with passengers</li>
                    <li className="hover:text-blue-600 transition-colors">• ⚖️ Fair commission structure</li>
                    <li className="hover:text-blue-600 transition-colors">• 💳 Digital payment options</li>
                  </ul>
                </div>
                
                <div className="hover:bg-pink-50 p-2 rounded-lg transition-colors">
                  <h4 className="font-semibold text-purple-900 mb-2 flex items-center gap-1">
                    🏢 For Ride Services:
                    <Star className="h-3 w-3 animate-spin" />
                  </h4>
                  <ul className="space-y-1 text-gray-600">
                    <li className="hover:text-pink-600 transition-colors">• 🌍 Expanded market presence</li>
                    <li className="hover:text-pink-600 transition-colors">• 📊 Increased transaction volume</li>
                    <li className="hover:text-pink-600 transition-colors">• ❤️ Stronger brand loyalty</li>
                    <li className="hover:text-pink-600 transition-colors">• 🏗️ Comprehensive ecosystem</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 py-8 border-t border-purple-200 animate-fade-in">
          <p className="text-purple-600 flex items-center justify-center gap-2">
            🚀 Revolutionizing Transportation Technology
            <Sparkles className="h-4 w-4 animate-spin" />
          </p>
          <p className="text-sm text-gray-500 mt-2 flex items-center justify-center gap-2">
            ✨ Interactive Demo • Powered by Smart AI
            <Heart className="h-3 w-3 text-pink-500 animate-pulse" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
