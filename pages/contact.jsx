import React from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { getReview } from '../api/review'
import { getReviewById } from '../api/review'
import Nafbar from '../components/navbar'
import Footer from '../components/footer'
import { useSession } from 'next-auth/client'
import { useState } from 'react'

const Contact = () => {
  return (
    <div className="relative bg-white w-full h-[1700px] overflow-hidden text-right text-9xl text-midnightblue-100 font-gotham">
      <div className="absolute top-[540px] left-[-145px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(232,_240,_255,_0.75),_rgba(217,_217,_217,_0))] [filter:blur(10px)] w-[993px] h-[984px]" />
      <div className="absolute top-[950px] left-[993px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(232,_240,_255,_0.75),_rgba(217,_217,_217,_0))] [filter:blur(10px)] w-[993px] h-[984px]" />
      <div className="absolute top-[-679px] left-[calc(50%_-_1123px)] rounded-[50%] [background:linear-gradient(180deg,_#95b8ff,_rgba(178,_204,_255,_0))] [filter:blur(10px)] w-[2245px] h-[1612.42px]" />
      <div className="absolute top-[-2043px] left-[calc(50%_+_485px)] rounded-[50%] [background:linear-gradient(180deg,_#95b8ff,_rgba(178,_204,_255,_0))] [filter:blur(10px)] w-[2245px] h-[1612.42px]" />
      <div className="relative w-[1920px] h-[1080px]" />
      <div className="relative w-[1920px] h-[620px]" />
      <div className="absolute top-[1598px] right-[1505px] text-justify">{`COPYRIGHT © 2023 `}</div>
      <div className="absolute top-[1598px] right-[133px]">
        <span>{`ADOREu x 213 `}</span>
        <span className="text-5xl">presents</span>
      </div>
      <div className="absolute top-[1163px] left-[132px] w-[1655px] flex flex-row items-center justify-center gap-[315px] text-13xl">
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
            className="absolute top-[26px] left-[549px] max-h-full w-[122px] object-cover"
            alt=""
            src="/vector-90@2x.png"
          />
        </div>
        <div className="absolute top-[22px] left-[1658px] rounded-[25px] bg-white shadow-[0px_4px_0px_#02266f] flex flex-row items-center justify-center py-5 px-[25px] text-center border-[3px] border-solid border-midnightblue-100">
          <div className="relative">LOGIN</div>
        </div>
      </div>
      <div className="absolute top-[375px] left-[307px] w-[1306px] h-[563.56px] text-left">
        <div className="absolute top-[160px] left-[498.62px] w-[807.38px] h-[243px]">
          <div className="absolute top-[74px] left-[0.38px] tracking-[0.15em] leading-[35px] text-midnightblue-200 flex items-center w-[807px]">
            WE WOULD LOVE TO HEAR FROM YOU, LET’S WORK TOGETHER!
          </div>
          <i className="absolute top-[0px] left-[0px] text-[64px] tracking-[0.25em] leading-[54px]">
            TOOK INTEREST?
          </i>
          <div className="absolute top-[164px] left-[0.38px] rounded-[30px] bg-white shadow-[0px_4.800000190734863px_0px_#02266f] box-border w-[227.81px] flex flex-row items-center justify-center py-6 px-[30.000001907348633px] text-center text-13xl border-[3.6px] border-solid border-midnightblue-100">
            <div className="relative">CONTACT</div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[423.62px] h-[563.56px] flex items-center justify-center">
          <img
            className="w-full h-full object-contain absolute left-[1px] top-[6px] [transform:scale(1.023)]"
            alt=""
            src="/frame-82@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
