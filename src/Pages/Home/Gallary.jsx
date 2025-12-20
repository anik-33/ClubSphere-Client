import React from 'react';

const Gallary = () => {
    // Sample images (replace with real event/club images as needed)
    const images = [
        { src: 'https://i.pinimg.com/736x/fd/39/4c/fd394cc998c09893a6991844c6ce7a96.jpg', caption: 'Annual Tech Meetup' },
        { src: 'https://i.pinimg.com/1200x/b5/5a/54/b55a547893cb94c2aa06b09393848a5f.jpg', caption: 'Sports Day' },
        { src: 'https://i.pinimg.com/1200x/26/88/3f/26883f0064f1736c78163fc247f495e5.jpg', caption: 'Photography Club Workshop' },
        { src: 'https://i.pinimg.com/1200x/2b/7c/58/2b7c5803462e14c4cd5b72b472cf741f.jpg', caption: 'Music Night' },
        { src: 'https://i.pinimg.com/736x/08/bf/6c/08bf6cd8deed80328817562c62bdaf21.jpg', caption: 'Volunteer Event' },
        { src: 'https://i.pinimg.com/1200x/bc/71/26/bc7126353be75818bdd56b08c17ffe30.jpg', caption: 'Tech Hackathon' },
    ];

    return (
        <section className=" gallery-section max-w-full mx-auto my-12 p-6 bg-base-100 rounded shadow">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-500">Event & Club Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {images.map((img, idx) => (
                    <div key={idx} className="rounded overflow-hidden shadow hover:shadow-lg transition">
                        <img src={img.src} alt={img.caption} className="w-full h-48 object-cover" />
                        <div className="p-2 text-center bg-base-200">
                            <span className="text-md font-medium text-gray-700">{img.caption}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallary;