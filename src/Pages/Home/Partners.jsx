import React from 'react';

const Partners = () => {
    // Example sponsor company names
    const sponsors = [
        { name: 'TechNova', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
        { name: 'EduSpark', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/DaisyUI_Logo.svg' },
        { name: 'Eventify', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
        { name: 'ClubConnect', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
        { name: 'InspireHub', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg' },
        { name: 'NextGen', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg' },
        { name: 'FutureMakers', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg' },
        { name: 'BrightPath', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Go_Logo_Blue.svg' },
        { name: 'CodeWave', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png' },
        { name: 'GreenLeaf', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    ];

    return (
        <section className="partners-section max-w-full mx-auto my-12 p-6 bg-base-100 rounded shadow text-center">
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Sponsors</h2>
            <div className="overflow-hidden whitespace-nowrap border-y-2 border-primary py-4 bg-base-200 relative">
                <div
                    className="inline-block animate-scroll-ticker text-lg font-semibold text-secondary"
                    style={{ animation: 'scroll-ticker 20s linear infinite' }}
                >
                    {sponsors.concat(sponsors).map((sponsor, idx) => (
                        <span key={idx} className="mx-8 inline-flex items-center gap-2">
                            <img src={sponsor.logo} alt={sponsor.name} className="h-6 w-6 object-contain" />
                            {sponsor.name}
                        </span>
                    ))}
                </div>
            </div>
            <style>{`
                @keyframes scroll-ticker {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
};

export default Partners;