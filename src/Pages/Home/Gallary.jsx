import React from 'react';

const Gallary = () => {
    // Sample images (replace with real event/club images as needed)
    const images = [
        { src: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=crop&w=400&q=80', caption: 'Annual Tech Meetup' },
        { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', caption: 'Art Club Workshop' },
        { src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', caption: 'Sports Day' },
        { src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', caption: 'Music Night' },
        { src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80', caption: 'Volunteer Event' },
        { src: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80', caption: 'Science Fair' },
    ];

    return (
        <section className="gallery-section max-w-full mx-auto my-12 p-6 bg-base-100 rounded shadow">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">Event & Club Gallery</h2>
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