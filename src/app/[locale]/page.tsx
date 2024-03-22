import Section from "@/components/custom/Section";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

type MetadataProps = {
  locale: string;
};

export async function generateMetadata(
  params: MetadataProps,
): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "Index",
  });

  return {
    title: t("metadata.title"),
  };
}

export default function Index() {
  const t = useTranslations("Index");

  return (
    <div className="mt-10">
      <Section>{t("title")}</Section>
    </div>
  );
}
