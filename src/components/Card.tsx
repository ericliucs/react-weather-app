import {ReactElement} from "react";

interface CardProps {
  readonly tailwindClasses?: string;
  readonly children: ReactElement;
}


function Card({ tailwindClasses, children }: CardProps) { // TODO Eventually replace dummy text
  return (
    <div className={`m-8 p-4 rounded-xl bg-gray-950 outline outline-1 outline-slate-500 ${tailwindClasses}`}>
      {children}
    </div>
  );
}

export default Card;
