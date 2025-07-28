import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Page from "../../components/layout/Page";
import { H1 } from "../../components/ui/Heading";
import Content from "../../components/layout/Content";
import { PageTitle } from "../../components/layout/PageTitle";

const PlacementCell: NextPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  // Generate array of placement images (placement1.jpg to placement5.jpg)
  const placementImages = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    src: `/images/placement/placement${i + 1}.jpg`,
    alt: `Placement Success Story ${i + 1}`,
  }));

  const openImageModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % placementImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? placementImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <Page title="Placement Cell - GPC Perinthalmanna">
      <Content>
        <div className="container mx-auto px-4 py-8">
          <H1>Career Guidance and Placement Cell</H1>
          
          {/* Introduction Section */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg shadow-md">
              <p className="text-lg leading-relaxed text-gray-800 mb-4">
                The Career Guidance and Placement Cell has been instrumental in guiding our students towards successful careers. 
                We take pride in our alumni who have secured excellent positions in leading companies across various industries.
              </p>
              <p className="text-lg leading-relaxed text-gray-800">
                Our placement cell conducts training programs, prepares students for recruitment processes, and maintains strong 
                relationships with industry partners to ensure maximum placement opportunities for our graduates.
              </p>
            </div>
          </div>

          {/* Success Stories Gallery */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Success Stories</h2>
            <p className="text-center text-gray-600 mb-8">
              Celebrating the achievements of our alumni who have excelled in their respective fields
            </p>
            
            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {placementImages.map((image, index) => (
                <div
                  key={image.id}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => openImageModal(index)}
                >
                  <div className="aspect-w-4 aspect-h-3">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={300}
                      height={225}
                      className="w-full h-48 object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Highlights */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Industry Partnerships</h4>
                  <p className="text-gray-600">Strong relationships with leading companies and organizations</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Skill Development</h4>
                  <p className="text-gray-600">Comprehensive training programs and workshops</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Career Guidance</h4>
                  <p className="text-gray-600">Personal counseling and career path planning</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Alumni Network</h4>
                  <p className="text-gray-600">Strong network of successful alumni across industries</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Placement Officer */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="mb-6">
              For more information about placements, career guidance, or to connect with our placement officer, visit our placement officer&apos;s desk.
            </p>
            <Link href="/college/placement-officers-desk" legacyBehavior>
              <a className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Contact Placement Officer
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </Content>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white text-2xl font-bold z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all"
            >
              ×
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl font-bold z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all"
            >
              ‹
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl font-bold z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all"
            >
              ›
            </button>
            
            <Image
              src={placementImages[selectedImage].src}
              alt={placementImages[selectedImage].alt}
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
              <p className="text-sm bg-black bg-opacity-50 px-3 py-1 rounded">
                {selectedImage + 1} of {placementImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </Page>
  );
};

export default PlacementCell;
