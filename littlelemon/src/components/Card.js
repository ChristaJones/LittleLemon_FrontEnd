
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack p="1">
        <VStack w="100%" h="100%"  pb = "1" borderRadius="md" bg={"white"}> 
          <Image borderRadius="md" alignItems="center" objectFit='cover' src={imageSrc }/>
          <Box p="5" spacing={4}>
            <Heading color={"black"}>{title}</Heading>
            <Text py = "2" color={"grey"}>{description}</Text>
            <Link href='#' color = {"black" }>See More <FontAwesomeIcon icon={faArrowRight} size="1x"/></Link>
          </Box>
      </VStack>
    </HStack>
  );
};

export default Card;