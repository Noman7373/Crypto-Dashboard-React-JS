import { Tag, Text } from "@chakra-ui/react";
import { CustumCard } from "../../../Chakra/Customcart";

const Infocard = ({ imgUrl, text, tagText, inverted }) => {
  return (
    <CustumCard
      bgColor={inverted ? "p.purple" : "white"}
      bgImage={imgUrl}
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Tag
        bg={inverted ? "white" : "p.purple"}
        color={inverted ? "p.purple" : "white"}
        borderRadius="full"
      >
        {tagText}
      </Tag>
      <Text
        color={inverted ? "white" : "blacl"}
        textStyle="h5"
        fontWeight="medium"
        mt="4"
      >
        {text}
      </Text>
    </CustumCard>
  );
};

export default Infocard;
