import React, { useEffect, useState } from "react";
import "./SuccessStories.css";
const SuccessStoriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const swap = () => {
      const owl = document.querySelector(
        ".sec-h7 .owl-carousel"
      ) as HTMLElement;
      const wrap = document.querySelector(".sec-h7 .wrap-syn-2") as HTMLElement;
      const w = wrap.offsetWidth;
      const thumb = wrap.querySelectorAll(".img") as NodeListOf<HTMLElement>;

      thumb.forEach((element, index) => {
        const pos = Number(element.dataset.pos || "10");
        if (index < 5) {
          element.style.transform = `rotateZ(${pos}deg) translateX(${w / 2}px)`;
        } else {
          element.style.transform = `rotateZ(${pos}deg) translateX(${
            w / 2 - 50
          }px)`;
        }
        if (element.children[0] instanceof HTMLElement) {
          (
            element.children[0] as HTMLElement
          ).style.transform = `rotateZ(-${pos}deg)`;
        }
      });

      if (owl) {
        owl.addEventListener("translated.owl.carousel", (e) => {
          const current = owl.querySelector(".owl-item.active .item");
          if (!current) return;
          const index = current.getAttribute("data-index");
          const targetElement = document.querySelector(
            `.sec-h7 .wrap-syn-2 [data-index="${index}"]`
          );
          if (!targetElement) return;
          targetElement.classList.add("active");
          document
            .querySelectorAll(
              `.sec-h7 .wrap-syn-2 [data-index]:not([data-index="${index}"])`
            )
            .forEach((el) => {
              el.classList.remove("active");
            });
        });
      }

      thumb.forEach((element) => {
        element.addEventListener("click", (e: MouseEvent) => {
          e.preventDefault();
          const currentTarget = e.currentTarget as HTMLElement;
          if (!currentTarget.parentElement) return;
          const number = Array.from(
            currentTarget.parentElement.children
          ).indexOf(currentTarget);
          const owlElement = document.querySelector(
            ".sec-h7 .syn-slider-1.owl-carousel"
          );
          if (!owlElement) return;

          const event = new CustomEvent("to.owl.carousel", { detail: number });

          owlElement.dispatchEvent(event);

          setActiveIndex(number);
          currentTarget.classList.add("active");
          Array.from(currentTarget.parentElement.children).forEach((el) => {
            if (el !== currentTarget) {
              el.classList.remove("active");
            }
          });
        });
      });
    };

    swap();
    window.addEventListener("resize", swap);

    return () => {
      window.removeEventListener("resize", swap);
    };
  }, [activeIndex]);
  return (
    <section className="group-ef loaded sec-h7 sec-tb">
      <div className="container">
        <h2 className="ht">
          <span className="text-1 efch-1 ef-tx-t">
            Câu chuyện thành công của <br />
            các đối tác kinh doanh <span className="color-blue">Droppii</span>
          </span>
        </h2>
        <div className="center row wrap-syn-owl-thumb">
          <div className="col-md-5 col-lg-4">
            <div className="wrap-syn-2">
              <img
                className="bgimg loaded"
                data-lazy-type="image"
                data-lazy-src="https://www.droppii.com/wp-content/themes/droppii/assets/images/icon-h7.svg"
                alt=""
                src="https://www.droppii.com/wp-content/themes/droppii/assets/images/icon-h7.svg"
              />
              <div className="syn-thumb">
                <div
                  data-index="0"
                  data-pos="30"
                  className="img tRes img-1 active"
                  style={{ transform: "rotateZ(30deg) translateX(184.992px)" }}
                >
                  <img
                    className="img-auto loaded"
                    width="306"
                    height="306"
                    data-lazy-type="image"
                    data-lazy-src="https://www.droppii.com/wp-content/uploads/2022/07/Truong-Thi-My-Diem.jpg"
                    alt=""
                    style={{ transform: "rotateZ(-30deg)" }}
                    src="https://www.droppii.com/wp-content/uploads/2022/07/Truong-Thi-My-Diem.jpg"
                  />
                </div>
                <div
                  data-index="1"
                  data-pos="90"
                  className="img tRes img-2"
                  style={{ transform: "rotateZ(90deg) translateX(184.992px)" }}
                >
                  <img
                    className="img-auto loaded"
                    width="306"
                    height="306"
                    data-lazy-type="image"
                    data-lazy-src="https://www.droppii.com/wp-content/uploads/2022/08/Nguyen-Van-Ke-.jpg"
                    alt=""
                    style={{ transform: "rotateZ(-90deg)" }}
                    src="https://www.droppii.com/wp-content/uploads/2022/08/Nguyen-Van-Ke-.jpg"
                  />
                </div>
                <div
                  data-index="2"
                  data-pos="150"
                  className="img tRes img-3"
                  style={{ transform: "rotateZ(150deg) translateX(184.992px)" }}
                >
                  <img
                    className="img-auto loaded"
                    width="306"
                    height="306"
                    data-lazy-type="image"
                    data-lazy-src="https://www.droppii.com/wp-content/uploads/2022/08/Van-Tong-.jpg"
                    alt=""
                    style={{ transform: "rotateZ(-150deg)" }}
                    src="https://www.droppii.com/wp-content/uploads/2022/08/Van-Tong-.jpg"
                  />
                </div>
                <div
                  data-index="3"
                  data-pos="200"
                  className="img tRes img-4"
                  style={{ transform: "rotateZ(200deg) translateX(184.992px)" }}
                >
                  <img
                    className="img-auto loaded"
                    width="306"
                    height="306"
                    data-lazy-type="image"
                    data-lazy-src="https://www.droppii.com/wp-content/uploads/2022/08/Duong-Thuy.jpg"
                    alt=""
                    style={{ transform: "rotateZ(-200deg)" }}
                    src="https://www.droppii.com/wp-content/uploads/2022/08/Duong-Thuy.jpg"
                  />
                </div>
                <div
                  data-index="4"
                  data-pos="280"
                  className="img tRes img-5"
                  style={{ transform: "rotateZ(280deg) translateX(184.992px)" }}
                >
                  <img
                    className="img-auto loaded"
                    width="306"
                    height="306"
                    data-lazy-type="image"
                    data-lazy-src="https://www.droppii.com/wp-content/uploads/2022/08/Nguyen-Van-Anh-.jpg"
                    alt=""
                    style={{ transform: "rotateZ(-280deg)" }}
                    src="https://www.droppii.com/wp-content/uploads/2022/08/Nguyen-Van-Anh-.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-8">
            <div className="wrap-syn-1">
              <div
                className="owl-carousel owl-drag owl-loaded s-dots syn-slider-1"
                data-paramowl="dot=.custom-dot"
              >
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(0px, 0px, 0px)",
                      transition: "all 0s ease 0s",
                      width: "3700px",
                    }}
                  >
                    <div
                      className="owl-item active"
                      style={{ width: "709.992px", marginRight: "30px" }}
                    >
                      <div className="item" data-index="0">
                        <h4 className="title">
                          <span className="name">Ms. Trương Thị Mỹ Diễm</span>{" "}
                          <span className="pos">- Sale du lịch</span>
                        </h4>
                        <div className="desc">
                          "Diễm đã có thu nhập cao hơn và đặc biệt là được mở
                          rộng tầm nhìn và phát triển bản thân rất nhiều."
                          <br /> <br />
                          Bén duyên với Droppii sau một lần tình cờ lướt
                          Facebook, Diễm rất ấn tượng với mô hình Dropshipping
                          nên đã quyết định hợp tác. Sau quá trình kiên trì và
                          nỗ lực thì hiện tại, mình đã có thu nhập cao hơn và
                          mình tin rằng: Mọi sự cố gắng, sẽ được đền đáp xứng
                          đáng.
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item"
                      style={{ width: "709.992px", marginRight: "30px" }}
                    >
                      <div className="item" data-index="1">
                        <h4 className="title">
                          <span className="name">Mr. Nguyễn Văn Kế</span>{" "}
                          <span className="pos">- Quản lý kỹ thuật</span>
                        </h4>
                        <div className="desc">
                          "Sau khi tham gia Droppii, mình đã không còn sợ hãi
                          mỗi khi gặp khó khăn."
                          <br /> <br />
                          Mình muốn tìm một công việc đảm bảo cuộc sống khi về
                          già nên đã quyết định chuyển hướng sang kinh doanh với
                          Droppii. Mình muốn nhắn nhủ với mọi người, để có được
                          thành công hãy cứ làm những gì mình sợ, khi vượt qua
                          được rồi bạn sẽ có sức mạnh để chiến thắng tất cả.
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item"
                      style={{ width: "709.992px", marginRight: "30px" }}
                    >
                      <div className="item" data-index="2">
                        <h4 className="title">
                          <span className="name">Ms. Vân Tống</span>{" "}
                          <span className="pos">- Kinh doanh online</span>
                        </h4>
                        <div className="desc">
                          "Mình có nhiều thời gian rảnh hơn để phụng dưỡng ba mẹ
                          2 bên nội ngoại, đi du lịch và làm những điều mình
                          thích."
                          <br /> <br />
                          Mình từng kinh doanh online rất nhiều nhưng đều thất
                          bại. Sau khi được bạn bè giới thiệu và trở thành đối
                          tác của Droppii, mình đã có thể tự chủ tài chính, có
                          thời gian chăm sóc ba mẹ và đi du lịch cũng như phát
                          triển bản thân. Đặc biệt là giúp nhiều người khác nâng
                          cao thu nhập.
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item"
                      style={{ width: "709.992px", marginRight: "30px" }}
                    >
                      <div className="item" data-index="3">
                        <h4 className="title">
                          <span className="name">Ms. Dương Thủy</span>{" "}
                          <span className="pos">- Kinh doanh F&amp;B</span>
                        </h4>
                        <div className="desc">
                          "Hiện tại nhờ Droppii, Thủy có thu nhập trên 20 triệu
                          mỗi tháng."
                          <br /> <br />
                          Sau khi biết đến việc có thể tự chủ tài chính nhờ đòn
                          bẩy của mô hình kinh doanh online Droppii thì Thủy đã
                          không ngần ngại thử sức. Và Thủy thực sự cảm thấy rất
                          may mắn khi biết đến cơ hội này vì hiện tại, mình đã
                          tự chủ được tài chính, chủ động thời gian và còn giúp
                          đỡ được người khác nữa.
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item"
                      style={{ width: "709.992px", marginRight: "30px" }}
                    >
                      <div className="item" data-index="4">
                        <h4 className="title">
                          <span className="name">Nguyễn Văn Ánh</span>{" "}
                          <span className="pos">
                            - Quản lý gói thăm khám sức khỏe định kỳ
                          </span>
                        </h4>
                        <div className="desc">
                          "Thành công đi đôi với hành động của bạn."
                          <br /> <br />
                          Sau khi tham gia Droppii, mình đã tìm thấy được tự do
                          thời gian và kinh tế mà công việc trước đây không có.
                          Mình muốn nhắn nhủ tới mọi người, hãy biết nắm bắt cơ
                          hội vì nếu có thể tự chủ trong mọi việc bạn sẽ có được
                          thành công.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav disabled">
                  <div className="owl-prev">
                    <i className="icon-arrow-8 ix"></i>
                  </div>
                  <div className="owl-next">
                    <i className="icon-arrow-8"></i>
                  </div>
                </div>
              </div>
              <div className="custom-dot owl-dots">
                <div className="owl-dot active">
                  <span />
                </div>
                <div className="owl-dot">
                  <span />
                </div>
                <div className="owl-dot">
                  <span />
                </div>
                <div className="owl-dot">
                  <span />
                </div>
                <div className="owl-dot">
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
