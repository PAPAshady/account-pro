import Image from 'next/image';

export default function CommentsBox({ title, number, image, mark }) {
  return (
    <div className="bg-foreground flex justify-between gap-2 overflow-hidden rounded-2xl rounded-tr-lg px-3.75 pt-3.75">
      <div className="mb-4">
        <div className="font-morabba mb-2.5 text-[32px]">
          <span>{number}</span>
          <span className="text-primary">{mark}</span>
        </div>
        <p className="text-sm">{title}</p>
      </div>
      <div className="-mb-2 aspect-video size-20 self-end">
        <Image
          alt={title}
          width={130}
          height={107}
          src={image}
          className="size-full grayscale-100"
        />
      </div>
    </div>
  );
}
