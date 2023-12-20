import React from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { getCatalogue } from '../api/Catalogue'
import { getCatalogueById } from '../api/Catalogue'
import Nafbar from '../components/navbar'
import Footer from '../components/footer'
import { useSession } from 'next-auth/client'
import { useState } from 'react'

const Catalogue = () => {
  return (
    <div className="relative bg-white w-full h-[8642px] overflow-hidden text-justify text-5xl text-midnightblue-100 font-gotham">
      <div className="absolute top-[5966px] left-[-181px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(232,_240,_255,_0.75),_rgba(217,_217,_217,_0))] [filter:blur(10px)] w-[993px] h-[984px]" />
      <div className="absolute top-[6855px] left-[1143px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(232,_240,_255,_0.75),_rgba(217,_217,_217,_0))] [filter:blur(10px)] w-[993px] h-[984px]" />
      <div className="absolute top-[7875px] left-[-171px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(232,_240,_255,_0.75),_rgba(217,_217,_217,_0))] [filter:blur(10px)] w-[993px] h-[984px]" />
      <div className="absolute top-[8127px] left-[1064px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(232,_240,_255,_0.75),_rgba(217,_217,_217,_0))] [filter:blur(10px)] w-[993px] h-[984px]" />
      <div className="absolute top-[-679px] left-[calc(50%_-_1123px)] rounded-[50%] [background:linear-gradient(180deg,_#95b8ff,_rgba(178,_204,_255,_0))] [filter:blur(10px)] w-[2245px] h-[1612.42px]" />
      <div className="absolute top-[1000px] left-[962px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(232,_240,_255,_0.75),_rgba(217,_217,_217,_0))] [filter:blur(10px)] w-[993px] h-[984px]" />
      <div className="absolute top-[2228px] left-[119px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(232,_240,_255,_0.75),_rgba(217,_217,_217,_0))] [filter:blur(10px)] w-[994px] h-[984px]" />
      <div className="absolute top-[3541px] left-[115px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(232,_240,_255,_0.75),_rgba(217,_217,_217,_0))] [filter:blur(10px)] w-[994px] h-[984px]" />
      <div className="absolute top-[4875px] left-[928px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(232,_240,_255,_0.75),_rgba(217,_217,_217,_0))] [filter:blur(10px)] w-[994px] h-[984px]" />
      <div className="absolute top-[2820px] left-[1035px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(232,_240,_255,_0.75),_rgba(217,_217,_217,_0))] [filter:blur(10px)] w-[994px] h-[984px]" />
      <div className="absolute top-[450px] left-[-140px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(232,_240,_255,_0.75),_rgba(217,_217,_217,_0))] [filter:blur(10px)] w-[993px] h-[984px]" />
      <div className="absolute top-[calc(50%_-_1354px)] left-[calc(50%_+_463px)] flex items-center w-[365px]">
        Lorem ipsum dolor sit amet consectetur. Quis sed sed magna mattis et.
        Vulputate ut eu quam turpis vulputate proin. Turpis dictum quam enim at
        enim suspendisse scelerisque volutpat viverra.
      </div>
      <div className="absolute top-[calc(50%_-_931px)] left-[calc(50%_-_181px)] flex items-center w-[365px]">
        Lorem ipsum dolor sit amet consectetur. Ornare ac pellentesque amet
        netus duis ut. Eu justo nunc sollicitudin sit sit nec lacus. Magna arcu
        neque viverra quis malesuada duis. Tortor dictumst nunc morbi sit.
        Euismod quam lacus tellus blandit erat vel. Mauris nunc tincidunt fames
        vestibulumsagittis uspendisse egestas elit. Sed aliquam egestas est
        egestas.
      </div>
      <div className="absolute top-[calc(50%_+_1005px)] left-[calc(50%_-_182px)] flex items-center w-[365px]">
        Lorem ipsum dolor sit amet consectetur. At lacus fames vulputate posuere
        rutrum semper libero. Tortor nibh elementum hendrerit tellus penatibus
        habitant mattis fermentum tempus. At tincidunt congue volutpat vel
        aliquam quis massa tellus donec. Nibh blandit in nec purus at
        pellentesque enim morbi et.
      </div>
      <div className="absolute top-[1257px] left-[132px] w-[1654px] h-[138px]">
        <div className="absolute top-[calc(50%_-_69px)] left-[0px] flex items-center w-[581px]">
          Lorem ipsum dolor sit amet consectetur. Quis sed sed magna mattis et.
          Vulputate ut eu quam turpis vulputate proin. Turpis dictum quam enim
          at enim suspendisse scelerisque volutpat viverra. Sapien ultrices hac
          faucibus nibh maecenas urna sagittis faucibus tristique.
        </div>
        <div className="absolute top-[calc(50%_-_69px)] left-[calc(50%_-_183px)] flex items-center w-[667px]">
          Lorem ipsum dolor sit amet consectetur. Quis sed sed magna mattis et.
          Vulputate ut eu quam turpis vulputate proin. Turpis dictum quam enim
          at enim suspendisse scelerisque volutpat viverra. Sapien ultrices hac
          faucibus nibh maecenas urna sagittis faucibus tristique.
        </div>
        <i className="absolute top-[calc(50%_-_69px)] right-[0px] text-13xl text-left">
          ABOUT
        </i>
      </div>
      <i className="absolute top-[calc(50%_-_2814px)] right-[1488px] text-13xl text-left">
        DOCUMENTATION
      </i>
      <i className="absolute top-[calc(50%_+_3029px)] left-[calc(50%_-_82px)] text-13xl text-left">
        PACKAGE
      </i>
      <img
        className="absolute top-[328px] left-[133px] rounded-31xl w-[1655px] h-[754.74px] object-cover"
        alt=""
        src="/3210d7dad45e48c6989b618e9af990d7-3@2x.png"
      />
      <div className="absolute top-[75px] left-[0px] w-[1920px] h-[107px] text-left">
        <img
          className="absolute h-full top-[0%] bottom-[0%] left-[calc(50%_-_827px)] max-h-full w-[107.31px] object-cover"
          alt=""
          src="/image-4-traced@2x.png"
        />
        <div className="absolute top-[41px] left-[623px] w-[674.92px] h-[27px]">
          <div className="absolute top-[0px] left-[0px] w-[674.92px] h-[22.32px] flex flex-row items-start justify-start gap-[72px]">
            <div className="relative">HOME</div>
            <div className="relative">CATALOGUE</div>
            <div className="relative">REVIEW</div>
            <div className="relative">CONTACT</div>
          </div>
          <img
            className="absolute top-[25.92px] left-[148px] w-[155px] h-[1.08px] object-contain"
            alt=""
            src="/vector-90@2x.png"
          />
        </div>
        <div className="absolute top-[22px] left-[1658px] rounded-6xl bg-white shadow-[0px_4px_0px_#02266f] flex flex-row items-center justify-center py-5 px-[25px] text-center border-[3px] border-solid border-midnightblue-100">
          <div className="relative">LOGIN</div>
        </div>
      </div>
      <img
        className="absolute top-[2807px] left-[133px] w-[580px] h-[1748px] object-cover"
        alt=""
        src="/fc5e697ccc9c424f848b78e774558954-5@2x.png"
      />
      <div className="absolute top-[1107.74px] left-[calc(50%_-_60px)] flex flex-row items-start justify-start gap-[10px]">
        <div className="relative rounded-3xs bg-mediumslateblue box-border w-[33px] h-3.5 border-[2px] border-solid border-black" />
        <div className="relative rounded-3xs bg-white box-border w-[33px] h-3.5 border-[2px] border-solid border-black" />
        <div className="relative rounded-3xs bg-white box-border w-[33px] h-3.5 border-[2px] border-solid border-black" />
      </div>
      <div className="absolute top-[7215px] left-[calc(50%_-_60px)] flex flex-row items-start justify-start gap-[10px]">
        <div className="relative rounded-3xs bg-mediumslateblue box-border w-[33px] h-3.5 border-[2px] border-solid border-black" />
        <div className="relative rounded-3xs bg-white box-border w-[33px] h-3.5 border-[2px] border-solid border-black" />
        <div className="relative rounded-3xs bg-white box-border w-[33px] h-3.5 border-[2px] border-solid border-black" />
      </div>
      <img
        className="absolute top-[3307px] left-[1208px] rounded-6xl w-[580px] h-[450px] object-cover"
        alt=""
        src="/fc5e697ccc9c424f848b78e774558954-3@2x.png"
      />
      <div className="absolute top-[3882px] left-[779px] rounded-6xl bg-white box-border w-[1010px] h-[673.33px] border-[2px] border-solid border-midnightblue-100" />
      <div className="absolute top-[5795px] left-[133px] rounded-6xl bg-white box-border w-[1010px] h-[673.33px] border-[2px] border-solid border-midnightblue-100" />
      <div className="absolute top-[calc(50%_-_1516px)] right-[132px] w-[226px] h-[93px] text-right text-13xl">
        <div className="absolute top-[calc(50%_-_15.5px)] right-[0px] flex items-center w-[174px]">
          BIRTHDAY PARTY
        </div>
        <div className="absolute top-[calc(50%_-_46.5px)] right-[144px] text-left">
          <p className="m-0">{`NOT `}</p>
          <p className="m-0">
            <i>SO</i>
            <span className="font-gotham">{` `}</span>
          </p>
        </div>
      </div>
      <div className="absolute top-[calc(50%_+_571px)] left-[calc(50%_-_827px)] flex items-center w-[365px]">
        Lorem ipsum dolor sit amet consectetur. Quis sed sed magna mattis et.
        Vulputate ut eu quam turpis vulputate proin. Turpis dictum quam enim at
        enim suspendisse scelerisque volutpat viverra.
      </div>
      <div className="absolute top-[calc(50%_+_409px)] right-[1547px] w-60 h-[93px] text-right text-13xl">
        <div className="absolute top-[calc(50%_-_15.5px)] right-[0px] flex items-center w-[174px]">
          BIRTHDAY PARTY
        </div>
        <div className="absolute top-[calc(50%_-_46.5px)] right-[107px] text-left">
          <p className="m-0">{`UCUP’S `}</p>
          <p className="m-0">
            <i>20th</i>
            <span className="font-gotham">{` `}</span>
          </p>
        </div>
      </div>
      <img
        className="absolute top-[4728px] left-[1208px] w-[580px] h-[1740.42px] object-cover"
        alt=""
        src="/e02afd908b074802971176036853c81d-5@2x.png"
      />
      <img
        className="absolute top-[4728px] left-[563px] rounded-6xl w-[580px] h-[450px] object-cover"
        alt=""
        src="/e02afd908b074802971176036853c81d-3@2x.png"
      />
      <img
        className="absolute top-[5228px] left-[133px] rounded-6xl w-[580px] h-[450px] object-cover"
        alt=""
        src="/e02afd908b074802971176036853c81d-1@2x.png"
      />
      <div className="absolute top-[8539px] right-[133px] w-[1655px] h-[27px] text-9xl">
        <div className="absolute top-[0px] right-[1372px]">{`COPYRIGHT © 2023 `}</div>
        <div className="absolute top-[0px] right-[0px] text-right">
          <span>{`ADOREu x 213 `}</span>
          <span className="text-5xl">presents</span>
        </div>
      </div>
      <div className="absolute top-[8104px] left-[132px] w-[1655px] flex flex-row items-center justify-center gap-[315px] text-right text-13xl">
        <div className="flex-1 flex flex-col items-start justify-start gap-[38px] text-justify">
          <i className="relative">ADOREu</i>
          <div className="flex flex-col items-start justify-start gap-[25px] text-9xl">
            <div className="relative">ABOUT</div>
            <div className="relative">PROJECTS</div>
            <div className="relative">SEND A MESSAGE</div>
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[40px]">
          <i className="relative">LOCATION</i>
          <div className="relative text-9xl text-center">BANDUNG</div>
        </div>
        <div className="flex-1 flex flex-col items-end justify-start gap-[40px]">
          <i className="relative">SERVICES</i>
          <div className="flex flex-col items-end justify-center gap-[25px] text-9xl">
            <div className="relative">SERVICES AREAS</div>
            <div className="relative">PRICING</div>
            <div className="relative">FAQ</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[6765px] left-[283px] rounded-[48.74px] bg-white shadow-[0px_1.9495412111282349px_9.75px_#000] box-border w-[1355px] h-[425px] border-[1.9px] border-solid border-midnightblue-100" />
      <i className="absolute top-[calc(50%_+_2338px)] left-[calc(50%_+_584px)] text-13xl text-right">
        TESTIMONIALS
      </i>
      <div className="absolute top-[6822px] left-[410px] w-[1101px] h-[312px]">
        <img
          className="absolute top-[0px] left-[0px] w-[312px] h-[312px] object-cover"
          alt=""
          src="/group-117@2x.png"
        />
        <div className="absolute top-[calc(50%_-_100px)] left-[calc(50%_-_138.5px)] w-[689px] h-[200px]">
          <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_344.5px)] flex items-center w-[689px]">
            Lorem ipsum dolor sit amet consectetur. Quis sed sed magna mattis
            et. Vulputate ut eu quam turpis vulputate proin. Turpis dictum quam
            enim at enim suspendisse scelerisque volutpat viverra. Sapien
            ultrices hac faucibus nibh maecenas urna sagittis faucibus
            tristique.
          </div>
          <div className="absolute top-[calc(50%_-_100px)] left-[calc(50%_-_344.5px)] w-[394px] h-[60px] text-left text-9xl text-midnightblue-200">
            <div className="absolute top-[calc(50%_-_30px)] left-[calc(50%_-_197px)] text-13xl text-midnightblue-100">
              Muhammad Fatah
            </div>
            <div className="absolute top-[calc(50%_+_3px)] left-[calc(50%_-_197px)]">
              Head of XXXXX
            </div>
            <div className="absolute top-[calc(50%_+_3px)] left-[calc(50%_+_43px)]">
              16/12/2023
            </div>
            <div className="absolute top-[43px] left-[228px] rounded-[50%] bg-midnightblue-200 w-1 h-1" />
          </div>
        </div>
      </div>
      <img
        className="absolute top-[2807px] left-[779px] rounded-6xl w-[580px] h-[450px] object-cover"
        alt=""
        src="/fc5e697ccc9c424f848b78e774558954-1@2x.png"
      />
      <div className="relative w-[1920px] h-[1080px]" />
      <div className="relative w-[1920px] h-[1080px]" />
      <div className="relative w-[1920px] h-[1080px]" />
      <div className="relative w-[1920px] h-[1080px]" />
      <div className="relative w-[1920px] h-[1080px]" />
      <div className="relative w-[1920px] h-[1080px]" />
      <div className="relative w-[1920px] h-[1080px]" />
      <div className="relative w-[1920px] h-[1080px]" />
      <div className="absolute top-[7450px] left-[0px] w-[1920px] h-[500px] overflow-hidden text-center text-29xl">
        <div className="absolute top-[0px] left-[calc(50%_-_825.5px)] flex flex-row items-start justify-start gap-[150px]">
          <div className="relative w-[750px] h-[500px]">
            <div className="absolute top-[0px] left-[0px] rounded-31xl bg-white shadow-[0px_3px_5px_#000] box-border w-[750px] h-[500px] border-[2px] border-solid border-darkslateblue" />
            <div className="absolute top-[74px] left-[0px] box-border w-[750px] h-[57px] border-b-[2px] border-solid border-midnightblue-200" />
            <i className="absolute top-[70px] left-[0px] tracking-[0.25em] flex items-center justify-center w-[750px]">
              GIANT PACKAGE
            </i>
            <div className="absolute top-[200px] left-[0px] flex flex-col items-start justify-start gap-[50px] text-13xl">
              <div className="relative box-border w-[750px] h-[43px] border-[1px] border-solid border-midnightblue-200">
                <div className="absolute top-[6px] left-[29px] flex items-center justify-center w-[346px]">
                  2 HOURS UNLIMITED
                </div>
                <div className="absolute top-[8px] left-[588px] text-9xl">
                  1.749.000
                </div>
              </div>
              <div className="shrink-0 flex flex-row items-end justify-start py-2 px-[27px] gap-[213px] border-[1px] border-solid border-midnightblue-200">
                <div className="relative flex items-center justify-center w-[346px] shrink-0">
                  3 HOURS UNLIMITED
                </div>
                <div className="relative text-9xl">2.199.000</div>
              </div>
              <div className="box-border w-[750px] shrink-0 flex flex-row items-center justify-start py-2 px-[29px] gap-[223px] text-left border-[1px] border-solid border-midnightblue-200">
                <div className="relative flex items-center w-[336px] shrink-0">
                  EXTRA TIME
                </div>
                <div className="relative text-9xl text-center">399.000</div>
              </div>
            </div>
          </div>
          <div className="relative w-[750px] h-[500px]">
            <div className="absolute top-[0px] left-[0px] rounded-31xl bg-white shadow-[0px_3px_5px_#000] box-border w-[750px] h-[500px] border-[2px] border-solid border-darkslateblue" />
            <div className="absolute top-[74px] left-[0px] box-border w-[750px] h-[57px] border-b-[2px] border-solid border-midnightblue-200" />
            <i className="absolute top-[70px] left-[0px] tracking-[0.25em] flex items-center justify-center w-[750px]">
              TINY PACKAGE
            </i>
            <div className="absolute top-[262px] left-[0px] box-border w-[750px] flex flex-row items-center justify-start py-2 px-[30px] gap-[188px] text-13xl border-[1px] border-solid border-midnightblue-200">
              <div className="relative flex items-center w-[361px] shrink-0">
                <span className="w-full">
                  <p className="m-0">2 HOURS UNLIMITED</p>
                  <p className="m-0">(50pcs 4r/100pcs 2r)</p>
                </span>
              </div>
              <div className="relative text-9xl">1.749.000</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_2098px)] left-[calc(50%_-_182px)] flex items-center w-[365px]">
        Lorem ipsum dolor sit amet consectetur. Ornare ac pellentesque amet
        netus duis ut. Eu justo nunc sollicitudin sit sit nec lacus. Magna arcu
        neque viverra quis malesuada duis. Tortor dictumst nunc morbi sit.
        Euismod quam lacus tellus blandit erat vel. Mauris nunc tincidunt fames
        vestibulumsagittis uspendisse egestas elit. Sed aliquam egestas est
        egestas.
      </div>
      <div className="absolute top-[calc(50%_-_2689px)] left-[calc(50%_-_829px)] w-[1012px] h-[450px]">
        <div className="absolute top-[calc(50%_-_209px)] left-[calc(50%_-_506px)] w-[365px] h-[319px]">
          <div className="absolute top-[calc(50%_-_1.5px)] left-[calc(50%_-_182.5px)] flex items-center w-[365px]">
            Lorem ipsum dolor sit amet consectetur. Quis sed sed magna mattis
            et. Vulputate ut eu quam turpis vulputate proin. Turpis dictum quam
            enim at enim suspendisse scelerisque volutpat viverra.
          </div>
          <div className="absolute top-[calc(50%_-_159.5px)] right-[148px] w-[215px] h-[62px] text-right text-13xl">
            <div className="absolute top-[calc(50%_-_0px)] right-[0px]">
              PARTY
            </div>
            <i className="absolute top-[calc(50%_-_31px)] right-[50px] uppercase text-left">
              Wedding
            </i>
          </div>
        </div>
        <img
          className="absolute top-[0px] left-[432px] rounded-6xl w-[580px] h-[450px] object-cover"
          alt=""
          src="/img-5936@2x.png"
        />
      </div>
      <img
        className="absolute top-[2132px] left-[133px] rounded-6xl w-[580px] h-[480px] object-cover"
        alt=""
        src="/img-5930@2x.png"
      />
      <img
        className="absolute top-[1632px] left-[1206px] w-[580px] h-[1000px] object-cover"
        alt=""
        src="/img-5949@2x.png"
      />
    </div>
  );
};

export default Catalogue;


export default work