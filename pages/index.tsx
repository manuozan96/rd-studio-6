import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Nosotros: NextPage = () => {
  const router = useRouter();

  const onTtuloContainerClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  const onTtuloContainer1Click = useCallback(() => {
    // Please sync "Proyectos" to the project
  }, []);

  const onTtuloContainer3Click = useCallback(() => {
    router.push("/contacto");
  }, [router]);

  return (
    <div className="w-full relative h-[832px] overflow-y-auto flex flex-col items-center justify-start gap-[116px] bg-[url('/nosotros@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-lg text-rojo font-desktop-cta">
      <div className="flex flex-col items-center justify-start pt-[63px] px-0 pb-0 gap-[212px]">
        <div className="w-[1099px] flex flex-row items-center justify-between">
          <img
            className="w-[51px] relative h-[27.3px] overflow-hidden shrink-0"
            alt=""
            src="/capa-1.svg"
          />
          <div className="w-[724px] flex flex-row items-center justify-between">
            <div className="w-[110px] flex flex-row items-center justify-start">
              <div className="relative font-medium">Home</div>
            </div>
            <div className="w-[110px] flex flex-row items-center justify-start">
              <div className="relative font-medium">Proyectos</div>
            </div>
            <div className="w-[110px] flex flex-row items-center justify-start">
              <div className="relative font-medium">Nosotros</div>
            </div>
            <div className="w-[110px] flex flex-row items-center justify-start">
              <div className="relative font-medium">Contacto</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[95px] text-left text-[64px] text-charcoal font-mobile-h4-regular">
          <div className="self-stretch flex flex-col items-start justify-end gap-[23px]">
            <div className="w-[410px] relative uppercase inline-block">
              <span>{`CONOCE `}</span>
              <i>NUESTRO EQUIPO</i>
            </div>
            <div className="w-[317px] relative text-xl font-desktop-cta inline-block">
              Meet the team who dares to create differently.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[56px] text-center text-5xl font-desktop-cta">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="w-[727px] relative h-[587px]">
                <div className="absolute top-[503px] left-[0px] w-[727px] overflow-hidden flex flex-row items-center justify-center py-[21px] px-[27px] box-border">
                  <div className="relative font-medium">{`Santiago Plata, Senior QA `}</div>
                </div>
                <img
                  className="absolute top-[0px] left-[0px] w-[728.5px] h-[477px] object-cover"
                  alt=""
                  src="/image-81@2x.png"
                />
              </div>
              <div className="w-[355px] relative h-[587px]">
                <div className="absolute top-[0px] left-[0px] w-[355px] h-[587px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-[355px] h-[477px] object-cover"
                    alt=""
                    src="/image-61@2x.png"
                  />
                  <div className="absolute top-[503px] left-[0px] w-[355px] overflow-hidden flex flex-row items-center justify-center py-[21px] px-[27px] box-border">
                    <div className="relative font-medium">
                      Paula Alfonso, Practicante
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="w-[355px] relative h-[587px]">
                <div className="absolute top-[0px] left-[0px] w-[355px] h-[587px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-[355px] h-[477px] object-cover"
                    alt=""
                    src="/image-62@2x.png"
                  />
                  <div className="absolute top-[503px] left-[0px] w-[355px] overflow-hidden flex flex-row items-center justify-center py-[21px] px-[27px] box-border">
                    <div className="relative font-medium">{`Santiago Plata, Senior QA `}</div>
                  </div>
                </div>
              </div>
              <div className="w-[355px] relative h-[587px]">
                <div className="absolute top-[0px] left-[0px] w-[355px] h-[587px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-[355px] h-[477px] object-cover"
                    alt=""
                    src="/image-62@2x.png"
                  />
                  <div className="absolute top-[503px] left-[0px] w-[355px] overflow-hidden flex flex-row items-center justify-center py-[21px] px-[27px] box-border">
                    <div className="relative font-medium">{`Santiago Plata, Senior QA `}</div>
                  </div>
                </div>
              </div>
              <div className="w-[355px] relative h-[587px]">
                <div className="absolute top-[0px] left-[0px] w-[355px] h-[587px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-[355px] h-[477px] object-cover"
                    alt=""
                    src="/image-62@2x.png"
                  />
                  <div className="absolute top-[503px] left-[0px] w-[355px] overflow-hidden flex flex-row items-center justify-center py-[21px] px-[27px] box-border">
                    <div className="relative font-medium">{`Santiago Plata, Senior QA `}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="w-[355px] relative h-[587px]">
                <div className="absolute top-[0px] left-[0px] w-[355px] h-[587px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-[355px] h-[477px] object-cover"
                    alt=""
                    src="/image-63@2x.png"
                  />
                  <div className="absolute top-[503px] left-[0px] w-[355px] overflow-hidden flex flex-row items-center justify-center py-[21px] px-[27px] box-border">
                    <div className="relative font-medium">
                      Paula Alfonso, Practicante
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[727px] relative h-[587px]">
                <div className="absolute top-[503px] left-[0px] w-[727px] overflow-hidden flex flex-row items-center justify-center py-[21px] px-[27px] box-border">
                  <div className="relative font-medium">{`Santiago Plata, Senior QA `}</div>
                </div>
                <img
                  className="absolute top-[0px] left-[0px] w-[728.5px] h-[477px] object-cover"
                  alt=""
                  src="/image-82@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1280px] relative bg-rojo h-[550px] overflow-hidden shrink-0 text-left text-xl text-off-white">
        <div className="absolute top-[calc(50%_-_406px)] left-[calc(50%_+_215px)] bg-rojo w-px h-px [transform:_rotate(180deg)] [transform-origin:0_0]" />
        <div className="absolute top-[52px] left-[calc(50%_-_640px)] w-[1280px] flex flex-row items-start justify-start py-0 px-[90px] box-border">
          <div className="w-[380px] relative inline-block shrink-0">
            <span className="font-semibold">Lorem ipsum</span>
            <span className="font-light">{` dolor sit amet, consectetur adipiscing elit, `}</span>
            <span className="font-semibold">sed do eiusmod tempo</span>
            <span className="font-light">{`r incididunt ut labore et dolore magna `}</span>
            <span className="font-semibold">aliqua.</span>
            <span className="font-light">{` `}</span>
          </div>
        </div>
        <div className="absolute top-[221px] left-[calc(50%_-_640px)] w-[734px] flex flex-col items-start justify-start py-0 px-[90px] box-border gap-[17px] text-lg">
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
            <div className="self-stretch relative h-[46px]">
              <div className="absolute w-full top-[0%] left-[0%] inline-block">
                <p className="m-0 font-light">Oficina México</p>
                <p className="m-0">(+57) (1)  813 48 36</p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-end">
              <div className="relative uppercase font-light">
                info@reinharddienes.com
              </div>
              <img className="w-[3.6px] relative h-0" alt="" />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
            <div className="w-[159px] relative h-[46px]">
              <div className="absolute top-[0%] left-[0%]">
                <p className="m-0 font-light">Oficina Colombia</p>
                <p className="m-0">(+57) (1)  813 48 36</p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-end">
              <div className="relative uppercase font-light">
                info@reinharddienes.com
              </div>
              <img className="w-[3.6px] relative h-0" alt="" />
            </div>
          </div>
        </div>
        <div className="absolute top-[449px] left-[0px] w-[1280px] flex flex-row items-start justify-start py-0 px-[90px] box-border gap-[22px]">
          <img
            className="w-[30px] relative h-[30px]"
            alt=""
            src="/-icon-facebook-squared.svg"
          />
          <img
            className="w-[30px] relative h-[30px]"
            alt=""
            src="/-icon-instagram.svg"
          />
          <img
            className="w-[30px] relative rounded-3xs h-[30px] overflow-hidden shrink-0"
            alt=""
            src="/frame-182.svg"
          />
        </div>
        <div className="absolute top-[31px] right-[75px] w-[471px] flex flex-col items-start justify-center gap-[37px] text-center text-13xl">
          <div
            className="w-[546px] box-border h-[84px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[21px] pr-[27px] pl-[35px] gap-[307px] cursor-pointer border-b-[1px] border-solid border-off-white"
            onClick={onTtuloContainerClick}
          >
            <div className="relative font-medium">Home</div>
            <img
              className="w-[34px] relative h-[34px] overflow-hidden shrink-0 object-contain"
              alt=""
              src="/arrow-right2@2x.png"
            />
          </div>
          <div
            className="w-[546px] box-border h-[84px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[21px] pr-[27px] pl-[35px] gap-[248px] cursor-pointer border-b-[1px] border-solid border-off-white"
            onClick={onTtuloContainer1Click}
          >
            <div className="relative font-medium">Proyectos</div>
            <img
              className="w-[34px] relative h-[34px] overflow-hidden shrink-0 object-contain"
              alt=""
              src="/arrow-right2@2x.png"
            />
          </div>
          <div className="w-[546px] box-border h-[84px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[21px] pr-[27px] pl-[35px] gap-[262px] border-b-[1px] border-solid border-off-white">
            <div className="relative font-medium">Nosotros</div>
            <img
              className="w-[34px] relative h-[34px] overflow-hidden shrink-0 object-contain"
              alt=""
              src="/arrow-right2@2x.png"
            />
          </div>
          <div
            className="w-[546px] box-border h-[84px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[21px] pr-[27px] pl-[35px] gap-[254px] cursor-pointer border-b-[1px] border-solid border-off-white"
            onClick={onTtuloContainer3Click}
          >
            <div className="relative font-medium">Contacto</div>
            <img
              className="w-[34px] relative h-[34px] overflow-hidden shrink-0 object-contain"
              alt=""
              src="/arrow-right2@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
