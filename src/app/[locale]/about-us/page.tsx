// "use client";

import Section from "@/components/custom/Section";
import { Button } from "@/components/ui/button";
import { Box, Flex } from "@radix-ui/themes";
import {
  IconBrandDatabricks,
  IconBulb,
  IconFlag,
  IconFriends,
  IconHandGrab,
  IconMessageCircle2Filled,
  IconSquareRoundedCheck,
  IconTrophy,
} from "@tabler/icons-react";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import React from "react";

interface HighlightTextProps {
  text: string;
}
type MetadataProps = {
  locale: string;
};

export async function generateMetadata(
  params: MetadataProps
): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "About-us",
  });

  return {
    title: t("aboutus"),
  };
}

const Index = () => {
  const t = useTranslations("About-us");

  return (
    <div className="mt-10 ">
      <div className="relative z-0" style={{ inset: 0 }}>
        <img src="../../../../PC-BANNER-scaled.jpg"></img>
        <div
          className="absolute z-1"
          style={{
            background:
              "linear-gradient(66.17deg, #eb0000 16.98%, rgba(235, 0, 0, 0.876) 34%, rgba(235, 0, 0, 0.544) 41.96%, rgba(235, 0, 0, 0.338) 49.18%, rgba(235, 0, 0, 0.177) 55.14%, rgba(0, 43, 235, 0.155008) 61.87%, rgba(0, 43, 235, 0.139433) 66.61%, rgba(0, 43, 235, 0.127493) 72.77%, rgba(0, 43, 235, 0.061513) 78.79%, rgba(0, 43, 235, 0) 82.07%, rgba(0, 43, 235, 0) 85.86%, rgba(0, 43, 235, 0) 87.53%, rgba(0, 43, 235, 0) 89.56%)",
            inset: 0,
          }}
        >
          <Section>
            <h1 className="text-[40px] text-white font-bold absolute inset-y-0 flex items-center justify-center">
              <div>
                <p className="">{t("about")}</p>
                <p className="text-[#FFA700]"> Athena Group</p>
              </div>
            </h1>
          </Section>
        </div>
      </div>
      <div className="relative z-0" style={{ inset: 0 }}>
        <img className="w-full" src="../../../../bg-hgroup.svg"></img>
        <div
          className="absolute z-1"
          style={{
            inset: 0,
          }}
        >
          <Section>
            <div className=" pt-[40px] md:pt-[80px] md:flex justify-between gap-[30px]">
              <img
                className="lg:w-[550px] lg:h-[580px] sm:w-[510px] sm:h-[510px] lg:mt-0 object-cover rounded-[16px] md:mt-[160px] md:h-[330px] md:w-[330px] "
                src="../../../../72.jpg"
              ></img>
              <div>
                <h2 className="text-[32px] font-bold py-[30px]">
                  Câu chuyện của{" "}
                  <span className="text-primary">Athena Group</span>
                </h2>
                <div className="text-justify">
                  <p
                    className="mb-[20px]"
                    dangerouslySetInnerHTML={{
                      __html: t.raw("content.aboutus1"),
                    }}
                  ></p>
                  <p
                    className="mb-[20px]"
                    dangerouslySetInnerHTML={{
                      __html: t.raw("content.aboutus2"),
                    }}
                  ></p>
                  <p
                    className="mb-[20px]"
                    dangerouslySetInnerHTML={{
                      __html: t.raw("content.aboutus3"),
                    }}
                  ></p>
                </div>
              </div>
            </div>
            <div className="pt-[40px] md:pt-[80px]">
              <h2 className="text-[32px] font-bold pb-[30px] text-center">
                {t("Vision and mission")}
              </h2>
              <div className="gap-[30px] grid md:flex justify-between ">
                <div className="text-white relative">
                  <img
                    className="rounded-[16px]"
                    src="../../../../partnership-two-business-people-shaking-hand-after-business-job-interview-meeting-room-office-1-1.jpg"
                  ></img>
                  <div className="absolute p-[20px] inset-x-0 bottom-0">
                    <div>
                      <IconFlag size={51} />
                      <h3 className="mt-[10px] text-[21px]">{t("Vision")}</h3>
                      <p className="md:text-[14px]">{t("content.vision")}</p>
                    </div>
                  </div>
                </div>
                <div className="text-white relative">
                  <img
                    className="rounded-[16px]"
                    src="../../../../partnership-two-business-people-shaking-hand-after-business-job-interview-meeting-room-office-1-1.jpg"
                  ></img>
                  <div className="absolute p-[20px] inset-x-0 bottom-0">
                    <div>
                      <IconTrophy size={51} />
                      <h3 className="mt-[10px] text-[21px]">{t("mission")}</h3>
                      <p className="md:text-[14px]">{t("content.mission")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-[40px] md:py-[80px]">
              <h2 className="text-[32px] font-bold pb-[30px] text-center">
                {t("Core values")}
              </h2>
              <Flex className="gap-[30px] overflow-x-auto" justify="between">
                <Box className=" place-items-center flex flex-col">
                  <IconBulb color="red" size={140} strokeWidth={1} />
                  <p className="font-semibold mb-[10px]">{t("creative")}</p>
                  <p className="w-[250px] lg:w-[200px] text-center">
                    {t("content.creative")}
                  </p>
                </Box>
                <Box className=" place-items-center flex flex-col">
                  <IconHandGrab color="red" size={140} strokeWidth={1} />
                  <p className="font-semibold mb-[10px]">{t("Unite")}</p>
                  <p className="w-[250px] lg:w-[200px] text-center">
                    {t("content.unite")}
                  </p>
                </Box>
                <Box className=" place-items-center flex flex-col">
                  <IconSquareRoundedCheck
                    color="red"
                    size={140}
                    strokeWidth={1}
                  />
                  <p className="font-semibold mb-[10px]">
                    {t("Responsibility")}
                  </p>
                  <p className="w-[250px] lg:w-[200px] text-center">
                    {t("content.responsibility")}
                  </p>
                </Box>
                <Box className=" place-items-center flex flex-col">
                  <IconFriends color="red" size={140} strokeWidth={1} />
                  <p className="font-semibold mb-[10px]">{t("Companion")}</p>
                  <p className="w-[250px] lg:w-[200px] text-center">
                    {t("content.companion")}
                  </p>
                </Box>
                <Box className=" place-items-center flex flex-col">
                  <IconBrandDatabricks color="red" size={140} strokeWidth={1} />
                  <p className="font-semibold mb-[10px]">{t("Professional")}</p>
                  <p className="w-[250px] lg:w-[200px] text-center">
                    {t("content.professional")}
                  </p>
                </Box>
              </Flex>
            </div>
            <div className="pb-[40px] md:pb-[80px]">
              <Box className="bg-primary text-white rounded-[16px] p-[70px] relative ">
                {/* <IconMessageCircle2Filled
                  className="absolute top-0 left-0 z-0"
                  size={"150px"}
                  style={{ color: "salmon" }}
                /> */}
                <div className="sm:flex-row flex-col flex justify-between">
                  <h2 className="text-[28px] font-bold text-center z-10 whitespace-nowrap">
                    {t("Contact us")}
                  </h2>
                  <Button className="bg-[salmon] hover:bg-[red] h-[50px] font-semibold rounded-[8px] ">
                    {t("Submit form")}
                  </Button>
                </div>
              </Box>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default Index;
