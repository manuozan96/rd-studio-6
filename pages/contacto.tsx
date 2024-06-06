import type { NextPage } from "next";
import Head from "next/head";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Contacto: NextPage = () => {
  const router = useRouter();

  const onTtuloContainerClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  const onTtuloContainer1Click = useCallback(() => {
    // Please sync "Proyectos" to the project
  }, []);

  const onTtuloContainer2Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onCapa1Click = useCallback(() => {
    router.push("/home");
  }, [router]);

  return (
    <div className="w-full relative bg-off-white h-[832px] overflow-y-auto flex flex-col items-center justify-start gap-[112px] text-left text-lg text-off-white font-desktop-cta">
      <div className="w-[1280px] relative h-[832px] shrink-0 bg-[url('/frame-526@3x.png')] bg-cover bg-no-repeat bg-[top] z-[0]">
        <img
          className="absolute top-[calc(50%_-_416px)] left-[calc(50%_-_640px)] w-[1280px] h-[832px] object-cover"
          alt=""
          src="/image-17@2x.png"
        />
        <img
          className="absolute top-[0px] left-[-7px] w-[1294px] h-[832px] object-cover"
          alt=""
          src="/rectangle2@2x.png"
        />
        <div className="absolute top-[705px] left-[calc(50%_-_647px)] w-[1287px] flex flex-row items-start justify-between py-0 px-[90px] box-border">
          <div className="flex flex-col items-start justify-start gap-[4px]">
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
          <div className="flex flex-col items-start justify-start gap-[4px]">
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
        <div className="absolute top-[calc(50%_-_52px)] left-[calc(50%_-_198px)] text-15xl leading-[33px] text-center inline-block w-[396px]">
          <span>{`Somos un estudio creativo que `}</span>
          <span className="font-semibold">transforma espacios.</span>
        </div>
      </div>
      <div className="w-[1280px] flex flex-col items-center justify-center py-0 px-[90px] box-border gap-[116px] z-[1] text-23xl text-charcoal font-mobile-h4-regular">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="flex-1 h-[196px] flex flex-row items-center justify-start">
            <div className="w-[497px] relative uppercase inline-block shrink-0">
              <p className="m-0">
                <span className="text-[40px] tracking-[0.2em] font-desktop-cta">
                  ELEVAMOS
                </span>
                <span>
                  <span>{` `}</span>
                </span>
              </p>
              <p className="m-0">
                <span>
                  <i className="tracking-[0.1em]">
                    TU ESPACIO A UNA EXPERIENCIA DE IMPACTO
                  </i>
                </span>
              </p>
            </div>
          </div>
          <div className="w-[520px] flex flex-col items-center justify-center gap-[60px] text-2xl">
            <div className="self-stretch relative box-border h-[84px] overflow-hidden shrink-0 border-b-[1px] border-solid border-charcoal">
              <div className="absolute top-[29px] left-[40px] uppercase flex items-center w-[447px]">
                NOMBRE
              </div>
              <div className="absolute top-[0px] left-[527px] bg-off-white w-px h-px opacity-[0]" />
            </div>
            <div className="self-stretch relative box-border h-[84px] overflow-hidden shrink-0 border-b-[1px] border-solid border-charcoal">
              <div className="absolute top-[29px] left-[40px] uppercase flex items-center w-[447px]">
                ASUNTO
              </div>
              <div className="absolute top-[0px] left-[527px] bg-off-white w-px h-px opacity-[0]" />
            </div>
            <div className="self-stretch relative box-border h-[84px] overflow-hidden shrink-0 border-b-[1px] border-solid border-charcoal">
              <div className="absolute top-[29px] left-[40px] uppercase flex items-center w-[447px]">
                <span className="w-full">
                  <span>{`NÚMERO `}</span>
                  <i>DE CONTÁCTO</i>
                </span>
              </div>
              <div className="absolute top-[0px] left-[527px] bg-off-white w-px h-px opacity-[0]" />
            </div>
            <div className="self-stretch relative box-border h-[84px] overflow-hidden shrink-0 border-b-[1px] border-solid border-charcoal">
              <div className="absolute top-[29px] left-[40px] uppercase flex items-center w-[447px]">
                EMAIL
              </div>
              <div className="absolute top-[0px] left-[527px] bg-off-white w-px h-px opacity-[0]" />
            </div>
            <div className="self-stretch relative box-border h-[84px] overflow-hidden shrink-0 border-b-[1px] border-solid border-charcoal">
              <div className="absolute top-[29px] left-[40px] uppercase flex items-center w-[447px]">
                DESCRIPCIÓN
              </div>
              <div className="absolute top-[0px] left-[527px] bg-off-white w-px h-px opacity-[0]" />
            </div>
            <div className="w-[283px] relative h-[76px] text-center text-5xl text-rojo font-desktop-cta">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] box-border border-[1px] border-solid border-rojo">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_35.5px)] font-medium">
                  Enviar
                </div>
                <div className="absolute top-[0px] left-[282px] bg-rojo w-px h-px" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1280px] relative bg-rojo h-[550px] overflow-hidden shrink-0 text-xl text-off-white font-desktop-cta">
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
            <div className="w-[546px] box-border h-[84px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[21px] pr-[27px] pl-[35px] gap-[254px] border-b-[1px] border-solid border-off-white">
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
      <div className="!m-[0] absolute top-[63px] left-[calc(50%_-_549px)] flex flex-col items-center justify-start z-[2] text-center">
        <div className="w-[1099px] flex flex-row items-center justify-between">
          <img
            className="w-[51px] relative h-[27.3px] overflow-hidden shrink-0 cursor-pointer"
            alt=""
            src="/capa-11.svg"
            onClick={onCapa1Click}
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
      </div>
    </div>
  );
};

export default Contacto;
