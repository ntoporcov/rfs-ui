import {
  Box,
  Button,
  Card,
  Center,
  Code,
  Divider,
  Heading,
  Image,
  ListItem,
  OrderedList,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const App = () => {
  const [rotate, setRotate] = useState(0);

  return (
    <Box
      backgroundImage={
        "radial-gradient(rgba(255,255,255,.2), rgba(0,0,0,.8  )), url(/public/rfsbg.jpg)"
      }
      backgroundBlendMode={"multiply"}
      bgSize={"cover"}
    >
      <Center width={"100dvw"} height={"100dvh"}>
        <VStack justifyContent={"start"}>
          <motion.div
            transition={{
              type: "spring",
              damping: 5,
              stiffness: 50,
            }}
            animate={{ rotate: `${rotate}deg` }}
          >
            <Image src={"/public/rfsui.png"} maxW={{ base: 200, lg: 250 }} />
          </motion.div>
          <Button onClick={() => setRotate((curr) => curr + 360)}>
            Spin Me
          </Button>
          <Card
            p={5}
            bg={"rgba(255,255,255,.3)"}
            backdropFilter={"blur(20px)"}
            mt={3}
            shadow={"lg"}
          >
            <VStack>
              <Heading size={"md"} color={"gray.600"}>
                Welcome to the Playground
              </Heading>
              <Divider borderColor={"gray.600"} />
              <Text>
                This environment is meant for testing out components as you
                develop them.
              </Text>
              <Text>You can create your own playground too by</Text>
              <OrderedList>
                <ListItem>
                  Duplicate the <Code>/playground/example</Code> folder into
                  your own
                </ListItem>
                <ListItem>
                  Visit {window.location.origin}/NEW_FOLDER_NAME
                </ListItem>
              </OrderedList>
            </VStack>
          </Card>
        </VStack>
      </Center>
    </Box>
  );
};

export default App;
