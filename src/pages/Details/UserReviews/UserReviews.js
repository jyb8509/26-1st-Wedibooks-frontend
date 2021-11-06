import React, { Component } from 'react';
import BookBorrow from '../BookBorrow/BookBorrow';
import StarRating from '../StarRating/StarRating';
import './UserReviews.scss';

class UserReviews extends Component {
  render() {
    return (
      <div className="reviewsList">
        <div className="reviewName">리뷰</div>
        <div className="userLine" />
        <div className="starBox">
          이 책을 평가해주세요!
          <div className="startRating">
            <StarRating />
            <StarRating />
            <StarRating />
            <StarRating />
            <StarRating />
          </div>
        </div>
        <div className="reviewBox">
          <StarRating />
          <div className="starRate"> 점</div>
          <input
            className="reviewInput"
            type="text"
            placeholder="리뷰 작성 시 광고 및 욕설, 비속어나 타인을 비방하는 문구를 사용하시면 비공개될 수 있습니다."
          />
          <BookBorrow title="리뷰작성" />
        </div>
      </div>
    );
  }
}

export default UserReviews;