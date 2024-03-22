import { ReactNode } from "react";

type ContainerWrapperProps = {
  children: ReactNode;
};

const Section = (props: ContainerWrapperProps) => {
  return (
    <div className="w-full max-w-screen-xl m-auto pl-10 pr-10">
      {props.children}
    </div>
  );
};

export default Section;
