import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if(!children) return null

  if (children.length <= 300) return <Text>{children}</Text>;

  const summarizedText = isExpanded? children : children.substring(0, 300) + '...';

  return (
    <Text>
      {summarizedText}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="green"
        marginLeft={2}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
