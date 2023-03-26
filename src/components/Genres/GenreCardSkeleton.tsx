import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreCardSkeleton = () => {
  return (
    <Card marginBottom={3}>
      <Skeleton width="300px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GenreCardSkeleton;
