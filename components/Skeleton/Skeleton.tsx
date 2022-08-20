interface SkeletonTypes {
  className?: string
}

const Skeleton = ({ className }: SkeletonTypes) => {
  return (
    <div
      className={`${className} before:content-["\\00a0"] animate-pulse duration-500 rounded`}
      style={{
        background: 'linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%)',
      }}
    />
  )
}

export default Skeleton
