export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Actuarial Pal – Learn Actuarial Science Made Simple
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Expert-led training designed to help you master actuarial science with confidence and clarity.
        </p>
        <a
          href="#register"
          className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-md"
        >
          Start Learning Now
        </a>
      </div>
    </section>
  );
}
