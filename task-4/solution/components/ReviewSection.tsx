import React from 'react';
import ReviewCard, {
  IReview,
} from './ReviewCard';

const ReviewSection = () => {
  const [reviews, setReviews] = React.useState<
    IReview[]
  >([
    {
      id: 1,
      name: 'Viezh Robert',
      review:
        '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.',
      image: 'images/reviews/Ellipse 175.png',
      rating: 4.5,
      location: 'Warsaw, Poland',
    },
    {
      id: 2,
      name: 'Yessica Christy',
      review:
        '“I like it because I like to travel far and still can connect with high speed.”.',
      image: 'images/reviews/Ellipse 175 (1).png',
      rating: 4.5,
      location: 'Shanxi, China',
    },
    {
      id: 3,
      name: 'Kim Young Jou',
      review:
        '“This is very unusual for my business that currently requires a virtual private network that has high security.”.',
      image: 'images/reviews/Ellipse 175 (2).png',
      rating: 4.5,
      location: 'Seoul, South Korea',
    },
  ]);

  const reviewCards = reviews.map((review) => {
    return (
      <ReviewCard key={review.id} {...review} />
    );
  });

  return (
    <div>
      <div className="py-8 px-3 flex flex-col items-center">
        <h3 className="text-xl font-semibold text-center">
          Trusted by Thousands of Happy Customer{' '}
        </h3>
        <p className="max-w-sm text-xs lg:text-sm text-center mb-8 md:mb-12">
          These are the stories of our customers
          who have joined us with great pleasure
          when using this crazy feature.
        </p>

        <div className="flex flex-col space-y-4   flex-wrap ">
          {reviewCards}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
