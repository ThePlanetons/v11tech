import { useState, useEffect, useRef } from 'react';
import NavigationBar from '../shared/NavigationBar';
import Footer from '../shared/Footer';
// Extend the Window interface to include initGoogleMap
declare global {
  interface Window {
    initGoogleMap?: () => void;
    google?: any;
  }
}

const ContactUsPage = () => {
  useEffect(() => {
    document.title = "Contact Us - V11 TECH - Point of Sale";
  }, []);

  const [selectedLocation, setSelectedLocation] = useState<{ id: number; name: string; position: { lat: number; lng: number; } } | null>(null);
  const mapRef = useRef(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<{ marker: google.maps.Marker; location: { id: number; name: string; position: { lat: number; lng: number; }; }; }[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  // Location data
  const locations = [
    { id: 1, name: 'India', position: { lat: 20.5937, lng: 78.9629 } },
    { id: 2, name: 'Hong Kong', position: { lat: 22.3193, lng: 114.1694 } },
    { id: 3, name: 'Dubai', position: { lat: 25.276987, lng: 55.296249 } },
    { id: 4, name: 'UK', position: { lat: 51.509865, lng: -0.118092 } },
  ];

  // Google Maps initialization
  useEffect(() => {
    const initMap = () => {
      if (!window.google || !mapRef.current) return;

      const mapOptions = {
        center: { lat: 25.276987, lng: 55.296249 },
        zoom: 3,
        styles: [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#7c93a3" }, { lightness: -10 }]
          },
          {
            featureType: "administrative.country",
            elementType: "geometry",
            stylers: [{ visibility: "on" }]
          },
          {
            featureType: "administrative.country",
            elementType: "geometry.stroke",
            stylers: [{ color: "#a0a4a5" }]
          },
          {
            featureType: "landscape",
            elementType: "geometry.fill",
            stylers: [{ color: "#f4f4f4" }]
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{ color: "#dbeaf5" }]
          }
        ]
      };

      mapInstanceRef.current = new window.google.maps.Map(mapRef.current, mapOptions);
      infoWindowRef.current = new window.google.maps.InfoWindow();

      locations.forEach(location => {
        const marker = new window.google.maps.Marker({
          position: location.position,
          map: mapInstanceRef.current,
          title: location.name,
          label: {
            text: location.name,
            color: "#f9fafb",
            fontWeight: "bold",
            fontSize: "28px"
          }
        });

        marker.addListener('click', () => {
          setSelectedLocation(location);
          const contentString = `
            <div style="padding: 10px; text-align: center;">
              <h3 style="font-weight: bold; font-size: 16px;">${location.name}</h3>
            </div>
          `;
          if (infoWindowRef.current) {
            infoWindowRef.current.setContent(contentString);
            infoWindowRef.current.open(mapInstanceRef.current, marker);
          }
        });

        markersRef.current.push({ marker, location });
      });
    };

    // Load Google Maps API
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAnalBnI47bSAIrFXzJ8qCOaTq_dUTVQxo&callback=initGoogleMap`;
      script.async = true;
      script.defer = true;

      window.initGoogleMap = initMap;
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
        if (window.initGoogleMap) {
          delete window.initGoogleMap;
        }
      };
    } else {
      initMap();
    }
  }, []);

  useEffect(() => {
    if (selectedLocation && infoWindowRef.current && mapInstanceRef.current && markersRef.current.length > 0) {
      const markerObj = markersRef.current.find(m => m.location.id === selectedLocation.id);
      if (markerObj) {
        const contentString = `
          <div style="padding: 10px; text-align: center;">
            <h3 style="font-weight: bold; font-size: 16px;">${selectedLocation.name}</h3>
          </div>
        `;
        infoWindowRef.current.setContent(contentString);
        infoWindowRef.current.open(mapInstanceRef.current, markerObj.marker);
        mapInstanceRef.current.panTo(markerObj.location.position);
      }
    }
  }, [selectedLocation]);

  return (
    <>
      <NavigationBar />
      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <header className="bg-green-200 shadow-sm">
          <div className="container mx-auto py-6 px-4 pt-25">
            <h1 className="text-2xl md:text-6xl text-center leading-tight text-gray-800 v11-roboto"> CONTACT US</h1>
            <p className="text-base md:text-lg text-gray-600 text-center mt-2">OUR GLOBAL OFFICES ARE READY TO SERVE YOUR NEEDS</p>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto py-8 px-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Google Map */}
            <div ref={mapRef} className="w-full h-100 bg-gray-100"></div>

            {/* Locations Tab Bar */}
            <div className="flex overflow-x-auto border-b">
              {locations.map(location => (
                <button
                  key={location.id}
                  className={`py-4 px-6 font-medium text-sm whitespace-nowrap focus:outline-none ${selectedLocation?.id === location.id
                      ? 'text-green-500 border-b-2 border-green-500'
                      : 'text-gray-500 hover:text-gray-700'
                    }`}
                  onClick={() => setSelectedLocation(location)}
                >
                  {location.name}
                </button>
              ))}
            </div>
          </div>
        </main>

      </div>
      <Footer />
    </>
  );
};

export default ContactUsPage;
