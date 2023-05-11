import Image from "next/image";
interface ResumeItemProps {
  img: string;
  name: string;
  position: string;
  dates: string;
  description: string;
}

export default function resumeItem({
  img,
  name,
  position,
  dates,
  description,
}: ResumeItemProps) {
  return (
    <div className="flex">
      <div>
        <Image width={50} height={50} src={img} alt="Logo" />
      </div>
      <div>
        <div>
          <p className="font-extrabold text-2xl">{name}</p>
        </div>
        <div>{position}</div>
        <div>{dates}</div>
        <div>{description}</div>
      </div>
    </div>
  );
}
