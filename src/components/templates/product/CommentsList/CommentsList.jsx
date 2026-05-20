'use client';
import { useQuery } from '@tanstack/react-query';

import { getCommentsQueryOptions } from '@/queries/comments';
import { FaComments } from 'react-icons/fa';

import Comment from '@modules/Comment/Comment';
import CommentSkeleton from '@modules/Comment/CommentSkeleton';

export default function CommentsList({ productId }) {
  const { data: comments, isPending } = useQuery(getCommentsQueryOptions(productId));
  const hasItems = !!comments?.length;
  return (
    <div className="flex flex-col gap-10">
      {isPending ? (
        Array(3)
          .fill()
          .map((_, index) => <CommentSkeleton key={index} />)
      ) : !hasItems ? (
        <div className="bg-foreground flex flex-col items-center gap-5 rounded-md px-4 py-8 text-center font-normal">
          <FaComments className="text-primary text-4xl" />
          <p>هنوز کامنتی ثبت نشده! اولین نفر باش و نظرت رو بنویس.</p>
        </div>
      ) : (
        comments.map((comment) => (
          <div key={comment._id}>
            <Comment {...comment} />
            {comment.parentComment && (
              <div className="ps-5 pt-4">
                <Comment isReply />
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}
