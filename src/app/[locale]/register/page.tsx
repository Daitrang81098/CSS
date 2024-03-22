"use client";
import React, { useState } from "react";
import { Box } from "@radix-ui/themes";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Footer from "@/components/custom/Footer";
import Section from "./section";
import SuccessStoriesSection from "./SuccessStories";

function Register() {
  const handleRegister = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [play, setPlay] = useState(false);
  const handlePlay = () => {
    setPlay(true);
  };
  return (
    <>
      <div className="min-w-full">
        <Section />
        <div className="relative overflow-hidden">
          <img
            alt=""
            className="top-[50px] h-auto w-full absolute left-0 max-w-full"
            src="https://www.droppii.com/wp-content/themes/droppii/assets/images/bg-hgroup-2.svg"
          />
          <section className="py-20 relative bg-no-repeat bg-center bg-cover bg-[#0D2BB1] text-[#fff]">
            <img
              alt=""
              className="right-0 bottom-0 absolute max-w-full"
              src="https://www.droppii.com/wp-content/themes/droppii/assets/images/bg-h6.svg"
            />
            <div className="xl:max-w-[1200px] relative z-[1] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] max-w-[540px] w-full px-[15px] mx-auto">
              <h2 className="text-center mb-[50px] text-[32px] leading-[1.3] font-bold">
                <span className="opacity-[1] translate-x-0 translate-y-0 scale-100 delay-0 transition-all duration-1000">
                  Lí do lựa chọn kinh doanh cùng Droppii
                </span>
              </h2>
              <div className="opacity-[1] translate-x-0 translate-y-0 scale-100 delay-100 max-w-[740px] mx-auto mb-[40px] text-center block transition-all duration-1000">
                Droppii tự hào đã hỗ trợ người dùng tối ưu hóa việc kinh doanh
                của mình thông qua mô hình kinh doanh Dropshipping đột phá
              </div>
              <div className="xl:-mx-[30px] flex flex-wrap">
                <div className="xl:px-[30px] md:flex md:flex-shrink-0 md:flex-grow-0 md:basis-[25%] md:max-w-[25%] relative w-full">
                  <div className="relative text-center">
                    <div className="justify-center flex translate-x-0 translate-y-0 scale-100 delay-100 h-[50px] mb-[20px] transition-all duration-1000">
                      <img
                        alt=""
                        className="max-h-full w-auto h-auto max-w-full"
                        height="112"
                        src="https://www.droppii.com/wp-content/uploads/2022/07/user-1.png"
                        width="112"
                      />
                    </div>
                    <div className="translate-x-0 translate-y-0 scale-100 delay-200 font-bold block mb-5 transition-all duration-1000 text-[32px] leading-[1.3]">
                      <span
                        className="timer active"
                        data-form="0"
                        data-speed="4000"
                        data-to="109000"
                      >
                        109,000
                      </span>
                      <span className="unit"> +</span>
                    </div>
                    <div className="translate-x-0 translate-y-0 scale-100 delay-300 transition-all duration-1000 text-[17px]">
                      Người dùng
                    </div>
                  </div>
                </div>
                <div className="xl:px-[30px] md:flex md:flex-shrink-0 md:flex-grow-0 md:basis-[25%] md:max-w-[25%] relative w-full">
                  <div className="relative text-center">
                    <div className="justify-center flex translate-x-0 translate-y-0 scale-100 delay-100 h-[50px] mb-[20px] transition-all duration-1000">
                      <img
                        alt=""
                        className="max-h-full w-auto h-auto max-w-full"
                        height="112"
                        src="https://www.droppii.com/wp-content/uploads/2022/07/suppliers-1.png"
                        width="112"
                      />
                    </div>
                    <div className="translate-x-0 translate-y-0 scale-100 delay-200 font-bold block mb-5 transition-all duration-1000 text-[32px] leading-[1.3]">
                      <span
                        className="timer active"
                        data-form="0"
                        data-speed="4000"
                        data-to="109000"
                      >
                        400
                      </span>
                      <span className="unit"> +</span>
                    </div>
                    <div className="translate-x-0 translate-y-0 scale-100 delay-300 transition-all duration-1000 text-[17px]">
                      Nhà cung cấp sản phẩm
                    </div>
                  </div>
                </div>{" "}
                <div className="xl:px-[30px] md:flex md:flex-shrink-0 md:flex-grow-0 md:basis-[25%] md:max-w-[25%] relative w-full">
                  <div className="relative text-center">
                    <div className="justify-center flex translate-x-0 translate-y-0 scale-100 delay-100 h-[50px] mb-[20px] transition-all duration-1000">
                      <img
                        alt=""
                        className="max-h-full w-auto h-auto max-w-full"
                        height="112"
                        src="	https://www.droppii.com/wp-content/uploads/2022/07/star-1.png"
                        width="112"
                      />
                    </div>
                    <div className="translate-x-0 translate-y-0 scale-100 delay-200 font-bold block mb-5 transition-all duration-1000 text-[32px] leading-[1.3]">
                      <span
                        className="timer active"
                        data-form="0"
                        data-speed="4000"
                        data-to="109000"
                      >
                        2,800
                      </span>
                      <span className="unit">+</span>
                    </div>
                    <div className="translate-x-0 translate-y-0 scale-100 delay-300 transition-all duration-1000 text-[17px]">
                      Sản phẩm chất lượng, chính hãng
                    </div>
                  </div>
                </div>{" "}
                <div className="xl:px-[30px] md:flex md:flex-shrink-0 md:flex-grow-0 md:basis-[25%] md:max-w-[25%] relative w-full">
                  <div className="relative text-center">
                    <div className="justify-center flex translate-x-0 translate-y-0 scale-100 delay-100 h-[50px] mb-[20px] transition-all duration-1000">
                      <img
                        alt=""
                        className="max-h-full w-auto h-auto max-w-full"
                        height="112"
                        src="	https://www.droppii.com/wp-content/uploads/2022/07/busines-1.png"
                        width="112"
                      />
                    </div>
                    <div className="translate-x-0 translate-y-0 scale-100 delay-200 font-bold block mb-5 transition-all duration-1000 text-[32px] leading-[1.3]">
                      <span
                        className="timer active"
                        data-form="0"
                        data-speed="4000"
                        data-to="109000"
                      >
                        5,000
                      </span>
                      <span className="unit">m2</span>
                    </div>
                    <div className="translate-x-0 translate-y-0 scale-100 delay-300 transition-all duration-1000 text-[17px]">
                      Hai trung tâm xử lý đơn hàng HCM & HN
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-20 relative bg-no-repeat bg-cover bg-center">
            <div className="xl:max-w-[1200px] relative z-[1] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] max-w-[540px] w-full px-[15px] mx-auto">
              <div className="text-center">
                <h2 className="text-[32px] leading-[1.3] font-bold mb-[30px]">
                  <span className="opacity-[1] translate-x-0 translate-y-0 scale-100 delay-0 transition-all duration-1000">
                    Mô hình kinh doanh{" "}
                    <span className="text-[#002BEB]"> Dropshipping </span>{" "}
                    <br /> của Droppii
                  </span>
                </h2>
                <div className="opacity-[1] translate-x-0 translate-y-0 scale-100 delay-200 transition-all duration-1000">
                  <img
                    alt=""
                    className="w-auto h-auto max-w-full"
                    height="521"
                    src="https://www.droppii.com/wp-content/uploads/2022/08/sodo-1024x521.png"
                    width="1024"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="relative overflow-hidden">
          <img
            alt=""
            className="top-80 w-full absolute left-0 max-w-full"
            src="https://www.droppii.com/wp-content/themes/droppii/assets/images/bg-hgroup-3.svg"
          />
          <section className="pb-20 relative bg-no-repeat bg-center bg-cover">
            <div className="xl:max-w-[1200px] relative z-[1] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] max-w-[540px] w-full px-[15px] mx-auto">
              <h2 className="mb-10 text-center text-[32px] leading-[1.3] font-bold">
                <span className="opacity-[1] translate-x-0 translate-y-0 scale-100 delay-0 transition-all duration-1000">
                  Làm cách nào để kinh doanh cùng{" "}
                  <span className="text-[#002BEB]"> Droppii? </span>
                </span>
              </h2>

              <div
                className="relative min-h-[200px] overflow-hidden block bg-no-repeat bg-center bg-cover before:transition-all before:duration-300 before:content-[''] 
                  before:relative before:block before:pt-[56.25%] before:z-[2]"
                data-id="EKfA5E7KUmQ"
                data-img="https://www.droppii.com/wp-content/uploads/2022/07/img-video-1024x478.jpeg"
                data-video="autoplay=1&controls=0&mute=0"
                onClick={handlePlay}
              >
                {!play && (
                  <div className="z-[2] cursor-pointer absolute top-0 left-0 bottom-0 right-0 text-[#fff] before:bg-[rgba(0,0,0,0.2)] before:content-[''] before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0">
                    <img
                      alt="xxx"
                      className="object-cover w-full h-full top-0 left-0 absolute max-w-full transition-all duration-300"
                      data-lazy-src="https://www.droppii.com/wp-content/uploads/2022/07/img-video-1024x478.jpeg"
                      data-lazy-type="image"
                      src="https://www.droppii.com/wp-content/uploads/2022/07/img-video-1024x478.jpeg"
                    />
                    <span
                      className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] transition-all duration-200 z-[10] block 
                      rounded-[100%] h-[74x] w-[74px] bg-[rgba(255,167,0,0.3)] text-[#fff] before:inset-[8px] before:opacity-[0.4]
                      before:content-[''] before:absolute before:rounded-[100%] before:bg-[#FFA700] before:transition-all before:duration-300
                      after:absolute after:inset-4 after:content-[''] after:rounded-[100%] after:bg-[#FFA700] after:transition-all after:duration-300"
                    >
                      <i className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[2] transition-all duration-200 font-normal not-italic normal-case normal-nums antialiased before:content-[\e959] before:inline-block" />
                    </span>
                  </div>
                )}
                {play && (
                  <div className="z-[2] cursor-pointer absolute top-0 left-0 bottom-0 right-0 text-[#fff] before:bg-[rgba(0,0,0,0.2)] before:content-[''] before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0">
                    <iframe
                      className="active:z-[4] block border-none absolute h-full w-full"
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/EKfA5E7KUmQ?rel=0&amp;autoplay=1&amp;controls=0&amp;mute=0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture "
                      allowFullScreen
                    ></iframe>
                    <span
                      className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] transition-all duration-200 z-[10] block 
                      rounded-[100%] h-[74x] w-[74px] bg-[rgba(255,167,0,0.3)] text-[#fff] before:inset-[8px] before:opacity-[0.4]
                      before:content-[''] before:absolute before:rounded-[100%] before:bg-[#FFA700] before:transition-all before:duration-300
                      after:absolute after:inset-4 after:content-[''] after:rounded-[100%] after:bg-[#FFA700] after:transition-all after:duration-300"
                    >
                      <i className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[2] transition-all duration-200 font-normal not-italic normal-case normal-nums antialiased before:content-[\e959] before:inline-block" />
                    </span>
                  </div>
                )}
              </div>
            </div>
          </section>
          <section className="relative bg-no-repeat bg-cover bg-center">
            <div className="xl:max-w-[1200px] relative z-[1] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] max-w-[540px] w-full px-[15px] mx-auto">
              <div className="md:p-[70px] bg-[#0D2BB1] text-[#fff] rounded-[16px] relative overflow-hidden">
                <img
                  alt=""
                  className="max-w-[50%] max-h-[60%] absolute top-0 left-0"
                  src="https://www.droppii.com/wp-content/themes/droppii/assets/images/bg-p9.png"
                />
                <div className="text-center flex items-center flex-wrap -mx-[15px]">
                  <div className="md:flex-shrink-0 md:flex-grow-0 md:basis-[58.33333%] md:max-w-[58.33333%] relative w-full px-[15px]">
                    <h2 className="md:m-0 text-[32px] leading-[1.3] font-bold">
                      <span className="opacity-[1] translate-x-0 translate-y-0 scale-100 delay-0 block transition-all duration-1000">
                        Trở thành đối tác <br />
                        với chúng tôi ngay hôm nay
                      </span>
                    </h2>
                  </div>
                  <div className="md:flex-shrink-0 md:flex-grow-0 md:basis-[41.66667%] md:max-w-[41.66667%] relative w-full px-[15px]">
                    <div className="md:text-right">
                      <a
                        style={{
                          boxShadow: "0px 4px 30px rgba(255, 127, 11, 0.2)",
                        }}
                        className="bg-[#FFA700] border-[#FFA700] text-[#111111] min-w-[170px] justify-center relative align-middle text-center cursor-pointer overflow-hidden inline-flex items-center font-semibold text-[16px] rounded-[8px] border-[1px] border-solid h-[50px] 
                        py-0 px-5 no-underline mb-5 hover:bg-[#002BEB] hover:border-[#002BEB] hover:text-[#fff] hover:border-[1px] hover:border-solid"
                        href="#form-partner"
                        onClick={handleRegister}
                      >
                        Đăng ký ngay
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <SuccessStoriesSection />
          <section className="pb-20 pt-20 relative bg-no-repeat bg-center bg-cover">
            <div className="xl:max-w-[1200px] relative z-[1] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] max-w-[540px] w-full px-[15px] mx-auto">
              <Box className="mb-10 text-center text-[32px] leading-[1.3]">
                <div className="opacity-[1] translate-x-0 translate-y-0 delay-0 blcok transition-all duration-1000">
                  Social Media
                </div>
              </Box>
              <Carousel
                opts={{
                  align: "center",
                }}
                className="w-full max-w-full "
              >
                <CarouselContent className="text-center ">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className=" md:max-w-[33%] max-w-[48%]"
                    >
                      <div className="mx-[1px]">
                        <div className="pl-5 rounded-xl">
                          <img
                            className="rounded-2xl pr-1 object-cover"
                            src="https://www.droppii.com/wp-content/uploads/2022/07/TQKmLaLkhMQ-HD-500x281.jpg"
                          ></img>
                          <div className="md:hover:shadow-md rounded-xl transition-all mb-3 p-5 text-start font-medium font-sans text-[17px] ">
                            Những khoảnh khắc đáng nhớ tại sự kiện kết nối
                            Droppii: Giải pháp tăng trưởng cho sản phẩm tư vấn
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Register;
