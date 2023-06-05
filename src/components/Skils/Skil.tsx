import { ReactNode } from "react";

type SkilsProps = {
  id: string;
  title: string;
  paragraph: string;
  children: ReactNode;
};

export default function Skil({ id, title, paragraph, children }: SkilsProps) {
  return (
    <div
      className="text-start items-center flex-row grid grid-cols-8 mobile:flex"
      id={id}
    >
      {children}
      <div className="flex flex-col col-span-6 mobile:ml-4">
        <h3 className="text-2xl my-2 mobile:text-xl mobile:mt-0 mobile:my-0">
          {title}
        </h3>
        <p className="mobile:text-[14px]">{paragraph}</p>
      </div>
    </div>
  );
}
