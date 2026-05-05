import Image from 'next/image';

export default function Introduction({ title, images, heading, latinHeading, longDescription }) {
  return (
    <div id="introduction">
      <div className="relative">
        <div
          className="absolute top-7 -z-1 size-full rounded-3xl rounded-tr-lg border-2 border-transparent"
          style={{
            background:
              'linear-gradient(#0F0F0F, #0F0F0F) padding-box, linear-gradient(to right, #094e3d 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 95%, #094e3d 100%) border-box',
          }}
        ></div>
        <div className="space-y-1 px-4 font-bold">
          <h3 className="font-morabba text-xl lg:text-[26px]">{heading}</h3>
          <p className="font-stretchPro text-paragraph text-sm">{latinHeading}</p>
        </div>
        <div className="relative flex flex-col justify-center gap-4 p-3 md:mt-4 md:flex-row md:items-center md:px-6">
          <div className="space-y-4 md:w-[60%]">
            <div className="bg-foreground text-paragraph rounded-3xl rounded-tr-lg p-5 text-justify">
              <p>{longDescription}</p>
            </div>
          </div>
          <div className="relative md:w-[40%]">
            <Image
              alt={title}
              width={400}
              height={462}
              src={images[1].url}
              className="top-1/2 left-1/2 mx-auto w-full max-w-85 md:absolute md:-translate-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
