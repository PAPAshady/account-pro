import CommentsBox from '@modules/CommentsBox/CommentsBox';
import CommentForm from '@templates/product/CommentForm/CommentForm';
import CommentsList from '@templates/product/CommentsList/CommentsList';
import { commentsBoxes } from '@/data';

export default function Comments({ productId }) {
  return (
    <div id="comments" className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-6">
      <div className="relative lg:w-2/3">
        <div
          className="absolute top-7 -z-1 size-full rounded-3xl rounded-tr-lg border-2 border-transparent"
          style={{
            background:
              'linear-gradient(#0F0F0F, #0F0F0F) padding-box, linear-gradient(to right, #094e3d 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 95%, #094e3d 100%) border-box',
          }}
        ></div>
        <div className="mb-3 space-y-1 px-4 font-bold">
          <h3 className="font-morabba text-xl lg:text-[26px]">دیدگاه های شما</h3>
          <p className="text-paragraph font-stretchPro text-sm">Reviews</p>
          <div className="pt-8">
            <div className="flex flex-col gap-12.5">
              <CommentForm productId={productId} />
              <CommentsList productId={productId} />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:w-1/3 lg:grid-cols-1">
        {commentsBoxes.map((box) => (
          <CommentsBox key={box.id} {...box} />
        ))}
      </div>
    </div>
  );
}
