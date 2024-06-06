import type { NextPage } from "next";
import Head from "next/head";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  const onTtuloContainer1Click = useCallback(() => {
    // Please sync "Proyectos" to the project
  }, []);

  const onTtuloContainer2Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onTtuloContainer3Click = useCallback(() => {
    router.push("/contacto");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-y-auto flex flex-col items-center justify-start text-center text-5xl text-off-white font-desktop-cta">
      <div className="w-[1280px] relative bg-white h-[832px] overflow-hidden shrink-0">
        <img
          className="absolute top-[calc(50%_-_441px)] left-[calc(50%_-_640px)] w-[1280px] h-[881px] object-cover"
          alt=""
          src="/rectangle@2x.png"
        />
        <div className="absolute top-[-1138px] left-[-377px] w-[1920px] h-[1081px] overflow-hidden" />
        <div className="absolute top-[calc(50%_-_26px)] left-[calc(50%_-_128px)] w-64 h-[51px] overflow-hidden">
          <img
            className="absolute h-full w-[68.75%] top-[0%] right-[0%] bottom-[0%] left-[31.25%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group.svg"
          />
          <img
            className="absolute h-[95.49%] w-[22.54%] top-[3.53%] right-[77.46%] bottom-[0.98%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group1.svg"
          />
        </div>
      </div>
      <div className="w-[1280px] relative h-[2066px] shrink-0 text-charcoal">
        <div className="absolute top-[0px] left-[0px] w-[1280px] h-[2066px] text-13xl">
          <img
            className="absolute top-[0px] left-[0px] w-[1280px] h-[2066px] object-cover"
            alt=""
            src="/rectangle1@2x.png"
          />
          <div className="absolute top-[calc(50%_-_850px)] left-[calc(50%_-_283px)] inline-block w-[567px]">
            <p className="m-0">
              <span>{`Somos un estudio creativo que `}</span>
              <span className="font-semibold font-desktop-cta">
                transforma espacios
              </span>
            </p>
            <p className="m-0">
              <span>{`a través de diseño interior, `}</span>
              <span className="font-semibold font-desktop-cta">
                arquitectura,
              </span>
            </p>
            <p className="m-0">construcción y mobiliario.</p>
          </div>
        </div>
        <div className="absolute top-[1883px] left-[calc(50%_-_141px)] w-[283px] h-[76px] text-rojo">
          <div className="absolute top-[0px] left-[calc(50%_-_141.5px)] w-[283px] h-[76px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-rojo">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
              <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_76.5px)] font-medium">
                Conocer más
              </div>
              <div className="absolute top-[0px] left-[282px] bg-rojo w-px h-px" />
            </div>
          </div>
        </div>
        <div className="absolute top-[577px] left-[calc(50%_-_549.2px)] w-[1098px] flex flex-row items-center justify-between">
          <div className="w-[727px] relative h-[587px]">
            <div className="absolute top-[503px] left-[0px] box-border w-[727px] overflow-hidden flex flex-row items-center justify-between py-[21px] px-[27px] border-[1px] border-solid border-charcoal">
              <div className="relative font-medium">Colo Café</div>
              <img
                className="w-[34px] relative h-[34px] overflow-hidden shrink-0 object-contain"
                alt=""
                src="/arrow-right@2x.png"
              />
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[728.5px] h-[477px] object-cover"
              alt=""
              src="/image-8@2x.png"
            />
          </div>
          <div className="w-[355px] relative h-[587px]">
            <div className="absolute top-[0px] left-[0px] w-[355px] h-[587px]">
              <img
                className="absolute top-[0px] left-[0px] w-[355px] h-[477px] object-cover"
                alt=""
                src="/image-6@2x.png"
              />
              <div className="absolute top-[503px] left-[0px] box-border w-[355px] overflow-hidden flex flex-row items-center justify-between py-[21px] px-[27px] border-[1px] border-solid border-charcoal">
                <div className="relative font-medium">Nimi’s Shawarma</div>
                <img
                  className="w-[34px] relative h-[34px] overflow-hidden shrink-0 object-contain"
                  alt=""
                  src="/arrow-right@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[1230px] left-[calc(50%_-_549.2px)] w-[1098px] flex flex-row items-center justify-between">
          <div className="w-[355px] relative h-[587px]">
            <div className="absolute top-[0px] left-[0px] w-[355px] h-[587px]">
              <img
                className="absolute top-[0px] left-[0px] w-[355px] h-[477px] object-cover"
                alt=""
                src="/image-6@2x.png"
              />
              <div className="absolute top-[503px] left-[0px] box-border w-[355px] overflow-hidden flex flex-row items-center justify-between py-[21px] px-[27px] border-[1px] border-solid border-charcoal">
                <div className="relative font-medium">Nimi’s Shawarma</div>
                <img
                  className="w-[34px] relative h-[34px] overflow-hidden shrink-0 object-contain"
                  alt=""
                  src="/arrow-right@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="w-[727px] relative h-[587px]">
            <div className="absolute top-[503px] left-[0px] box-border w-[727px] overflow-hidden flex flex-row items-center justify-between py-[21px] px-[27px] border-[1px] border-solid border-charcoal">
              <div className="relative font-medium">Colo Café</div>
              <img
                className="w-[34px] relative h-[34px] overflow-hidden shrink-0 object-contain"
                alt=""
                src="/arrow-right@2x.png"
              />
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[728.5px] h-[477px] object-cover"
              alt=""
              src="/image-8@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="w-[1280px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
        <div className="self-stretch relative h-[1675px]">
          <div className="absolute top-[0px] left-[-7px] w-[1294px] h-[832px] overflow-hidden">
            <img
              className="absolute top-[0px] left-[0px] w-[1294px] h-[832px] object-cover"
              alt=""
              src="/rectangle2@2x.png"
            />
            <img
              className="absolute top-[-691px] left-[-356px] w-[2924px] h-[2736.4px]"
              alt=""
              src="/world.svg"
            />
            <div className="absolute top-[calc(50%_-_260px)] left-[calc(50%_-_546px)] w-[1093px] flex flex-col items-center justify-center gap-[184px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <div className="self-stretch flex flex-row items-center justify-start gap-[22px]">
                  <img
                    className="w-7 relative max-h-full"
                    alt=""
                    src="/vector-6.svg"
                  />
                  <div className="w-[374px] relative h-[31px]">
                    <div className="absolute top-[0px] left-[0px] tracking-[0.1em]">
                      {`13 `}
                      <span className="uppercase">ciudades</span>
                      {` `}
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[22px]">
                  <img
                    className="w-14 relative max-h-full"
                    alt=""
                    src="/vector-61.svg"
                  />
                  <div className="flex-1 relative h-[31px]">
                    <div className="absolute top-[0px] left-[0px] tracking-[0.1em]">
                      5 PAÍSES
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[22px] text-left">
                  <img
                    className="w-[75px] relative max-h-full"
                    alt=""
                    src="/vector-62.svg"
                  />
                  <div className="flex-1 relative h-[31px]">
                    <div className="absolute top-[0px] left-[0px] tracking-[0.1em]">
                      + 80 COLABORADORES
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[22px] text-left">
                  <img
                    className="w-[97px] relative max-h-full"
                    alt=""
                    src="/vector-63.svg"
                  />
                  <div className="flex-1 relative h-[31px]">
                    <div className="absolute top-[0px] left-[0px] tracking-[0.1em]">
                      +3.000.000 PIEZAS DE MOBILIARIO PRODUCIDAS
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-end justify-start gap-[24px] text-right">
                <div className="self-stretch flex flex-row items-center justify-end gap-[22px]">
                  <div className="flex-1 relative h-[31px]">
                    <div className="absolute top-[0px] right-[0px] tracking-[0.1em]">
                      +455 PROYECTOS DESTACADOS
                    </div>
                  </div>
                  <img
                    className="w-7 relative max-h-full"
                    alt=""
                    src="/vector-64.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-center justify-end gap-[22px] text-center">
                  <div className="flex-1 relative h-[31px]">
                    <div className="absolute top-[0px] right-[0px] tracking-[0.1em]">
                      +750.000 M2 CONSTRUÍDOS
                    </div>
                  </div>
                  <img
                    className="w-14 relative max-h-full"
                    alt=""
                    src="/vector-65.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-center justify-end gap-[22px]">
                  <div className="flex-1 relative h-[31px]">
                    <div className="absolute top-[0px] right-[0px] tracking-[0.1em]">
                      DESDE LOS 17 HASTA LOS 2.000 M2
                    </div>
                  </div>
                  <img
                    className="w-[75px] relative max-h-full"
                    alt=""
                    src="/vector-66.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[842px] left-[0px] w-[1280px] h-[833px] text-[36px] text-charcoal">
            <div className="absolute top-[20.17%] left-[calc(50%_-_189px)] uppercase inline-block w-[378px]">
              <p className="m-0 tracking-[0.2em]">{`Empresas `}</p>
              <p className="m-0 font-mobile-h4-regular">
                <i className="tracking-[0.1em]">que confían en nosotros.</i>
              </p>
            </div>
            <div className="absolute top-[calc(50%_-_35.5px)] left-[calc(50%_-_549px)] w-[1098px] h-[138px] overflow-hidden">
              <div className="absolute top-[calc(50%_-_69px)] left-[calc(50%_-_549px)] w-[2443px] h-[138px]">
                <img
                  className="absolute top-[calc(50%_-_56px)] left-[calc(50%_-_661.5px)] w-[212px] h-28 object-cover"
                  alt=""
                  src="/image-22@2x.png"
                />
                <img
                  className="absolute top-[calc(50%_-_56px)] left-[calc(50%_-_101.5px)] w-[212px] h-28 object-cover"
                  alt=""
                  src="/image-22@2x.png"
                />
                <img
                  className="absolute top-[calc(50%_-_56px)] left-[calc(50%_-_1221.5px)] w-[212px] h-28 object-cover"
                  alt=""
                  src="/image-22@2x.png"
                />
                <img
                  className="absolute top-[calc(50%_-_69px)] left-[calc(50%_-_939.5px)] w-52 h-[138px] object-cover"
                  alt=""
                  src="/image-20@2x.png"
                />
                <img
                  className="absolute top-[calc(50%_-_69px)] left-[calc(50%_-_379.5px)] w-52 h-[138px] object-cover"
                  alt=""
                  src="/image-20@2x.png"
                />
                <img
                  className="absolute top-[calc(50%_-_56px)] left-[calc(50%_+_449.5px)] w-[212px] h-28 object-cover"
                  alt=""
                  src="/image-22@2x.png"
                />
                <img
                  className="absolute top-[calc(50%_-_56px)] left-[calc(50%_+_1009.5px)] w-[212px] h-28 object-cover"
                  alt=""
                  src="/image-22@2x.png"
                />
                <img
                  className="absolute top-[calc(50%_-_69px)] left-[calc(50%_+_171.5px)] w-52 h-[138px] object-cover"
                  alt=""
                  src="/image-20@2x.png"
                />
                <img
                  className="absolute top-[calc(50%_-_69px)] left-[calc(50%_+_731.5px)] w-52 h-[138px] object-cover"
                  alt=""
                  src="/image-20@2x.png"
                />
              </div>
            </div>
            <div className="absolute top-[590px] left-[calc(50%_-_142px)] w-[283px] h-[76px] text-5xl text-rojo">
              <div className="absolute top-[0px] left-[calc(50%_-_141.5px)] w-[283px] h-[76px]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-rojo">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                  <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_73.5px)] font-medium">
                    Contáctanos
                  </div>
                  <div className="absolute top-[0px] left-[282px] bg-rojo w-px h-px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1280px] relative bg-rojo h-[550px] overflow-hidden shrink-0 text-left text-xl">
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
          <div className="w-[546px] box-border h-[84px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[21px] pr-[27px] pl-[35px] gap-[307px] border-b-[1px] border-solid border-off-white">
            <div className="relative font-medium">Home</div>
            <img
              className="w-[34px] relative h-[34px] overflow-hidden shrink-0 object-contain"
              alt=""
              src="/arrow-right1@2x.png"
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
              src="/arrow-right1@2x.png"
            />
          </div>
          <div
            className="w-[546px] box-border h-[84px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[21px] pr-[27px] pl-[35px] gap-[262px] cursor-pointer border-b-[1px] border-solid border-off-white"
            onClick={onTtuloContainer2Click}
          >
            <div className="relative font-medium">Nosotros</div>
            <img
              className="w-[34px] relative h-[34px] overflow-hidden shrink-0 object-contain"
              alt=""
              src="/arrow-right1@2x.png"
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
              src="/arrow-right1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
