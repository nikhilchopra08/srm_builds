
import Scene from '../components/Scene';

const Home = () => {
  return (
    <div>

      {/* Three.js Scene */}
      <Scene />

      {/* Additional Sections */}
      <section className="h-screen flex flex-col justify-center items-center bg-gray-100 p-5">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg text-center">
          We are a creative team dedicated to building amazing web experiences using cutting-edge
          technologies like Next.js and Three.js.
        </p>
      </section>

      <section className="h-screen flex flex-col justify-center items-center bg-gray-200 p-5">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-lg text-center">
          We offer a wide range of services including web development, 3D design, and interactive
          experiences.
        </p>
      </section>

      <section className="h-screen flex flex-col justify-center items-center bg-gray-100 p-5">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg text-center">
          Have a project in mind? Reach out to us at{' '}
          <a href="mailto:info@example.com" className="text-blue-500 hover:underline">
            info@example.com
          </a>.
        </p>
      </section>


      <section className="h-screen flex flex-col justify-center items-center bg-gray-100 p-5">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg text-center">
          Have a project in mind? Reach out to us at{' '}
          <a href="mailto:info@example.com" className="text-blue-500 hover:underline">
            info@example.com
          </a>.
        </p>
      </section>

      <section className="h-screen flex flex-col justify-center items-center bg-gray-100 p-5">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg text-center">
          Have a project in mind? Reach out to us at{' '}
          <a href="mailto:info@example.com" className="text-blue-500 hover:underline">
            info@example.com
          </a>.
        </p>
      </section>
    </div>
  );
};

export default Home;