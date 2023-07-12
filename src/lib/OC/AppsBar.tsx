import { FC, ReactNode, useMemo } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuList,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsGridFill } from "react-icons/bs";

export type AppLink = {
  href: string;
  name: string;
  image?: string;
  active: boolean;
};

export type NavLink = {
  label: string;
  onClick: () => void;
  active: boolean;
};

export type AppsBarProps = {
  apps: AppLink[];
  navLinks?: NavLink[];
};

export const AppsBar: FC = (props: AppsBarProps) => {
  const currentApp = useMemo(() => {
    return props.apps?.find((x) => x.active);
  }, [props.apps]);

  return (
    <>
      <HStack justifyContent={"space-between"} w={"full"} spacing={3}>
        <HStack>
          <Menu>
            <MenuButton>
              <Button p={1} variant={"ghost"} rounded={"full"}>
                <BsGridFill />
              </Button>
            </MenuButton>
            <MenuList py={3}>
              <SimpleGrid columns={3} spacing={5}>
                {props.apps.map((app) => {
                  return (
                    <Button h={"auto"} py={2} variant={"ghost"}>
                      <VStack spacing={1}>
                        <Image src={app.image} h={6} w={"auto"} />
                        <Text fontSize={"sm"}>{app.name}</Text>
                      </VStack>
                    </Button>
                  );
                })}
              </SimpleGrid>
            </MenuList>
          </Menu>
          <Heading size={"md"}>{currentApp.name}</Heading>
        </HStack>
        <HStack>
          <Avatar size={"sm"} />
        </HStack>
      </HStack>
      <Divider />
      {props.navLinks?.length > 0 && (
        <>
          <HStack px={3} py={1}>
            {props.navLinks?.map((navLink) => {
              return (
                <Button
                  fontSize={11}
                  py={1}
                  h="auto"
                  rounded={"full"}
                  px={3}
                  variant={navLink.active ? "solid" : "ghost"}
                  active={navLink.active}
                >
                  {navLink.label}
                </Button>
              );
            })}
          </HStack>
          <Divider />
        </>
      )}
    </>
  );
};
