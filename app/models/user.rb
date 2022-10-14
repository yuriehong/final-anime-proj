class User < ApplicationRecord
    has_many :reviews
    has_many :animes, through: :reviews
end
