import { ReactNode } from "react";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

interface Props {
  children: ReactNode;
  img: string;
}

const BgWrapper: React.FC<Props> = ({ children, img }) => {
  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[{ image: img, speed: -15 }]}
        className="aspect-[2/1] relative md:h-auto h-[40rem]"
      >
        {children}
      </ParallaxBanner>
    </ParallaxProvider>
  );
};

export default BgWrapper;
