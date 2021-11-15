import { ref, onMounted, onUnmounted } from "vue";
import { Manager, Swipe, DIRECTION_HORIZONTAL } from "@egjs/hammerjs";

export const useSlide = slidesData => {
  const activeSlide = ref(0);
  const slides = slidesData;

  const prevSlide = () => {
    if (activeSlide.value > 0) activeSlide.value -= 1;
  };

  const nextSlide = () => {
    if (activeSlide.value < slides.length - 1) activeSlide.value += 1;
  };

  const handleKey = e => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  };

  let hammer;

  onMounted(() => {
    document.addEventListener("keydown", handleKey);

    hammer = new Manager(document.querySelector(".page"));
    const swipe = new Swipe({ direction: DIRECTION_HORIZONTAL });
    hammer.add(swipe);
    hammer.on("swipeleft", () => {
      nextSlide();
    });
    hammer.on("swiperight", () => {
      prevSlide();
    });
  });

  onUnmounted(() => {
    document.removeEventListener("keydown", handleKey);
    hammer.destroy();
  });

  return {
    activeSlide,
    slides,
  };
};
