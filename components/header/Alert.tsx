import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import Scroll from "$store/islands/Header/Scroll.tsx";

export interface Props {
  alerts: string[];
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

function Alert({ alerts = [], interval = 5 }: Props) {
  const id = useId();

  return (
    <>
      <Scroll />
      <div id={id}>
        <Slider class="carousel carousel-center w-screen bg-[#de3154] text-base-100 gap-6">
          {alerts.map((alert, index) => (
            <Slider.Item index={index} class="carousel-item">
              <span class="text-sm text-secondary-content flex justify-center items-center w-screen h-[38px]">
                {alert}
              </span>
            </Slider.Item>
          ))}
        </Slider>

        <SliderJS rootId={id} interval={interval && interval * 1e3} />
      </div>
    </>
  );
}

export default Alert;
