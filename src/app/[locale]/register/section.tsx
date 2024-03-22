import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Họ và tên phải có ít nhất 2 ký tự.",
  }),
  phone: z.string().min(10, {
    message: "Số điện thoại phải có ít nhất 10 số.",
  }),
  email: z.string().email({
    message: "Email không hợp lệ.",
  }),
  job: z.string(),
  message: z.string(),
});
function Section() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <section className="relative bg-no-repeat bg-cover bg-center text-[#fff] before:content-[''] before:absolute before:inset-0 before:z-[1] before:bg-gradient-to-br from-blue-700 via-[rgba(41,69,209,0.88)] to-transparent">
        <div className="absolute inset-0 bg-no-repeat bg-cover bg-center ">
          <img
            alt=""
            className="w-full h-full max-w-full block object-cover text-[#fff]"
            data-lazy-src="https://www.droppii.com/wp-content/uploads/2022/07/banner-scaled.jpg"
            data-lazy-type="image"
            height="1296px"
            src="https://www.droppii.com/wp-content/uploads/2022/07/banner-scaled.jpg"
            width="2560px"
          />
        </div>
        <div
          className="h-[720px] flex items-center max-h-[calc(100vh-60px)] min-h-[500px] xl:max-w-[1200px] lg:max-w-[1140px] md:max-w-[960px] 
          sm:max-w-[720px] max-w-[540px] w-[100%] px-[15px] mx-auto relative z-[1]"
        >
          <div className="max-w-[600px]">
            <h1 className="ht text-[40px] leading-[1.2] font-bold mb-[30px]">
              <span className="opacity-[1] transform translate-x-0 translate-y-0 scale-100 delay-0 block transition-all duration-1000 ease-in-out">
                Kinh doanh Online <br />
                dễ dàng hơn
              </span>
            </h1>
            <div
              className="delay-200 mb-[30px] transform translate-x-0 translate-y-0 scale-100 text-[32px] leading-[1.3] transition-all duration-1000 
              ease-in-out"
            >
              cùng mô hình{" "}
              <span className="text-[#FFA700] font-bold">
                <br />
                Dropshipping
              </span>
            </div>
            <ul className="mb-5 text-[17px] list-none">
              <li
                className="opacity-[1] transform translate-x-0 translate-y-0 scale-100 delay-200 transition-all duration-1000 ease-in-out relative 
                  pt-[3px] pb-[3px] pl-[30px] before:content-[''] before:w-[24px] before:h-[24px] before:bg-no-repeat before:bg-100% 
                  before:absolute before:top-[6px] before:left-0 before:bg-[url(https://www.droppii.com/wp-content/themes/droppii/assets/images/check-circle.svg)]"
              >
                Không lo nhập hàng
              </li>
              <li
                className="opacity-[1] transform translate-x-0 translate-y-0 scale-100 delay-200 transition-all duration-1000 ease-in-out relative 
                  pt-[3px] pb-[3px] pl-[30px] before:content-[''] before:w-[24px] before:h-[24px] before:bg-no-repeat before:bg-100% 
                  before:absolute before:top-[6px] before:left-0 before:bg-[url(https://www.droppii.com/wp-content/themes/droppii/assets/images/check-circle.svg)]"
              >
                Không lo tồn kho
              </li>
              <li
                className="opacity-[1] transform translate-x-0 translate-y-0 scale-100 delay-200 transition-all duration-1000 ease-in-out relative 
                  pt-[3px] pb-[3px] pl-[30px] before:content-[''] before:w-[24px] before:h-[24px] before:bg-no-repeat before:bg-100% 
                  before:absolute before:top-[6px] before:left-0 before:bg-[url(https://www.droppii.com/wp-content/themes/droppii/assets/images/check-circle.svg)]"
              >
                Không cần tự đóng gói hay giao hàng
              </li>
              <li
                className="opacity-[1] transform translate-x-0 translate-y-0 scale-100 delay-200 transition-all duration-1000 ease-in-out relative 
                  pt-[3px] pb-[3px] pl-[30px] before:content-[''] before:w-[24px] before:h-[24px] before:bg-no-repeat before:bg-100% 
                  before:absolute before:top-[6px] before:left-0 before:bg-[url(https://www.droppii.com/wp-content/themes/droppii/assets/images/check-circle.svg)]"
              >
                Không cần kinh nghiệm
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="relative overflow-hidden">
        <img
          alt=""
          className="top-[470px] w-full absolute left-0 "
          data-lazy-src="https://www.droppii.com/wp-content/themes/droppii/assets/images/bg-hgroup.svg"
          data-lazy-type="image"
          src="https://www.droppii.com/wp-content/themes/droppii/assets/images/bg-hgroup.svg"
        />
        <section className="py-[80px] relative bg-no-repeat bg-center bg-cover">
          <div className="xl:max-w-[1200px] lg:max-w-[1140px] relative z-[1] md:max-w-[960px] sm:max-w-[720px] max-w-[540px] w-full px-[15px] mx-auto">
            <div className="text-center mb-[50px]">
              <h2 className="text-[32px] leading-[1.3] font-bold mb-[30px]">
                <span className="opacity-[1] transform translate-x-0 scale-100 translate-y-0 delay-0 block transition-all duration-1000 ease-in-out">
                  Trở thành đối tác kinh doanh <br /> với{" "}
                  <span className="text-[#002BEB]"> Droppii </span>
                </span>
              </h2>
            </div>
            <div className="items-center flex flex-row-reverse xl:-mx-[30px] flex-wrap ">
              <div className="xl:px-[30px] lg:max-w-[58.33333%] lg:flex-[58.33333%] relative w-full">
                <div
                  className="opacity-[1] transform translate-x-0 scale-100 translate-y-0 delay-300 block transition-all duration-1000 ease-in-out relative
                  overflow-hidden bg-no-repeat bg-center bg-cover before:transition-all before:duration-300 before:ease-linear before:content-[''] before:pt-[100%]
                  before:block before:relative before:z-[2]"
                >
                  <img
                    alt=""
                    className="transition-all duration-300 ease-linear z-[1] object-cover w-full h-full absolute top-0 left-0 max-w-full rounded-3xl"
                    data-lazy-src="https://www.droppii.com/wp-content/uploads/2022/08/11-1024x1024.jpg"
                    data-lazy-type="image"
                    height="1024px"
                    src="https://www.droppii.com/wp-content/uploads/2022/08/11-1024x1024.jpg"
                    width="1024px"
                  />
                </div>
              </div>
              <div className="xl:px-[30px] md:flex-[41.66667%] md:max-w-[41.66667%] relative w-full">
                <div className="wpcf7" role="form">
                  <div
                    className="absolute overflow-hidden h-1 w-1 m-[-1px] p-0 border-0"
                    style={{
                      clip: "rect(1px, 1px, 1px, 1px)",
                      clipPath: "inset(50%)",
                    }}
                  >
                    <p aria-atomic="true" aria-live="polite" role="status" />{" "}
                    <ul />
                  </div>
                  <form
                    {...form}
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex-row-reverse"
                    data-status="init"
                    method="post"
                    noValidate
                  >
                    <p>
                      <label className="block mb-[20px]">
                        <span className="block font-semibold mb-[10px]">
                          Họ và tên
                          <span className="text-[#f00]">*</span>
                        </span>
                        <span className="relative" data-name="your-name">
                          <input
                            aria-invalid="false"
                            aria-required="true"
                            className="w-full font-light relative align-middle inline-block transition-all duration-200 ease-linear text-[16px] bg-[#fff]
                              rounded-[8px] border-[1px] border-solid border-[#002BEB] h-[50px] px-[15px] font-family"
                            defaultValue=""
                            name="name"
                            placeholder="Họ"
                            type="text"
                          />
                        </span>
                      </label>
                    </p>
                    <p>
                      <label className="block mb-[20px]">
                        <span className="block font-semibold mb-[10px]">
                          Số điện thoại
                          <span className="text-[#f00]">*</span>
                        </span>
                        <span className="relative" data-name="your-name">
                          <input
                            aria-invalid="false"
                            aria-required="true"
                            className="w-full font-light relative align-middle inline-block transition-all duration-200 ease-linear text-[16px] bg-[#fff]
                              rounded-[8px] border-[1px] border-solid border-[#002BEB] h-[50px] px-[15px] font-family"
                            defaultValue=""
                            name="phone"
                            placeholder="Số điện thoại của bạn"
                            type="text"
                          />
                        </span>
                      </label>
                    </p>
                    <p>
                      <label className="block mb-[20px]">
                        <span className="block font-semibold mb-[10px]">
                          Email
                          <span className="text-[#f00]">*</span>
                        </span>
                        <span className="relative" data-name="your-name">
                          <input
                            aria-invalid="false"
                            aria-required="true"
                            className="w-full font-light relative align-middle inline-block transition-all duration-200 ease-linear text-[16px] bg-[#fff]
                              rounded-[8px] border-[1px] border-solid border-[#002BEB] h-[50px] px-[15px] font-family"
                            defaultValue=""
                            name="email"
                            placeholder="Email của bạn"
                            type="text"
                          />
                        </span>
                      </label>
                    </p>
                    <p>
                      <label className="block mb-[20px]">
                        <span className="block font-semibold mb-[10px]">
                          Nghề nghiệp của bạn
                          <span className="text-[#f00]">*</span>
                        </span>
                        <span className="relative" data-name="job">
                          <select
                            aria-invalid="false"
                            aria-required="true"
                            className="w-full font-light relative align-middle inline-block transition-all duration-200 ease-linear text-[16px] bg-[#fff]
                              rounded-[8px] border-[1px] border-solid border-[#002BEB] h-[50px] px-[15px] font-family"
                            name="job"
                          >
                            <option value="">---</option>
                            <option value="Giáo viên/Giáo dục/Ngành đào tạo">
                              Giáo viên/Giáo dục/Ngành đào tạo
                            </option>
                            <option value="Bác Sĩ/Dược Sĩ/Y Tế">
                              Bác Sĩ/Dược Sĩ/Y Tế
                            </option>
                            <option value="Kinh doanh và buôn bán">
                              Kinh doanh và buôn bán
                            </option>
                            <option value="Nhân viên văn phòng">
                              Nhân viên văn phòng
                            </option>
                            <option value="Học sinh/Sinh Viên">
                              Học sinh/Sinh Viên
                            </option>
                            <option value="Nội trợ, Mẹ Bỉm">
                              Nội trợ, Mẹ Bỉm
                            </option>
                            <option value="Dịch vụ & Chăm sóc">
                              Dịch vụ & Chăm sóc
                            </option>
                            <option value="Công An">Công An</option>
                            <option value="Công nhân và xây dựng">
                              Công nhân và xây dựng
                            </option>
                            <option value="Nông dân">Nông dân</option>
                            <option value="Khác">Khác</option>
                          </select>
                        </span>{" "}
                      </label>
                    </p>
                    <p>
                      <label className="block mb-[20px]">
                        <span className="block font-semibold mb-[10px]">
                          Lời nhắn của bạn
                          <span className="text-[#f00]">*</span>
                        </span>{" "}
                        <span className="relative" data-name="your-message">
                          <textarea
                            aria-invalid="false"
                            aria-required="true"
                            className="w-full font-light relative align-middle inline-block transition-all duration-200 ease-linear text-[16px] bg-[#fff]
                              rounded-[8px] border-[1px] border-solid border-[#002BEB] px-[15px] font-family h-[100px]"
                            name="message"
                            placeholder="Khung giờ bạn muốn nhận cuộc gọi tư vấn"
                          />
                        </span>
                      </label>
                    </p>
                    <div className="relative text-center">
                      <input
                        style={{
                          boxShadow: "0px 4px 30px rgba(255, 127, 11, 0.2)",
                        }}
                        admicro-data-auto="1"
                        admicro-data-event="GET_VALUE"
                        admicro-data-order="true"
                        className="leading-normal min-w-[170px] justify-center relative align-middle text-center cursor-pointer transition-all duration-200 
                          ease-linear overflow-hidden inline-flex items-center mt-[2rem] text-[#111111] bg-[#FFA700] font-semibold text-[16px] rounded-[8px] border-[1px] 
                          border-solid border-[##002BEB] h-[50px] px-[20px] font-family hover:text-[#fff] hover:bg-[#0D2BB1] hover:border-[#0D2BB1] hover:bg-solid hover:shadow-none"
                        value="Gửi liên hệ"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 relative bg-no-repeat bg-center bg-cover">
          <div className="xl:max-w-[1200px] relative z-[1] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] max-w-[540px] w-full px-[15px] mx-auto ">
            <div className="flex flex-wrap -mx-[15px] ">
              <div className="md:basis-[50%] md:flex-shrink-0 md:flex-grow-0 relative w-full md:px-[15px] md:max-w-[50%] ">
                <div
                  style={{ boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)" }}
                  className="opacity-[1] translate-x-0 scale-100 translate-y-0 delay-300 transition-all duration-1000 ease-out relative overflow-hidden bg-no-repeat bg-center 
                    bg-cover before:transition-all before:duration-300 before:ease-out before:content-[''] before:pt-[100%] before:block before:relative before:z-[2]"
                >
                  <img
                    alt=""
                    className="transition-all duration-300 ease-out z-[1] object-cover w-full h-full absolute top-0 left-0 max-w-full"
                    height="1024px"
                    src="https://www.droppii.com/wp-content/uploads/2022/07/become-1024x1024.jpg"
                    width="1024px"
                  />
                </div>
              </div>
              <div className="md:basis-[50%] md:flex-shrink-0 md:flex-grow-0  md:max-w-[50%] relative w-full px-[15px]">
                <div>
                  <h2 className="text-[32px] leading-[1.3] font-bold mb-[30px]">
                    <span className="opacity-[1] translate-x-0 translate-y-0 scale-100 delay-0 block transition-all duration-1000 ease-out">
                      Khó khăn khi
                    </span>
                    <span className="opacity-[1] translate-x-0 translate-y-0 scale-100 delay-100 block transition-all duration-1000 ease-out text-[#002beb]">
                      tự kinh doanh online
                    </span>
                  </h2>
                  <ul className="mb-[20px] list-none  ">
                    <li
                      className="opacity-[1] translate-x-0 translate-y-0 scale-100 delay-200 block transition-all duration-1000 ease-out relative
                      py-[3px] pl-[30px] mb-[10px] pr-0 before:content-[''] before:w-[24px] before:h-[24px] before:top-[6px] before:left-0 before:bg-100%
                       before:absolute before:bg-[url(https://www.droppii.com/wp-content/themes/droppii/assets/images/check-circle.svg)]"
                    >
                      Thiếu kinh nghiệm, kiến thức kinh doanh
                    </li>
                    <li
                      className="opacity-[1] translate-x-0 translate-y-0 scale-100 delay-300 block transition-all duration-1000 ease-out relative
                      py-[3px] pl-[30px] pr-0 mb-[10px] before:content-[''] before:w-[24px] before:h-[24px] before:top-[6px] before:left-0 before:bg-100%
                       before:absolute before:bg-[url(https://www.droppii.com/wp-content/themes/droppii/assets/images/check-circle.svg)]"
                    >
                      Sợ rủi ro khi bỏ vốn nhập hàng
                    </li>
                    <li
                      className="opacity-[1] translate-x-0 translate-y-0 scale-100 delay-400 block transition-all duration-1000 ease-in-out relative
                      py-[3px] pl-[30px] pr-0 mb-[10px] before:content-[''] before:w-[24px] before:h-[24px] before:top-[6px] before:left-0 before:bg-100%
                       before:absolute before:bg-[url(https://www.droppii.com/wp-content/themes/droppii/assets/images/check-circle.svg)]"
                    >
                      Không có kinh nghiệm sử dụng các công cụ marketing
                    </li>
                    <li
                      className="opacity-[1] translate-x-0 translate-y-0 scale-100 delay-500 block transition-all duration-1000 ease-in-out relative
                      py-[3px] pl-[30px] pr-0 mb-[10px] before:content-[''] before:w-[24px] before:h-[24px] before:top-[6px] before:left-0 before:bg-100%
                       before:absolute before:bg-[url(https://www.droppii.com/wp-content/themes/droppii/assets/images/check-circle.svg)]"
                    >
                      Không có kinh nghiệm tìm nguồn hàng chất lượng, chiết khấu
                      tốt
                    </li>
                    <li
                      className="opacity-[1] translate-x-0 translate-y-0 scale-100 delay-600 block transition-all duration-1000 ease-in-out relative
                      py-[3px] pl-[30px] pr-0 mb-[10px] before:content-[''] before:w-[24px] before:h-[24px] before:top-[6px] before:left-0 before:bg-100%
                       before:absolute before:bg-[url(https://www.droppii.com/wp-content/themes/droppii/assets/images/check-circle.svg)]"
                    >
                      Không có nhiều thời gian để quản lí được toàn bộ công việc
                      vận hành như quản lý hàng hoá, vận chuyển, tư vấn, bán
                      hàng,..
                    </li>
                  </ul>
                  <div className="opacity-[1] translate-x-0 translate-y-0 scale-100 font-medium delay-200 block transition-all duration-1000 ease-out">
                    <b>
                      <span className="text-[#002BEB]"> Droppii </span> giúp bạn
                      bắt đầu công việc kinh doanh online dễ dàng hơn{" "}
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-10 px-20 ">
          <div className="relative z-[1] w-full px-[15px] mx-auto xl:max-w-[1200px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] max-w-[540px] ">
            <div className="text-center">
              <h2 className="text-[32px] leading-[1.3] font-bold mb-[30px] text-center">
                <span className="opacity-[1] translate-x-0 translate-y-0 scale-100 delay-0 block transition-all ease-out duration-1000">
                  Lợi thế khi trở thành <br /> đối tác kinh doanh <br /> của{" "}
                  <span className="text-[#002BEB] font-bold"> Droppii </span>
                </span>
              </h2>
            </div>
            <div className="relative">
              <div className="mb-[60px] relative z-[3] xl:-mx-[20px] flex flex-wrap ">
                <div className="xl:px-[20px] md:basis-[33.33333%] md:max-w-[33.33333%] md:flex-shrink-0 md:flex-grow-0 relative w-full">
                  <div className="text-center">
                    <div className="h-[140px] mb-5 opacity-[1] translate-x-0 translate-y-0 scale-100 delay-100 flex justify-center transition-all duration-1000 ease-out text-center">
                      <img
                        alt=""
                        className="max-h-full w-auto h-auto max-w-full text-center"
                        data-lazy-src="https://www.droppii.com/wp-content/uploads/2022/07/icon-partner-1.png"
                        data-lazy-type="image"
                        height="140"
                        src="https://www.droppii.com/wp-content/uploads/2022/07/icon-partner-1.png"
                        width="140"
                      />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-5 opacity-[1] text-center translate-x-0 translate-y-0 scale-100 delay-200 transition-all duration-1000 ease-out text-[17px]">
                        Giải pháp kinh doanh đơn giản cho mọi người
                      </h5>
                      <div className="opacity-[1] translate-x-0 translate-y-0 scale-100 delay-300 flex justify-center transition-all duration-1000 ease-out text-center">
                        Dropshipping là mô hình kinh doanh giảm thiểu nhiều rủi
                        ro cho cá nhân kinh doanh. Khi có khách hàng đặt sản
                        phẩm, người bán chỉ cần lên đơn ngay trên ứng dụng và
                        Droppii sẽ giao thẳng đến tay người mua.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:px-5 md:flex-shrink-0 md:flex-grow-0 md:basis-[33.33333%] md:max-w-[33.33333%] relative w-full">
                  <div className="text-center">
                    <div className="h-[140px] mb-5 opacity-[1] translate-x-0 translate-y-0 scale-100 delay-100 flex justify-center transition-all duration-1000 ease-out text-center">
                      <img
                        alt=""
                        className="max-h-full w-auto h-auto max-w-full text-center"
                        data-lazy-src="https://www.droppii.com/wp-content/uploads/2022/07/icon-partner-2.png"
                        data-lazy-type="image"
                        height="140px"
                        src="https://www.droppii.com/wp-content/uploads/2022/07/icon-partner-2.png"
                        width="140px"
                      />
                    </div>
                    <div className="text-center">
                      <h5 className="font-semibold mb-5 opacity-[1] translate-x-0 translate-y-0 scale-100 delay-200 transition-all duration-1000 ease-out text-[17px] text-center">
                        Giảm thiểu gánh nặng chi phí
                      </h5>
                      <div className="opacity-[1] translate-x-0 translate-y-0 scale-100 delay-300 flex justify-center transition-all duration-1000 ease-out text-center">
                        Đối tác kinh doanh của Droppii không lo cần phải lo nhập
                        hàng, lưu trữ sản phẩm, đóng gói, do đó bạn sẽ giảm được
                        nhiều chi phí như vốn nhập hàng, chi phí bao bì, kho
                        bãi.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:px-5 md:flex-shrink-0 md:flex-grow-0 md:basis-[33.33333%] md:max-w-[33.33333%] relative w-full">
                  <div className="text-center">
                    <div className="h-[140px] mb-5 opacity-[1] translate-x-0 translate-y-0 scale-100 delay-100 flex justify-center transition-all duration-1000 ease-out">
                      <img
                        alt=""
                        className="max-h-full w-auto h-auto max-w-full text-center"
                        data-lazy-src="https://www.droppii.com/wp-content/uploads/2022/07/icon-partner-3.png"
                        data-lazy-type="image"
                        height="140px"
                        src="https://www.droppii.com/wp-content/uploads/2022/07/icon-partner-3.png"
                        width="140px"
                      />
                    </div>
                    <div className="text-center">
                      <h5 className="font-semibold opacity-[1] transform translate-x-0 translate-y-0 scale-100 delay-200 block transition-all duration-1000 ease-out text-[17px]">
                        Kinh doanh mọi lúc, mọi nơi
                      </h5>
                      <div className="opacity-[1] transform translate-x-0 translate-y-0 scale-100 delay-300 block transition-all duration-1000 ease-out text-center">
                        Nhờ sự hỗ trợ của ứng dụng Droppii for Business, bạn có
                        thể tư vấn, lên đơn và chăm sóc cho khách hàng ở bất kỳ
                        lúc nào và bất cứ ở đâu trên chính chiếc điện thoại của
                        mình.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-[3] xl:-mx-[20px] flex flex-wrap">
                <div className="xl:px-5 md:flex-shrink-0 md:flex-grow-0 md:flex-[33.33333%] md:max-w-[33.33333%] relative w-full">
                  <div className="text-center">
                    <div className="h-[140px] mb-5 opacity-[1] translate-x-0 translate-y-0 scale-100 delay-100 flex justify-center duration-1000 transition-all ease-out">
                      <img
                        alt=""
                        className="max-h-full w-auto h-auto max-w-full text-center"
                        data-lazy-src="https://www.droppii.com/wp-content/uploads/2022/07/icon-partner-4.png"
                        data-lazy-type="image"
                        height="140"
                        src="https://www.droppii.com/wp-content/uploads/2022/07/icon-partner-4.png"
                        width="140"
                      />
                    </div>
                    <div className="text-center">
                      <h5 className="font-semibold mb-5 opacity-[1] translate-x-0 translate-y-0 scale-100 delay-200 transition-all ease-out text-[17px]">
                        Công nghệ tiên tiến
                      </h5>
                      <div className="opacity-[1] translate-x-0 translate-y-0 scale-100 delay-300 block transition-all duration-1000 ease-out">
                        Droppii phát triển ứng dụng Droppii for Business hỗ trợ
                        đối tác kinh doanh trong quản lý công việc kinh doanh
                        như lựa chọn sản phẩm, cập nhật khuyến mãi, lên đơn và
                        quản lý doanh thu,...
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:px-5 md:flex-shrink-0 md:flex-grow-0 md:flex-[33.33333%] md:max-w-[33.33333%] relative w-full">
                  <div className="text-center">
                    <div className="h-[140px] mb-5 opacity-[1] translate-x-0 translate-y-0 scale-100 delay-100 flex justify-center duration-1000 transition-all ease-out">
                      <img
                        alt=""
                        className="max-h-full w-auto h-auto max-w-full text-center"
                        height="140"
                        src="https://www.droppii.com/wp-content/uploads/2022/07/icon-partner-5.png"
                        width="140"
                      />
                    </div>
                    <div className="text-center">
                      <h5 className="font-semibold mb-5 opacity-[1] translate-x-0 translate-y-0 scale-100 delay-200 transition-all ease-out text-[17px]">
                        Đa dạng sản phẩm chất lượng
                      </h5>
                      <div className="opacity-[1] translate-x-0 translate-y-0 scale-100 delay-300 block transition-all duration-1000 ease-out">
                        Droppii có hơn 2000 sản phẩm bao gồm nhiều ngành hàng
                        như Làm đẹp, Sức khỏe, Gia dụng, Thời Trang,... là những
                        sản phẩm uy tín và chất lượng cao qua nhiều năm xây dựng
                        nhằm mang những sản phẩm tốt nhất đến tay người tiêu
                        dùng.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:px-5 md:flex-shrink-0 md:flex-grow-0 md:flex-[33.33333%] md:max-w-[33.33333%] relative w-full">
                  <div className="text-center">
                    <div className="h-[140px] mb-5 opacity-[1] translate-x-0 translate-y-0 scale-100 delay-100 flex justify-center duration-1000 transition-all ease-out">
                      <img
                        alt=""
                        className="max-h-full w-auto h-auto max-w-full text-center"
                        height="140"
                        src="https://www.droppii.com/wp-content/uploads/2022/07/icon-partner-6.png"
                        width="140"
                      />
                    </div>
                    <div className="text-center">
                      <h5 className="font-semibold mb-5 opacity-[1] translate-x-0 translate-y-0 scale-100 delay-200 transition-all ease-out text-[17px]">
                        Được đào tạo các kỹ năng bán hàng
                      </h5>
                      <div className="opacity-[1] translate-x-0 translate-y-0 scale-100 delay-300 block transition-all duration-1000 ease-out">
                        Khi trở thành đối tác kinh doanh của Droppii, bạn sẽ
                        được đào tạo các kỹ năng bán hàng, kiến thức về sản phẩm
                        từ các đối tác kinh doanh dày dặn kinh nghiệm và các nhà
                        phát triển sản phẩm (nhà cung cấp).
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="relative overflow-hidden">
        <img
          alt=""
          className="top-[470px] w-full absolute left-0 "
          data-lazy-src="https://www.droppii.com/wp-content/themes/droppii/assets/images/bg-hgroup.svg"
          data-lazy-type="image"
          src="https://www.droppii.com/wp-content/themes/droppii/assets/images/bg-hgroup.svg"
        />
      </div>
    </>
  );
}

export default Section;
