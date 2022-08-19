interface SkeletonTypes {
  width?: string
  height?: string
}

const Skeleton = ({ width, height }: SkeletonTypes) => {
  const w = width ? `w-[${width}]` : 'w-full'
  const h = height ? `h-[${height}]` : 'h-full'
  return (
    <div
      className={`${w} ${h} before:content-["\\00a0"] animate-pulse duration-500 rounded`}
      style={{
        background: 'linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%)',
      }}
    />
  )
}

export default Skeleton
