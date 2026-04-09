import { productActivationImportantPoints as importantPoints } from '@/data';

export default function ImportantPoints() {
  return (
    <div id="important-points">
      <div className="relative">
        <div
          className="absolute top-7 -z-1 size-full rounded-3xl rounded-tr-lg border-2 border-transparent"
          style={{
            background:
              'linear-gradient(#0F0F0F, #0F0F0F) padding-box, linear-gradient(to right, #094e3d 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 95%, #094e3d 100%) border-box',
          }}
        ></div>
        <div className="mb-3 space-y-1 px-4 font-bold">
          <h3 className="font-morabba text-xl lg:text-[26px]">نکات مهم قبل از خرید</h3>
          <p className="text-paragraph font-stretchPro text-sm">Important Points</p>
        </div>
        <div className="px-4 pt-2 md:px-6 md:pt-3 md:pb-0">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {importantPoints.map((point) => (
              <div
                key={point.id}
                className="bg-foreground flex gap-2 rounded-3xl rounded-tr-lg p-5"
              >
                <span className="bg-primary mt-2 size-3 shrink-0 rounded-lg rounded-tr-xs"></span>
                <div>
                  <p className="mb-2.5">{point.title}:</p>
                  <p className="text-paragraph text-sm lg:text-base">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
