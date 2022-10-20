class AnimeSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :year, :summary, :genre

  has_many :reviews

end
