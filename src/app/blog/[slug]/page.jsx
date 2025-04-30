import React from 'react'
import styles from './singlePost.module.css'
import Image from "next/image"

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles['image-container']}>
        <Image src="/desktop-design-home-light.jpg" alt="" fill className={styles.img}/>
      </div>
      <div className={styles['text-container']}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image src="/desktop-design-home-light.jpg" alt="" width={50} height={50} className={styles.avatar}/>
          <div className={styles["detail-text"]}>
            <span className={styles["detail-title"]}>Published</span>
            <span className={styles["detail-value"]}>01.01.10</span>
          </div>
          <div className={styles["detail-text"]}>
            <span className={styles["detail-title"]}>Published</span>
            <span className={styles["detail-value"]}>01.01.10</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur atque quis sed corrupti quaerat temporibus, odio eaque veniam dicta aliquam.
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage