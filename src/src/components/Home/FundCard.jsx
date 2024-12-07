// export default function FundCard({ key, card }) {
//   return (
//     <div className="h-[550px] w-[320px]" key={key}>
//       <div className="relative rounded-xl overflow-hidden">
//         <img src={card.image} alt="fund1" />
//         <div className="absolute top-4 uppercase right-4 leading-tight font-bold w-[70px] h-[70px] flex items-center justify-center bg-white text-black rounded-full text-[10px] text-center">
//           {card.circleText}
//         </div>
//       </div>
//       <div className="flex items-center gap-4 my-4 px-2">
//         <h1 className="bg-[#5c807162] px-3 py-1 rounded-md text-[#6D9886] text-[17px] font-medium">
//           € {card.price}
//         </h1>
//         <p className="text-xs font-bold text-[#6D9886]">
//           <i className="fa fa-clock text-xs text-[14px]" /> {card.date}
//         </p>
//         <i className="fa fa-heart text-xs text-[#6D9886] text-[14px] ml-auto" />
//       </div>
//       <h2 className="font-bold text-[17px] px-2 hover:text-[#6D9886] transition-colors cursor-pointer">
//         {card.topic}
//       </h2>
//     </div>
//   );
// }



export default function FundCard({ key, card }) {
  return (
    <div
      className="h-[550px] w-[320px] bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
      key={key}
    >
      <div className="relative">
        <img
          src={card.image}
          alt="fund"
          className="h-[300px] w-full object-cover"
        />
        <div className="absolute top-4 right-4 flex items-center justify-center bg-white text-black rounded-full w-[70px] h-[70px] text-[10px] font-bold uppercase shadow-lg">
          {card.circleText}
        </div>
      </div>
      <div className="flex items-center gap-4 my-4 px-4">
        <h1 className="bg-[#e6f4ea] px-3 py-1 rounded-md text-[#4caf50] text-[17px] font-medium">
          € {card.price}
        </h1>
        <p className="text-xs font-bold text-[#4caf50]">
          <i className="fa fa-clock text-[14px]" /> {card.date}
        </p>
        <i className="fa fa-heart text-[14px] text-[#4caf50] ml-auto cursor-pointer hover:text-red-500 transition-colors"></i>
      </div>
      <h2 className="font-bold text-[17px] px-4 hover:text-[#4caf50] transition-colors cursor-pointer">
        {card.topic}
      </h2>
    </div>
  );
}
