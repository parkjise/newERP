import { MainStyles } from "@/app/layouts/Main/Main.styles";
import Home from "@/pages/Home/Home";
type Props = {
  className?: string;
};
const Main = ({ className }: Props) => {
  return (
    <MainStyles className={className}>
      <Home />
    </MainStyles>
  );
};

export default Main;
