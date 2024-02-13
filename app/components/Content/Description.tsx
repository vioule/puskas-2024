import { DataType } from "../DataProvider";

export default function Description({ data }: { data: DataType }) {
  return (
    <div id="description" className="hidden">
      <div className="absolute top-[-2.7rem] h-[2.7rem] left-0 w-full uppercase font-roboto overflow-hidden">
        <div className="absolute top-0 left-0 w-full bg-black h-[2.7rem] font-black text-white tracking-[0.4rem]">
          <span
            className="block absolute top-[110%] left-0 w-full height-full pl-1"
            id="name"
          >
            {data.name}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-black h-[1.2rem] text-gold text-[0.6rem] tracking-[0.2rem]">
          <span
            className="block absolute top-[110%] left-0 w-full height-full pl-1"
            id="comp"
          >
            {data.comp}
          </span>
        </div>
      </div>
      <div className="absolute bottom-[-1.5rem] h-[1.5rem] right-0 w-full font-rocksalt overflow-hidden">
        <div className="absolute top-0 right-0 w-full bg-black h-[2.7rem] font-normal text-white text-[0.6rem] tracking-[0.4rem]">
          <span
            className="block absolute top-[-110%] left-0 w-full height-full pr-1 text-right pt-2"
            id="year"
          >
            {data.year}
          </span>
        </div>
      </div>
    </div>
  );
}
