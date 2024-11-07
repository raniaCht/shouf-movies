"use client";
import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EmblaCarouselType } from "embla-carousel";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

function usePrevNextButtons(
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UsePrevNextButtonsType {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
}

type PropType = ComponentPropsWithRef<"button">;

export const PrevButton: React.FC<PropType> = ({ children, ...restProps }) => {
  return (
    <button
      type="button"
      className="absolute top-1/2 -translate-y-1/2 -left-[5%] flex justify-center items-center"
      {...restProps}
    >
      <ChevronLeft size={48} className="text-gray-600" strokeWidth={1} />
    </button>
  );
};

export const NextButton: React.FC<PropType> = ({ children, ...restProps }) => {
  return (
    <button
      type="button"
      className="absolute top-1/2 -translate-y-1/2 -right-[5%] flex justify-center items-center"
      {...restProps}
    >
      <ChevronRight size={48} className="text-gray-600" strokeWidth={1} />
    </button>
  );
};

export default usePrevNextButtons;
