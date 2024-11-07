"use client";
import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
// import {
//   PrevButton,
//   NextButton,
//   usePrevNextButtons,
// } from "./EmblaCarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Genre, MovieType } from "@/util/movieType";
import MovieCard from "./MovieCard";
import usePrevNextButtons, {
  NextButton,
  PrevButton,
} from "./CarouselArrowButtons";

type PropType = {
  slides: MovieType[];
  options?: EmblaOptionsType;
  genres: Genre[];
};
function Carousel(props: PropType) {
  const { slides, options, genres } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="w-full mt-5 relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container">
          {slides && slides.length > 0 ? (
            slides?.map((slide, index) => (
              <MovieCard key={index} movie={slide} genres={genres} />
            ))
          ) : (
            <p className="text-rose-700">Loading ...</p>
          )}
        </div>
      </div>

      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />

      {/* <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div> */}
    </section>
  );
}

export default Carousel;
