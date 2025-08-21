
'use client'

function SectionLocation() {
  const destination = { lat: 52.2297, lng: 21.0122 }; // Warsaw lab

  const handleClick = () => {
    const address = "Ludwiki 1, 01-226 Warszawa, Poland";
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const start = `${position.coords.latitude},${position.coords.longitude}`;
        const url = `https://www.google.com/maps/dir/?api=1&origin=${start}&destination=${encodeURIComponent(address)}`;
        window.open(url, "_blank");
      });
    } else {
      // fallback if geolocation unavailable
      const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
      window.open(url, "_blank");
    }
  };


  return (
    <section className="my-10 px-4 text-center">
      <h2 className="text-2xl font-bold mb-4">📍 Find Us in Warsaw</h2>
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white p-3 rounded mb-4"
      >
        Get Directions
      </button>

      <div className="w-full max-w-xl mx-auto h-64 sm:h-80">
        <iframe
          className="w-full h-full rounded shadow"
          src="https://www.google.com/maps/embed?pb=!4v1755812607674!6m8!1m7!1spsASP7K_smi6KXSrxYE3_w!2m2!1d52.23015971040556!2d20.96144928195338!3f132.38625073383386!4f0.15855890117447302!5f0.7820865974627469"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default SectionLocation
