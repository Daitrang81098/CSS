"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Box, Container, Flex, Grid } from "@radix-ui/themes";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Footer from "@/components/custom/Footer";

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
function Contact() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <div className="relative">
        <img
          className="w-full h-full img-auto max-w-none"
          src="https://www.droppii.com/wp-content/uploads/2022/08/Group-1000000828.jpg"
          alt=""
        ></img>
        <div className="min-w-32 p-20 xl:p-64  md:p-36 lg:p-48 sm:min-w-64 md:min-w-48 lg:min-w-32 xl:min-w-16 absolute inset-0 block justify-self-center bg-gradient-to-r from-[#002BEB] to-transparent text-white ">
          <div className="font-sans pb-6 font-bold w-full sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl">
            Liên hệ với chúng tôi ngay
          </div>
          <div>
            Liên hệ <span className=" text-[#FFA700]">Droppii</span> để được tư
            vấn và giải pháp phù hợp nhất cho bạn.
          </div>
        </div>
      </div>

      <Container className="flex flex-col items-center justify-center min-h-screen py-16 pt[80px] pb[80px]">
        <Grid
          className="flex flex-col items-center justify-center w-full px-8 py-8"
          columns={{ initial: "1", md: "2" }}
          gap="3"
          width="auto"
        >
          <Box className=" relative mr-8">
            <Box className="pb-8">
              <h1 className="font-semibold text-4xl pb-8">Thông tin liên hệ</h1>
              <li
                className="pb-4 list-item"
                style={{ textAlign: "-webkit-match-parent" }}
              >
                <b> Trung tâm xử lý đơn hàng HCM: </b>
                <span className="text-black text-wrap">
                  Hẻm 2 Thủy Lợi, Phước Long A, Thủ Đức, Thành phố Hồ Chí Minh.
                </span>
              </li>
              <li
                className="pb-4 list-item"
                style={{ textAlign: "-webkit-match-parent" }}
              >
                <b>Trung tâm xử lý đơn hàng HN :</b>{" "}
                <span>386 Nguyễn Văn Linh, Phúc Lợi, Long Biên, Hà Nội</span>{" "}
              </li>
              <li
                className="pb-4 list-item"
                style={{ textAlign: "-webkit-match-parent" }}
              >
                {" "}
                <b>Văn Phòng:</b>{" "}
                <span>
                  39A Tạ Hiện, Khu phố 1, Phường Thạnh Mỹ Lợi, Thành phố Thủ
                  Đức, Thành phố Hồ Chí Minh, Việt Nam.
                </span>{" "}
              </li>
              <li
                className="pb-4 list-item"
                style={{ textAlign: "-webkit-match-parent" }}
              >
                {" "}
                <b>Trụ sở chính:</b>{" "}
                <span>
                  Tầng 3, Tòa nhà Paxsky, 26 Ung Văn Khiêm, Phường 25, Quận Bình
                  Thạnh, Thành phố Hồ Chí Minh, Việt Nam
                </span>{" "}
              </li>
              <li
                className="pb-4 list-item"
                style={{ textAlign: "-webkit-match-parent" }}
              >
                {" "}
                <b>Hotline:</b> <span>037 4520301</span>{" "}
              </li>
              <li
                className="pb-4 list-item"
                style={{ textAlign: "-webkit-match-parent" }}
              >
                {" "}
                <b>Email: </b> <span>support@droppii.com</span>
              </li>
            </Box>
            <Box>
              <img
                className="w-full object-cover rounded-lg"
                src="https://www.droppii.com/wp-content/uploads/2022/08/Rectangle-4320.jpg"
                alt=""
              ></img>
            </Box>
          </Box>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 bg-white p-5 px-8 py-8 max-w-none rounded-xl"
              style={{ boxShadow: "0px 08px 30px rgba(0, 0, 0, 0.1)" }}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-2">
                    <FormLabel className="text-lg font-semibold mb-[10px]">
                      Họ và tên
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nguyễn Văn A"
                        {...field}
                        className="border p-2 rounded-lg h-11 focus-visible:ring-blue-400 border-blue-400 focus:border-none focus:border-transparent !important"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-2">
                    <FormLabel className="text-lg font-semibold mb-[10px]">
                      Số điện thoại
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="0123456789"
                        {...field}
                        className="border p-2 rounded-lg h-11 focus-visible:ring-blue-400 border-blue-400 focus:border-none focus:border-transparent !important"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-2">
                    <FormLabel className="text-lg font-semibold mb-[10px]">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="example@gmail.com"
                        {...field}
                        className="border p-2 rounded-lg h-11 focus-visible:ring-blue-400 border-blue-400 focus:border-none focus:border-transparent !important"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="job"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-2">
                    <FormLabel className="text-lg font-semibold mb-[10px]">
                      Bạn muốn trở thành
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="border p-2 rounded-lg h-11 focus-visible:ring-blue-400 border-blue-400 focus:border-none focus:border-transparent !important">
                        <SelectTrigger>
                          <SelectValue
                            placeholder="Chọn loại đối tác...."
                            {...field}
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="product_partner">
                          Đối tác sản phẩm
                        </SelectItem>
                        <SelectItem value="business_partner">
                          Đối tác kinh doanh
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-2">
                    <FormLabel className="text-lg font-semibold mb-[10px]">
                      Lời nhắn của bạn
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Khung giờ bạn muốn nhận lời tư vấn"
                        {...field}
                        className="border p-2 rounded-lg h-20 relative align-middlen inline-block border-blue-400 focus:border-none focus:border-transparent"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className=" ml-[calc(50%-128px/2)] !important bg-[#FFA700] p-2 hover:bg-[#0D2BB1] h-14 w-32 justify-items-center text-black"
              >
                Gửi liên hệ
              </Button>
            </form>
          </Form>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
