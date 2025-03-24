import { timeConverter } from '@utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';
import { publications } from '@utils/data/publications';

interface Publication {
  cover_image: string;
  published_at: string;
  url: string;
  title: string;
}

function PublicationsCard({ publications }: { publications: Publication }) {
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={publications.cover_image}
          height={1080}
          width={1920}
          alt="publications Cover"
          className='h-full w-full group-hover:scale-110 transition-all duration-300'
        />
      </div>
      <Link target='_blank' href={publications.url}>
        <div className="p-2 sm:p-3 flex flex-col">
          <div className="flex justify-between items-center text-[#16f2b3] text-sm">
            <p>{timeConverter(publications.published_at)}</p>
            <div className="flex items-center gap-3">
              <p className="flex items-center gap-1"><BsHeartFill /></p>
              <p className="flex items-center gap-1"><FaCommentAlt /></p>
            </div>
          </div>
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500 line-clamp-3'>
            {publications.title}
          </p>

        </div>
      </Link>
    </div>
  );
}

export default function PublicationsList({ limit }: { limit?: number }) {
  const sortedPublications = [...publications].sort(
    (a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
  );

  const displayedPublications = limit ? sortedPublications.slice(0, limit) : sortedPublications;

  return (
    <div id="publications" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">Publications</span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {displayedPublications.map((publication, i) =>
          publication.cover_image && <PublicationsCard publications={publication} key={i} />
        )}
      </div>
    </div>
  );
}
