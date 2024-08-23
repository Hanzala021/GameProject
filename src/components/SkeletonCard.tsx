import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const SkeletonCard = () => {
  return (


    <Card overflow={"hidden"} width={'100%'}>
        <Skeleton height={"200px"} />
        <CardBody>
            <SkeletonText></SkeletonText>
        </CardBody>
    </Card>

)
}

export default SkeletonCard