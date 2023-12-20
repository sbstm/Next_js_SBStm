import React from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { getReview } from '../api/review'
import { getReviewById } from '../api/review'
import Nafbar from '../components/navbar'
import Footer from '../components/footer'
import { useSession } from 'next-auth/client'
import { useState } from 'react'

const Review = () => {
    return (
      <div className="relative bg-white w-full h-[3038px] overflow-hidden text-center text-13xl text-midnightblue-100 font-gotham">
        <div className="absolute top-[540px] left-[-145px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(232,_240,_255,_0.75),_rgba(217,_217,_217,_0))] [filter:blur(10px)] w-[993px] h-[984px]" />
        <div className="absolute top-[674px] left-[1049px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(232,_240,_255,_0.75),_rgba(217,_217,_217,_0))] [filter:blur(10px)] w-[993px] h-[984px]" />
        <div className="absolute top-[1519px] left-[244px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(232,_240,_255,_0.75),_rgba(217,_217,_217,_0))] [filter:blur(10px)] w-[993px] h-[984px]" />
        <div className="absolute top-[2238px] left-[-471px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(232,_240,_255,_0.75),_rgba(217,_217,_217,_0))] [filter:blur(10px)] w-[993px] h-[984px]" />
        <div className="absolute top-[1711px] left-[1292px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(232,_240,_255,_0.75),_rgba(217,_217,_217,_0))] [filter:blur(10px)] w-[993px] h-[984px]" />
        <div className="absolute top-[-679px] left-[calc(50%_-_1123px)] rounded-[50%] [background:linear-gradient(180deg,_#95b8ff,_rgba(178,_204,_255,_0))] [filter:blur(10px)] w-[2245px] h-[1612.42px]" />
        <div className="relative w-[1920px] h-[1080px]" />
        <div className="relative w-[1920px] h-[1080px]" />
        <div className="relative w-[1920px] h-[876px]" />
        <div className="absolute top-[1200px] left-[283px] rounded-[39.25px] bg-white shadow-[0px_1.569968819618225px_7.85px_#000] box-border w-[399px] h-[375px] border-[1.6px] border-solid border-midnightblue-100" />
        <div className="absolute top-[2500px] right-[133px] w-[1655px] h-[462px] text-right text-9xl">
          <div className="absolute top-[435px] right-[1372px] text-justify">{`COPYRIGHT © 2023 `}</div>
          <div className="absolute top-[435px] right-[0px]">
            <span>{`ADOREu x 213 `}</span>
            <span className="text-5xl">presents</span>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[1655px] flex flex-row items-center justify-center gap-[315px] text-13xl">
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
              <div className="relative text-9xl text-center">ITB, BANDUNG</div>
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
        </div>
        <div className="absolute top-[75px] left-[0px] w-[1920px] h-[107px] text-left text-5xl">
          <img
            className="absolute h-full top-[0%] bottom-[0%] left-[calc(50%_-_827px)] max-h-full w-[107.31px] object-cover"
            alt=""
            src="/image-4-traced@2x.png"
          />
          <div className="absolute top-[41px] left-[623px] w-[674.92px] h-[26px]">
            <div className="absolute top-[0px] left-[0px] w-[674.92px] h-[22.32px] flex flex-row items-start justify-start gap-[72px]">
              <div className="relative">HOME</div>
              <div className="relative">CATALOGUE</div>
              <div className="relative">REVIEW</div>
              <div className="relative">CONTACT</div>
            </div>
            <img
              className="absolute top-[26px] left-[369px] max-h-full w-[114px] object-cover"
              alt=""
              src="/vector-90@2x.png"
            />
          </div>
          <div className="absolute top-[22px] left-[1658px] rounded-6xl bg-white shadow-[0px_4px_0px_#02266f] flex flex-row items-center justify-center py-5 px-[25px] text-center border-[3px] border-solid border-midnightblue-100">
            <div className="relative">LOGIN</div>
          </div>
        </div>
        <img
          className="absolute top-[325px] left-[998px] rounded-6xl w-[790px] h-[575px] object-cover"
          alt=""
          src="/921f518ea7494fd3a9ddbf14303ae729-3@2x.png"
        />
        <div className="absolute top-[447px] left-[153px] flex flex-col items-start justify-start gap-[20px] text-left text-45xl">
          <div className="relative tracking-[0.25em] leading-[54px] flex items-center w-[695px]">
            <span className="w-full">
              <i>ELEVATE</i>
              <span> YOUR PHOTOBOOTH EXPERIENCE</span>
            </span>
          </div>
          <div className="relative text-[26px] leading-[25px] text-midnightblue-300 flex items-center w-[567px]">
            AdoreU, your trusted photobooth services provider. Let’s see our
            documentation, here!
          </div>
          <div className="rounded-[30px] bg-white shadow-[0px_4.800000190734863px_0px_#02266f] box-border w-[227.81px] shrink-0 flex flex-row items-center justify-center py-6 px-[30.000001907348633px] text-center text-13xl border-[3.6px] border-solid border-midnightblue-100">
            <div className="relative">EXPLORE</div>
          </div>
        </div>
        <div className="absolute top-[1375px] left-[calc(50%_-_653px)] tracking-[0.25em] leading-[30px]">
          <p className="m-0">PERSONALIZED</p>
          <p className="m-0">SERVICES</p>
        </div>
        <div className="absolute top-[1450px] left-[calc(50%_-_653px)] text-5xl text-midnightblue-200 flex items-center justify-center w-[350px]">{`Lorem ipsum dolor sit amet consectetur. Quis sed sed magna mattis et. Vulputate ut eu quam turpis vulputate. `}</div>
        <div className="absolute top-[1029px] left-[calc(50%_-_411px)] w-[821px] h-[110px] text-45xl">
          <div className="absolute top-[0px] left-[calc(50%_-_410.5px)] tracking-[0.25em] leading-[54px]">
            <span>{`WHY `}</span>
            <i>{`CHOOSE `}</i>
            <span>US?</span>
          </div>
          <div className="absolute top-[64px] left-[calc(50%_-_410.5px)] text-5xl text-midnightblue-300 flex items-center justify-center w-[821px]">{`Lorem ipsum dolor sit amet consectetur. Quis sed sed magna mattis et. Vulputate ut eu quam turpis vulputate proin. `}</div>
        </div>
        <div className="absolute h-[2.63%] w-[4.17%] top-[41.15%] right-[72.81%] bottom-[56.22%] left-[23.02%] flex items-center justify-center">
          <img
            className="h-full w-full max-w-full overflow-hidden max-h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.092)]"
            alt=""
            src="/group-127@2x.png"
          />
        </div>
        <div className="absolute top-[1200px] left-[761px] w-[399px] h-[375px]">
          <div className="absolute top-[0px] left-[0px] rounded-[39.25px] bg-white shadow-[0px_1.569968819618225px_7.85px_#000] box-border w-[399px] h-[375px] border-[1.6px] border-solid border-midnightblue-100" />
          <div className="absolute top-[175px] left-[calc(50%_-_175.5px)] tracking-[0.25em] leading-[30px]">
            <p className="m-0">PERSONALIZED</p>
            <p className="m-0">SERVICES</p>
          </div>
          <div className="absolute top-[250px] left-[calc(50%_-_175.5px)] text-5xl text-midnightblue-200 flex items-center justify-center w-[350px]">{`Lorem ipsum dolor sit amet consectetur. Quis sed sed magna mattis et. Vulputate ut eu quam turpis vulputate. `}</div>
          <div className="absolute h-[21.33%] w-[20.05%] top-[13.33%] right-[40.1%] bottom-[65.33%] left-[39.85%] flex items-center justify-center">
            <img
              className="h-full w-full max-w-full overflow-hidden max-h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.092)]"
              alt=""
              src="/group-128@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[1200px] left-[1239px] w-[399px] h-[375px]">
          <div className="absolute top-[0px] left-[0px] rounded-[39.25px] bg-white shadow-[0px_1.569968819618225px_7.85px_#000] box-border w-[399px] h-[375px] border-[1.6px] border-solid border-midnightblue-100" />
          <div className="absolute top-[175px] left-[calc(50%_-_175.5px)] tracking-[0.25em] leading-[30px]">
            <p className="m-0">PERSONALIZED</p>
            <p className="m-0">SERVICES</p>
          </div>
          <div className="absolute top-[240px] left-[calc(50%_-_175.5px)] text-5xl font-roboto text-midnightblue-200 flex items-center justify-center w-[350px]">{`Lorem ipsum dolor sit amet consectetur. Quis sed sed magna mattis et. Vulputate ut eu quam turpis vulputate. `}</div>
          <div className="absolute h-[21.33%] w-[20.05%] top-[13.33%] right-[40.1%] bottom-[65.33%] left-[39.85%] flex items-center justify-center">
            <img
              className="h-full w-full max-w-full overflow-hidden max-h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.092)]"
              alt=""
              src="/group-129@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[2275px] left-[calc(50%_-_37px)] flex flex-row items-start justify-start gap-[10px]">
          <div className="relative rounded-3xs bg-mediumslateblue box-border w-[33px] h-3.5 border-[2px] border-solid border-black" />
          <div className="relative rounded-3xs bg-white box-border w-[33px] h-3.5 border-[2px] border-solid border-black" />
          <div className="relative rounded-3xs bg-white box-border w-[33px] h-3.5 border-[2px] border-solid border-black" />
        </div>
        <div className="absolute top-[1750px] left-[133px] rounded-[48.74px] bg-white shadow-[0px_1.9495412111282349px_9.75px_#000] box-border w-[1655px] h-[500px] border-[1.9px] border-solid border-midnightblue-100" />
        <div className="absolute top-[1805px] left-[calc(50%_-_760px)] flex flex-row items-center justify-start gap-[75px] text-left text-[36px]">
          <img
            className="relative rounded-6xl w-[619px] h-[391px] object-cover"
            alt=""
            src="/f757895e3b43424f8444ed3eb24038a8-1-2@2x.png"
          />
          <div className="shrink-0 flex flex-col items-start justify-start gap-[25px]">
            <div className="relative w-[415.59px] h-[71px]">
              <img
                className="absolute top-[3.8px] left-[0px] w-[63.59px] h-[63.59px] object-cover"
                alt=""
                src="/mask-group@2x.png"
              />
              <div className="absolute top-[calc(50%_-_35.5px)] left-[calc(50%_-_114.2px)] w-[322px] h-[71px]">
                <div className="absolute top-[calc(50%_-_35.5px)] left-[calc(50%_-_161px)]">
                  Muhammad Fatah
                </div>
                <div className="absolute top-[calc(50%_+_4.5px)] left-[calc(50%_-_160.59px)] text-13xl text-midnightblue-300">
                  16/12/2023
                </div>
              </div>
            </div>
            <div className="relative text-9xl text-justify flex items-center w-[826.8px]">
              Lorem ipsum dolor sit amet consectetur. Quis sed sed magna mattis
              et. Vulputate ut eu quam turpis vulputate proin. Turpis dictum quam
              enim at enim suspendisse scelerisque volutpat viverra. Sapien
              ultrices hac faucibus nibh maecenas urna sagittis faucibus
              tristique.
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Review;
  