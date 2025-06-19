
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, MapPin, Clock, Star, ChevronRight } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [autoNumber, setAutoNumber] = useState('');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [translationInput, setTranslationInput] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [fareDetails, setFareDetails] = useState(null);

  const handleVerifyAuto = () => {
    if (!autoNumber || !fromLocation || !toLocation) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
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
        title: "Auto Verified Successfully!",
        description: `Fair fare calculated: ₹${totalFare}`,
      });
    }, 2000);
  };

  const handleTranslate = async (direction) => {
    if (!translationInput.trim()) {
      toast({
        title: "Enter text to translate",
        description: "Please type a message to translate",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // For demo purposes, we'll simulate translation
      // In production, this would call the Gemini API
      const translations = {
        'Hello': 'ನಮಸ್ಕಾರ',
        'How much?': 'ಎಷ್ಟು?',
        'Thank you': 'ಧನ್ಯವಾದ',
        'Where to go?': 'ಎಲ್ಲಿಗೆ ಹೋಗಬೇಕು?',
        'Stop here': 'ಇಲ್ಲಿ ನಿಲ್ಲಿಸಿ',
        'ನಮಸ್ಕಾರ': 'Hello',
        'ಎಷ್ಟು?': 'How much?',
        'ಧನ್ಯವಾದ': 'Thank you'
      };
      
      const result = translations[translationInput] || 
        (direction === 'toKannada' ? 
          `${translationInput} (Kannada translation)` : 
          `${translationInput} (English translation)`);
      
      setTimeout(() => {
        setTranslatedText(result);
        setIsLoading(false);
        toast({
          title: "Translation Complete",
          description: "Message translated successfully",
        });
      }, 1000);
      
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Translation Error",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  const resetForm = () => {
    setAutoNumber('');
    setFromLocation('');
    setToLocation('');
    setShowResults(false);
    setFareDetails(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
            Namma Yatri
          </h1>
          <p className="text-xl text-purple-700 max-w-2xl mx-auto">
            Bridging the Offline Gap & Enhancing Communication
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Explanation Panel */}
          <div className="lg:col-span-3 space-y-6">
            <Card className="bg-gray-50 border-l-4 border-l-purple-500 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-purple-900 flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  How It Works
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <p>Enter the auto-rickshaw's registration number</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <p>Get instant verification & fair fare calculation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <p>Communicate easily with AI translation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                  <p>Enjoy safe, tracked, and fair-priced rides</p>
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
              <div className="bg-white rounded-3xl shadow-2xl p-6 border-8 border-gray-800">
                
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">NY</span>
                    </div>
                    <span className="font-semibold text-gray-800">Namma Yatri</span>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                    Online
                  </Badge>
                </div>

                {!showResults ? (
                  <>
                    {/* Digitize Offline Ride Section */}
                    <div className="space-y-4 mb-6">
                      <h3 className="font-semibold text-gray-800 text-lg">Digitize Offline Ride</h3>
                      
                      <div className="space-y-3">
                        <Input
                          placeholder="Auto Registration Number (e.g., KA01AB1234)"
                          value={autoNumber}
                          onChange={(e) => setAutoNumber(e.target.value.toUpperCase())}
                          className="bg-gray-50"
                        />
                        
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-green-500" />
                          <Input
                            placeholder="From (Pickup Location)"
                            value={fromLocation}
                            onChange={(e) => setFromLocation(e.target.value)}
                            className="bg-gray-50"
                          />
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-red-500" />
                          <Input
                            placeholder="To (Drop Location)"
                            value={toLocation}
                            onChange={(e) => setToLocation(e.target.value)}
                            className="bg-gray-50"
                          />
                        </div>
                      </div>

                      <Button 
                        onClick={handleVerifyAuto}
                        disabled={isLoading}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                      >
                        {isLoading ? 'Verifying...' : 'Verify Auto & Calculate Fare'}
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Results Section */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-800">Ride Details</h3>
                        <Button variant="ghost" size="sm" onClick={resetForm}>
                          New Ride
                        </Button>
                      </div>
                      
                      {fareDetails && (
                        <div className="space-y-3">
                          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                            <div className="flex items-center gap-2 mb-2">
                              <Shield className="h-4 w-4 text-green-600" />
                              <span className="text-sm font-medium text-green-800">Verified Driver</span>
                            </div>
                            <p className="text-sm text-gray-600">{fareDetails.driverName}</p>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs text-gray-600">{fareDetails.rating}</span>
                            </div>
                          </div>
                          
                          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                            <h4 className="font-medium text-blue-900 mb-2">Fair Fare Breakdown</h4>
                            <div className="space-y-1 text-sm">
                              <div className="flex justify-between">
                                <span>Base Fare:</span>
                                <span>₹{fareDetails.baseFare}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Distance ({fareDetails.distance} km):</span>
                                <span>₹{Math.round(fareDetails.distance * fareDetails.farePerKm)}</span>
                              </div>
                              <hr />
                              <div className="flex justify-between font-semibold">
                                <span>Total:</span>
                                <span className="text-purple-600">₹{fareDetails.totalFare}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="h-4 w-4" />
                            <span>Estimated time: {fareDetails.estimatedTime} mins</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )}

                {/* Translation Section */}
                <div className="border-t pt-4 space-y-4">
                  <h3 className="font-semibold text-gray-800">AI Communication Assistant</h3>
                  
                  <Input
                    placeholder="Type message to translate..."
                    value={translationInput}
                    onChange={(e) => setTranslationInput(e.target.value)}
                    className="bg-gray-50"
                  />
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleTranslate('toKannada')}
                      disabled={isLoading}
                      className="flex-1"
                    >
                      To Kannada
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleTranslate('toEnglish')}
                      disabled={isLoading}
                      className="flex-1"
                    >
                      To English
                    </Button>
                  </div>
                  
                  {translatedText && (
                    <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                      <p className="text-sm text-purple-900">{translatedText}</p>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>

          {/* Right Benefits Panel */}
          <div className="lg:col-span-3 space-y-6">
            <div className="hidden lg:flex justify-center">
              <ChevronRight className="h-8 w-8 text-purple-400 animate-pulse rotate-180" />
            </div>
            
            <Card className="bg-gray-50 border-l-4 border-l-green-500 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-green-700">Benefits for All</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2">For Riders:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Fair, transparent pricing</li>
                    <li>• Enhanced safety verification</li>
                    <li>• Ride tracking & history</li>
                    <li>• Language barrier-free communication</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2">For Drivers:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Increased earning opportunities</li>
                    <li>• Trust building with passengers</li>
                    <li>• Fair commission structure</li>
                    <li>• Digital payment options</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2">For Namma Yatri:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Expanded market presence</li>
                    <li>• Increased transaction volume</li>
                    <li>• Stronger brand loyalty</li>
                    <li>• Comprehensive ecosystem</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 py-8 border-t border-purple-200">
          <p className="text-purple-600">
            Revolutionizing Auto-Rickshaw Transportation in Bangalore
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Demo showcasing the concept • Powered by AI Translation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
