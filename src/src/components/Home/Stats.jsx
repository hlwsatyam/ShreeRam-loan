export default function Stats() {
  return (
    <section className="stats_box py-10 grid place-items-center lg:grid-cols-4 grid-cols-2 gap-4 sm:w-9/12 w-11/12 mx-auto -mt-8 px-4">
      <div>
        <h1 className="md:text-[40px] text-[25px] font-bold text-indigo-600">20+</h1>
        <p className="text-gray-700">सालों का अनुभव</p>
      </div>
      <div>
        <h1 className="md:text-[40px] text-[25px] font-bold text-indigo-600">500+</h1>
        <p className="text-gray-700">Successful loan Aprooved</p>
      </div>
      <div>
        <h1 className="md:text-[40px] text-[25px] font-bold text-indigo-600">24h+</h1>
        <p className="text-gray-700">सपोर्ट के घंटे</p>
      </div>
      <div>
        <h1 className="md:text-[40px] text-[25px] font-bold text-indigo-600">99%</h1>
        <p className="text-gray-700">Customer Satisfaction Rate</p>
      </div>
    </section>
  );
}
