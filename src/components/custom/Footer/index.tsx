import { Box, Container, Flex, Grid } from "@radix-ui/themes";
import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-[#F5F5F5] lg:py-20 relative md:py-[30px] py-[40px]">
        <div className="relative z-[1] xl:max-w-[1200px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] max-w-[540px] w-full px-[15px] mx-auto">
          <div className="flex flex-wrap -mx-[15px] md:-mx-[5px]">
            <div className="md:basis-[41.66667%] md:flex-shrink-0 md:flex-grow-0 relative w-full px-[15px]">
              <div className="max-w-[350px] ">
                <p className="mx-0 mb-[20px] mt-0">
                  <img
                    alt=""
                    className="w-auto h-auto max-w-full"
                    height="61"
                    src="https://www.droppii.com/wp-content/uploads/2022/07/logo.png"
                    width="159"
                  />
                </p>
                <p className="mx-0 mb-[20px] mt-0">
                  Bắt đầu kinh doanh online ngay hôm nay cùng Droppii!
                </p>
                <p className="mx-0 mb-[20px] mt-0">
                  <a href="#">
                    <img
                      alt=""
                      className="mr-5 inline-block"
                      data-lazy-src="https://www.droppii.com/wp-content/uploads/2022/08/Google-Play.png"
                      data-lazy-type="image"
                      height="47"
                      src="https://www.droppii.com/wp-content/uploads/2022/08/Google-Play.png"
                      width="162"
                    />
                  </a>
                  <a href="#">
                    <img
                      alt=""
                      className="inline-block"
                      data-lazy-src="https://www.droppii.com/wp-content/uploads/2022/08/App-Store.png"
                      data-lazy-type="image"
                      height="47"
                      src="https://www.droppii.com/wp-content/uploads/2022/08/App-Store.png"
                      width="162"
                    />
                  </a>
                </p>
                <ul className="list-none">
                  <li>
                    <span className="font-medium">Mã số thuế: </span>
                    <span className="font-light">0317251228</span>
                  </li>
                  <li>
                    <span className="font-medium">Hotline: </span>
                    <span className="font-light">1900 3126</span>
                  </li>
                  <li>
                    <span className="font-medium">Email: </span>
                    <span className="font-light">support@droppii.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:flex-shrink-0 md:flex-grow-0 md:basis-[58.33333%] md:max-w-[58.33333%] relative w-full px-[15px]">
              <div className="widget">
                <div className="widget widget-info-2">
                  <h5 className="m-0 font-bold text-[17px]">Địa chỉ</h5>
                  <p className="font-light text-[#555555] mx-0 mb-[20px] mt-0" />
                  <p className="mx-0 mb-[20px] mt-0" />
                  <div className="item">
                    <div className="text">
                      <i className="font-icon font-normal not-italic normal-nums normal-case antialiased before:content-[\e909] before:inline-block " />
                      <b>DROPPII VIỆT NAM:</b> Tầng 3, Tòa nhà Paxsky, 26 Ung
                      Văn Khiêm, Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí
                      Minh, Việt Nam
                    </div>
                  </div>{" "}
                  <p className="mx-0 mb-[20px] mt-0" />
                  <p className="mx-0 mb-[20px] mt-0" />
                  <div className="item">
                    <div className="text">
                      <i className="font-icon font-normal not-italic normal-nums normal-case antialiased before:content-[\e909] before:inline-block " />
                      <b>DROPPII USA INC:</b>
                      400 South 4th Street, Suite 500, Las Vegas, Nevada, United
                      States 89101{" "}
                    </div>{" "}
                  </div>{" "}
                  <p className="mx-0 mb-[20px] mt-0" />
                  <p className="mx-0 mb-[20px] mt-0" />
                  <div className="item">
                    <div className="text">
                      <i className="font-icon font-normal not-italic normal-nums normal-case antialiased before:content-[\e909] before:inline-block " />
                      <b>DROPPII UK LTD:</b>
                      160 City Road, London, United Kingdom
                    </div>{" "}
                  </div>{" "}
                  <p className="mx-0 mb-[20px] mt-0" />
                  <p className="mx-0 mb-[20px] mt-0" />
                  <p className="mx-0 mb-[20px] mt-0" />
                  <div className="item">
                    <div className="text">
                      <i className="font-icon font-normal not-italic normal-nums normal-case antialiased before:content-[\e909] before:inline-block " />
                      <b>DROPPII SINGAPORE:</b>
                      Bo Cong Anh Pte. Ltd.9 Raffles Place, #26-01, Republic
                      Plaza, Singapore (048619)
                    </div>
                  </div>
                  <p className="mx-0 mb-[20px] mt-0" />
                  <div className="item">
                    <div className="text">
                      <i className="font-icon font-normal not-italic normal-nums normal-case antialiased before:content-[\e909] before:inline-block " />
                      <b>DROPPII THAILAND:</b>
                      333/196, Soi Sannibat Tesaban Chankasem, Bangkok, Thailand
                    </div>
                  </div>
                  <p className="mx-0 mb-[20px] mt-0" />
                  <p className="mx-0 mb-[20px] mt-0" />
                  <div className="item">
                    <div className="text">
                      <i className="font-icon font-normal not-italic normal-nums normal-case antialiased before:content-[\e909] before:inline-block " />
                      <b>DROPPII CAMBODIA:</b>
                      Street 368,Sangkat Boeung Keng Kang 3, Phnom Penh,
                      Cambodia.
                    </div>
                  </div>
                  <p className="mx-0 mb-[20px] mt-0" />
                  <p className="mx-0 mb-[20px] mt-0" />
                </div>
                <div className="widget widget-info-2">
                  <p className="m-0 font-semibold">Thông tin tài khoản:</p>
                  <p className="mx-0 mb-[20px] mt-0 font-light text-[#555555] ">
                    Tên công ty: CÔNG TY TNHH DANDELION VIỆT NAM <br />
                    STK: 0100100060123006 <br />
                    Ngân hàng TMCP Phương Đông (OCB) - chi nhánh Tp. Hồ Chí Minh
                  </p>
                </div>
                <div className="widget widget-social">
                  <p className="m-0 font-semibold" />
                  <div className="list-none flex flex-wrap text-center ">
                    <a
                      className="block mr-5 transition-all duration-300"
                      href="https://www.facebook.com"
                      target="_blank"
                      title=""
                    >
                      <img
                        alt=""
                        className="w-auto h-auto max-w-full"
                        height="25"
                        src="https://www.droppii.com/wp-content/uploads/2022/07/Facebook-Original.png"
                        width="25"
                      />
                    </a>
                    <a
                      className="block mr-5 transition-all duration-300"
                      href="https://www.youtube.com/"
                      target="_blank"
                      title=""
                    >
                      <img
                        alt=""
                        className="w-auto h-auto max-w-full"
                        data-lazy-src="https://www.droppii.com/wp-content/uploads/2023/01/youtube_small-1.jpg"
                        data-lazy-type="image"
                        height="25"
                        src="https://www.droppii.com/wp-content/uploads/2023/01/youtube_small-1.jpg"
                        width="25"
                      />
                    </a>
                    <a
                      className="block mr-5 transition-all duration-300"
                      href="https://www.linkedin.com/"
                      target="_blank"
                      title=""
                    >
                      <img
                        alt=""
                        className="w-auto h-auto max-w-full"
                        data-lazy-src="https://www.droppii.com/wp-content/uploads/2022/12/linkedin_logo_25x25.png"
                        data-lazy-type="image"
                        height="25"
                        src="https://www.droppii.com/wp-content/uploads/2022/12/linkedin_logo_25x25.png"
                        width="25"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-[#141212] text-center text-[12px] h-10 text-[#fff] flex items-center justify-center">
        Copyright @ 2023 All Rights Reserved
      </div>
    </>
  );
}

export default Footer;
