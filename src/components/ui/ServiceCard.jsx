import Button from "./Button";
import { FaWhatsapp } from "react-icons/fa";

export default function ServiceCard({
  isFormOpen,
  setIsFormOpen,
  imgSrc,
  title,
  description = "Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc",
}) {
  return (
    <div className="flex max-w-[347px] flex-col items-center gap-6 rounded-3xl bg-white p-8 shadow-[0_24px_32px_-3px_rgba(3,9,50,0.04)] transition hover:rotate-3 hover:scale-105">
      <img
        className="size-[200px] object-contain"
        src={imgSrc || "/card-img-1.png"}
        alt="Card"
      />

      <div>
        <h4 className="font-poppins text-2xl font-medium text-black">
          {title}
        </h4>
        <p className="mt-3 text-sm text-para">{description}</p>
      </div>

      <img
        onClick={() => setIsFormOpen(!isFormOpen)}
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnl6MGQwcXUxN2V4MjVjN3c1aGxzZTFpeTlyaXR0ZGgxa2NrNDUxYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/i8cYLHptr8q1nwyvyp/giphy.webp"
        alt=""
        srcset=""
      />
    </div>
  );
}
