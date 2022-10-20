class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment, :anime_id, :user_id
end
