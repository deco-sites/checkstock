export interface Props {
  sobre?: {
    title?: string;
    description?: string;
  };
}

export default function Sobre({ sobre }: Props) {
  return (
    <div
      class={`flex ${
        sobre
          ? "flex-col gap-4 lg:flex-row lg:w-2/5 lg:justify-between"
          : "flex-col gap-4"
      }`}
    >
      <div class="flex flex-col gap-4">
        {sobre?.title && (
          <h3 class={sobre ? "text-2xl lg:text-3xl" : "text-lg"}>
            {sobre?.title}
          </h3>
        )}
        {sobre?.description && <div>{sobre?.description}</div>}
      </div>
    </div>
  );
}
