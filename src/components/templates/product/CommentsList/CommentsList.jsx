'use client';
import { useQuery } from '@tanstack/react-query';

import { getCommentsQueryOptions } from '@/queries/comments';

import Comment from '@modules/Comment/Comment';

export default function CommentsList({ productId }) {
  const { data: comments } = useQuery(getCommentsQueryOptions(productId));
  return (
    <div className="flex flex-col gap-10">
      {comments?.map((comment) => (
        <div key={comment._id}>
          <Comment {...comment} />
          {comment.parentComment && (
            <div className="ps-5 pt-4">
              <Comment isReply />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
