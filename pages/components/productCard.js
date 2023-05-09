import {Card, CardBody, Image, Stack, Heading, Text} from "@chakra-ui/react";

 const productCard = (props) => {
    return (
    <Card w={['2xs', 'xs', 'sm']} >
      <CardBody>
          <Image src={props.img} alt={props.alt} borderRadius='lg'/>
          <Stack mt='6' spacing='3'>
              <Heading size='md'>{props.title}</Heading>
              <Text>
                  {props.description}
              </Text>
              <Text>{props.price}$</Text>
          </Stack>
      </CardBody>
    </Card>
    );
}

export default productCard;