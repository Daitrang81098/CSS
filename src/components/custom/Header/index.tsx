import { Box, Flex } from "@radix-ui/themes";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconChevronDown } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import LanguageSwitch from "@/components/custom/LanguageSwitch";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

type HeaderProps = {
  locale: string;
};

const Header = (props: HeaderProps) => {
  const locale = props.locale;
  const headerTrans = useTranslations("Header");
  const t = useTranslations("Index");

  return (
    <Flex align="center" justify="between">
      <Box>
        <Link href="/" locale={locale}>
          <Image
            src="/droppii.png"
            alt="partner"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "55px" }}
          />
        </Link>
      </Box>
      <Flex gap="6" align="center">
        <Box>
          <Link href="/" locale={locale} className="hover:text-rose-600">
            {headerTrans("homepage")}
          </Link>
        </Box>
        <Box>
          <Link
            href="/about-us"
            locale={locale}
            className="hover:text-rose-600"
          >
            {headerTrans("aboutus")}
          </Link>
        </Box>
        <Box>
          <Link href="/contact" locale={locale} className="hover:text-rose-600">
            {headerTrans("contact")}
          </Link>
        </Box>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Flex align="center" gap="3" className="hover:text-rose-600">
              {headerTrans("news")}
              <IconChevronDown size={14} />
            </Flex>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <a>{headerTrans("agnews")}</a>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <a>Billing</a>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <a>Subscription</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href="/register" locale={locale}>
          <Button>{t("registerNow")}</Button>
        </Link>
        <LanguageSwitch />
      </Flex>
    </Flex>
  );
};

export default Header;
