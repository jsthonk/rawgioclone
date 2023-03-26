import { Card, CardBody, Image, Heading } from "@chakra-ui/react";
import { Genre } from "../../hooks/useGenres";

interface Props {
  genre: Genre;
}

const GenresCard = ({ genre }: Props) => {
  return (
    <Card display={"flex"}>
      <Image width={20} src={genre.image_background} />
      <CardBody>
        <Heading fontSize={"sm"}>{genre.name} </Heading>
      </CardBody>
    </Card>
  );
};

export default GenresCard;
