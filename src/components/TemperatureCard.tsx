function TemperatureCard() { // TODO Eventually replace dummy text
  return (
    <div className="m-8 p-4 rounded-xl bg-gray-950 outline outline-1 outline-slate-500 lg:w-96 ">
      <div className="flex justify-between text-lg font-semibold">
        <span>Monday</span>
        <span>8:22:35 PM</span>
      </div>
      <div>Pittsburgh</div>
      <div className="my-12 text-center text-7xl font-bold">47°F</div>
      <div>
        <span>H: 51°F L: 30°F</span>
      </div>
    </div>
  );
}

export default TemperatureCard;
