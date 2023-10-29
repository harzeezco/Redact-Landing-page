import Skeleton from "@/components/common/Skeleton";

function SkeletonMapping() {
  return (
    <div className="slides mt-16  items-center gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid lg:grid-cols-4">
      {[...Array(12).keys()].map((i) => (
        <Skeleton key={i} />
      ))}
    </div>
  );
}

export default SkeletonMapping;
