import styles from "./styles.module.css";

interface SketchedCardProps {
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  description: string;
  imageSlot?: React.ReactNode;
}

export function SketchedCard({ 
  imageSrc, 
  imageAlt, 
  title, 
  description, 
  imageSlot 
}: SketchedCardProps) {
  return (
    <div className={`${styles['sketchy-container']} ${styles['card']}`}>
      {/* <div className={styles['card-content']}>
        <div className={styles['card-image-section']}>
          {imageSlot ? (
            imageSlot
          ) : imageSrc ? (
            <img 
              src={imageSrc} 
              alt={imageAlt || title} 
              className={styles['card-image']}
            />
          ) : (
            <div className={styles['card-image-placeholder']}>
              <span>Image</span>
            </div>
          )}
        </div>
        
        <div className={styles['card-text-section']}>
          <h3 className={styles['card-title']}>{title}</h3>
          <p className={styles['card-description']}>{description}</p>
        </div>
      </div>
       */}
      {/* Sketched border */}
      <svg
        className={styles['sketchy-card-border']}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 150"
        preserveAspectRatio="none"
      >
        <path
          d="M 5 8 C 50 6 100 10 150 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.4"
        />
        <path
          d="M 150 8 C 200 6 250 10 300 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
        />
        <path
          d="M 300 8 C 350 6 380 8 395 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.3"
        />
        
        {/* Right edge - varying stroke widths */}
        <path
          d="M 395 10 C 394 30 391 50 392 70"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <path
          d="M 392 70 C 391 92 391 110 391 131"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.7"
        />
        <path
          d="M 391 131 C 391 139 392 143 391 148"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.4"
        />
        
        {/* Bottom edge - varying stroke widths */}
        <path
          d="M 391 148 C 350 144 300 140 250 142"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
        />
        <path
          d="M 250 142 C 200 144 150 140 100 142"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.3"
        />
        <path
          d="M 100 142 C 50 144 18 146 8 140"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        
        {/* Left edge - varying stroke widths */}
        <path
          d="M 8 140 C 3 121 4 100 6 79"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.4"
        />
        <path
          d="M 6 79 C 7 59 6 40 5 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
        />
        <path
          d="M 5 8 C 5 20 4 20 5 25"
          fill="none"
          stroke="red"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  );
}
