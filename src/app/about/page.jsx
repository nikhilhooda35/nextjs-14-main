import Image from "next/image"

const AboutPage = () => {
  return (
    <div className={styles.imgContainer}>
      <Image src="/about.png" alt="" width={400} height={400}/>
    </div>
  )
}

export default AboutPage