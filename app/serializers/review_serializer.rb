class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment, :anime_id, :user_id
  belongs_to :anime
end
