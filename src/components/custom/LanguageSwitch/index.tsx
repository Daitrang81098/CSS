"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/navigation";
import { Box, Flex } from "@radix-ui/themes";
import { IconCaretDownFilled } from "@tabler/icons-react";
import { useLocale } from "next-intl";

type Lang = "vi" | "en";

const LanguageSwitch = () => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const changeLang = (locale: Lang) => () => {
    router.replace(pathname, {
      locale,
    });
  };

  return (
    <Box>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Flex align="center" gap="3">
            <Box className="uppercase">{locale}</Box>
            <IconCaretDownFilled size={14} />
          </Flex>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={changeLang("vi")}>VI</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={changeLang("en")}>EN</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Box>
  );
};

export default LanguageSwitch;
