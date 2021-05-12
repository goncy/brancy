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
  const boundaries = React.useRef<HTMLDivElement>(null);

  return (
    <Container
      alignSelf="center"
      height="100%"
      maxHeight={{base: "auto", md: "100vh"}}
      maxWidth="container.xl"
      paddingX={0}
    >
      <Stack
        direction={{base: "column", md: "row"}}
        divider={<StackDivider margin={0} />}
        height="100%"
        spacing={0}
      >
        <Stack
          height="100%"
          maxWidth={{base: "100%", md: 320}}
          minHeight="100%"
          paddingY={4}
          spacing={8}
          width="100%"
        >
          <Heading cursor="pointer" fontSize="2xl" paddingX={4} onClick={toggleColorMode}>
            Brancy
          </Heading>
          <Stack flex={1} overflowY="auto" paddingX={4} paddingY={4} spacing={7}>
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
                  value={transforms.perspective}
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
                  value={transforms.background}
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
                  value={transforms.watermark}
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
          <Stack paddingX={4} spacing={4}>
            <Button colorScheme="primary" size="lg" width="100%">
              Guardar
            </Button>
            <Button size="lg" width="100%">
              Copiar al portapapeles
            </Button>
          </Stack>
        </Stack>
        <Flex
          ref={boundaries}
          alignItems="center"
          background={transforms.background}
          height="100%"
          justifyContent="center"
          minHeight="100%"
          overflow="hidden"
          position="relative"
          width="100%"
        >
          {transforms.image.blob && (
            <Image
              borderRadius={transforms.image.borderRadius}
              boxShadow={`${transforms.shadow.offsetX}px ${transforms.shadow.offsetY}px ${transforms.shadow.blur}px ${transforms.shadow.spread}px ${transforms.shadow.color}`}
              margin="auto"
              src={transforms.image.blob}
              transform={`rotate3d(${transforms.perspective.x}, ${transforms.perspective.y}, ${transforms.perspective.z}, ${transforms.perspective.intensity}deg)`}
              width={`${transforms.image.size}%`}
            />
          )}
          {transforms.watermark.blob && (
            <Image
              bottom={
                transforms.watermark.position.includes("bottom")
                  ? `${0 + transforms.watermark.margin}px`
                  : "inherit"
              }
              left={
                transforms.watermark.position.includes("left")
                  ? `${0 + transforms.watermark.margin}px`
                  : "inherit"
              }
              objectFit="contain"
              position="absolute"
              right={
                transforms.watermark.position.includes("right")
                  ? `${0 + transforms.watermark.margin}px`
                  : "inherit"
              }
              src={transforms.watermark.blob}
              top={
                transforms.watermark.position.includes("top")
                  ? `${0 + transforms.watermark.margin}px`
                  : "inherit"
              }
              width={`${transforms.watermark.size}%`}
            />
          )}
        </Flex>
      </Stack>
    </Container>
  );
}

export default App;
