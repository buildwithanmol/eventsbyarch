import Image from "next/image"

const TestimonialCard = ({ styleIt, src }) => {
      return (
            <div className="mx-4">
                  <Image
                        src={src}
                        width={400}
                        height={400}
                        alt="reviews"
                        className="rounded-md shadow-xl "
                  />
            </div>
      )
}

export default TestimonialCard