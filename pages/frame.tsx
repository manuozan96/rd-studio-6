import type { NextPage } from "next";

const Frame: NextPage = () => {
  return (
    <div className="w-full relative h-[832px] overflow-hidden bg-[url('/404@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-41xl text-off-white font-desktop-cta">
      <div className="absolute top-[calc(50%_-_114px)] left-[calc(50%_-_459px)] w-[918px] h-[227px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] w-[3713.3px] h-[227px]">
          <img
            className="absolute top-[0px] left-[0px] w-[1152.4px] h-[227px]"
            alt=""
            src="/group-510.svg"
          />
          <img
            className="absolute top-[0px] left-[1280.4px] w-[1152.4px] h-[227px]"
            alt=""
            src="/group-512.svg"
          />
          <img
            className="absolute top-[0px] left-[2560.9px] w-[1152.4px] h-[227px]"
            alt=""
            src="/group-513.svg"
          />
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_144px)] left-[calc(50%_-_248px)] flex flex-col items-center justify-center gap-[36px]">
        <div className="w-[497px] relative uppercase inline-block font-mobile-h4-regular">
          <p className="m-0">¡UPS!</p>
          <p className="m-0">
            <i>ALGO SALIÓ MAL</i>
          </p>
        </div>
        <div className="w-[396px] relative text-15xl leading-[33px] inline-block">
          Error 404
        </div>
        <div className="w-[360px] relative h-[27px] text-5xl">
          <div className="absolute w-full top-[0%] left-[0%] leading-[27px] inline-block">
            .
          </div>
        </div>
      </div>
      <img
        className="absolute top-[64px] left-[calc(50%_-_591px)] w-[138.6px] h-[27.3px]"
        alt=""
        src="/component-5.svg"
      />
    </div>
  );
};

export default Frame;
