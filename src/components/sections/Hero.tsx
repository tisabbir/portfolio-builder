
interface HeroProps {
  name?: string;
  title?: string;
  accentColor?: string;
  imageUrl?: string;
}

export const Hero = ({ 
  name = "Ibrahim Memon", 
  title = "A Designer who", 
  accentColor = "#7127BA",
  imageUrl = "https://placehold.co/200x200/4a3b63/4a3b63" 
}: HeroProps) => {
  return (
    <section className="flex justify-between relative p-[100px] max-md:flex-col max-md:p-[50px] max-sm:p-5">
      <div className="ml-[250px] max-md:ml-0">
        <div className="text-[19px] tracking-[-0.5px] mb-5">
          <span>Hello! I Am </span>
          <span style={{ color: accentColor }}>{name}</span>
        </div>
        <div className="text-[17px] tracking-[0.02em] underline mb-2.5">
          {title}
        </div>
        <div className="text-[50px] tracking-[0.02em] leading-[1.2]">
          <span>Judges a book by its </span>
          <span style={{ color: accentColor }}>cover</span>
          <span>...</span>
        </div>
        <div className="text-[11px] tracking-[0.02em] mt-2.5">
          Because if the cover does not impress you what else can?
        </div>
      </div>
      <div className="relative">
        <div className="relative w-[200px] h-[200px]">
          <img
            src={imageUrl}
            alt="Avatar"
            className="w-full h-full rounded-[10px]"
          />
          <div className="absolute bg-[#2B0B3A] p-2.5 rounded-[50%] -right-5 -bottom-5">
            <i className="ti ti-device-laptop" />
          </div>
        </div>
      </div>
    </section>
  );
};
