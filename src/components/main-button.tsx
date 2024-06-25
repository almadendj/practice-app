import HeaderItem from "./header-item";

type MainButtonProps = {
  children?: React.ReactNode;
  onClick: () => void;
};

const MainButton = ({ children, onClick }: MainButtonProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-red-500 py-2 px-6 hover:scale-105 duration-150"
    >
      <HeaderItem>{children}</HeaderItem>
    </div>
  );
};

export default MainButton;
