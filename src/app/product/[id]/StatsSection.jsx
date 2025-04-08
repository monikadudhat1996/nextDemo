// app/product/[id]/StatsSection.jsx
'use client';
import StatBox from '@/app/components/StatBox';
import { IoMdEye, IoMdThumbsUp } from 'react-icons/io';
import { FaHeart } from 'react-icons/fa';
import { MdStickyNote2 } from 'react-icons/md';

export default function StatsSection({ product }) {
  return (
    <div className="flex flex-wrap items-center gap-4 mt-8">
      <StatBox icon={<IoMdEye className="text-xl text-emerald-500" />} label="Views" value={product?.viewCount} color="green" />
      <StatBox icon={<FaHeart className="text-xl text-red-500" />} label="Likes" value={product?.likeCount} color="red" />
      <StatBox icon={<MdStickyNote2 className="text-xl text-yellow-500" />} label="Wishlist" value={product?.wishListCount} color="yellow" />
      <StatBox icon={<IoMdThumbsUp className="text-xl text-blue-500" />} label="Rating" value={product?.overallRating} color="blue" />
    </div>
  );
}
