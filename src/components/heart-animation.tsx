import * as motion from "motion/react-client";

export default function HeartAnimation() {
  return (
    <div className="flex items-center justify-center">
      <svg
        viewBox="0 0 250 100"
        width="250"
        height="100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Placeholder: Garis warna merah kabur */}
        <path
          d="
            M0,50 
            H50 
            L70,20 
            L90,80 
            L110,50 
            H150
            L170,20
            L190,80
            L210,50
            H250
          "
          stroke="rgba(29, 54, 88, 0.3)" /* Warna placeholder merah kabur */
          strokeWidth="4"
        />

        {/* Garis animasi: Warna merah solid bergerak */}
        <motion.path
          d="
            M0,50 
            H50 
            L70,20 
            L90,80 
            L110,50 
            H150
            L170,20
            L190,80
            L210,50
            H250
          "
          stroke="#1d3658" /* Warna merah solid */
          strokeWidth="4"
          strokeDasharray="100 300" /* Panjang solid dan kosong */
          strokeDashoffset="300"
          animate={{ strokeDashoffset: -100 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />
      </svg>
    </div>
  );
}
