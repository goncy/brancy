import React from "react";
import {
  Container,
  Stack,
  StackDivider,
  Button,
  Heading,
  useColorMode,
  Image,
  Flex,
} from "@chakra-ui/react";

import Collapse from "./ui/structure/Collapse";
import ImageTransformer from "./transformers/Image";
import ShadowTransformer from "./transformers/Shadow";
import PerspectiveTransformer from "./transformers/Perspective";
import BackgroundTransformer from "./transformers/Background";
import WatermarkTransformer from "./transformers/Watermark";
import {useTransforms} from "./store";

function App() {
  const [transforms, setTransforms] = useTransforms();
  const {toggleColorMode} = useColorMode();

  return (
    <Container alignSelf="center" height="100%" maxHeight="100vh" maxWidth="container.xl">
      <Stack direction="row" divider={<StackDivider margin={0} />} height="100%" spacing={0}>
        <Stack height="100%" maxWidth={275} paddingY={4} spacing={8} width="100%">
          <Heading cursor="pointer" fontSize="2xl" onClick={toggleColorMode}>
            Brancy
          </Heading>
          <Stack flex={1} overflowY="auto" paddingRight={4} spacing={7}>
            <Stack divider={<StackDivider />} spacing={3}>
              <Collapse isInitiallyOpen title="Image">
                <ImageTransformer
                  value={transforms.image}
                  onChange={(image) =>
                    setTransforms((transforms) => ({
                      ...transforms,
                      image,
                    }))
                  }
                />
              </Collapse>
              <Collapse title="Shadow">
                <ShadowTransformer
                  value={transforms.shadow}
                  onChange={(shadow) =>
                    setTransforms((transforms) => ({
                      ...transforms,
                      shadow,
                    }))
                  }
                />
              </Collapse>
              <Collapse title="Perspective">
                <PerspectiveTransformer
                  onChange={(perspective) =>
                    setTransforms((transforms) => ({
                      ...transforms,
                      perspective,
                    }))
                  }
                />
              </Collapse>
              <Collapse title="Background">
                <BackgroundTransformer
                  onChange={(background) =>
                    setTransforms((transforms) => ({
                      ...transforms,
                      background,
                    }))
                  }
                />
              </Collapse>
              <Collapse title="Watermark">
                <WatermarkTransformer
                  onChange={(watermark) =>
                    setTransforms((transforms) => ({
                      ...transforms,
                      watermark,
                    }))
                  }
                />
              </Collapse>
            </Stack>
          </Stack>
          <Stack paddingRight={4} spacing={4}>
            <Button colorScheme="primary" size="lg" width="100%">
              Guardar
            </Button>
            <Button size="lg" width="100%">
              Copiar al portapapeles
            </Button>
          </Stack>
        </Stack>
        <Flex
          alignItems="center"
          background={transforms.background}
          height="100%"
          justifyContent="center"
          width="100%"
        >
          {transforms.image.blob && (
            <Image
              borderRadius={transforms.image.borderRadius}
              boxShadow={`${transforms.shadow.offsetX}px ${transforms.shadow.offsetY}px ${transforms.shadow.blur}px ${transforms.shadow.spread}px ${transforms.shadow.color}`}
              margin="auto"
              objectFit="contain"
              src={transforms.image.blob}
              width={`${transforms.image.size}%`}
            />
          )}
        </Flex>
      </Stack>
    </Container>
  );
}

export default App;
