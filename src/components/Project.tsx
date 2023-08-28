import 'react-image-gallery/styles/css/image-gallery.css';
import Gallery from 'react-image-gallery';
import { useState } from 'react';
import TrackVisibility from "react-on-screen";
import one from "../img/casa.jpg"

function Project() {

  const [showMoreProjects, setShowMoreProjects] = useState(false);

  const images = [
    {
      original: one,
      thumbnail: one,
    },
    {
      original: one,
      thumbnail: one,
    },
    {
      original: one,
      thumbnail: one,
    },
    {
      original: one,
      thumbnail: one,
    },
    {
      original: one,
      thumbnail: one,
    },
    {
      original: one,
      thumbnail: one,
    },
    {
      original: one,
      thumbnail: one,
    },
    {
      original: one,
      thumbnail: one,
    },
    {
      original: one,
      thumbnail: one,
    }
  ];
  const renderImages = showMoreProjects ? images : images.slice(0, 6);

  return (
    <>
     <section className="py-16 bg-gradient-to-t from-black via-gray-400 to-gray-300">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl mb-4 font-light">
          Algumas Artes em Destaque
        </h2>
        <p className="text-base text-gray-600 mb-8">
          Explore algumas de nossas criações mais recentes e apaixone-se por
          nossos ambientes realistas.
        </p>

        <TrackVisibility>
          {({ isVisible }) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {renderImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden shadow-lg group transition-transform transform hover:scale-105">
              <img
                src={image.thumbnail}
                alt={`Arte ${index + 1}`}
                className={`w-full h-60 object-cover rounded-lg ${
                  isVisible ? "animate-zoomIn-mild" : ""
                }`} 
              />
               <div className="absolute bottom-0 left-0 right-0 p-4 bg-slate-100 bg-opacity-70 opacity-0 transition duration-300 transform group-hover:opacity-100">
                <p className="text-gray-900 text-base  italic">
                  Casa em São Paulo
                </p>
              </div>
              
            </div>
          ))}
        </div>
        )}
        </TrackVisibility>
        
        <div className="mt-8" id='galery'>
          {!showMoreProjects && (
            <button
              className="text-gray-200 bg-ligthBlue rounded-md p-2 px-5 font-light tracking-widest text-lg cursor-pointer hover:scale-110 transition-transform duration-200"
              onClick={() => setShowMoreProjects(true)}
            >
              + projetos
            </button>
          )}
        </div>

        <hr className='border-gray-700 mt-6'/>
        <TrackVisibility>
          {({ isVisible }) => (
        <div className={`custom-gallery bg-neutral-300 shadow-2xl ${
          isVisible ? "animate-zoomIn-mild" : ""
        }`}>
          <Gallery items={images} autoPlay={true}/>
        </div>
         )}
         </TrackVisibility>

      </div>
    </section>
    </>
  );
}

export default Project;
