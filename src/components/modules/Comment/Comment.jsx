import { FaStar, FaRegStar, FaReply } from 'react-icons/fa';
import { USER_ROLES } from '@/constants';

export default function Comment({ isReply, body, user, rating, createdAt }) {
  return (
    <div className="md:flex md:gap-4">
      <div className="bg-primary bg-hatching mb-4 flex items-center justify-between gap-2 rounded-2xl rounded-tr-3xl p-3.75 text-[#191919] md:mb-0 md:w-1/4">
        <div className="grow">
          {isReply && <FaReply />}
          <p className="my-2 text-xl">{user.name}</p>
          <p className="font-normal">
            {[USER_ROLES.ADMIN, USER_ROLES.SUPER_ADMIN].includes(user.role)
              ? 'ادمین اکانت پرو'
              : 'کاربر'}
          </p>
        </div>
        <time
          className="text-sm font-normal"
          style={{ writingMode: 'sideways-lr' }}
          dateTime="1404.04.24"
        >
          {new Date(createdAt).toLocaleDateString('fa').replace(/\//g, '.')}
        </time>
      </div>
      <div className="bg-foreground rounded-lg rounded-tr-sm p-3.75 md:w-3/4">
        <div className="mb-3 rounded-lg rounded-tr-sm bg-[#191919] p-3.75 text-justify font-light">
          <p>{body}</p>
        </div>
        {!isReply && (
          <div className="text-primary flex justify-end gap-0.5 text-[15px]">
            {Array(rating)
              .fill()
              .map((_, index) => (
                <FaStar key={index} />
              ))}
            {Array(5 - rating)
              .fill()
              .map((_, index) => (
                <FaRegStar key={index} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
