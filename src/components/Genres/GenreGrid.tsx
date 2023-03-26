import {
  HStack,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";
import GenreCardSkeleton from "./GenreCardSkeleton";
import GenresCard from "./GenresCard";

const GenreGrid = () => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <>
      {error && <Text>{error}</Text>}
      <List>
        {isLoading &&
          skeletons.map((skeleton) => <GenreCardSkeleton key={skeleton} />)}
        {data.map((genre) => (
          <ListItem paddingY={2} key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                src={getCroppedImageUrl(genre.image_background)}
                borderRadius={8}
              />
              <Text fontSize={"lg"}>{genre.name} </Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreGrid;
