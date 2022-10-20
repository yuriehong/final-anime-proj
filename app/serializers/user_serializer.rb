class UserSerializer < ActiveModel::Serializer
    attributes :id, :username, :password_digest
  
    has_many :animes
    has_many :reviews
  end
  