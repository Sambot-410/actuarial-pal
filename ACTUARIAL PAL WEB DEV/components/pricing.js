export default function Pricing() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Training Plan</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition text-center">
            <h3 className="text-2xl font-bold mb-2">Once per Week</h3>
            <p className="text-4xl font-bold text-primary mb-4">₦10,000</p>
            <p className="text-gray-600">Perfect for flexible learners</p>
          </div>
          <div className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition text-center bg-primary text-white">
            <h3 className="text-2xl font-bold mb-2">Thrice per Week</h3>
            <p className="text-4xl font-bold mb-4">₦20,000</p>
            <p className="opacity-90">Fast-track your learning</p>
          </div>
        </div>
      </div>
    </section>
  );
}